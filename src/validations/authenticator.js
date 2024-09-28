import { userService } from '../user/service.js';

const authorizePublisher = async (req, res, next) => {
    try {
      const userId = req.user.UserID;
      const roleId = await userService.getUserRole(userId);
  
      if (roleId !== 'Publicador') {
        return res.status(403).json({ message: 'Acceso denegado, solo publicadores pueden realizar esta acción.' });
      }
  
      next();
    } catch (error) {
        res.status(500).json({ message: 'Error auth', error: error.message });
    }
};

export const authenticator = { authorizePublisher }