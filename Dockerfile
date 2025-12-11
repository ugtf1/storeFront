# Stage 1: Build the React Application
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
# Clean install of dependencies
RUN npm ci
COPY . .
# Build the static site (creates /app/dist)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the built static files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Configure Nginx for Single Page App (SPA) routing
RUN echo 'server { listen 8080; server_name localhost; location / { root /usr/share/nginx/html; index index.html index.htm; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
