## Entertainment web API

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)

#

### Prerequisites

- <img src="./readme/nodejs.png" width="25" style="top: 8px" /> Node JS @16.X and up
- <img src="./readme/npm.png" width="25" style="top: 8px" /> npm @8 and up

#

### Tech Stack

- <img src="./readme/dotenv.png" width="25" style="top: 8px" /> dotenv @ 16.0.3 - zero-dependency module that loads environment variables from a .env file
- <img src="./readme/express.png" width="25" style="top: 8px" /> express @ 4.18.2 - web framework for node
- <img src="./readme/mongoDB.png" width="25" style="top: 8px" /> mongodb @ 4.13.0 - document database
- <img src="./readme/mongoose.png" width="25" style="top: 8px" /> mongoose @ 6.8.3 - MongoDB object modeling tool

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/Tusho7/entertainment-web-app-api
```

2. Next step requires install all dependencies.

```
npm install
```

3. Also you need to create .env file where copy information from .env.example file

```
cp .env.example .env
```

4.To create your own databse, need to create new local connection, host woub be localhost.Also you need to replace variables values in .env file, or you can generate mongo atlas url with your user and password

3

### Project Structure

```
|--- src
|   |--- config # configuration files
|   |--- controllers # controler files
|   |--- routes # router files
|   |---|--- server.js # main file
- package.json # dependency manager configurations
```
