# Basis-Image mit Node.js
FROM node:18-alpine

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Paketdateien kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Quellcode kopieren
COPY . .

# Mount external
VOLUME /app/content/courses

# Nuxt im Produktionsmodus bauen
RUN npm run build

# Port freigeben (Standard für Nuxt)
EXPOSE 3000
# Startbefehl
CMD ["npm", "run, "preview"]

