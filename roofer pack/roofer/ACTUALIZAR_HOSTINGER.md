# Guía de Despliegue en Hostinger Node.js Web Apps

Este proyecto ha sido migrado de un "Static Export" a una aplicación **Node.js SSR (Server Side Rendering)** completa usando Next.js 14.

## 1. Requisitos del Servidor
- **Node.js Version**: Selecciona **Node.js 18** o superior en el panel de Hostinger.
- **NPM**: Asegúrate de que npm esté disponible (viene con Node).

## 2. Configuración en Hostinger
Al crear la "Node.js Web App" en Hostinger, usa la siguiente configuración:

- **Application startup file**: `node_modules/next/dist/bin/next` (o simplemente deja que el script `start` maneje esto si Hostinger lo soporta directamente, pero usualmente Hostinger pide un archivo de entrada. Si usas el comando de inicio, pon `npm run start`).
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

### Variables de Entorno (Environment Variables)
- **PORT**: Hostinger asigna esto automáticamente. El script `start` está configurado para usarlo (`next start -p ${PORT:-3000}`).

## 3. Scripts Disponibles

- `npm run dev`: Desarrollo local.
- `npm run build`: Compila la aplicación para producción. **Ya no genera la carpeta `out`**.
- `npm run start`: Inicia el servidor de producción.
- `npm run clean`: Elimina artefactos de build anteriores (`.next`, `out`).

## 4. Cambios Realizados
- Se eliminó `output: "export"` de `next.config.js`.
- Se eliminó la carpeta `out` y los archivos `.html` estáticos de la raíz.
- Se agregó el script `clean`.
- Se configuró `package.json` para usar el puerto dinámico.

## 5. Deployment
1. Haz push de los cambios al repositorio.
2. En Hostinger, conecta el repositorio.
3. Asegúrate de limpiar la cache de build si es necesario.
4. Ejecuta el Deploy.

**Nota**: Si ves errores de imágenes, asegúrate de que el dominio de las imágenes esté permitido en `next.config.js` y que el servidor tenga acceso a internet.
