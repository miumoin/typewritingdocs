---
sidebar_position: 2
---

# Users

API references for **Users** :

User belongs a `System` identified with access key and system info by `X-Vuedoo-Domain` & `X-Vudeoo-Access-Key` header.

```
Typewriting API
    System1
        User1
        User2
        ..
    System2
        ..
    ..
```

## Create a new User

A System that has a unique subdomain — it holds all assets created under that scope.

```
POST /users/new
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: 

{
  "name": "John",
  "email": "john@example.com"
  "password": "yourpassword"
}
```

A new user is added to an existing or a new system.

# Update a user

Updates user information based on provided key-value pair.

### Parameters
- `key` (string): The field to update (e.g., 'email', 'name', 'password')
- `value` (any): The new value to set for the specified field

### Examples

Update user's name and address

```
POST /users/update
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: user-access-key

{
  "name": "Not John",
  "address": "123 Bakers street, 3453TN London"
}
```

It returns:

```
{
  "status": "success",
  "user": {
    "email": "Not John",
    "address": "123 Bakers street, 3453TN London"
  }
}
```

## Signup and Login

Both signup and login follow a two-step authentication process:

1. Request authentication code
2. Verify code to complete authentication

### Step 1: Request Code

```
POST /users/auth/request
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: 

{
  "email": "john@example.com"
}
```

This generates a unique code and sends it to the user's email.

### Step 2: Verify Code

```
POST /users/auth/verify
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: 

{
  "email": "john@example.com",
  "code": "123456"
}
```

Upon successful verification, returns:

```json
{
  "status": "success",
  "access_token": "user-access-key-xxx",
  "user": {
    "email": "john@example.com",
    "name": "John"
  }
}
```

The `access_token` should be used as `X-Vuedoo-Access-key` for authenticated requests.