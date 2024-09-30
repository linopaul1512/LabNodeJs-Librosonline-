import { userService } from '../user/service.js';

const authorizePublisher = async (req, res, next) => {
    try {
      const userId = req.user.id;
      const roleId = await userService.getUserRole(userId);
  
      if (roleId !== 1) {
        return res.status(403).json({ message: 'Acceso denegado, solo publicadores pueden realizar esta acción.' });
      }
  
      next();
    } catch (error) {
        res.status(500).json({ message: 'Error auth', error: error.message });
    }
};

export const authenticator = { authorizePublisher }