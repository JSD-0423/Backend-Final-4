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

  </details>

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
  - `quantity` (integer): The number of items in stock.
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
  - `nextPage` (string or null): The URL of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The URL of the previous page, if available. Null if there is no previous page.

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
      "quantity": 20,
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
  - `quantity` (integer): The number of items in stock.
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
  - `nextPage` (string or null): The URL of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The URL of the previous page, if available. Null if there is no previous page.

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
  - `quantity` (integer): The number of items in stock.
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
  - `nextPage` (string or null): The URL of the next page, if available. Null if there is no next page.
  - `prevPage` (string or null): The URL of the previous page, if available. Null if there is no previous page.

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
