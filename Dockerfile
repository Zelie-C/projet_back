FROM node:20-alpine
WORKDIR /projet_back
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]