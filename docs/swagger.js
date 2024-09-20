import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'LibrosOnline API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API para LibrosOnline, contiene todas las rutas, las explicaciones de cada ruta y como utilizarlas.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js']
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);