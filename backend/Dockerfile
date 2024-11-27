# Base image para Node.js
FROM node:18-alpine

# Diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o código restante
COPY . .

# Porta que será exposta
EXPOSE 4000

# Comando para iniciar o backend
CMD ["npm", "run", "dev"]