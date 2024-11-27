# Imagem base
FROM node:18

# Diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar os arquivos do projeto para o container
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Construir a aplicação Next.js (opcional se já estiver no diretório de build)
RUN npm run build

# Expor a porta 3000 (padrão do Next.js)
EXPOSE 3000

# Comando para iniciar a aplicação Next.js
CMD wait-for-it backend:8080 -- npm run dev