# Project Title

## Photo upload app

## Description

This is a REST API application for uploading files to either a local server or to the cloud using Cloudinary. It provides endpoints for uploading images and getting a list of uploaded images.

## Used Technologies

In this build, I used Node.js, Express.js, MongoDB, Mongoose, TypeScript, Morgan, Dotenv, Express-FileUpload, Cloudinary.

## How to install

Download and run npm install, then create a .env file at the root of the project and set the following environment variables:

```bash
PORT=
MONGO_URI=
IMAGE_MAX_SIZE=
```

if you want to upload images on Cloudinary in additon create this environment variables:

```bash
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

Mongo uri example:

```bash
MONGO_URI=mongodb+srv://giorgi:yourClusterPassword@yourClusterName.zi9vxpj.mongodb.net/yourDatabaseName?retryWrites=true&w=majority
```

then run npm start.

## API Reference

## important

If you want to save photos in your local server go to api->routes->productRoutes.ts->uncomment commented code lines, and comment out the line of code responsible for saving the photo in the Cloudinary.

### Uploads

#### Upload Image to Local Server or Cloudinary

```http
  POST /api/v1/products/uploads
```

| Parameter | Type   | Description                                 |
| :-------- | :----- | :------------------------------------------ |
| `image`   | `File` | **Required**. Photo that you want to upload |

#### Products

```http
   POST /api/v1/products
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `name`    | `string` | **Required**. Name of your product  |
| `price`   | `number` | **Required**. Price of your product |
| `image`   | `string` | **Required**. Image of your product |

### Get All Products

```http
  GET /api/v1/products
```

Returns a list of all products.
