FROM mcr.microsoft.com/playwright:v1.54.2-noble
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install
COPY . .
RUN npx playwright install --with-deps chromium
CMD ["npm", "test"]
