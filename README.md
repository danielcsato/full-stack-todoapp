####  work in progress
1. write unit tests
2. configure ci/cd
3. handle api calls via redux

### How to start

#### Backend
1. npm install
2. npm run dev


#### Frontend
1. npm install
2. npm start


### get todos
```http
GET /todos
```

### create a todo
```http
POST /todo/add
```

```javascript
{
  "todo": string, 
  "id": string, 
  "done": boolean, 

}
```


### delete a todo
```http
DELETE /:id
```


### update a todo
```http
POST /todo/:id
```

### Create a user
```http
POST /register
```

```javascript
{
  "first_name": string, 
  "last_name": string, 
  "email": string, 
  "password": string 
}
```
### Login

```http
POST /login
```
```javascript
{
  "email": string, 
  "password": string 
}
```

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
