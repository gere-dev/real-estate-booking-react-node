import db from '@/database/config/db';

export const getProperties = async (req: any, res: any) => {
  try {
    const properties = await db.query('SELECT * FROM properties');
    res.json(properties[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
