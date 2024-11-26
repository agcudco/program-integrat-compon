CREATE TABLE libros ( 
    id int AUTO_INCREMENT PRIMARY KEY, 
    titulo varchar(50) not null, 
    autor varchar(100) not null, 
    editorial varchar(50) not null, 
    no_paginas int, 
    anio_publicacion int, 
    stock int DEFAULT 0, 
    estado boolean DEFAULT 1 
);

INSERT INTO libros (titulo,autor,editorial, no_paginas,anio_publicacion,stock,estado) 
VALUES('Arquitectura de software','Roger Pressman','Pearson Education',500,2019,10,1);

INSERT INTO libros (titulo,autor,editorial, no_paginas,anio_publicacion,stock,estado) 
VALUES('Jsf in Action','Ian Sommerville','McGrill Education',500,2019,10,1);