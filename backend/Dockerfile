# Utiliza una imagen base con Node.js
FROM node:latest

# Establece el directorio de trabajo
WORKDIR /app

# Instala JSON Server globalmente
RUN npm install -g json-server

# Copia el archivo db.json al contenedor
COPY db.json /app/db.json

# Expone el puerto de JSON Server
EXPOSE 3000

# Inicia JSON Server
CMD ["json-server", "--watch", "db.json", "--port", "3000"]
