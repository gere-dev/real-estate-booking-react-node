import { faker } from '@faker-js/faker';
import db from './config/db';

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

async function generateProperties(numProperties: number) {
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
    const user_id = faker.number.int({ min: 1, max: 10 });
    const sql = `
        INSERT INTO properties (user_id, title, description, location, price_per_night, wifi, parking, pets, gym, pool, netflix)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
    await db.query(sql, [user_id, title, description, location, price, wifi, parking, pets, gym, pool, netflix]);
  }
}

async function generateImages(numImages: number) {
  const entityTypes = ['property', 'user'];
  for (let i = 0; i < numImages; i++) {
    const entityType = entityTypes[faker.number.int({ min: 0, max: 1 })];
    let entityId;

    if (entityType === 'property') {
      // Generate entity_id as property_id
      entityId = faker.number.int({ min: 1, max: 20 }); // Replace with actual property_id range
    } else if (entityType === 'user') {
      // Generate entity_id as user_id
      entityId = faker.number.int({ min: 1, max: 10 }); // Replace with actual user_id range
    }

    const imageUrl = faker.image.url();

    const sql = `
        INSERT INTO images (entity_id, entity_type, image_url)
        VALUES (?, ?, ?)
      `;

    await db.query(sql, [entityId, entityType, imageUrl]);
  }
}

async function main() {
  try {
    // Generate fake data
    // await generateUsers(10); // Generate 10 users
    // await generateProperties(20); // Generate 20 properties
    await generateImages(50); // Generate 50 images
    console.log('Data generation completed successfully.');
  } catch (error) {
    console.error('Error generating data:', error);
  } finally {
    await db.end(); // Close the database connection pool
  }
}

main();
