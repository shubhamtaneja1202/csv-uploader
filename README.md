# CSV uploader

This project provides REST API's to -:
1. upload csv files (as much as you want :D).
2. get list of all uploaded files.
3. real time status of the uploaded file.
4. retrieve data of uploaded file (in Array of JSON objects)

## Prequesties
latest version of node and npm installed.

## Installation

1. clone the repository by running the below command
```
git clone https://github.com/shubhamtaneja1202/csv-uploader.git
```

2. run the below command to download all the dependencies
```
npm install
```

3. once the installation is completed, go to config/localhost.json and replace password,host,username to 
your db credentials.

4. import db.sql file in your db instance to prepare the schema for storing the data.

5. start server by running below command

MAC
```
$ export NODE_ENV=localhost
$ node server.js
```
Windows 
```
set NODE_ENV=localhost
node server.js
```

## Postman collection
https://www.getpostman.com/collections/89ab82f47411d62ef032
