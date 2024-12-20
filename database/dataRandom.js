const fs = require("fs");

function randomData(maxCount) {
  const dataPlayer = require("./namaPlayer.json"); // Mengambil daftar nama pemain
  const dataClub = require("./club.json"); // Mengambil nama Club
  const specialAtribut = [
    "Dribling",
    "Passing",
    "Shooting",
    "Tackling",
    "Goalkeeping",
    "Sweeper Keeper",
    "Crossing",
    "Set Piece",
    "Aerial",
    " ",
  ]; // Atribut spesial
  const nationality = [
    "Indonesia",
    "Belanda",
    "Jepang",
    "Ciseeng",
    "Jerman",
    "Inggris",
    "Thailand",
    "Malaysia",
    "Denmark",
    "Italia",
    "Korea",
    "Serbia",
    "Russia",
  ]; // Kebangsaan
  const reputation = [
    "Star",
    "Wonderkid",
    "Hidden Gem",
    "Future Prospect",
    "World-Class",
    "Cult Hero",
  ]; // Reputasi
  const position = ["Goalkeeper", "Defender", "Midfielder", "Attacker"]; // Posisi pemain

  const arrayData = [];

  for (let count = 0; count < maxCount; count++) {
    const randomName =
      dataPlayer[Math.floor(Math.random() * dataPlayer.length)];
    const randomAge = Math.floor(Math.random() * 25) + 16; // Umur 16-40
    const randomCA = Math.floor(Math.random() * 6) + 75; // CA 75-80
    const randomPA = Math.floor(Math.random() * 6) + 90; // PA 90-95
    const randomSalary = (Math.floor(Math.random() * 5) + 1) * 100000; // Harga 100000 - 500000
    const randomSpecial =
      specialAtribut[Math.floor(Math.random() * specialAtribut.length)];
    const randomNation =
      nationality[Math.floor(Math.random() * nationality.length)];
    const randomReputation =
      reputation[Math.floor(Math.random() * reputation.length)];
    const randomPosition =
      position[Math.floor(Math.random() * position.length)];
    const randomClub = dataClub[Math.floor(Math.random() * dataClub.length)];

    const data = {
      nama: randomName,
      umur: randomAge,
      club: randomClub,
      posisi: randomPosition,
      ca: randomCA,
      pa: randomPA,
      specialAtribut: randomSpecial,
      reputation: randomReputation,
      nationality: randomNation,
      gaji: randomSalary - 10000,
      harga: randomSalary,
    };

    arrayData.push(data); // Tambahkan data ke array
  }

  return arrayData;
}

// Membatasi hingga 10.000 data
const randomDataArray = randomData(10000);

fs.writeFile(
  "./back-end/Data/pemain.json",
  JSON.stringify(randomDataArray, null, 2), // Tambahkan pemformatan JSON agar lebih rapi
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Data pemain berhasil disimpan!");
  }
);

console.log(randomDataArray.length);
