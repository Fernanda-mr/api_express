//cargamos conexion a la base de datos
const { response, request } = require('express');
const pool = require('../data/config');
//ruta de la app
const router = app => {
    //mostrar mensaje de bienvenida de root
    app.get('/', (request, response) =>{
        response.send({
            message: '¡Bienvenida Marifer!'
        });
    });

    //mostrar todos los usuarios
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM users', (error,result) => {
            if (error) throw error;
            response.send(result);
        });
    });
    //mostrar un solo usuario id
    app.get('/users/:id', (request, response) => {
        const id = request.params.id;
        pool.query('SELECT * FROM users WHERE id = ?'. id, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
    //para agregar un nuevo usuario
    app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) throw error;
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });
}
//exportamos el router
module.exports = router;