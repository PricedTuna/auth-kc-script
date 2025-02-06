# Keycloak Authorization Scripts

Este proyecto contiene un conjunto de scripts diseñados para configurar y rellenar el **authorize** de un cliente en Keycloak. Los scripts permiten automatizar la creación de permisos, políticas, recursos, roles y scopes necesarios para la configuración del cliente.

## Configuración

Antes de ejecutar los scripts, asegúrate de revisar y ajustar los archivos de configuración adecuados para garantizar que los datos de conexión a Keycloak sean correctos.

### Archivos de Configuración

1. **`constants`**: Este archivo contiene los datos de conexión principales para Keycloak y debe revisarse antes de ejecutar cualquier script.

2. **Configuraciones adicionales:**
   - Si ejecutas **todos los scripts** (`npm run all`), revisa y ajusta los datos globales en:
     - `types.ts`
     - `app.ts`
   - Si ejecutas scripts de forma **individual**, revisa el archivo `app.ts` correspondiente al módulo que planeas usar.

## Ejecución

### Ejecución de Todos los Scripts

Para ejecutar todos los scripts y configurar el cliente de Keycloak de forma completa:

```bash
npm run all
```

### Ejecución Individual

Si deseas ejecutar un script específico, utiliza uno de los comandos mencionados anteriormente. Por ejemplo, para gestionar solo los permisos:

```bash
npm run permission
```

## Requisitos

- Node.js instalado en tu máquina.
- Conexión a un servidor Keycloak configurado.

## Compilación del Proyecto

El código fuente está escrito en TypeScript. Antes de ejecutar los scripts, asegúrate de compilar el proyecto con el siguiente comando:

```bash
npm run build
```

## Notas

- Verifica siempre los datos de conexión en el archivo `constants` antes de ejecutar cualquier script.
- Personaliza los scripts según las necesidades específicas del cliente y la configuración de Keycloak.
