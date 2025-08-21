# Basis-Image mit Node.js
FROM node:20-alpine

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Paketdateien kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Quellcode kopieren
COPY . .

# Nuxt im Produktionsmodus bauen
RUN npm run build

# Port freigeben (Standard für Nuxt)
EXPOSE 3000

# Startbefehl
# Production - Only deploy on HTTPs Hosted Servers!
# CMD ["npm", "run", "preview"]
# Demo / Dev
CMD ["npm", "run", "dev"]
