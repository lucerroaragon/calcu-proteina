// Crea una instancia de la clase Cal_proteina
const calculadora = new Cal_proteina();

// Función para manejar el cálculo de proteínas y actualizar la UI
function calcularProteina() {
  const pesoInput = document.getElementById("peso");
  const peso = parseFloat(pesoInput.value);

  if (isNaN(peso)) {
    alert("Por favor, ingresa un peso válido.");
    return;
  }

  // Realiza los cálculos
  const gramosSedentario = calculadora.Sedentario(peso);
  const gramosPocoActivo = calculadora.Poco_activo(peso);
  const gramosActivo = calculadora.Activo(peso);
  const gramosMuyActivo = calculadora.Muy_activo(peso);

  // Actualiza los elementos de la página con los resultados
  document.getElementById("sedentario").innerText = gramosSedentario.toFixed(1);
  document.getElementById("pocoActivo").innerText = gramosPocoActivo.toFixed(1);
  document.getElementById("activo").innerText = gramosActivo.toFixed(1);
  document.getElementById("muyActivo").innerText = gramosMuyActivo.toFixed(1);
}

// Maneja el evento de clic del botón
document.querySelector("button").addEventListener("click", calcularProteina);

document.getElementById("boton-news").addEventListener("click", function () {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  // const label = document.querySelector('news');
  const privacyPolicy = document.getElementById("privacy-policy");

  if (email) {
 
    // Oculta el input y el botón, y muestra el mensaje de éxito
    emailInput.style.display = "none";
    this.style.display = "none";
   // label.style.display = 'none';
    privacyPolicy.style.display = "none";
    document.getElementById("success-message").style.display = "block";
  } else {
    alert("Por favor, ingresa un email válido.");
  }
});
