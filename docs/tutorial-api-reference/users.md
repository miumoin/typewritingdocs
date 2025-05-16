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

# User Profile Update

Updates user information based on provided key-value pair.

## Parameters
- `key` (string): The field to update (e.g., 'email', 'name', 'password')
- `value` (any): The new value to set for the specified field

## Returns
- Promise that resolves when update is successful
- Throws error if update fails

## Examples

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