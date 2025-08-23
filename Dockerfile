FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# Startbefehl
# Production - Only deploy on HTTPs Hosted Servers!
# CMD ["npm", "run", "preview"]
# Demo / Dev
CMD ["npm", "run", "dev"]
