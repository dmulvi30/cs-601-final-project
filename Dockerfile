FROM redhat/ubi8:latest

USER root

RUN dnf update -y

RUN dnf module install nodejs:18/common -y
    
COPY ./app/ /usr/src/app

WORKDIR /usr/src/app

RUN npm install

RUN npm install nodemon

CMD npm start