// import express, { Request, Response, NextFunction } from "express";

// const port = process.env.PORT || 3000;

// const app = express();

// app.get("/", (request: Request, response: Response, next: NextFunction) => {
//   response.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/hello/:name', (req, res) => {
//   const { name } = req.params;
//   res.send(`Witaj ${name}!`);
// });

// type Todo = {
//     id: string
//     title: string
//     isCompleted: boolean
//     userId: string
//     createdAt: string
//    }

// const todos:Todo[] = [
//   {
//     id: '1',
//     title: 'Przykładowe zadanie',
//     isCompleted: false,
//     userId: 'user1',
//     createdAt: '2024-01-12T12:00:00Z'
//   },
// ];

// app.get('/todos', (req, res) => {
//   res.json(todos);
// });

// app.listen(port, () => {
//   console.log(`Serwer nasłuchuje na porcie ${port}`);
// });

const express = require('express')
const app = express()
const port = 3000

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false
  }
]

app.get('/todos/:id', (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ error: 'ID not provided' })
  }

  const todo = todos.find((todo) => todo.id.toString() === id)

  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({ error: 'Todo not found' })
  }
})

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`)
})
