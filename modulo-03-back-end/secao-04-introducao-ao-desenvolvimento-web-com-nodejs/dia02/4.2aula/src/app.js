const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

const users = [
  { id: 1, name: 'John', active: false },
  { id: 2, name: 'Jane', active: true },
  { id: 3, name: 'Susan', active: false },
  { id: 4, name: 'Chris', active: true },
]

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  const nextId = users.length + 1;
  users.push({ id: nextId, name, active: true });

  return res.status(201).json({ message: 'User created', user: newUser });
});

app.get('/users', (req, res) => {
  return res.status(200).json(users);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: `User with id ${id} not found` });
  }

  users.splice(userIndex, 1);
  return res.status(204).end();
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ message: `User with id ${id}not found` });
  }

  return res.status(200).json({user});
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, active } = req.body;
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ message: `User with id ${id}not found` });
  }

  user.name = name;
  user.active = active;

  return res.status(200).json({ user });
});

app.listen(PORT, () => 
  console.log(`Server listening on port ${PORT}`));
