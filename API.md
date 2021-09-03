# API Document

## Launch API Server

```
$ cd api-server
$ bundle install
$ bundle exec foreman start
$ open http://localhost:5000
```

## GET /items

### Response

```
{
  "data": [
    {
      "id": "1",
      "name": "men1",
      "description": "size free 1",
      "like_count": 91,
      "comment_count": 59,
      "price": 51,
      "is_sold_out": false,
      "shipping_fee": "送料込み",
      "image": "http://dummyimage.com/400x400/000/fff?text=men1",
      "category_id": 1
    },
    {
      "id": "2",
      "name": "men2",
      "description": "size free 1",
      "like_count": 0,
      "comment_count": 0,
      "price": 10000,
      "is_sold_out": true,
      "shipping_fee": "送料込み",
      "image": "http://dummyimage.com/400x400/000/fff?text=men2",
      "category_id": 1
    },
    ...
  ]
}
```

## GET /items/:id

### Response

```
{
  {
    "id": "1",
    "name": "men1",
    "description": "size free 1",
    "like_count": 91,
    "comment_count": 59,
    "price": 51,
    "is_sold_out": false,
    "shipping_fee": "送料込み",
    "image": "http://dummyimage.com/400x400/000/fff?text=men1",
    "category_id": "1"
  }
}
```

## GET /categories

### Response

```
{
  "data": [
    {
      "id": "1",
      "name": "インテリア"
    },
    {
      "id": "2",
      "name": "レディース"
    },
    {
      "id": "3",
      "name": "ベビー・キッズ"
    },
    {
      "id": "4",
      "name": "エンタメ"
    },
    {
      "id": "5",
      "name": "メンズ"
    }
  ]
}
```
