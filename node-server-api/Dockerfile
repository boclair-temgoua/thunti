
FROM node:14.12-alpine 
#FROM node:14.12

WORKDIR /app

COPY package*.json ./

# USER node

RUN yarn && npm cache clean --force

COPY . .

EXPOSE 8080

#FROM node:12.13.0-alpine

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#WORKDIR /home/node/app

#COPY package*.json ./

#USER node

#RUN yarn

#COPY --chown=node:node . .

#EXPOSE 8080

#CMD ["yarn", "start"]