document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
  
    const interests = [];
    document.querySelectorAll('input[name="interests"]:checked').forEach((checkbox) => {
      interests.push(checkbox.value);
    });
  
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const comment = document.getElementById("comment").value;
    const country = document.getElementById("country").value;
  
    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
  
    const cells = [firstname, lastname, email, interests.join(", "), gender, comment, country];
    cells.forEach((data) => {
      const cell = newRow.insertCell();
      cell.textContent = data;
    });
  
    document.getElementById("userForm").reset();
    alert("Form submitted successfully!");
  });
  
  function sortTable(columnIndex) {
    const table = document.getElementById("dataTable");
    const rows = Array.from(table.rows).slice(1); // Exclude header
  
    let sorted = false;
    let ascending = true;
  
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < rows.length - 1; i++) {
        const a = rows[i].cells[columnIndex].textContent.toLowerCase();
        const b = rows[i + 1].cells[columnIndex].textContent.toLowerCase();
  
        const shouldSwitch = ascending ? a > b : a < b;
        if (shouldSwitch) {
          [rows[i].innerHTML, rows[i + 1].innerHTML] = [rows[i + 1].innerHTML, rows[i].innerHTML];
          sorted = false;
        }
      }
      if (sorted && ascending) {
        ascending = false;
        sorted = false;
      }
    }
  }
  
  