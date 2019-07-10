FROM node:alpine

# Create app directory
WORKDIR /home/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied. "./" being WORKDIR
COPY package*.json ./

RUN npm install --quiet

COPY . .

EXPOSE 3000

# CMD [ "npm", "start" ]
CMD ["/bin/sh", "./docker/entrypoint.sh"] 

# docker build -t portalprecios-server .
# docker run -p 3200:3000 -d portalprecios-server