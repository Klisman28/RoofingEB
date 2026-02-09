# Guía de Despliegue en Hostinger Node.js Web Apps (Rama ebroofing)

Esta rama (`ebroofing`) está configurada para desplegarse como una aplicación **Node.js SSR** en Hostinger.

## Configuración Clave
1. **Branch**: Asegúrate de desplegar desde la rama `ebroofing`.
2. **Node Version**: Selecciona **Node.js 18** o superior.
3. **Build Command**: `npm run build`
4. **Start Command**: `npm run start`

## Scripts
- `npm run clean`: Limpia artefactos generados.
- `npm run start`: Inicia el servidor usando el puerto dinámico (`PORT`).

## Notas Importantes
- Se ha eliminado `output: 'export'` de `next.config.js`.
- Se ha eliminado la carpeta `out`.
- Si necesitas revertir a estático, cambia de rama o reintroduce la configuración de export.
