import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//http://localhost:3333/users
/*app.get('/users', (request, response) => {
    const users =[
        {name: 'Sabrina', age: 38},
        {name: 'Júnior', age: 41},
    ]
    response.json(users);
});

app.post('/users', (request, response) => {
    console.log(request.body);
    const users =[
        {name: 'Sabrina', age: 38},
        {name: 'Júnior', age: 41},
    ]
    response.json(users);
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    const users =[
        {name: 'Sabrina', age: 38},
        {name: 'Júnior', age: 41},
    ]
    response.json(users);
});*/

app.listen(3333);