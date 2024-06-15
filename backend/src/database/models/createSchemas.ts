import db from '../config/db';
import { refreshTokenSchema } from './refreshToken.schema';
import { userSchema } from './userSchema';
const schemas = [userSchema, refreshTokenSchema];

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
