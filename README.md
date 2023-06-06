# apibasesnodeandtypescript

This is a api bases with nodejs and typescript.

Step to start the server: 

*If the first time that you dowload the repository*

Write in the project console "npm install" for install all needed packages.

1. Open a console or cmd write the command nodemon /dist/app.js

*Example* 

"C:\Users\User\Documents\api_authentication_typescript> "nodemon dist/app.js"

2. Open another console or cmd and write the command tsc --watch in the general project. 

*Example*

"C:\Users\User\Documents\api_authentication_typescript>" tsc --watch

3. Do a request with postman or orther services to "http://localhost:8000/api/v1/users/all" and

You should get the response: 

*{
    "msg": "Api node-typescript from UserController"
}*


