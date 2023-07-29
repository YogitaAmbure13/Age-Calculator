function calculateAge() {
    var birthYear = parseInt(document.getElementById("birthYear").value);
    var birthMonth = parseInt(document.getElementById("birthMonth").value);
    var birthDay = parseInt(document.getElementById("birthDay").value);
    var currentYear = parseInt(document.getElementById("currentYear").value);
    var currentMonth = parseInt(document.getElementById("currentMonth").value);
    var currentDay = parseInt(document.getElementById("currentDay").value);
  
    var age = currentYear - birthYear;
  
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    document.getElementById("result").textContent = "Your age is: " + age;
  }
  