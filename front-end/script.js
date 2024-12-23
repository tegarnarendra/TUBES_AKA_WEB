  
function cariData(){
  const nama = document.getElementById("name-filter").value
  const namaAktif = (nama != "")
  const umur = document.getElementById("age-filter").value
  const umurAktif = (umur != "")
  const nationality = document.getElementById("nationality-filter").value
  const nationalityAktif = (nationality != "") 
  const ca = document.getElementById("ca-filter").value
  const caAktif = (ca != "") 
  const pa = document.getElementById("pa-filter").value
  const paAktif = (pa != "")
  const harga = document.getElementById("value-filter").value
  const hargaAktif = (harga != "")
  const gaji = document.getElementById("wage-filter").value
  const gajiAktif = (gaji != "")
  const reputation = document.getElementById("reputation-filter").value
  const reputationAktif = (reputation != "")
  const position = document.getElementById("position-filter").value
  const positionAktif = (position != "")
  const speciality = document.getElementById("speciality-filter").value
  const specialityAktif = (speciality != "")

  const filter = {
    "nama": nama,
    "namaTerisi" : namaAktif,
    "umur": umur,
    "umurTerisi" : umurAktif,
    "posisi": position,
    "posisiTerisi" : positionAktif,
    "current": ca,
    "caTerisi" : caAktif,
    "potential": pa,
    "paTerisi" : paAktif, 
    "specialAtribut": speciality,
    "specialTerisi" : specialityAktif,
    "reputation": reputation,
    "repTerisi" : reputationAktif,
    "nationality": nationality,
    "negaraTerisi" : nationalityAktif,
    "gaji": gaji,
    "gajiTerisi": gajiAktif, 
    "harga": harga,
    "hargaTerisi" : hargaAktif
    }
    console.log(filter)
  fetch('./api/cariPlayer', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(filter)
  })
  .then(response => response.json())
  .then(data => {
      const playerData = document.getElementById('player-data');
      playerData.innerHTML = '';
      console.log(data)
      // Render data pemain ke tabel
      data.forEach(player => {
          const row = document.createElement('tr');
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
          playerData.appendChild(row);
      });
  })
}