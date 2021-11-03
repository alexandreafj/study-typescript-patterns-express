FROM node:13-alpine

RUN \
apk update && \
apk upgrade && \
apk add --upgrade dumb-init && \
apk add git

WORKDIR /cgv-api-customer

RUN chown -R node /cgv-api-customer

USER node

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm ci

COPY --chown=node:node ./cgv-api-customer .

USER root

RUN npm i -g prisma

RUN prisma generate --schema=./src/infra/prisma/schema.prisma

USER node

CMD ["dumb-init", "node", "./src/infra/http/app.js"]