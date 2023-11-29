document.getElementById('searchButton').addEventListener('click', buscarRaza);

function buscarRaza() {
  const razaInput = document.getElementById('razaInput').value;
  const apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=${razaInput}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayRazaInfo(data);
    })
    .catch(error => {
      console.error("Error", error);
    });
}

function displayRazaInfo(razas) {
  const razaInfoContainer = document.getElementById('razaInfo');
  razaInfoContainer.innerHTML = '';

  if (razas.length === 0) {
    razaInfoContainer.innerHTML = "No se encontró resultado";
    return;
  }

  const raza = razas[0];
  const razaInfo = document.createElement('div');
  razaInfo.innerHTML = `
    <h2>${raza.name}</h2>
    <p><strong>Comportamiento:</strong> ${raza.temperament}</p>
    <p><strong>Expectativa de vida:</strong> ${raza.life_span}</p>
    <p><strong>Grupo:</strong> ${raza.breed_group}</p>
`;

  razaInfoContainer.appendChild(razaInfo);
}