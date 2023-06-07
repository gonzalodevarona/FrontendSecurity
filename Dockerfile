# Imagen base
FROM node:18

# Establecer directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación
COPY package.json .

# Instalar dependencias
RUN npm install

# Copiar los archivos de la aplicación
COPY . .
# Puerto expuesto por la aplicación (ajústalo según tus necesidades)
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
