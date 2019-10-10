FROM node:10.14-slim
WORKDIR /apps
COPY ./package.json  .
RUN npm install   
COPY . ./apps
RUN npm test
EXPOSE 3000
CMD ["npm", "start"] 