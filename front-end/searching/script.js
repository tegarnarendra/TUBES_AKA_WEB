document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("player-data");

    // Fetch data from JSON file
    fetch("back-end/Data/pemain.json")
      .then((response) => response.json())
      .then((players) => {
        players.forEach((player) => {
          // Create a new row
          const row = document.createElement("tr");

          // Add data to the row
          row.innerHTML = `
            <td>${player.nama}</td>
            <td>${player.posisi}</td>
            <td>${player.umur}</td>
            <td>${player.club}</td>
            <td>${player.ca}</td>
            <td>${player.pa}</td>
            <td>${player.specialAtribut}</td>
            <td>${player.reputation}</td>
            <td>${player.harga}</td>
            <td>${player.gaji}</td>
            <td>${player.nationality}</td>
          `;

          // Append the row to the table
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error loading JSON data:", error));
  });