const authorizePublisher = async (req, res, next) => {
    try {
      const userId = req.user.id;
      const roleId = await getUserRole(userId);
  
      if (roleId !== 'Publicador') {
        return res.status(403).json({ message: 'Acceso denegado, solo publicadores pueden realizar esta acción.' });
      }
  
      next();
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
};

export const authenticator = { authorizePublisher }