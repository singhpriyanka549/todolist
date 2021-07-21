<img style="display: block" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="drawing" width="200"/>

# Angular InterviewApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Installed Libraries

For ease of use we have installed:

- Bootstrap
- Angular Materials.

#### API URL - https://jsonplaceholder.typicode.com

API URL is located in the `variables.ts` file and is already imported into the `todos.service.ts` file for you to consume. The API accepts any of the following request types in the list.

Also please keep in mind this is a free playground server that allows us to write code against it. POST will not actually be stored however you should be able to go through the motions of completing your post and representing that data in your component. We understand on refresh the POST item will be gone.

- GET /todos
- GET /todos/`{:id}`
- POST /todos
- PUT /todos/`{:id}`
- PATCH /todos/`{:id}`
- DELETE /todos/`{:id}`

## Directions

Modify the todo service however you like to accomplish the following: Use RXJS Observable patterns.

- Use the TodoService to GET list of TODOs
- Use the TodoService to GET a single TODO (Optional but feel free to show us your wow factor)
- Use the TodoService to POST a new TODO.
- Use the TodoService to PUT a change to a TODO.
- Use the TodoService to PATCH a TODO.
- Use the TodoService to DELETE a TODO.

Create a component to display a list of all the todos

- It should display all todos
- It should allow you to add
- It should allow you to remove todos
- It should allow you to change status of a todo
- It should allow you to change the name of a todo (Optional but again show us what you got)

### Create an interface for the todos

- id
- title
- userId
- completed

```json
{
  "id": 1,
  "completed": false,
  "title": "Go to Bank",
  "userId": 1
}
```

## Help Links

#### Bootstrap - https://getbootstrap.com/docs/4.3/getting-started/introduction/

#### Angular Materials - https://material.angular.io/components/categories

#### Font Awesome - https://fontawesome.com/icons?from=io

#### Angular - https://angular.io/docs
