#Build typescript files
FROM node:18-alpine AS build
WORKDIR /app

COPY package.json tsconfig.json .
COPY . .

RUN npm i 

CMD ["npm", "run", "dev"]

# RUN npx tsc
# COPY src/*.html dist
# COPY src/*.css dist
# COPY src/*.js dist

# #Build nginx server
# FROM nginx:alpine

# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# CMD ["nginx", "-g", "daemon off;"]
