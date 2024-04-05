  const skjema = document.getElementById('skjema');
  const melding = document.getElementById('melding');
  const takkMelding = document.getElementById('takk');
  
  skjema.addEventListener('submit', (event) => {
    event.preventDefault();
    // Sjekk om skjemaet er gyldig
    if (skjema.checkValidity()) {
      // Skriv inn koden som sender skjemaet til serveren her
      // Skjul skjema
      skjema.style.display = 'none';
     // Skjul melding
     melding.style.display = 'none';
     // Vis ny melding
      // Vis takkemeldingen
      //skjema.style.display = 'none';
      takkMelding.style.display = 'block';
    }
  });