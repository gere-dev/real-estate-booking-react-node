import db from '../config/db';
import { bookingsSchema } from './bookings.schema';
import { imagesSchema } from './images.schemas';
import { propertiesSchema } from './properties.schema';
import { refreshTokenSchema } from './refreshToken.schema';
import { userSchema } from './userSchema';
const schemas = [userSchema, refreshTokenSchema, propertiesSchema, bookingsSchema, imagesSchema];

const createSchemas = async () => {
  try {
    for (const schema of schemas) {
      await db.execute(schema);
      console.log(`Table ${schema} created successfully`);
    }
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables', error);
  } finally {
    db.end();
  }
};
createSchemas();
