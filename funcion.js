document.addEventListener("DOMContentLoaded", () => {
// CALCULADORA DE EDAD
  const fecha = document.getElementById("fecha");
  const botonEdad = fecha.parentElement.querySelector("button");
  const resultadoEdad = fecha.parentElement.querySelector(".resultado");

  botonEdad.addEventListener("click", () => {
    if (fecha.value === "") {
      resultadoEdad.textContent = "Selecciona tu fecha de nacimiento.";
      return;
    }

    const nacimiento = new Date(fecha.value + "T00:00:00");
    const hoy = new Date();

    if (nacimiento > hoy) {
      resultadoEdad.textContent = "La fecha no puede ser futura.";
      return;
    }

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    if (
      hoy.getMonth() < nacimiento.getMonth() ||
      (hoy.getMonth() === nacimiento.getMonth() &&
       hoy.getDate() < nacimiento.getDate())
    ) {
      edad--;
    }

    resultadoEdad.textContent = "Tu edad es: " + edad + " años.";
  });


  // LISTA DE TAREAS
  const tarea = document.getElementById("tarea");
  const botonAgregar = tarea.parentElement.querySelector("button");
  const lista = tarea.parentElement.querySelector("ul");

  function agregarEventosEliminar(boton) {
    boton.addEventListener("click", () => {
      boton.parentElement.remove();
    });
  }

  document.querySelectorAll(".eliminar").forEach(agregarEventosEliminar);

  botonAgregar.addEventListener("click", () => {
    const texto = tarea.value.trim();

    if (texto === "") {
      alert("Escribe una tarea primero.");
      return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(texto + " "));

    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "eliminar";

    agregarEventosEliminar(botonEliminar);

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    tarea.value = "";
  });


  // CONVERSOR DE TEMPERATURA
  const temperatura = document.getElementById("temperatura");
  const conversion = document.getElementById("conversion");
  const botonConvertir = temperatura.parentElement.querySelector("button");
  const resultadoTemperatura =
    botonConvertir.parentElement.querySelector(".resultado");

  botonConvertir.addEventListener("click", () => {
    if (temperatura.value.trim() === "") {
      resultadoTemperatura.textContent = "Ingresa una temperatura.";
      return;
    }

    const valor = Number(temperatura.value);
    let resultado;

    if (conversion.value === "fc") {
      resultado = (valor - 32) * 5 / 9;

      resultadoTemperatura.textContent =
        valor + " °F = " + resultado.toFixed(2) + " °C";
    } else {
      resultado = (valor * 9 / 5) + 32;

      resultadoTemperatura.textContent =
        valor + " °C = " + resultado.toFixed(2) + " °F";
    }
  });

});