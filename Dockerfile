FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

# inicializa a aplicação
CMD ["npm", "start"]
