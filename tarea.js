alert("Bienvenidos a la pagina de los SIMPSONS!")

const personajes = [
    {
        id: 1,
        nombre: "Homero Simpson",
        edad: 45,
        imagen: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/05/12115047/homero-simpson-1920.jpg",
        lugarDeNacimiento: "Springfield",
        tipo: "Empleado",
    },
    {
        id: 2,
        nombre: "Bart Simpson",
        edad: 10,
        imagen: "https://tvazteca.brightspotcdn.com/dims4/default/ed61af2/2147483647/strip/true/crop/1920x1080+0+0/resize/968x545!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F1a%2F0d%2F6284b42a48b7809c1a226f51726a%2Fsimpson-7.png",
        lugarDeNacimiento: "Springfield",
        tipo: "Estudiante",
    },
    {
        id: 3,
        nombre: "Marge Simpson",
        edad: 34 ,
        imagen: "https://www.filo.news/__export/1569964045225/sites/claro/img/2019/10/01/muere_la_mujer_que_inspirx_a_marge_simpson.jpeg_1902800913.jpeg",
        lugarDeNacimiento: "Springfield",
        tipo: "Ama de Casa",
    },
    {
        id: 4,
        nombre: "Montgomery Burns",
        edad: 45,
        imagen: "https://tork.news/__export/1634077514090/sites/tork/img/2021/10/12/burns_1_crop1634077502732.jpg_351793839.jpg",
        lugarDeNacimiento: "Springfield",
        tipo: "Jefe",
    },
    {
        id: 5,
        nombre: "Lisa Simpson",
        edad: 8,
        imagen: "https://static.wikia.nocookie.net/hitlerparody/images/1/15/Lisa-simpson.jpeg/revision/latest/top-crop/width/360/height/450?cb=20210129175650&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Estudiante",
    },
    {
        id: 6,
        nombre: "Apu Nahasapeemapetilon",
        edad: 37,
        imagen: "https://www.lavanguardia.com/files/image_449_220/uploads/2019/12/09/5fa52e1c135b6.jpeg",
        lugarDeNacimiento: "Springfield",
        tipo: "Empleado",
    },
    {
        id: 7,
        nombre: "Sideshow Bob",
        edad: 25,
        imagen: "https://i.pinimg.com/736x/bd/3c/10/bd3c10e5be45065a855a925c48211ffb--simpsons-art-sideshow.jpg",
        lugarDeNacimiento: "Springfield",
        tipo: "Psicopata",
    },
    {
        id: 8,
        nombre: "Ned Flanders",
        edad: 45,
        imagen: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2015/05/14/5fa283960061f.jpeg",
        lugarDeNacimiento: "Springfield",
        tipo: "Religioso",
    },
    {
        id: 9,
        nombre: "Milhouse Van Houten",
        edad: 10,
        imagen: "https://i.discogs.com/yHpBvbF9EC7spDixBsnQFxCGg_knomElUbrkQxdqDi4/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTUtMTI2NjQ5NjEx/OS5wbmc.jpeg",
        lugarDeNacimiento: "Springfield",
        tipo: "Estudiante",
    },
    {
        id: 10,
        nombre: "Edna Krabappel",
        edad: 39,
        imagen: "https://static.wikia.nocookie.net/lossimpson/images/7/76/Edna_Krabappel.png/revision/latest/top-crop/width/360/height/450?cb=20150426054956&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Empleado",
    },
    {
        id: 11,
        nombre: "Krusty el payaso",
        edad: 55,
        imagen: "https://static.wikia.nocookie.net/lossimpson/images/c/c0/Herschel_Krustofski.png/revision/latest?cb=20150426072709&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Comediante",
    },
    {
        id: 12,
        nombre: "Waylon Smithers",
        edad: 40,
        imagen: "https://static.wikia.nocookie.net/doblaje/images/8/8f/Smithers.png/revision/latest/top-crop/width/360/height/450?cb=20140218192021&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Ayudante",
    },
    {
        id: 13,
        nombre: "Barney Gumble",
        edad: 43,
        imagen: "https://upload.wikimedia.org/wikipedia/en/d/de/Barney_Gumble.png",
        lugarDeNacimiento: "Springfield",
        tipo: "Desempleado",
    },
    {
        id: 14,
        nombre: "Nelson Muntz",
        edad: 11,
        imagen: "https://static.wikia.nocookie.net/simpsonspediade2009/images/c/c5/Nelson_Muntz.png/revision/latest/scale-to-width-down/500?cb=20100501151619&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Estudiante",
    }, 
    {
        id: 15,
        nombre: "Moe Szyslak",
        edad: 39,
        imagen: "https://depor.com/resizer/y0hVhMS4lU10pxugcKILko1a3rM=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Q2KSOIZI65B57KLYPHKEJXQCOI.jpg",
        lugarDeNacimiento: "Springfield",
        tipo: "Jefe",
    }, 
    {
        id: 16,
        nombre: "Jeff Albertson",
        edad: 54,
        imagen: "https://static.wikia.nocookie.net/lossimpson/images/f/f6/Jeff_Albertson.png/revision/latest?cb=20150426062736&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Jefe",
    }, 
    {
        id: 17,
        nombre: "Ralph Wiggum",
        edad: 8,
        imagen: "https://static.wikia.nocookie.net/skapokonpedia/images/9/98/Ralph-Wiggum-ralph-wiggum-39630776-1000-1000.png/revision/latest?cb=20180419154906&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Estudiante",
    }, 
    {
        id: 18,
        nombre: "Seymour Skinner",
        edad: 67,
        imagen: "https://i.pinimg.com/originals/70/5a/f4/705af4cb38f814c24d468e0674d893f3.png",
        lugarDeNacimiento: "Springfield",
        tipo: "Director",
    }, 
    {
        id: 19,
        nombre: "Abraham Simpson",
        edad: 83,
        imagen: "https://i.pinimg.com/originals/e5/4a/bc/e54abc44b68d6b2770696b789b20dafa.png",
        lugarDeNacimiento: "Springfield",
        tipo: "Jubilado",
    }, 
    {
        id: 20,
        nombre: "Clancy Wiggum",
        edad: 43,
        imagen: "https://static.wikia.nocookie.net/lossimpson/images/e/ec/Clancy_Wiggum.png/revision/latest?cb=20150426060357&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Policia",
    }, 
    {
        id: 21,
        nombre: "Fat Tony",
        edad: 63,
        imagen: "https://static.wikia.nocookie.net/simpsons/images/8/81/Fat_Tony_%28Artwork%29.png/revision/latest/top-crop/width/360/height/360?cb=20201223054908",
        lugarDeNacimiento: "Springfield",
        tipo: "Mafioso",
    }, 
    {
        id: 22,
        nombre: "Carl Carlson",
        edad: 38,
        imagen: "https://www.clarin.com/img/2020/09/25/carl-carlson-ya-no-sera___VN0L__iO2_1200x630__1.jpg",
        lugarDeNacimiento: "Springfield",
        tipo: "Empleado",
    }, 
    {
        id: 23,
        nombre: "Julius Hibbert",
        edad: 53,
        imagen: "https://img.europapress.es/fotoweb/fotonoticia_20210223112546_420.jpg",
        lugarDeNacimiento: "Springfield",
        tipo: "Empleado",
    }, 
    {
        id: 24,
        nombre: "Lou Policia",
        edad: 37,
        imagen: "https://static.wikia.nocookie.net/lossimpson/images/1/17/Lou.png/revision/latest/top-crop/width/360/height/450?cb=20150426042404&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Policia",
    },
    {
        id: 25,
        nombre: "Lenny Leonard",
        edad: 40,
        imagen: "https://static.wikia.nocookie.net/lossimpson/images/9/97/Lenny_remera.gif/revision/latest/scale-to-width-down/250?cb=20110110041027&path-prefix=es",
        lugarDeNacimiento: "Springfield",
        tipo: "Empleado",
    }, 
]

    const cargarPersonajes = () =>{

        personajes.forEach(personaje => {
            const cartaNueva = `<div class="card m-4" style="width: 18rem;">
            <img src="${personaje.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 id= "tituloCarta" class="card-title">
                    ${personaje.nombre}
              </h5>
              <p id="textoCarta" class="card-text">
                    Edad: ${personaje.edad} <br>
                    Lugar De Nacimiento: ${personaje.lugarDeNacimiento} <br>
                    Tipo: ${personaje.tipo} 
              </p>
            </div>
          </div>`;

            document.getElementById("row").insertAdjacentHTML('beforeend', cartaNueva);
        });
    }

    const filtrarPorTipo = () =>{
        let tipoFiltrado = document.getElementById("tipo").value
        const filtrados = personajes.filter(personaje => personaje.tipo === tipoFiltrado);

        personajes.forEach(personaje =>{
            document.getElementById("row").innerHTML = "";
        })

        filtrados.forEach(personaje => {
            const cartaNueva = `<div class="card m-4" style="width: 18rem;">
            <img src="${personaje.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 id= "tituloCarta" class="card-title">
                    ${personaje.nombre}
              </h5>
              <p id="textoCarta" class="card-text">
                    Edad: ${personaje.edad} <br>
                    Lugar De Nacimiento: ${personaje.lugarDeNacimiento} <br>
                    Tipo: ${personaje.tipo} 
              </p>
            </div>
          </div>`;

            document.getElementById("row").insertAdjacentHTML('beforeend', cartaNueva);
        });

    }

    const filtrarPorId = () =>{
        let idBuscado = parseInt(document.getElementById("id").value)
        const buscado = personajes.find(personaje => personaje.id === idBuscado);

        personajes.forEach(personaje =>{
            document.getElementById("row").innerHTML = "";
        })

        if(buscado != null){
            const cartaNueva = `<div class="card m-4" style="width: 18rem;">
            <img src="${buscado.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 id= "tituloCarta" class="card-title">
                    ${buscado.nombre}
              </h5>
              <p id="textoCarta" class="card-text">
                    Edad: ${buscado.edad} <br>
                    Lugar De Nacimiento: ${buscado.lugarDeNacimiento} <br>
                    Tipo: ${buscado.tipo} 
              </p>
            </div>
          </div>`
          document.getElementById("row").insertAdjacentHTML('beforeend', cartaNueva);
        }

        

    }

    window.onload = cargarPersonajes();