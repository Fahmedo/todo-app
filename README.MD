## Project Setup

In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to avoid port collisions, in the source code port value is 5000
this task app db is run on mongoose

Endpoints

1. Get All Tasks
   Endpoint: /api/v1/tasks
   Method: GET
   Description: Retrieve a list of all tasks.

2. Get Task by ID
   Endpoint: /api/v1/tasks/{id}
   Method: GET
   Description: Retrieve a specific task by its unique identifier.

3. Create a New Task
   Endpoint: /api/v1/tasks
   Method: POST
   Description: Create a new task.
   Request Body:
   json

```ruby
   {
   "name": "Task Title, description",
   "completed": false
   }
```

4. Update Task
   Endpoint: /api/v1/tasks/{id}
   Method: PUT
   Description: Update an existing task.
   Request Body:
   json
   Copy code

   ```ruby
   {
   "name": "Updated Title, description",
   "completed": true
   }

   ```

5. Delete Task
   Endpoint: /api/v1/tasks/{id}
   Method: DELETE
   Description: Delete a specific task by its unique identifier.

   Getting Started
   Clone the repository:
