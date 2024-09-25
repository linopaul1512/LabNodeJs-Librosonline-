import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  // Obtener el token de la cabecera de la petición
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // El formato de la cabecera es 'Bearer TOKEN'

  if (token == null) {
    return res.sendStatus(401); // Si no hay token, denegar acceso
  }

  // Verificar el token
  jwt.verify(token, 'JH$#kl90@!MkasS*!2kl3Asd9kf00Q', (err, user) => {
    if (err) {
      return res.sendStatus(403); // Si el token no es válido, denegar acceso
    }

    req.user = user;
    next(); 
  });
};
