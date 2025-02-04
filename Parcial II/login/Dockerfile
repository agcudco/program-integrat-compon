# Etapa 1: Construcción de la aplicación
FROM node:18 AS build

# Crear el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto al contenedor
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copiar los archivos construidos en la carpeta dist al servidor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80 para que el contenedor sea accesible
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
