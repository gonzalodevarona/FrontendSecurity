# Imagen base
FROM node:18

# Establecer directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación
COPY . .

# Instalar dependencias
RUN npm install

# Compilar la aplicación
RUN npm run build

# Puerto expuesto por la aplicación (ajústalo según tus necesidades)
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
