import { useEffect, useState } from 'react';
import PageWrapper from "./PageWrapper.jsx";
import Paginacion from './Paginacion';
import Pelicula from "./Pelicula.jsx";

export default function ListadoPeliculas() {

const [paginaActual, setPaginaActual] = useState(1);
const [peliculas, setPeliculas] = useState([]);
const total_por_pagina = 4;

const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';
    
    try {
const respuesta = await fetch(url);
const json = await respuesta.json();
console.log(json); // imprimir la respuesta en la consola
setPeliculas(json);
    } catch (error) {
console.error(error);
    }
}; 

useEffect(() => {
    buscarPeliculas();
}, []);

const getTotalPaginas = () => {
    let cantidadTotalPeliculas = peliculas.length;
    
    return Math.ceil(cantidadTotalPeliculas / total_por_pagina);
}

    let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * total_por_pagina,
    paginaActual * total_por_pagina
    );

return (
    <PageWrapper>
{peliculasPorPagina.map(pelicula =>
<Pelicula 
    key={pelicula.titulo} 
    titulo={pelicula.titulo} 
    calificacion={pelicula.calificacion} 
    director={pelicula.director} 
    actores={pelicula.actores}
    fecha={pelicula.fecha} 
    duracion={pelicula.duracion} 
    img={pelicula.img}>
    {pelicula.descripcion}
</Pelicula>
)}
<Paginacion 
pagina={paginaActual} 
total={getTotalPaginas()} 
onChange={(pagina) => {
    setPaginaActual(pagina)
}}/>

</PageWrapper>
)
}