const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];





const timer = document.querySelector('.countDown')
let skippedQuestions = [];
const end = document.querySelector('.endButton');
let progressBar = document.querySelector('.progressBar');
const respuesta = document.querySelector('.respuesta'); 
const letters = document.querySelectorAll('.letters');
const submit = document.querySelector('.sendButton'); 
let actualQuestion = document.querySelector('.pregunta'); 
let message = document.querySelector('.message');
const nextButton = document.querySelector('.nextButton')
const startButton = document.querySelector('.startButton'); 
startButton.addEventListener('click', empezarJuego); 

let num = 0
let correctCounter = 0;
let timeleft = 99;

function temporizador(){
  let downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      message.innerHTML = "Su tiempo ha finalizado!, ha terminado el juego."
      clearInterval(downloadTimer);
    } else {
      timer.innerHTML = '&#x1F55B;' + timeleft;
    }
    timeleft -= 1;
  }, 1000);
};


function empezarJuego() {
    actualQuestion.innerHTML = questions[num].question; 
    startButton.style.display = 'none';
    temporizador()
}

nextButton.addEventListener('click', function next() {
  message.innerHTML = "La dejamos para el siguiente turno!"
  letters[num].style.backgroundColor = 'orange';
  questions[num].status = 3
  skippedQuestions.push(questions[num])
  num++
  empezarJuego()
})

submit.addEventListener('click', function check (){ 
  let currentAnswer = questions[num].answer; 
  if (respuesta.value.toLowerCase() === currentAnswer.toLowerCase()){ 
    letters[num].style.backgroundColor = 'green';
    respuesta.value = ""
    message.innerHTML = "Correcto!"
    num++
    correctCounter++
    progressBar.value += 1;
    empezarJuego()
  } else {
    letters[num].style.backgroundColor = 'red';
    message.innerHTML = "Incorrecto!" + ", la respuesta era: " + currentAnswer
    num++
    respuesta.value = ""
    empezarJuego()
  }
}
);

end.addEventListener('click', function end (){
  actualQuestion.innerHTML = "";
  timer.style.display = 'none';
  message.innerHTML = "De acuerdo, ha finalizado el juego /:"
})

function playSkippeds () {
   let num2 = 0;
   actualQuestion.innerHTML = skippedQuestions[num].question
   submit.addEventListener('click', function checkSkippeds(){
  currentAnswer = skippedQuestions[num].question
  if (respuesta.value.toLowerCase() === currentAnswer.toLowerCase()){
    progressBar.value += 1;
    letters[num].style.backgroundColor = 'green';
    respuesta.value = ""
    message.innerHTML = "Correcto!"
    num2++
    correctCounter++
  } else {
    letters[num].style.backgroundColor = 'red';
    message.innerHTML = "Incorrecto!" + ", la respuesta era: " + currentAnswer
    num2++
    respuesta.value = ""
  }
   })
}

if (questions[num] === 27){
  if (skippedQuestions > 0) {
    playSkippeds()
  } 
} else if (correctCounter === 27) {
  message.innerHTML = "Enhorabuena!, has logrado acertar todas las palabras."
}