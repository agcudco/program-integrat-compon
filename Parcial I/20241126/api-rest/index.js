import express from 'express';

import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Bienvenidos a mi api");
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'bd_api_rest'
});

db.connect((error) => {
    if (error) {
        console.log("Error al conectar a la base de datos");
        return
    } else {
        console.log("Conexion Exitosa");
    }
});

app.get('/libros/', (req, res) => {
    const query = "SELECT * FROM libros";
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).send('Error al ejecutar la consulta');
            return;
        } else {
            res.status(200).json(results);
        }
    });
});

app.post('/libros/', (req, res) => {
    const { titulo, autor, editorial, no_paginas, anio_publicacion, stock, estado } = req.body;
    const query = 'INSERT INTO libros (titulo,autor,editorial, no_paginas,anio_publicacion,stock,estado) VALUES(?,?,?,?,?,?,?)';
    db.query(query,
        [titulo, autor, editorial, no_paginas, anio_publicacion, stock, estado],
        (error, results) => {
            if (error) {
                res.status(500).send('Error al ejecutar la consulta');
                return;
            } else {
                res.status(201).json('Libro registrado exitosamente');
            }
        }
    );
});

app.delete('/libros/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM libros WHERE id=?';
    db.query(query, [id], (error, results) => {
        if (error) {
            res.status(500).send('Error al eliminar el libro');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send('No existe el libro');
            return;
        }
        res.status(200).json('Libro eliminado exitosamente');
    });
});


app.put('/libros/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, autor, editorial, no_paginas, anio_publicacion, stock, estado } = req.body;
    const query = 'UPDATE libros set titulo=?, autor=?, editorial=?, no_paginas=?, anio_publicacion=?, stock=?, estado=? WHERE id=?';
    db.query(query,
        [titulo, autor, editorial, no_paginas, anio_publicacion, stock, estado, id],
        (error, results) => {
            if (error) {
                res.status(500).send('Error al actualizar el libro');
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).send('No existe el libro');
                return;
            }
            res.status(200).json('Libro actualizado exitosamente');
        }
    );
});