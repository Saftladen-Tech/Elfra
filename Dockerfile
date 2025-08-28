FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY "./utils/shell/entrypoint.sh" ./

RUN chmod +x ./entrypoint.sh

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]

# Startbefehl
# Production - Only deploy on HTTPs Hosted Servers!
# CMD ["npm", "run", "preview"]
# Demo / Dev
CMD ["npm", "run", "dev"]
