
const lugares = [
  {
    nombre: "Huacas del Sol y la Luna",
    categoria: "Arqueología",
    ubicacion: "Distrito de Moche, Trujillo",
    descripcion: "Complejo arqueológico de la cultura Moche. Destaca por sus construcciones ceremoniales y los murales de colores que muestran aspectos de su sociedad y creencias.",
    recomendacion: "Visitar el museo y conocer los murales arqueológicos."
  },
  {
    nombre: "Chan Chan",
    categoria: "Patrimonio histórico",
    ubicacion: "Distrito de Huanchaco, Trujillo",
    descripcion: "Antigua ciudad de adobe construida por la cultura Chimú. Es uno de los conjuntos arqueológicos más importantes del Perú y forma parte del Patrimonio Mundial de la UNESCO.",
    recomendacion: "Recorrer el conjunto arqueológico y conocer sus relieves."
  },
  {
    nombre: "Huanchaco",
    categoria: "Playa y cultura",
    ubicacion: "Distrito de Huanchaco, Trujillo",
    descripcion: "Balneario conocido por sus caballitos de totora, embarcaciones tradicionales utilizadas por los pescadores desde tiempos antiguos.",
    recomendacion: "Conocer el muelle y observar la tradición de los pescadores."
  },
  {
    nombre: "Complejo Arqueológico El Brujo",
    categoria: "Arqueología",
    ubicacion: "Distrito de Magdalena de Cao, provincia de Ascope",
    descripcion: "Complejo arqueológico relacionado con la cultura Moche. Allí se encuentra la Huaca Cao Viejo, conocida por el descubrimiento de la Señora de Cao.",
    recomendacion: "Visitar el museo y conocer la historia de la Señora de Cao."
  },
  {
    nombre: "Huaca Arco Iris",
    categoria: "Arqueología",
    ubicacion: "Distrito de La Esperanza, Trujillo",
    descripcion: "También conocida como Huaca del Dragón. Es una construcción ceremonial de adobe asociada a la cultura Chimú y destaca por sus relieves decorativos.",
    recomendacion: "Observar sus diseños y conocer su importancia histórica."
  },
  {
    nombre: "Plaza de Armas de Trujillo",
    categoria: "Cultura y ciudad",
    ubicacion: "Centro histórico de Trujillo",
    descripcion: "Es uno de los espacios más representativos de la ciudad. En ella se encuentra el Monumento a la Libertad, relacionado con la independencia de Trujillo.",
    recomendacion: "Recorrer la plaza y apreciar los edificios históricos."
  },
  {
    nombre: "Casa Urquiaga",
    categoria: "Museo y cultura",
    ubicacion: "Centro histórico de Trujillo",
    descripcion: "Casona histórica ubicada cerca de la Plaza de Armas. Conserva ambientes y objetos que permiten conocer parte de la historia de Trujillo.",
    recomendacion: "Consultar sus horarios de visita antes de acudir."
  }
];

const seccion = document.querySelector(".lugares");

if (seccion) {
  seccion.innerHTML = `
    <h2>Descubre Trujillo</h2>
    <p>Conoce lugares históricos, culturales y turísticos.</p>
    <div id="lista-lugares"></div>
  `;

  const lista = document.getElementById("lista-lugares");

  lugares.forEach((lugar, indice) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "lugar";

    tarjeta.innerHTML = `
      <p>${lugar.categoria}</p>
      <h3>${lugar.nombre}</h3>
      <p><strong>Ubicación:</strong> ${lugar.ubicacion}</p>
      <button class="boton-info" aria-expanded="false"
        aria-controls="detalle-${indice}">
        Ver información
      </button>
      <div id="detalle-${indice}" hidden>
        <p>${lugar.descripcion}</p>
        <p><strong>Recomendación:</strong> ${lugar.recomendacion}</p>
      </div>
    `;

    const boton = tarjeta.querySelector("button");
    const detalle = tarjeta.querySelector("div");

    boton.addEventListener("click", () => {
      const abierto = !detalle.hidden;
      detalle.hidden = abierto;
      boton.textContent = abierto ? "Ver información" : "Ver menos";
      boton.setAttribute("aria-expanded", String(!abierto));
    });

    lista.appendChild(tarjeta);
  });
}
