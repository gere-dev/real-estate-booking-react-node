import { faker } from '@faker-js/faker';
import db from './config/db';
import path from 'path';
import fs from 'fs';

async function generateUsers(numUsers: number) {
  for (let i = 0; i < numUsers; i++) {
    const name = faker.person.fullName();
    const email = faker.internet.email().toLowerCase();
    const password = faker.internet.password();

    const sql = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
      `;
    await db.query(sql, [name, email, password]);
  }
}

async function generateProperties(numProperties: number, numUsers: number) {
  for (let i = 0; i < numProperties; i++) {
    const title = faker.word.words({ count: { min: 3, max: 10 } });
    const description = faker.lorem.paragraph();
    const location = faker.location.secondaryAddress();
    const price = faker.commerce.price();
    const wifi = faker.datatype.boolean();
    const parking = faker.datatype.boolean();
    const pets = faker.datatype.boolean();
    const gym = faker.datatype.boolean();
    const pool = faker.datatype.boolean();
    const netflix = faker.datatype.boolean();
    const user_id = faker.number.int({ min: 1, max: numUsers });
    const sql = `
        INSERT INTO properties (user_id, title, description, location, price_per_night, wifi, parking, pets, gym, pool, netflix)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
    await db.query(sql, [user_id, title, description, location, price, wifi, parking, pets, gym, pool, netflix]);
  }
}

async function generateImages(numImages: number, numProperties: number) {
  const imageFolder = path.join(__dirname, '../uploads');
  const imageFiles = fs.readdirSync(imageFolder);

  let imageIndex = 0;
  for (let property_id = 1; property_id <= numProperties; property_id++) {
    for (let j = 0; j < 4; j++) {
      const imageUrl = imageFiles[imageIndex];

      const sql = `
          INSERT INTO images (property_id, image_url)
          VALUES (?, ?)
        `;
      try {
        await db.query(sql, [property_id, imageUrl]);
        imageIndex++;
      } catch (error: any) {
        console.error(`Error inserting image: ${error.message}`);
        console.error(`SQL Query: ${sql}`);
      }
    }
  }
}

async function main() {
  const users = 3;
  const properties = 12;
  const images = 50;
  try {
    // Generate fake data
    // await generateUsers(users);
    // await generateProperties(properties, users);
    await generateImages(images, properties);
    console.log('Data generation completed successfully.');
  } catch (error) {
    console.error('Error generating data:', error);
  } finally {
    await db.end(); // Close the database connection pool
  }
}

main();
