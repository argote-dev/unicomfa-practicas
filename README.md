# Unicomfacauca - Proyecto prácticas

```markdown
# Proyecto de Node.js con Express y Prisma

Este proyecto es una aplicación básica construida con Node.js, Express y Prisma como ORM. El propósito de esta aplicación es servir como plantilla para proyectos futuros que requieran una estructura similar.

## Requisitos

- Node.js v14 o superior
- npm v6 o superior
- Prisma CLI

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/mydatabase"
   ```

4. Inicializa Prisma:
   ```bash
   npx prisma init
   ```

5. Ejecuta las migraciones para crear las tablas en la base de datos:
   ```bash
   npx prisma migrate dev --name init
   ```

## Uso

1. Para iniciar el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

2. El servidor estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `controllers/`: Controladores para manejar las rutas de la API.
  - `routes/`: Define las rutas de la aplicación.
  - `services/`: Lógica de negocio y acceso a datos utilizando Prisma.
  - `index.js`: Punto de entrada de la aplicación.

## Scripts

- `npm run dev`: Inicia el servidor en modo desarrollo utilizando nodemon.
- `npm run build`: Compila el proyecto.
- `npm start`: Inicia el servidor en modo producción.
- `npm run migrate:db`: Correr las migraciones de la base de datos.
- `npm run seed`: Correr los insert por default de la base de datos.

## Prisma

Prisma se utiliza como el ORM para este proyecto. Los modelos de la base de datos se definen en el archivo `prisma/schema.prisma`.

### Migraciones

Para crear una nueva migración después de realizar cambios en el esquema de Prisma:
```bash
npx prisma migrate dev --name nombre-de-la-migracion
```

### Cliente Prisma

Para interactuar con la base de datos, importa el cliente Prisma en tus archivos de servicio:
```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ejemplo de uso
async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}
```

## Contribuir

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y commitea (`git commit -am 'Añade nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme en [wilderargote@unicomfacauca.edu.co].

```

Este README proporciona una guía completa sobre cómo instalar, configurar y utilizar tu proyecto. También incluye secciones para Prisma y contribuciones, lo que facilita a otros desarrolladores colaborar en el proyecto.
