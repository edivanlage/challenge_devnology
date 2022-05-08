FROM node:lts-alpine

RUN apk add --update --no-cache \
            chromium \
            nodejs \
            bash\
            npm

RUN npm install -g @nestjs/cli

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
ENV CHROMIUM_PATH="/usr/bin/chromium-browser"
ENV PUPPETEER_EXECUTABLE_PATH="${CHROMIUM_PATH}"

USER node

WORKDIR /home/node/app
