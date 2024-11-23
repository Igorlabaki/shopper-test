# Use a imagem do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Instale as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copie o código do frontend
COPY . .

# Exponha a porta que o React vai rodar
EXPOSE 80

# Rodar o servidor de desenvolvimento React (que vai rodar com hot-reloading)
CMD ["npm", "start"]