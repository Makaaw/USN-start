var today = new Date(2024, 2, 21); // Månedene er null-baserte, så 2 tilsvarer mars
console.log("Dagens dato er: ", today.toLocaleDateString());


//yearSelect.value = today.getFullYear().toString();
year = today.getFullYear();
month = getMonthName(parseInt((today.getMonth() + 1)));//.toString().padStart(2, '0')));
day = parseInt(today.getDate().toString().padStart(2, '0'));
//daySelect.value = today.getDay();

function getMonthName(month) {
    const monthNames = [
      "Januar", "Februar", "Mars", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Desember"
    ];
    return monthNames[month];
  }

console.log(year);
console.log(month);
console.log(day);