FROM node:12.7-alpine as builder

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN ng build --prod


FROM nginx
COPY --from=builder /app/dist/angular-app /usr/share/nginx/html

