# Welcome to WebXR with Three JS

## Pre-requise
  - Node JS V16
  - NPM
  - Generate cert for use HTTPS on localhost

## Install Project

```
git clone https://github.com/xdrkush/threejs-webxr-tutorial.git
cd threejs-webxr-tutorial
npm i
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

## Run
```
node server.js
```

or with nodemon:
```
sudo npm i -g nodemon
nodemon server.js
```

## Access localhost to browser

go to => https://localhost:3000
(access is limited on computer)

## Access localhost with mobile

on mobile stop data mobile and connect on same wifi.
get your ip machine => 192.168.x.x

```
ifconfig
sudo ufw allow 3000
```

get the ip on: wlo1: flags=... inet 192.168.x.x

go to chrome or brave on your mobile => https://192.168.x.x:3000

## Docs
  - Generate cert for use HTTPS on localhost => [stackoverflow](https://stackoverflow.com/questions/23001643/how-to-use-https-with-node-js)
  - Config get here => [repo](https://github.com/marnore/webxr-example)


Created by [syeonjae](https://github.com/syeonjae)

with config as [marnore](https://github.com/marnore)

edited and merged by [xdrkush](https://github.com/xdrkush)