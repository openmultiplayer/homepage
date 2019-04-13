FROM node:11

WORKDIR /app
ADD . .
RUN npm install && npm run build

ENTRYPOINT [ "npm", "run", "start" ]
