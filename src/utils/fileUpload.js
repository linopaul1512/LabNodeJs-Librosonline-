import multer from 'multer';
import path from 'path';

// Almancenamiento del libro en carpeta
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/files');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);  // Nombre del archivo
    }
});

// Filtros de validación de tipo de archivo
const fileFilter = (req, file, cb) => {
    const fileTypes = /pdf|mp3|epub|jpg|jpeg|png|txt|mp4|avi|mkv|doc|docx/;
    
    // Comprobar la extensión del archivo
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    
    // Comprobar el tipo MIME del archivo
    const mimetype = fileTypes.test(file.mimetype);
    
    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Tipo de archivo no permitido');
    }
};

export const upload = multer({
    storage,
    fileFilter
});
