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

// Validación para Consults
export const validateConsultsFields = [
    check('Content')
        .notEmpty().withMessage('El contenido no puede estar vacío')
        .isString().withMessage('El contenido debe ser un texto'),

    check('UserID')
        .notEmpty().withMessage('El ID del usuario no puede estar vacío')
        .isInt().withMessage('El ID del usuario debe ser un número entero'),

    check('PublicationID')
        .notEmpty().withMessage('El ID de la publicación no puede estar vacío')
        .isInt().withMessage('El ID de la publicación debe ser un número entero'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para Category
export const validateCategoryFields = [
    check('Name')
        .notEmpty().withMessage('El nombre de la categoría no puede estar vacío')
        .isString().withMessage('El nombre de la categoría debe ser un texto'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para InterCategory
export const validateInterCategoryFields = [
    check('CategoryID')
        .notEmpty().withMessage('El ID de la categoría no puede estar vacío')
        .isInt().withMessage('El ID de la categoría debe ser un número entero'),

    check('PublicationID')
        .notEmpty().withMessage('El ID de la publicación no puede estar vacío')
        .isInt().withMessage('El ID de la publicación debe ser un número entero'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para InterSimilar
export const validateInterSimilarFields = [
    check('PublicationID')
        .notEmpty().withMessage('El ID de la publicación no puede estar vacío')
        .isInt().withMessage('El ID de la publicación debe ser un número entero'),

    check('SimilarID')
        .notEmpty().withMessage('El ID del producto similar no puede estar vacío')
        .isInt().withMessage('El ID del producto similar debe ser un número entero'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para Publication
export const validatePublicationFields = [
    check('AuthorID')
        .notEmpty().withMessage('El ID del autor no puede estar vacío')
        .isInt().withMessage('El ID del autor debe ser un número entero'),

    check('TypeID')
        .notEmpty().withMessage('El ID del tipo no puede estar vacío')
        .isInt().withMessage('El ID del tipo debe ser un número entero'),

    check('Name')
        .notEmpty().withMessage('El nombre de la publicación no puede estar vacío')
        .isString().withMessage('El nombre debe ser un texto'),

    check('Date')
        .notEmpty().withMessage('La fecha no puede estar vacía')
        .isDate().withMessage('Debe ser una fecha válida'),

    check('Description')
        .notEmpty().withMessage('La descripción no puede estar vacía')
        .isString().withMessage('La descripción debe ser un texto'),

    check('Content')
        .notEmpty().withMessage('El contenido no puede estar vacío')
        .isString().withMessage('El contenido debe ser un texto'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para SimilarProducts
export const validateSimilarProductsFields = [
    check('Name')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isString().withMessage('El nombre debe ser un texto'),

    check('Description')
        .notEmpty().withMessage('La descripción no puede estar vacía')
        .isString().withMessage('La descripción debe ser un texto'),

    check('UserID')
        .notEmpty().withMessage('El ID del usuario no puede estar vacío')
        .isInt().withMessage('El ID del usuario debe ser un número entero'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para TypeBooks
export const validateTypeBooksFields = [
    check('Description')
        .notEmpty().withMessage('La descripción no puede estar vacía')
        .isString().withMessage('La descripción debe ser un texto'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para InterType
export const validateInterTypeFields = [
    check('TypeID')
        .notEmpty().withMessage('El ID del tipo no puede estar vacío')
        .isInt().withMessage('El ID del tipo debe ser un número entero'),

    check('PublicationID')
        .notEmpty().withMessage('El ID de la publicación no puede estar vacío')
        .isInt().withMessage('El ID de la publicación debe ser un número entero'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para User
export const validateUserFields = [
    check('Name')
        .notEmpty().withMessage('El nombre no puede estar vacío')
        .isString().withMessage('El nombre debe ser un texto'),

    check('Lastname')
        .notEmpty().withMessage('El apellido no puede estar vacío')
        .isString().withMessage('El apellido debe ser un texto'),

    check('IdentityCard')
        .notEmpty().withMessage('La cédula de identidad no puede estar vacía')
        .isInt().withMessage('La cédula debe ser un número entero'),

    check('Datebirth')
        .notEmpty().withMessage('La fecha de nacimiento no puede estar vacía')
        .isDate().withMessage('Debe ser una fecha válida'),

    check('Address')
        .notEmpty().withMessage('La dirección no puede estar vacía')
        .isString().withMessage('La dirección debe ser un texto'),

    check('Email')
        .notEmpty().withMessage('El correo electrónico no puede estar vacío')
        .isEmail().withMessage('Debe ser un correo electrónico válido'),

    check('Password')
        .notEmpty().withMessage('La contraseña no puede estar vacía')
        .isString().withMessage('La contraseña debe ser un texto'),

    check('RoleID')
        .notEmpty().withMessage('El rol no puede estar vacío')
        .isInt().withMessage('El ID del rol debe ser un número entero'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validación para Role
export const validateRoleFields = [
    check('Name')
        .notEmpty().withMessage('El nombre del rol no puede estar vacío')
        .isString().withMessage('El nombre del rol debe ser un texto'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
