const recursive = true; // rekursif aktif //
function cariPlayer(req, res) {
  const request = req.body;
  //isi request nama, posisi, umur, ca ,pa, special atribut, reputasi, club, harga, gaji, negara//
  if (recursive) {
    recursive(request);
  } else {
    iterative(request);
  }
}

function recursive(data) {
  var hasilPencarian;
  if (data.namaTerisi) {
  }
  if (data.posisiTerisi) {
  }
  if (data.umurTerisi) {
  }
  if (data.caTerisi) {
  }
  if (data.paTerisi) {
  }
  if (data.specialTerisi) {
  }
  if (data.repTerisi) {
  }
  if (data.clubTerisi) {
  }
  if (data.hargaTerisi) {
  }
  if (data.gajiTerisi) {
  }
  if (data.negaraTerisi) {
  }
  return hasilPencarian;
}

function iterative(data) {
  var hasilPencarian;
  if (data.namaTerisi) {
  }
  if (data.posisiTerisi) {
  }
  if (data.umurTerisi) {
  }
  if (data.caTerisi) {
  }
  if (data.paTerisi) {
  }
  if (data.specialTerisi) {
  }
  if (data.repTerisi) {
  }
  if (data.clubTerisi) {
  }
  if (data.hargaTerisi) {
  }
  if (data.gajiTerisi) {
  }
  if (data.negaraTerisi) {
  }
  return hasilPencarian;
}
module.exports = { cariPlayer };
