# API docs 📖

<details>

<summary><strong>Popular in the community route 💥</strong></summary>

This API endpoint retrieves popular products in the community.

## Endpoint

```http
GET /products/popular
```

## Parameters

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| page      | number | The page number to retrieve (default: 1)     |
| perPage   | number | The number of products per page (default: 1) |

## Response

The API response will be in JSON format and will include the following fields:

- `data` (array): An array of popular product objects. Each object contains the following fields:

  - `id` (integer): The unique identifier of the product.
  - `name` (string): The name of the product.
  - `description` (string): The description of the product.
  - `color` (string): The color of the product.
  - `price` (float): The price of the product.
  - `discount` (float): The discount applied to the product.
  - `rating` (float): The rating of the product.
  - `isLimited` (boolean): Is the product limited.
  - `category_id` (integer): The ID of the category the product belongs to.
  - `brand_id` (integer): The ID of the brand the product belongs to.
  - `createdAt` (string): The date and time when the product was created.
  - `updatedAt` (string): The date and time when the product was last updated.
  - `images` (array): An array of image objects associated with the product. Each image object contains the following fields:
    - `id` (integer): The unique identifier of the image.
    - `image` (string): The URL of the product image.
    - `product_id` (integer): The ID of the product the image belongs to.
    - `createdAt` (string): The date and time when the image was created.
    - `updatedAt` (string): The date and time when the image was last updated.

- `pagination` (object): An object containing pagination information.
  - `totalRecords` (integer): The total number of popular products in the community.
  - `totalPerPage` (integer): The maximum number of products per page.
  - `totalPages` (integer): The total number of pages based on the `totalRecords` and `totalPerPage`.
  - `currentPage` (integer): The current page number.
  - `nextPage` (string or null): The number of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The number of the previous page, if available. Null if there is no previous page.

## Example

Request:

```http
GET /products/popular
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "test",
      "description": "test",
      "color": "red",
      "price": 23.5,
      "discount": 0,
      "rating": 4.5,
      "isLimited": false,
      "category_id": 1,
      "brand_id": 1,
      "createdAt": "2023-07-16T11:39:01.000Z",
      "updatedAt": "2023-07-16T11:39:01.000Z",
      "images": [
        {
          "id": 1,
          "image": "(cloudinary URL)",
          "product_id": 1,
          "createdAt": "2023-07-16T11:39:48.000Z",
          "updatedAt": "2023-07-16T11:39:48.000Z"
        }
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "totalPerPage": 1,
    "totalPages": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null
  }
}
```

</details>

<details>

<summary><strong>Limited edition products 💥</strong></summary>

This API endpoint retrieves limited edition products that are less than 20 in stock.

## Endpoint

```http
GET /products/limited-edition
```

## Parameters

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| page      | number | The page number to retrieve (default: 1)     |
| perPage   | number | The number of products per page (default: 1) |

## Response

The API response will be in JSON format and will include the following fields:

- `data` (array): An array of popular product objects. Each object contains the following fields:

  - `id` (integer): The unique identifier of the product.
  - `name` (string): The name of the product.
  - `description` (string): The description of the product.
  - `color` (string): The color of the product.
  - `price` (float): The price of the product.
  - `discount` (float): The discount applied to the product.
  - `rating` (float): The rating of the product.
  - `isLimited` (boolean): Is the product limited.
  - `category_id` (integer): The ID of the category the product belongs to.
  - `brand_id` (integer): The ID of the brand the product belongs to.
  - `createdAt` (string): The date and time when the product was created.
  - `updatedAt` (string): The date and time when the product was last updated.
  - `images` (array): An array of image objects associated with the product. Each image object contains the following fields:
    - `id` (integer): The unique identifier of the image.
    - `image` (string): The URL of the product image.
    - `product_id` (integer): The ID of the product the image belongs to.
    - `createdAt` (string): The date and time when the image was created.
    - `updatedAt` (string): The date and time when the image was last updated.

- `pagination` (object): An object containing pagination information.
  - `totalRecords` (integer): The total number of popular products in the community.
  - `totalPerPage` (integer): The maximum number of products per page.
  - `totalPages` (integer): The total number of pages based on the `totalRecords` and `totalPerPage`.
  - `currentPage` (integer): The current page number.
  - `nextPage` (string or null): The number of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The number of the previous page, if available. Null if there is no previous page.

## Example

Request:

```http
GET /products/limited-edition
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "test",
      "description": "test",
      "color": "red",
      "price": 23.5,
      "discount": 0,
      "rating": 4.5,
      "isLimited": true,
      "category_id": 1,
      "brand_id": 1,
      "createdAt": "2023-07-16T11:39:01.000Z",
      "updatedAt": "2023-07-16T11:39:01.000Z",
      "images": [
        {
          "id": 1,
          "image": "(cloudinary URL)",
          "product_id": 1,
          "createdAt": "2023-07-16T11:39:48.000Z",
          "updatedAt": "2023-07-16T11:39:48.000Z"
        }
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "totalPerPage": 1,
    "totalPages": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null
  }
}
```

</details>

<details>

<summary><strong>New Arrivals 💥</strong></summary>

Any products that have been created for 3 months before the current month. for example if you are in April, any products that were created in January, February and March will be new arrivals.

## Endpoint

```http
GET /products/new-arrivals
```

## Parameters

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| page      | number | The page number to retrieve (default: 1)     |
| perPage   | number | The number of products per page (default: 1) |

## Response

The API response will be in JSON format and will include the following fields:

- `data` (array): An array of popular product objects. Each object contains the following fields:

  - `id` (integer): The unique identifier of the product.
  - `name` (string): The name of the product.
  - `description` (string): The description of the product.
  - `color` (string): The color of the product.
  - `price` (float): The price of the product.
  - `discount` (float): The discount applied to the product.
  - `rating` (float): The rating of the product.
  - `isLimited` (boolean): Is the product limited.
  - `category_id` (integer): The ID of the category the product belongs to.
  - `brand_id` (integer): The ID of the brand the product belongs to.
  - `createdAt` (string): The date and time when the product was created.
  - `updatedAt` (string): The date and time when the product was last updated.
  - `images` (array): An array of image objects associated with the product. Each image object contains the following fields:
    - `id` (integer): The unique identifier of the image.
    - `image` (string): The URL of the product image.
    - `product_id` (integer): The ID of the product the image belongs to.
    - `createdAt` (string): The date and time when the image was created.
    - `updatedAt` (string): The date and time when the image was last updated.

- `pagination` (object): An object containing pagination information.
  - `totalRecords` (integer): The total number of popular products in the community.
  - `totalPerPage` (integer): The maximum number of products per page.
  - `totalPages` (integer): The total number of pages based on the `totalRecords` and `totalPerPage`.
  - `currentPage` (integer): The current page number.
  - `nextPage` (string or null): The number of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The number of the previous page, if available. Null if there is no previous page.

## Example

Request:

```http
GET /products/new-arrivals
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "test",
      "description": "test",
      "color": "red",
      "price": 23.5,
      "discount": 0,
      "rating": 4.5,
      "quantity": 15,
      "category_id": 1,
      "brand_id": 1,
      "createdAt": "2023-07-16T11:39:01.000Z",
      "updatedAt": "2023-07-16T11:39:01.000Z",
      "images": [
        {
          "id": 1,
          "image": "(cloudinary URL)",
          "product_id": 1,
          "createdAt": "2023-07-16T11:39:48.000Z",
          "updatedAt": "2023-07-16T11:39:48.000Z"
        }
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "totalPerPage": 1,
    "totalPages": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null
  }
}
```

</details>

<details>

<summary><strong>Products with 15% discount 💥</strong></summary>

Any products that have a discount of 15% or more.

## Endpoint

```http
GET /products?discount=15
```

## Parameters

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| page      | number | The page number to retrieve (default: 1)     |
| perPage   | number | The number of products per page (default: 1) |
| discount  | number | The specified discount of any products       |

## Response

The API response will be in JSON format and will include the following fields:

- `data` (array): An array of popular product objects. Each object contains the following fields:

  - `id` (integer): The unique identifier of the product.
  - `name` (string): The name of the product.
  - `description` (string): The description of the product.
  - `color` (string): The color of the product.
  - `price` (float): The price of the product.
  - `discount` (float): The discount applied to the product.
  - `rating` (float): The rating of the product.
  - `isLimited` (boolean): Is the product limited.
  - `category_id` (integer): The ID of the category the product belongs to.
  - `brand_id` (integer): The ID of the brand the product belongs to.
  - `createdAt` (string): The date and time when the product was created.
  - `updatedAt` (string): The date and time when the product was last updated.
  - `images` (array): An array of image objects associated with the product. Each image object contains the following fields:
    - `id` (integer): The unique identifier of the image.
    - `image` (string): The URL of the product image.
    - `product_id` (integer): The ID of the product the image belongs to.
    - `createdAt` (string): The date and time when the image was created.
    - `updatedAt` (string): The date and time when the image was last updated.

- `pagination` (object): An object containing pagination information.
  - `totalRecords` (integer): The total number of popular products in the community.
  - `totalPerPage` (integer): The maximum number of products per page.
  - `totalPages` (integer): The total number of pages based on the `totalRecords` and `totalPerPage`.
  - `currentPage` (integer): The current page number.
  - `nextPage` (string or null): The number of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The number of the previous page, if available. Null if there is no previous page.

## Example

Request:

```http
GET /products?dicsount=15
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "test",
      "description": "test",
      "color": "red",
      "price": 23.5,
      "discount": 0,
      "rating": 4.5,
      "isLimited": false,
      "category_id": 1,
      "brand_id": 1,
      "createdAt": "2023-07-16T11:39:01.000Z",
      "updatedAt": "2023-07-16T11:39:01.000Z",
      "images": [
        {
          "id": 1,
          "image": "(cloudinary URL)",
          "product_id": 1,
          "createdAt": "2023-07-16T11:39:48.000Z",
          "updatedAt": "2023-07-16T11:39:48.000Z"
        }
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "totalPerPage": 1,
    "totalPages": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null
  }
}
```

</details>

<details>

<summary><strong>Handpicked Collections 💥</strong></summary>

Any products that have a rating above 4.5 and are less than $100 in price

## Endpoint

```http
GET /products/handpicked-collections
```

## Parameters

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| page      | number | The page number to retrieve (default: 1)     |
| perPage   | number | The number of products per page (default: 1) |

## Response

The API response will be in JSON format and will include the following fields:

- `data` (array): An array of popular product objects. Each object contains the following fields:

  - `id` (integer): The unique identifier of the product.
  - `name` (string): The name of the product.
  - `description` (string): The description of the product.
  - `color` (string): The color of the product.
  - `price` (float): The price of the product.
  - `discount` (float): The discount applied to the product.
  - `rating` (float): The rating of the product.
  - `isLimited` (boolean): Is the product limited.
  - `category_id` (integer): The ID of the category the product belongs to.
  - `brand_id` (integer): The ID of the brand the product belongs to.
  - `createdAt` (string): The date and time when the product was created.
  - `updatedAt` (string): The date and time when the product was last updated.
  - `images` (array): An array of image objects associated with the product. Each image object contains the following fields:
    - `id` (integer): The unique identifier of the image.
    - `image` (string): The URL of the product image.
    - `product_id` (integer): The ID of the product the image belongs to.
    - `createdAt` (string): The date and time when the image was created.
    - `updatedAt` (string): The date and time when the image was last updated.

- `pagination` (object): An object containing pagination information.
  - `totalRecords` (integer): The total number of popular products in the community.
  - `totalPerPage` (integer): The maximum number of products per page.
  - `totalPages` (integer): The total number of pages based on the `totalRecords` and `totalPerPage`.
  - `currentPage` (integer): The current page number.
  - `nextPage` (string or null): The number of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The number of the previous page, if available. Null if there is no previous page.

## Example

Request:

```http
GET /products/handpicked-collections
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "test",
      "description": "test",
      "color": "red",
      "price": 120,
      "discount": 0,
      "rating": 4.6,
      "isLimited": false,
      "category_id": 1,
      "brand_id": 1,
      "createdAt": "2023-07-16T11:39:01.000Z",
      "updatedAt": "2023-07-16T11:39:01.000Z",
      "images": [
        {
          "id": 1,
          "image": "(cloudinary URL)",
          "product_id": 1,
          "createdAt": "2023-07-16T11:39:48.000Z",
          "updatedAt": "2023-07-16T11:39:48.000Z"
        }
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "totalPerPage": 1,
    "totalPages": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null
  }
}
```

</details>

<details>

<summary><strong>Search for products via their brands' name 💥</strong></summary>

It returns the search results of any brand or name of a product that contains the keyword the user has entered

## Endpoint

```http
GET /products/search?keyword=
```

## Parameters

| Parameter | Type   | Description                                                    |
| --------- | ------ | -------------------------------------------------------------- |
| page      | number | The page number to retrieve (default: 1)                       |
| perPage   | number | The number of products per page (default: 1)                   |
| keyword   | string | The product or brand name that should lookup for (default: '') |

## Response

The API response will be in JSON format and will include the following fields:

- `data` (array): An array of popular product objects. Each object contains the following fields:

  - `id` (integer): The unique identifier of the product.
  - `name` (string): The name of the product.
  - `description` (string): The description of the product.
  - `color` (string): The color of the product.
  - `price` (float): The price of the product.
  - `discount` (float): The discount applied to the product.
  - `rating` (float): The rating of the product.
  - `isLimited` (boolean): Is the product limited.
  - `category_id` (integer): The ID of the category the product belongs to.
  - `brand_id` (integer): The ID of the brand the product belongs to.
  - `createdAt` (string): The date and time when the product was created.
  - `updatedAt` (string): The date and time when the product was last updated.
  - `images` (array): An array of image objects associated with the product. Each image object contains the following fields:
    - `id` (integer): The unique identifier of the image.
    - `image` (string): The URL of the product image.
    - `product_id` (integer): The ID of the product the image belongs to.
    - `createdAt` (string): The date and time when the image was created.
    - `updatedAt` (string): The date and time when the image was last updated.

- `pagination` (object): An object containing pagination information.
  - `totalRecords` (integer): The total number of popular products in the community.
  - `totalPerPage` (integer): The maximum number of products per page.
  - `totalPages` (integer): The total number of pages based on the `totalRecords` and `totalPerPage`.
  - `currentPage` (integer): The current page number.
  - `nextPage` (string or null): The number of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The number of the previous page, if available. Null if there is no previous page.

## Example

Request:

```http
GET /products/search?keyword=
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "test",
      "description": "test",
      "color": "red",
      "price": 23.5,
      "discount": 0,
      "rating": 4.5,
      "isLimited": false,
      "category_id": 1,
      "brand_id": 1,
      "createdAt": "2023-07-16T11:39:01.000Z",
      "updatedAt": "2023-07-16T11:39:01.000Z",
      "images": [
        {
          "id": 1,
          "image": "(cloudinary URL)",
          "product_id": 1,
          "createdAt": "2023-07-16T11:39:48.000Z",
          "updatedAt": "2023-07-16T11:39:48.000Z"
        }
      ]
    }
  ],
  "pagination": {
    "totalRecords": 1,
    "totalPerPage": 1,
    "totalPages": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null
  }
}
```

</details>

<details>

<summary><strong>Favourites</strong></summary>

An overview of the Favourites API routes, which enable users to manage their favourite products. These routes require users to be authenticated and logged in to perform any actions related to their favourites.

**Authentication**

All Favourites routes require users to be authenticated before accessing them. The routes use JSON Web Tokens (JWT) for authentication, ensuring secure access to favourite functionalities. Users must pass the JWT token as a Bearer token in the Authorization header of the request.

**Base URL**

The base URL for all Favourites routes is `/favourites`.

---

**GET `/`**

**Description**

Retrieve a list of products that the authenticated user has marked as favourites.

**Method**

```http
GET /favourites
```

**Authentication**

Required (JWT token)

**Headers**

- `Authorization`: Bearer `<JWT_TOKEN>`

**Response**

- Status Code: 200 (OK)
- Content-Type: application/json
- Body: An array of favourite products in JSON format.

**Example Response**

```json
[
  {
    "id": 1,
    "name": "test",
    "description": "test",
    "color": "red",
    "price": 23.5,
    "discount": 0,
    "rating": 4.5,
    "isLimited": false,
    "category_id": 1,
    "brand_id": 1,
    "createdAt": "2023-07-16T11:39:01.000Z",
    "updatedAt": "2023-07-16T11:39:01.000Z",
    "images": [
      {
        "id": 1,
        "image": "(cloudinary URL)",
        "product_id": 1,
        "createdAt": "2023-07-16T11:39:48.000Z",
        "updatedAt": "2023-07-16T11:39:48.000Z"
      }
    ]
  }
]
```

---

**POST `/favourites/toggle`**

**Description**

Add or remove a product from the authenticated user's favourites.

**Method**

```http
POST /favourites/toggle
```

**Authentication**

Required (JWT token)

**Headers**

- `Authorization`: Bearer `<JWT_TOKEN>`

**Request Body**

```json
{
  "product_id": 1
}
```

- `product_id`: The ID of the product to add or remove from favourites.

**Response**

- Status Code: 200 (OK)
- Content-Type: application/json
- Body: An object with a message indicating the action performed.

**Example Request**

```json
{
  "productId": 1
}
```

**Example Response (Adding a Product)**

```json
{
  "message": "Product added to favorites"
}
```

**Example Response (Removing a Product)**

```json
{
  "message": "Product removed from favorites"
}
```

---

**Error Responses**

The API provides detailed error responses for various scenarios:

- Status Code: 401 (Unauthorized)

  - When the user is not authenticated or the JWT token is missing or invalid.

- Status Code: 404 (Not Found)

  - When the user is not found in the database.

- Status Code: 404 (Not Found)

  - When the specified product is not found in the database.

- Status Code: 500 (Internal Server Error)
  - For any unexpected server-side errors.

---

</details>
