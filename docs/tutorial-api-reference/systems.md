---
sidebar_position: 1
---

# Systems

API references for **Systems** :

Every API request is scoped to a System using the `X-Vuedoo-Domain` header.

```
Typewriting API
    System1
        ..
    System2
        ..
    ..
```

## Create a new System

A System that has a unique subdomain — it holds all assets created under that scope.

```
POST /users/new
X-Vuedoo-Domain: newdomain
X-Vuedoo-Access-key: 

{
  "name": "John",
  "email": "john@example.com"
}
```

A new system is added if the subdomain doesn't already exist.