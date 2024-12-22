const isRecursive = true; // rekursif aktif //
const data = require('./Data/pemain.json')
const iteratif = require('./iterative.js')
const rekursif = require('./recursive.js')

function cariPlayer(req, res) {
  const request = req.body;
  const limitedData = data.slice(0, 500);
  //isi request nama, posisi, umur, ca ,pa, special atribut, reputasi, club, harga, gaji, negara//
  if (isRecursive) {
    res.send(recursive(request, limitedData));
  } else {
    res.send(iterative(request, limitedData));
  } 
}

function recursive(request, data) {
  var hasilPencarian = data;
  if (request.namaTerisi) {
    hasilPencarian = rekursif.recursiveNama(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.posisiTerisi) {
    hasilPencarian = rekursif.recursivePosisi(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.umurTerisi) {
    hasilPencarian = rekursif.recursiveUmur(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.caTerisi) {
    hasilPencarian = rekursif.recursiveCAbility(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.paTerisi) {
    hasilPencarian = rekursif.recursivePAbility(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.specialTerisi) {
    hasilPencarian = rekursif.recursiveSpecial(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.repTerisi) {
    hasilPencarian = rekursif.recursiveReputasi(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.hargaTerisi) {
    hasilPencarian = rekursif.recursiveHarga(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.gajiTerisi) {
    hasilPencarian = rekursif.recursiveGaji(request, hasilPencarian, hasilPencarian.length-1)
  }
  if (request.negaraTerisi) {
    hasilPencarian = rekursif.recursiveNationality(request, hasilPencarian, hasilPencarian.length-1)
  }
  return hasilPencarian;
}

function iterative(request, data) {
  var hasilPencarian = data;
  if (request.namaTerisi) {
    hasilPencarian = iteratif.IterativeNama(request, hasilPencarian)
  }
  if (request.posisiTerisi) {
    hasilPencarian = iteratif.IterativePosisi(request, hasilPencarian)
  }
  if (request.umurTerisi) {
    hasilPencarian = iteratif.IterativeUmur(request, hasilPencarian)
  }
  if (request.caTerisi) {
    hasilPencarian = iteratif.IterativeCAbility(request, hasilPencarian)
  }
  if (request.paTerisi) {
    hasilPencarian = iteratif.IterativePAbility(request, hasilPencarian)
  }
  if (request.specialTerisi) {
    hasilPencarian = iteratif.IterativeSpecial(request, hasilPencarian)
  }
  if (request.repTerisi) {
    hasilPencarian = iteratif.IterativeReputasi(request, hasilPencarian)
  }
  if (request.hargaTerisi) {
    hasilPencarian = iteratif.IterativeHarga(request, hasilPencarian)
  }
  if (request.gajiTerisi) {
    hasilPencarian = iteratif.IterativeGaji(request, hasilPencarian)
  }
  if (request.negaraTerisi) {
    hasilPencarian = iteratif.IterativeNationality(request, hasilPencarian)
  }
  return hasilPencarian;
}
module.exports = { cariPlayer };
