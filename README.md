# full-stack-todoapp
 
### Todos
* swagger ui
* backend 
  * create routes for todos
* frontend
  * create ui
  * connect to backend

### Working routes

# Create a user
POST http://localhost:4001/register

{   
    "first_name": string,
    "last_name": string,
    "email": string,
    "password": string
}

# Login

POST http://localhost:4001/login

{   
    "email": string,
    "password": string
}
