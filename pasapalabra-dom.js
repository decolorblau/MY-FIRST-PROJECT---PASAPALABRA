//PAGINA JOC PASAPALABRA


//Selectors:
const letraRosco = document.querySelectorAll('.letra-rosco');
const aciertos = document.querySelector('#aciertos');
const tiempo = document.querySelector('#tiempo');
const errores = document.querySelector('#errores');
const letter = document.querySelector('#letter');
const firstLetter = document.querySelector('#firstLetter');
const question = document.querySelector('#question');
const answer = document.querySelector('#answer');
const comprobar = document.querySelector('#comprobar');
const pasapalabra = document.querySelector('#pasapalabra');
const preguntas = document.querySelector('.preguntas');
const abandonar = document.querySelector('#abandonar');
const resultat = document.querySelector('.resultat');
const divTiempo = document.querySelector('.tiempo');


//variables preguntes:
const questions1 = [

    { letter: "a", answer: "abducir", status: 0, firstLetter: "EMPIEZA CON LA LETRA A", question: "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, firstLetter: "EMPIEZA CON LA LETRA B", question: "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, firstLetter: "EMPIEZA CON LA LETRA C", question: "Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 0, firstLetter: "EMPIEZA CON LA LETRA D", question: "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, firstLetter: "EMPIEZA CON LA LETRA E", question: "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, firstLetter: "EMPIEZA CON LA LETRA F", question: "Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, firstLetter: "EMPIEZA CON LA LETRA G", question: "Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, firstLetter: "EMPIEZA CON LA LETRA H", question: "Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, firstLetter: "EMPIEZA CON LA LETRA I", question: "Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, firstLetter: "EMPIEZA CON LA LETRA J", question: "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, firstLetter: "EMPIEZA CON LA LETRA K", question: "Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, firstLetter: "EMPIEZA CON LA LETRA L", question: "Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, firstLetter: "EMPIEZA CON LA LETRA M", question: "Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, firstLetter: "EMPIEZA CON LA LETRA N", question: "Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, firstLetter: "CONTIENE LA LETRA Ñ", question: "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, firstLetter: "EMPIEZA CON LA LETRA O", question: "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, firstLetter: "EMPIEZA CON LA LETRA P", question: "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, firstLetter: "EMPIEZA CON LA LETRA Q", question: "Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, firstLetter: "EMPIEZA CON LA LETRA R", question: "Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, firstLetter: "EMPIEZA CON LA LETRA S", question: "Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, firstLetter: "EMPIEZA CON LA LETRA T", question: "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, firstLetter: "EMPIEZA CON LA LETRA U", question: "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, firstLetter: "EMPIEZA CON LA LETRA V", question: "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, firstLetter: "CONTIENE LA LETRA W", question: "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, firstLetter: "CONTIENE LA LETRA X", question: "Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, firstLetter: "CONTIENE LA LETRA Y", question: "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, firstLetter: "EMPIEZA CON LA LETRA Z", question: "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"} 

];

const questions2 = [

{ letter: "a", answer: "arteria", status: 0, firstLetter: "EMPIEZA CON LA LETRA A", question: "Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo."},

{ letter: "b", answer: "bitacora", status: 0, firstLetter: "EMPIEZA CON LA LETRA B", question: "En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula."},

{ letter: "c", answer: "cicerone", status: 0, firstLetter: "EMPIEZA CON LA LETRA C", question: "Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes."},

{ letter: "d", answer: "diplomacia", status: 0, firstLetter: "EMPIEZA CON LA LETRA D", question: "Actividad que realiza un país para mantener buenas relaciones con el resto de países."},

{ letter: "e", answer: "equinoccio", status: 0, firstLetter: "EMPIEZA CON LA LETRA E", question: "Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra."},

{ letter: "f", answer: "fisiologia", status: 0, firstLetter: "EMPIEZA CON LA LETRA F", question: "Ciencia que estudia las funciones de los órganos de los seres vivos."},

{ letter: "g", answer: "glaciacion", status: 0, firstLetter: "EMPIEZA CON LA LETRA G", question: "Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo."},

{ letter: "h", answer: "hinojo", status: 0, firstLetter: "EMPIEZA CON LA LETRA H", question: "Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión."},

{ letter: "i", answer: "ingeniero", status: 0, firstLetter: "EMPIEZA CON LA LETRA I", question: "Capacidad para inventar cosas o para pensar y hablar con gracia."},

{ letter: "j", answer: "jade", status: 0, firstLetter: "EMPIEZA CON LA LETRA J", question: "Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno."},

{ letter: "k", answer: "kan", status: 0, firstLetter: "EMPIEZA CON LA LETRA K", question: "Antiguamente era el máximo gobernante de los mongoles."},

{ letter: "l", answer: "lema", status: 0, firstLetter: "EMPIEZA CON LA LETRA L", question: "Frase que expresa la forma en que debe actuar una persona."},

{ letter: "m", answer: "miriñaque", status: 0, firstLetter: "EMPIEZA CON LA LETRA M", question: "Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo."},

{ letter: "n", answer: "ninfa", status: 0, firstLetter: "EMPIEZA CON LA LETRA N", question: "En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos."},	 

{ letter: "ñ", answer: "ñandu", status: 0, firstLetter: "EMPIEZA CON LA LETRA Ñ", question: "Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie."},

{ letter: "o", answer: "onomatopeya", status: 0, firstLetter: "EMPIEZA CON LA LETRA O", question: "Palabra que imita el sonido que hace un animal o una cosa."},

{ letter: "p", answer: "pabellon", status: 0, firstLetter: "EMPIEZA CON LA LETRA P", question: "Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él."},

{ letter: "q", answer: "quimera", status: 0, firstLetter: "EMPIEZA CON LA LETRA Q", question: "Cosa que, sin ser real, alguien la imagina como posible o verdadera."},

{ letter: "r", answer: "remora", status: 0, firstLetter: "EMPIEZA CON LA LETRA R", question: "Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes."},

{ letter: "s", answer: "sotana", status: 0, firstLetter: "EMPIEZA CON LA LETRA S", question: "Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos"},

{ letter: "t", answer: "testamento", status: 0, firstLetter: "EMPIEZA CON LA LETRA T", question: "Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias."},

{ letter: "u", answer: "urbanizacion", status: 0, firstLetter: "EMPIEZA CON LA LETRA U", question: "Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven."},

{ letter: "v", answer: "vencejo", status: 0, firstLetter: "EMPIEZA CON LA LETRA V", question: "Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido."},

{ letter: "w", answer: "whisky", status: 0, firstLetter: "EMPIEZA CON LA LETRA W", question: "Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales."},

{ letter: "x", answer: "xilografia", status: 0, firstLetter: "EMPIEZA CON LA LETRA X", question: "Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo."},

{ letter: "y", answer: "yak", status: 0, firstLetter: "EMPIEZA CON LA LETRA Y", question: "Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío."},

{ letter: "z", answer: "zocalo", status: 0, firstLetter: "EMPIEZA CON LA LETRA Z", question: "Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación."} ]


const questions3 = [

{ letter: "a", answer: "agenda", status: 0, firstLetter: "EMPIEZA CON LA LETRA A", question: "Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer."},

{ letter: "b", answer: "bonanza", status: 0, firstLetter: "EMPIEZA CON LA LETRA B", question: "Prosperidad."},

{ letter: "c", answer: "caracol", status: 0, firstLetter: "EMPIEZA CON LA LETRA C", question: "Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse."},

{ letter: "d", answer: "dormir", status: 0, firstLetter: "EMPIEZA CON LA LETRA D", question: "Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios."},

{ letter: "e", answer: "entrecot", status: 0, firstLetter: "EMPIEZA CON LA LETRA E", question: "Trozo de carne sacado de entre costilla y costilla de la res."},

{ letter: "f", answer: "farhadi", status: 0, firstLetter: "EMPIEZA CON LA LETRA F", question: "Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017."},

{ letter: "g", answer: "gorgorito", status: 0, firstLetter: "EMPIEZA CON LA LETRA G", question: "Coloquialmente quiebro que se hace con la voz con la garganta al cantar."},

{ letter: "h", answer: "hidroavion", status: 0, firstLetter: "EMPIEZA CON LA LETRA H", question: "Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua."},

{ letter: "i", answer: "inapetencia", status: 0, firstLetter: "EMPIEZA CON LA LETRA I", question: "Falta de gana de comer."},

{ letter: "j", answer: "jardineria", status: 0, firstLetter: "EMPIEZA CON LA LETRA J", question: "Arte y oficio del jardinero."},

{ letter: "k", answer: "k2", status: 0, firstLetter: "EMPIEZA CON LA LETRA K", question: "Segunda montaña mas alta de la Tierra. Con 8.611m de altura."},

{ letter: "l", answer: "lobera", status: 0, firstLetter: "EMPIEZA CON LA LETRA L", question: "Guarida de lobos."},

{ letter: "m", answer: "mentira", status: 0, firstLetter: "EMPIEZA CON LA LETRA M", question: "Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída."},

{ letter: "n", answer: "nativo", status: 0, firstLetter: "EMPIEZA CON LA LETRA N", question: "Se aplica al que ha nacido en el lugar de que se trata."},	 

{ letter: "ñ", answer: "hogaño", status: 0, firstLetter: "CONTIENE LA LETRA Ñ", question: "De tiempo que indica en esta época diferencia de antaño en época inferior."},

{ letter: "o", answer: "organo", status: 0, firstLetter: "EMPIEZA CON LA LETRA O", question: "De las partes del pulpo, animal o vegetal que ejercen una función."},

{ letter: "p", answer: "plotino", status: 0, firstLetter: "EMPIEZA CON LA LETRA P", question: "Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría."},

{ letter: "q", answer: "chisquero", status: 0, firstLetter: "CONTIENE LA LETRA Q", question: "Encendedor antiguo de bolsillo."},

{ letter: "r", answer: "rafaga", status: 0, firstLetter: "EMPIEZA CON LA LETRA R", question: "Viento fuerte, resentido y de corta duración."},

{ letter: "s", answer: "simple", status: 0, firstLetter: "EMPIEZA CON LA LETRA S", question: "Se aplica a lo que no tiene complicación."},

{ letter: "t", answer: "trece", status: 0, firstLetter: "EMPIEZA CON LA LETRA T", question: "Número cardinal equivalente a 10 + 3."},

{ letter: "u", answer: "uderzo", status: 0, firstLetter: "EMPIEZA CON LA LETRA U", question: "Apellido del dibujante y guionista francés autor de la serie Asterix."},

{ letter: "v", answer: "verde", status: 0, firstLetter: "EMPIEZA CON LA LETRA V", question: "Se aplica el color perfectamente al de la hierba fresca o la esmeralda."},

{ letter: "w", answer: "washington", status: 0, firstLetter: "EMPIEZA CON LA LETRA W", question: "Seattle pertenece a este estado."},

{ letter: "x", answer: "exegesis", status: 0, firstLetter: "CONTIENE LA LETRA X", question: "Explicación o interpretación particularmente de los libros de la Biblia."},

{ letter: "y", answer: "moncayo", status: 0, firstLetter: "CONTIENE LA LETRA Y", question: "Nombre de la montaña más alta del sistema ibérico."},

{ letter: "z", answer: "zoodiacal", status: 0, firstLetter: "EMPIEZA CON LA LETRA Z", question: "Perteneciente o relativo al zoodíaco."} ]


const questions4 = [

{ letter: "a", answer: "anticuario", status: 0, firstLetter: "EMPIEZA CON LA LETRA A", question: "Persona que colecciona o negocia con antigüedades."},

{ letter: "b", answer: "biberon", status: 0, firstLetter: "EMPIEZA CON LA LETRA B", question: "Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma."},

{ letter: "c", answer: "capo", status: 0, firstLetter: "EMPIEZA CON LA LETRA C", question: "Jefe de la mafia, especialmente de narcotraficantes."},

{ letter: "d", answer: "desodorante", status: 0, firstLetter: "EMPIEZA CON LA LETRA D", question: "Producto que se utiliza para suprimir el olor corporal o de algún recinto."},

{ letter: "e", answer: "efimero", status: 0, firstLetter: "EMPIEZA CON LA LETRA E", question: "Pasajero, de corta duración."},

{ letter: "f", answer: "faja", status: 0, firstLetter: "EMPIEZA CON LA LETRA F", question: "Prenda interior elástica que ciñe la cintura, o la cintura y las caderas."},

{ letter: "g", answer: "gominola", status: 0, firstLetter: "EMPIEZA CON LA LETRA G", question: "Golosina blanca masticable, generalmente recubierta de azúcar."},

{ letter: "h", answer: "historia", status: 0, firstLetter: "EMPIEZA CON LA LETRA H", question: "Conjunto de todos los hechos ocurridos en tiempos pasados."},

{ letter: "i", answer: "ilves", status: 0, firstLetter: "EMPIEZA CON LA LETRA I", question: "Apellido del político que fue presidente de Estonia entre los años 2006 y 2016"},

{ letter: "j", answer: "judion", status: 0, firstLetter: "EMPIEZA CON LA LETRA J", question: "Variedad de judía de vainas anchas y semilla grande."},

{ letter: "k", answer: "euskera", status: 0, firstLetter: "CONTIENE LA LETRA K", question: "Lengua que se habla al extremo occidental de los Pirineos."},

{ letter: "l", answer: "linaje", status: 0, firstLetter: "EMPIEZA CON LA LETRA L", question: "Ascendencia o descendencia de una familia, especialmente noble."},

{ letter: "m", answer: "madriguera", status: 0, firstLetter: "EMPIEZA CON LA LETRA M", question: "Cueva en la que habitan ciertos animales, especialmente los conejos."},

{ letter: "n", answer: "navato", status: 0, firstLetter: "EMPIEZA CON LA LETRA N", question: "Espinazo de los vertebrados."},	 

{ letter: "ñ", answer: "acuñar", status: 0, firstLetter: "CONTIENE LA LETRA Ñ", question: "Hacer o fabricar moneda."},

{ letter: "o", answer: "onirico", status: 0, firstLetter: "EMPIEZA CON LA LETRA O", question: "Perteneciente o relativo a los sueños."},

{ letter: "p", answer: "piolet", status: 0, firstLetter: "EMPIEZA CON LA LETRA P", question: "Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo."},

{ letter: "q", answer: "equilatero", status: 0, firstLetter: "CONTIENE LA LETRA Q", question: "Triángulo que tiene todos sus lados iguales."},

{ letter: "r", answer: "risaralda", status: 0, firstLetter: "EMPIEZA CON LA LETRA R", question: "Departamento de Colombia con capital en la ciudad de Pereira."},

{ letter: "s", answer: "sentar", status: 0, firstLetter: "EMPIEZA CON LA LETRA S", question: "Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas."},

{ letter: "t", answer: "tipi", status: 0, firstLetter: "EMPIEZA CON LA LETRA T", question: "Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte."},

{ letter: "u", answer: "unilateral", status: 0, firstLetter: "EMPIEZA CON LA LETRA U", question: "Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo."},

{ letter: "v", answer: "vilano", status: 0, firstLetter: "EMPIEZA CON LA LETRA V", question: "Flor del cardo."},

{ letter: "w", answer: "windsurf", status: 0, firstLetter: "EMPIEZA CON LA LETRA W", question: "Modalidad de deporte a vela."},

{ letter: "x", answer: "dux", status: 0, firstLetter: "CONTIENE LA LETRA X", question: "En las repúblicas de Venecia o Génova, príncipe o magistrado supremo."},

{ letter: "y", answer: "ensayar", status: 0, firstLetter: "CONTIENE LA LETRA Y", question: "Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público."},

{ letter: "z", answer: "zumbado", status: 0, firstLetter: "EMPIEZA CON LA LETRA Z", question: "Participio del verbo zumbar."} ]


// Variables organización partida:
let options = [];
let rosco = [];
let respondidas = 0;
let pregunta='';
let totalTime = 300;
let letraCentral = 'A';
let ronda = 0;
let playerAnswer = ''

//variables marcador
let aciertosJs = 0;
let erroresJs = 0;
let respuesta = '';
let aciertosString = '';
let erroresString = '';


//variables ranquing
let now = new Date(); 
let dia = now.toLocaleDateString();
let nombrePersona = sessionStorage.getItem('nombre');
let listadoRanking = '';
let todoListadoRanking = '';

let clasificacion = JSON.parse(sessionStorage.getItem('clasificacion'));




// Listeners:

    //rellotge:
    window.onload = updateClock;

    //teclat:
    window.onkeydown = presionarTecla;


    //input resposta:
    answer.addEventListener ('input',  function(e){
    playerAnswer = e.target.value;
    });

    //pasapalabra:
    pasapalabra.addEventListener('click', passar);

    //comprobar resposta:
    comprobar.addEventListener('click', revisar);

    //abandonar partida
    abandonar.addEventListener('click', function(){

        let salir = confirm ('Estas seguro de abandonar la partida?')
        if (salir){
            window.open('../html/pasapalabra.html?','_self')
        }
    });

//Empezar juego:
gameQuestions();
seleccionar(ronda);




// FUNCIONES:

// Letras teclado:
function presionarTecla (e){
    let teclaIntro = e.keyCode;

    if(teclaIntro == 13){
        if (playerAnswer === ''){
            passar();
        } else{
            revisar();
        }
    }
}    


//cuenta atras:
function updateClock() {
    tiempo.innerHTML = totalTime;
    if(totalTime==0){
        podium();
        sessionStorage.setItem ('ranking', todoListadoRanking);
        window.open('../final.html','_self')
    }else if(totalTime<11){
        if(totalTime % 2 === 0){
            divTiempo.classList.remove('finalTiempo2')
            divTiempo.classList.add('finalTiempo')
        } else {
            divTiempo.classList.remove('finalTiempo')
            divTiempo.classList.add('finalTiempo2')
        }
        totalTime--;
        setTimeout("updateClock()",1000);
    }else{
        totalTime--;
        setTimeout("updateClock()",1000);
    }
};

// Selección preguntas rosco:
function gameQuestions (){
    rosco = [];

    options = [questions1, questions2, questions3, questions4];

    min = 0;
    max = options.length-1;

    seleccionRosco = Math.floor(Math.random() * (max-min+1))+ min;

    for (let i=0; i<27;i++){
      rosco.push(options [seleccionRosco][i]);
    }
    return rosco;
};


// seleccionar letra rosco i canviar pregunta:
function seleccionar(i){
    //color lletra rosco:
    letraRosco[i].classList.add ('seleccion')
    //lletra central:
    letraCentral= rosco[i].letter
    letter.textContent = letraCentral.toUpperCase();
    // titulo pregunta:
    primeraLetra = rosco[i].firstLetter;
    firstLetter.textContent = primeraLetra;
    //pregunta:
    pregunta = rosco[i].question
    question.textContent = pregunta;
}

// deseleccionar lletra rosco:
function borrarSeleccion(i){
    letraRosco[i].classList.remove ('seleccion')
}

//funció netejar input resposta:
function limpiarRespuesta (){
    answer.value=''
}

//funcio revisar resposta jugador:
function revisar(){

        respuesta = removeAccents (playerAnswer)
        respuesta = respuesta.toLowerCase();
            //respuesta cierta
            if (respuesta === null||respuesta===''){
                passar();

            } else if (respuesta === rosco[ronda].answer){
                borrarSeleccion(ronda)
                letraRosco[ronda].classList.add ('acierto')
                rosco[ronda].status = 2;
                mostrarBe ('Correcto!')                
                respondidas++
                aciertosJs++
                deshabilitar()
                ronda++
                playerAnswer = ''
                limpiarRespuesta()
                analizarRonda();
                estat();
                seleccionar(ronda);
              
            //resposta incorrecte:   
            } else {
                borrarSeleccion(ronda)
                letraRosco[ronda].classList.add ('fallo')
                rosco[ronda].status = 1;
                mostrarError ('No. La respuesta era '+ rosco[ronda].answer +'. Tu has contestado: ' + playerAnswer)
                respondidas++
                erroresJs++
                deshabilitar()
                ronda++
                playerAnswer = ''
                limpiarRespuesta();
                analizarRonda();
                estat();
                seleccionar(ronda);
            }
        actualizarMarcador();

    return ronda, respuesta, aciertosJs, erroresJs, respondidas, playerAnswer;
}


//funció pasapalabra:
function passar (){
    borrarSeleccion(ronda); 
    ronda++
    playerAnswer = ''
    limpiarRespuesta();
    analizarRonda()
    estat()
    seleccionar(ronda);
    return ronda
}


// Eliminar tildes de la respuesta:
function removeAccents (str){
return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// mostrar mensaje error en solucion:
function mostrarError(aviso){
    const error = document.createElement ('P');
    error.textContent = aviso;
    error.classList.add ('mal')

    resultat.appendChild (error);
    
    setTimeout (()=> {
        error.remove();
    }, 4000);
}

//mostrar mensaje de correcto a la respuesta:
function mostrarBe(aviso){
    const be = document.createElement ('P');
    be.textContent = aviso;
    be.classList.add ('be')

    resultat.appendChild (be);
    
    setTimeout (()=> {
        be.remove();
    }, 4000);
}

//actualizar marcador:
function actualizarMarcador(){
    aciertosString = aciertosJs.toString();
    erroresString = erroresJs.toString();

    aciertos.textContent = aciertosString;
    errores.textContent = erroresString;
}

// analizar respuestas contestadas:
function estat (){
    if (respondidas < rosco.length){
        while (rosco[ronda].status !== 0){ 
             ronda++
             analizarRonda()
         }
         return ronda;
    } else {
        setTimeout (()=> {
            podium();
            sessionStorage.setItem ('ranking', todoListadoRanking);
            window.open('../final.html','_self')
        }, 1500);
    }
}

// Tornar a començar el rosco:
function analizarRonda (){
    if (ronda === rosco.length){
        ronda = 0;
    }
    return ronda;
}

// deshabilitar boton pasapalabra cuando solo queda una:
function deshabilitar(){
    if (respondidas+1 === rosco.length){
        pasapalabra.disabled = true;
        pasapalabra.classList.add('deshabilitar')
    } else{
        pasapalabra.disabled = false;
    }
}

// Clasificación y ranking:
function podium (){
    todoListadoRanking = ''; 
    let nuevoRanking = {
        nombre: nombrePersona,
        aciertos: aciertosJs,
        errores: erroresJs,
        data: dia,
    } 
    clasificacion.push(nuevoRanking);

    sessionStorage.setItem ('clasificacion', JSON.stringify(clasificacion))
  
    clasificacion.sort(function(a, b) {
        return (b.aciertos - a.aciertos);
    });
    for (let i = 0; i < clasificacion.length; i++){
        let ranking = i + 1
        listadoRanking = ( ranking +' - '+ clasificacion [i].nombre +' ha anotado ' + clasificacion [i].aciertos + ' aciertos y ' + clasificacion[i].errores + ' errores. Puntación realizada el '+ clasificacion [i].data + '.');

    todoListadoRanking  = todoListadoRanking + listadoRanking + '\n';
}
return todoListadoRanking ;
}











