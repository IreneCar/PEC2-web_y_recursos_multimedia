// esto es para comprobar que se ha linkeado bien a larchivo html y que funciona, como no afecta a la página web lo dejo sin comentar.
let n = "world";
console.log(`Hello ${n}`);

const button = document.getElementById("button");

button.addEventListener("click", () => {
  document.getElementById("summary").innerHTML =
    "Si tuviese que elegir una ciudad donde escaparme, sería Florencia. Es una ciudad hermosa, tranquila, llena de color y de arte y aquí voy a mostrarte un poco de todas estas cosas bellas de esta ciudad.";
});
