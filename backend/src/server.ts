import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from '@/routes';
import path from 'path';
import cookieParse from 'cookie-parser';
import { corsOptions } from '@/config';

const environment = process.env.NODE_ENV || 'development';
const envFilePath = `.env.${environment}`;
dotenv.config({ path: envFilePath });

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParse());

// Serve static files
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));
app.use(express.static('dist'));

// API routes
app.use('/api', routes);

// default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} `);
});
