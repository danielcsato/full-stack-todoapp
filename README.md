# Todos
* backend 
  * create routes for todos
* frontend
  * create ui
  * connect to backend

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
