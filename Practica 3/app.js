class Persona {
  constructor(nombre, apellidos, poblacion, edad, estudios, carnetDeConducir) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.poblacion = poblacion;
    this._edad = null; // Atributo privado
    this._estudios = null; // Atributo privado
    this.carnetDeConducir = carnetDeConducir;
    this.setEdad(edad);
    this.setEstudios(estudios);
  }

  // Setter y getter edad
  setEdad(edad) {
    if (typeof edad === 'number') {
      this._edad = edad;
    } else {
      alert('La edad debe ser un número.');
    }
  }

  getEdad() {
    return this._edad;
  }

  // Setter y getter estuddios
  setEstudios(estudios) {
    if (typeof estudios === 'string') {
      this._estudios = estudios;
    } else {
      alert('Los estudios deben ser una cadena de texto.');
    }
  }

  getEstudios() {
    return this._estudios;
  }
}

//Array personas ordenados por nombre
let p1 = new Persona('Nombre1', 'Apellido1', 'Madrid', 30, 'ASIR', true);
let p2 = new Persona('Nombre2', 'Apellido2', 'Toledo', 28, 'DAW', false);
let p3 = new Persona('Nombre3', 'Apellido3', 'Illescas', 35, 'DAM', true);

let personas = [p1, p2, p3];

personas.sort((a, b) => a.nombre.localeCompare(b.nombre));

//Mapa personas ordenado por DNI
const personasMapa = new Map();
personasMapa.set('0000001', p1);
personasMapa.set('0000002', p2);
personasMapa.set('0000003', p3);

const personasMapaOrdenado = new Map([...personasMapa.entries()].sort());

//Array mostrado en HTML
const contenedor = document.querySelector(".container");

personas.forEach((persona) => {
  const personaElemento = document.createElement("div");
  personaElemento.textContent = `
    Nombre: ${persona.nombre} 
    Apellido: ${persona.apellidos}
    Población: ${persona.poblacion}
    Edad: ${persona.getEdad()}
    Estudios: ${persona.getEstudios()}
    Carnet de conducir: ${persona.carnetDeConducir ? "Sí" : "No"}
    `;
  
    contenedor.appendChild(personaElemento);
});

//Mapa mostrado en HTML
const tablaPersonasMapa = document.createElement("table");
const theadMapa = document.createElement("thead");
const tbodyMapa = document.createElement("tbody");

const trMapa = document.createElement("tr");
trMapa.innerHTML = `
  <th>DNI</th>
  <th>Nombre</th>
  <th>Apellidos</th>
  <th>Población</th>
  <th>Edad</th>
  <th>Estudios</th>
`;
theadMapa.appendChild(trMapa);

for (const [dni, persona] of personasMapaOrdenado) {
  const trMapa = document.createElement("tr");
  trMapa.innerHTML = `
    <td>${dni}</td>
    <td>${persona.nombre}</td>
    <td>${persona.apellidos}</td>
    <td>${persona.poblacion}</td>
    <td>${persona.getEdad()}</td>
    <td>${persona.getEstudios()}</td>
  `;
  tbodyMapa.appendChild(trMapa);
}

tablaPersonasMapa.appendChild(theadMapa);
tablaPersonasMapa.appendChild(tbodyMapa);
contenedor.appendChild(tablaPersonasMapa);

tablaPersonasMapa.style.borderStyle = "solid";