

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
delete /:id
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
