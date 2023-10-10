class coche{
    constructor(marca, modelo, precio, anno, url){
        this._marca=marca;
        this._modelo=modelo;
        this._precio=precio;
        this._anno=anno;
        this._url=url;
    }

    get marcaCoche(){
        return this._marca;
    };

    get modeloCoche(){
        return this._modelo;
    };

    get precioCoche(){
        return this._precio;
    }

    get annoCoche(){
        return this._anno;
    }

    get urlCoche(){
        return this._url;
    }
}

function generarUrlImagen(modelo) {
    return `./imagenes/${modelo}.jpg`;
  }

let listaCoches =[
    new coche("Renault", "Megane", 31000, "2020", generarUrlImagen("megane")),
    new coche("Renault", "Clio", 16000, "2022", generarUrlImagen("clio")),
    new coche("Renault", "Laguna", 15000, "2012", generarUrlImagen("laguna")),
    new coche("Renault", "Talisman", 25000, "2021", generarUrlImagen("talisman")),
    new coche("Renault", "Arkana", 29000, "2023", generarUrlImagen("arkana"))
]

const coches=(lista)=>{
    let contador=0+1;
    lista.forEach(elemento => {
       console.log(`Marca: ${elemento.marcaCoche}, Modelo: ${elemento.modeloCoche}, 
        Precio: ${elemento.precioCoche}, Año: ${elemento.annoCoche}, Foto: ${elemento.urlCoche} <br>`);
        contador=contador+1;
    });
}

const tablaCoches = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Añadir encabezados a la tabla
const tr = document.createElement("tr");
tr.innerHTML = `
  <th>Marca</th>
  <th>Modelo</th>
  <th>Precio</th>
  <th>Año</th>
  <th>Imagen</th>
`;
thead.appendChild(tr);

// Añadir filas a la tabla
for (const coche of listaCoches) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${coche.marcaCoche}</td>
    <td>${coche.modeloCoche}</td>
    <td>${coche.precioCoche}</td>
    <td>${coche.annoCoche}</td>
    <td><img src="${coche.urlCoche}" alt="${coche.modelo}" width="100" height="50"></td>
  `;
  tbody.appendChild(tr);
}

// Añadir la tabla al DOM
tablaCoches.appendChild(thead);
tablaCoches.appendChild(tbody);
document.body.appendChild(tablaCoches);

tablaCoches.style.borderStyle = "solid";
