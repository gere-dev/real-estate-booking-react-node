import express from 'express';
import cors from 'cors';
import cookieParse from 'cookie-parser';
import path from 'path';
import routes from '@/routes';
import { corsOptions } from '@/config';

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
