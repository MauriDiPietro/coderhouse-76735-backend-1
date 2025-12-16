const usuario = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    edad: 25,
    email: 'pedro@mail.com'
}

console.log(Object.entries(usuario))

/*
[
  [ 'nombre', 'Pedro' ],
  [ 'apellido', 'Gomez' ],
  [ 'edad', 25 ],
  [ 'email', 'pedro@mail.com' ]
]
*/

console.log(Object.keys(usuario))

//[ 'nombre', 'apellido', 'edad', 'email' ]

console.log(Object.values(usuario))

//[ 'Pedro', 'Gomez', 25, 'pedro@mail.com' ]