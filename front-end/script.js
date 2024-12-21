// Deklarasi global untuk playersData
let playersData = []; 

document.addEventListener('DOMContentLoaded', () => {
    // Memuat data JSON
    async function loadPlayerData() {
        const response = await fetch('pemain.json'); // Sesuaikan jalur JSON
        playersData = await response.json();
        displayPlayers(playersData);
    }

    // Fungsi untuk menampilkan data pemain
    function displayPlayers(players) {
        const playerTable = document.getElementById('player-data');
        playerTable.innerHTML = ''; // Bersihkan tabel

        players.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="border px-4 py-2">${player.nama}</td>
                <td class="border px-4 py-2">${player.posisi}</td>
                <td class="border px-4 py-2">${player.umur}</td>
                <td class="border px-4 py-2">${player.club}</td>
                <td class="border px-4 py-2">${player.ca}</td>
                <td class="border px-4 py-2">${player.pa}</td>
                <td class="border px-4 py-2">${player.specialAtribut}</td>
                <td class="border px-4 py-2">${player.reputation}</td>
                <td class="border px-4 py-2">${player.harga}</td>
                <td class="border px-4 py-2">${player.gaji}</td>
                <td class="border px-4 py-2">${player.nationality}</td>
            `;
            playerTable.appendChild(row);
        });
    }

    // Menangani pencarian
    document.getElementById('search-btn').addEventListener('click', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredPlayers = [];

        // Menggunakan for dan if untuk mencari pemain
        for (let i = 0; i < playersData.length; i++) {
            const player = playersData[i];
            if (player.nama.toLowerCase().includes(searchTerm) || player.club.toLowerCase().includes(searchTerm)) {
                filteredPlayers.push(player);
            }
        }

        displayPlayers(filteredPlayers);
    });

    // Panggil fungsi loadPlayerData saat halaman dimuat
    loadPlayerData();
});