import chalk from 'chalk';
import express from 'express';

const port = 5000;
const app = express();
let count = 0;

const users = [
    {id:1, name: "Julia"},
    {id:2, name: "Mateo"},
    {id:3, name: "Manuel"}
]

app.get('/', (req,res) => {
    count++;
    console.log('Cliente ' + count + ' conectado')
    res.send('Hola desde Express');
})

//otra forma
const getUsers = (req, res) => {
    console.log('GET Users');
    res.json(users);
}
//rutas de mi app
app.get('/api/users', getUsers);

app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const user = users.find(u => u.id == id);
    res.json(user);
})


app.listen(port, () => {
    console.log(chalk.green("Servidor escuchando en http://localhost:" + port));
});

