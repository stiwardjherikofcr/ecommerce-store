import multer from 'multer';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extName) {
        return cb(null, true);
    }
    cb(`Error: File upload only supports the following filetypes - ${fileTypes}`, false);
};

const storage = (destination) => {
    return multer.diskStorage({
        destination: path.join(__dirname, `../public/img/${destination}`),
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    });
};

const uploadFile = (destination) => {
    return multer({
        storage: storage(destination),
        fileFilter: fileFilter,
        limits: { fileSize: 1024 * 1024 * 5 },
    });
};

export default uploadFile;