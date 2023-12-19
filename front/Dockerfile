FROM node:lts as build-stage

USER node

WORKDIR /home/node/frontend

RUN npm install react-datepicker
RUN npm install axios
RUN npm install -D tailwindcss
RUN npx tailwindcss init

COPY --chown=node:node . /home/node/frontend

RUN npm run build

##############
FROM nginx:latest as deploy-stage

WORKDIR /webserver

COPY --from=build-stage /home/node/frontend/build /usr/share/nginx/html/

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
