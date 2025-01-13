FROM node:20-alpine
WORKDIR /app
ARG PROJECT_NAME
ENV PROJECT_NAME ${PROJECT_NAME}
RUN npm install -g nx
COPY package*.json .
RUN npm install
COPY . .
CMD nx serve ${PROJECT_NAME}
