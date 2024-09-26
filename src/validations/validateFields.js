import { check, validationResult } from 'express-validator';

export const validateAuthorFields = [
    check('Name')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isString().withMessage('El nombre debe ser un texto'),
    
    check('Biography')
        .notEmpty().withMessage('La biografía no puede estar vacía')
        .isString().withMessage('La biografía debe ser un texto'),
    
    check('Country')
        .notEmpty().withMessage('El país no puede estar vacío')
        .isString().withMessage('El país debe ser un texto válido'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
