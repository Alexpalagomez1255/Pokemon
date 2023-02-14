<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Pokemon

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## Requisitos para funcionar
Crear una base de datos con PostgreSQL con nombre de su preferencia

En la carpeta `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=nombredesupreferencia
```

Reemplazar `usuariodepostgres`, `passwordDePostgres` y `nombredesupreferencia` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

luego en la terminal hacen un npm install en la carpeta `client` e igualmente en la carpeta `api` despues de hacer el npm install ejecutan el comando npm start tanto en `client` como en `api` para ver el proyecto

El contenido de `client` fue creado usando: Create React App.

## Enunciado

En esta aplicación se puedan ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Crear nuevos pokemons


#### Tecnologías Usadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: Landing page con
- imagen de fondo representativa al proyecto
- Botón para ingresar al home 

__Home__: Contiene
- [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [ ] Área donde se verá el listado de pokemons. Al iniciar se cargan los primeros pokemons:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
-  Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
- Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina, mostrando los primeros 9 en la primer pagina.


__Los detalle de Pokemon__: contienen
- Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- Número de Pokemon (id)
- Estadísticas (vida, fuerza, defensa, velocidad)
- Altura y peso

__Formulario de creación__: contiene
- Un formulario __controlado__ con los campos mencionados en el detalle del pokemon
- Posibilidad de seleccionar/agregar más de un tipo de pokemon
- Botón/Opción para crear un nuevo pokemon

__Seccion de Favoritos__:contiene
- Los pokemon que se seleccionan como favoritos
- Persistencia de datos en la memoria del navegador (localStorage)

__Pantallazo del Landing Page__
<p align="left">
  <img height="350" src="./PI.jpg" />
</p>