const fs = require("fs");
var arrayData = [];

function randomData(maxCount) {
  const dataPlayer = require("./namaPlayer.json"); // Mengambil daftar nama pemain
  const specialAtribut = ["Dribling", "Passing", "Shooting"]; // Atribut spesial
  const nationality = ["Indonesia", "Belanda", "Jepang", "Ciseeng"]; // Kebangsaan
  const reputation = ["Star", "Wonderkid", "Veteran"]; // Reputasi
  const position = ["Goalkeeper", "Defender", "Midfielder", "Attacker"]; // Posisi pemain

  // Iterasi berdasarkan semua kombinasi data
  for (let m = 0; m < dataPlayer.length; m++) {
    // Iterasi nama pemain
    for (let i = 20; i <= 25; i++) {
      // Umur
      for (let j = 75; j <= 80; j++) {
        // Current Ability (CA)
        for (let k = 90; k <= 95; k++) {
          // Potential Ability (PA)
          for (let l = 100000; l <= 500000; l += 100000) {
            // Harga dan gaji
            for (let n = 0; n < specialAtribut.length; n++) {
              // Atribut spesial
              for (let o = 0; o < nationality.length; o++) {
                // Kebangsaan
                for (let p = 0; p < reputation.length; p++) {
                  // Reputasi
                  for (let q = 0; q < position.length; q++) {
                    // Posisi pemain
                    if (arrayData.length >= maxCount) {
                      return arrayData; // Berhenti jika sudah mencapai jumlah yang diinginkan
                    }

                    let data = {
                      nama: dataPlayer[m],
                      umur: i,
                      posisi: position[q],
                      ca: j,
                      pa: k,
                      specialAtribut: specialAtribut[n],
                      reputation: reputation[p],
                      nationality: nationality[o],
                      gaji: l - 10000,
                      harga: l,
                    };

                    arrayData.push(data); // Tambahkan data ke array
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return arrayData; // Kembalikan array data jika loop selesai
}

// Membatasi hingga 10.000 data
const randomDataArray = randomData(10000);

fs.appendFile(
  "./back-end/Data/pemain.json",
  JSON.stringify(arrayData),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
console.log(randomDataArray.length);
