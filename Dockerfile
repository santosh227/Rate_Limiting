FROM node:22

WORKDIR /rate-limiting

COPY .  .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]

