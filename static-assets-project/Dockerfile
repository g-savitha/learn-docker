# build stage
FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# runtime stage
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html