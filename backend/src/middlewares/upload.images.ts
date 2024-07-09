import multer from 'multer';
import path from 'path';

const uploadPath = path.join(__dirname, 'src', 'uploads');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

export const upload = multer({ storage: storage });
