import { Request, Response } from 'express';
import db from '@/database/config/db';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { Property, PropertyWithImages } from '@/types';
import { formatPropertiesData } from '@/utils';
import fs from 'fs';

export const getListings = async (req: Request, res: Response) => {
  const query = `
        SELECT p.*, i.image_url
        FROM properties p
        LEFT JOIN images i ON p.property_id = i.property_id
      `;
  try {
    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query);

    const response = formatPropertiesData(rows);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createListing = async (req: Request, res: Response) => {
  console.log(req.body, req.headers, req.files);
  const property = {
    user_id: parseInt(req.body.user_id),
    title: req.body.title,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    description: req.body.description,
    extraInfo: req.body.extraInfo,
    price_per_night: parseInt(req.body.price_per_night),
    bed: parseInt(req.body.bed),
    wifi: req.body.wifi === 'true',
    parking: req.body.parking === 'true',
    pets: req.body.pets === 'true',
    netflix: req.body.netflix === 'true',
    gym: req.body.gym === 'true',
    pool: req.body.pool === 'true',
  };
  const images = req.files as Express.Multer.File[];

  if (isNaN(property.user_id) || isNaN(property.price_per_night) || isNaN(property.bed)) {
    return res.status(400).json({ error: 'Invalid numeric input' });
  }

  try {
    // const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>('INSERT INTO properties SET ?', [[property]]);
    const [propertyResult]: [any, FieldPacket[]] = await db.query('INSERT INTO properties SET ?', [property]);

    const property_id = propertyResult.insertId;

    await Promise.all(
      images.map(async (image) => {
        await db.query('INSERT INTO images SET ?', [{ property_id, image_url: image.filename }]);
      })
    );
    const query = `
    SELECT p.*, i.image_url
    FROM properties p
    LEFT JOIN images i ON p.property_id = i.property_id
  `;

    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query, [property_id]);

    const response = formatPropertiesData(rows);
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(`Error creating listing controller: ${error}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateListing = async (req: Request, res: Response) => {
  const property = {
    property_id: parseInt(req.params.propertyId),
    title: req.body.title,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    description: req.body.description,
    extraInfo: req.body.extraInfo,
    price_per_night: parseInt(req.body.price_per_night),
    bed: parseInt(req.body.bed),
    wifi: req.body.wifi === 'true',
    parking: req.body.parking === 'true',
    pets: req.body.pets === 'true',
    netflix: req.body.netflix === 'true',
    gym: req.body.gym === 'true',
    pool: req.body.pool === 'true',
  };
  const imagesToAdd = req.files as Express.Multer.File[];
  let imagesToDelete = (req.body.images_to_delete as string[]) || [];
  console.log(req.body, imagesToAdd);

  if (isNaN(property.property_id) || isNaN(property.price_per_night) || isNaN(property.bed)) {
    return res.status(400).json({ error: 'Invalid numeric input' });
  }
  try {
    await db.query('UPDATE properties SET ? WHERE property_id = ?', [property, property.property_id]);

    // Delete images
    if (imagesToDelete.length > 0) {
      const deleteImages = imagesToDelete.map(async (image, index) => {
        await db.query('DELETE FROM images WHERE image_url = ?', [image]);
        await fs.unlink(`src/uploads/${image}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
        imagesToDelete.splice(index, 1);
      });

      await Promise.all(deleteImages);
    }
    // Add new images
    if (imagesToAdd.length > 0) {
      const addNewImages = imagesToAdd.map(async (image) => {
        await db.query('INSERT INTO images SET ?', [{ property_id: property.property_id, image_url: image.filename }]);
      });

      await Promise.all(addNewImages);
    }

    const query = `
    SELECT p.*, i.image_url
    FROM properties p
    LEFT JOIN images i ON p.property_id = i.property_id
  `;
    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query, [property.property_id]);
    const response = formatPropertiesData(rows);
    res.json(response);
  } catch (error) {
    console.error(`Error updating listing controller: ${error}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteListing = async (req: Request, res: Response) => {
  const { propertyId } = req.params;
  try {
    const [images]: [[], FieldPacket[]] = await db.query<[] & FieldPacket[]>('SELECT image_url FROM images WHERE property_id = ?', [propertyId]);
    console.log(images);

    // Delete images from the uploads folder
    if (images.length > 0) {
      const deleteFilePromises = images.map(async (image: { image_url: string }) => {
        await fs.unlink(`src/uploads/${image.image_url}`, (err) => {
          console.log(err);
        });
      });
      await Promise.all(deleteFilePromises);
    }

    // Delete image records from the database
    await db.query('DELETE FROM images WHERE property_id = ?', [propertyId]);
    await db.query('DELETE FROM properties WHERE property_id = ?', [propertyId]);
    res.sendStatus(200);
    // db.commit();
  } catch (error) {
    console.error(`Error deleting listing controller: ${error}`);
    // db.rollback();
    res.status(500).json({ error: 'Internal server error' });
  }
};
