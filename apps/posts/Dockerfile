FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/posts .
COPY apps/posts/prisma ./prisma/
ENV PORT=3000
EXPOSE ${PORT}
RUN npm install --production
RUN npx prisma generate
CMD node ./main.js
