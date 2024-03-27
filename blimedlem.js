  const skjema = document.getElementById('skjema');
  const takkMelding = document.getElementById('takk');
  
  skjema.addEventListener('submit', (event) => {
    event.preventDefault();
    // Sjekk om skjemaet er gyldig
    if (skjema.checkValidity()) {
      // Skriv inn koden som sender skjemaet til serveren her
      
      // Vis takkemeldingen
      //skjema.style.display = 'none';
      takkMelding.style.display = 'block';
    }
  });