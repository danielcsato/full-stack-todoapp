# full-stack-todoapp
 

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
