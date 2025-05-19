---
sidebar_position: 3
---

# Blocks

API references for **Blocks** :

User belongs a `System` identified with access key and system info by `X-Vuedoo-Domain` & `X-Vudeoo-Access-Key` header.

```
Typewriting API
    System1
        User1
          Block1
          Block2
          ..
        User2
        ..
    System2
        ..
    ..
```

## Create a Block

Creates a new block within the authenticated user's system.

### Request
```http
POST /blocks/new
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: access-key
```

### Parameters
- `title` (string): Block title
- `type` (string): Block type identifier
- `parent` (number): Parent block ID (0 for root level)
- `content` (string): Main block content
- `privileges` (array, optional): List of user access permissions
  - `privilege` (string): Access level ('readonly' or 'write')
  - `email` (string): User email address
- `metas` (object, optional): Custom metadata key-value pairs

### Example

```json
{
  "title": "Meeting Notes",
  "type": "document",
  "parent": 0,
  "content": "Meeting agenda and minutes...",
  "privileges": [
    {"privilege": "readonly", "email": "viewer@domain.com"},
    {"privilege": "write", "email": "editor@domain.com"}
  ],
  "metas": {
    "category": "team-meetings",
    "priority": "high"
  }
}
```

### Response

```json
{
  "status": "success",
  "block": {
    "id": 12345,
    "slug": "meeting-notes",
    "title": "Meeting Notes",
    "type": "document",
    "parent": 0,
    "content": "Meeting agenda and minutes...",
    "created_at": "2024-01-20T10:30:00Z",
    "updated_at": "2024-01-20T10:30:00Z",
    "privileges": [
      {"privilege": "readonly", "email": "viewer@domain.com"},
      {"privilege": "write", "email": "editor@domain.com"}
    ],
    "metas": {
      "category": "team-meetings",
      "priority": "high"
    },
    "status": 1
  }
}
```

# Update Block

Updates an existing block with new field values.

## Parameters

- `slug` (string) or `id` (number): Unique identifier for the block to update
- `fields` (object): Object containing fields to update

## Request Fields

Fields that can be updated:
- `title` (string) - Block title 
- `content` (string) - Block content
- `published` (boolean) - Publication status
- `category` (string) - Block category
- `tags` (array) - Array of tag strings
- `metadata` (object) - Additional metadata

### Example

```http
PATCH /blocks/meeting-notes/update
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: access-key

{
  "fields": {
    "title": "Updated Meeting Notes",
    "content": "New meeting content...",
    "status": 1,
    "tags": ["meeting", "team"],
    "metadata": {
      "priority": "medium",
      "status": "in-progress"
    }
  }
}
```

### Response

```json
{
  "status": "success",
  "block": {
    "id": 12345,
    "slug": "updated-meeting-notes",
    "title": "Updated Meeting Notes",
    "content": "New meeting content...",
    "status": 1,
    "created_at": "2024-01-20T10:30:00Z",
    "updated_at": "2024-01-20T11:45:00Z",
    "tags": ["meeting", "team"],
    "metadata": {
      "priority": "medium", 
      "status": "in-progress"
    }
  }
}
```


# Get Blocks

## Parameters

- `parent` _(optional)_: The parent element to search blocks within. If not provided, searches the entire document.
- `type`: The block type to filter by.

## Request
```http
GET /blocks
Content-Type: application/json
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: access-key
{
  "type": "document",
  "parent": 123
}
```

## Response

```json
{
  "status": "success",
  "blocks": [
    {
      "id": 12345,
      "slug": "meeting-notes",
      "title": "Meeting Notes",
      "type": "document",
      "parent": 123,
      "content": "Meeting content...",
      "created_at": "2024-01-20T10:30:00Z",
      "updated_at": "2024-01-20T10:30:00Z"
    },
    {
      "id": 12346,
      "slug": "project-plan",
      "title": "Project Plan",
      "type": "document",
      "parent": 123,
      "content": "Project details...",
      "created_at": "2024-01-20T11:00:00Z",
      "updated_at": "2024-01-20T11:00:00Z"
    }
  ]
}
```


# Get Block

Retrieves a single block by its identifier.

## Parameters

- `slug` (string) or `id` (number): Unique identifier for the block
- `parent` (number, optional): Parent block ID

## Request
```http
GET /blocks/{slug}
Content-Type: application/json
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: access-key
```

### Example

```http
GET /blocks/meeting-notes
X-Vuedoo-Domain: domain
X-Vuedoo-Access-key: access-key
```

## Response

```json
{
  "status": "success",
  "block": {
    "id": 12345,
    "slug": "meeting-notes",
    "title": "Meeting Notes",
    "type": "document",
    "parent": 0,
    "content": "Meeting content...",
    "created_at": "2024-01-20T10:30:00Z",
    "updated_at": "2024-01-20T10:30:00Z"
  }
}
```
