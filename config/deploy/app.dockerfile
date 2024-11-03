# build stage
FROM node:18.8-alpine as build-stage

## set label for build stage
LABEL stage=dashbboard-build-stage

## make the 'app' folder the current working directory
WORKDIR /app

## copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json yarn.lock ./

## install project dependencies
RUN yarn

## copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

## build app for production with minification
RUN yarn build

# production stage
FROM nginx:1.21.3-alpine as production-stage
## copy build artifacts from the build stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/src/config/deploy/nginx.conf /etc/nginx/conf.d/default.conf

## expose port 80
EXPOSE 80

## run nginx
CMD ["nginx", "-g", "daemon off;"]
