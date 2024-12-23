const isRecursive = false; // rekursif aktif //
const data = require('./Data/pemain.json')
const iteratif = require('./iterative.js')
const rekursif = require('./recursive.js')
const runtime = require('./Data/reportRuntime.js')
const dataRunningTime = require('./Data/runtime.json')


function cariPlayer(req, res) {
  const request = req.body;
  //isi request nama, posisi, umur, ca ,pa, special atribut, reputasi, club, harga, gaji, negara//
  console.log(req.body)
  res.send(prosesPencarian(request, data));
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

function prosesPencarian(request, data){
  var jumlahData = 10000
  var filteredData = []
  var filteredData2 = []
  var resultData = [] 
  var startRuntime
  if (jumlahData > 5000){
    for(i= 0; i < data.length/2 ; i++){
      filteredData.push(data[i]) 
    }
    for(i = data.length/2; i < data.length; i++){
      filteredData2.push(data[i])
    }
  }else{
    for(i = 0;i < jumlahData;i++){
      filteredData.push(data[i])
    }
  }
  console.log(filteredData.length)
  if(isRecursive == true){
    const dibagi = filteredData2.length
    startRuntime = runtime.timeStart()
    if(dibagi!=0){
      filteredData2 = recursive(request, filteredData2)
    }
    filteredData = recursive(request, filteredData)
    runtime.timeEnd(startRuntime, jumlahData, 'Recursive')
    resultData = filteredData.concat(filteredData2)
  }else{
    const dibagi = filteredData2.length
    startRuntime = runtime.timeStart()
    if(dibagi!=0){
      filteredData2 = iterative(request, filteredData2)
    }
    filteredData = iterative(request, filteredData)
    runtime.timeEnd(startRuntime, jumlahData, 'Iterative')
    resultData = filteredData.concat(filteredData2)
  }
  return resultData
}

function dataRuntime(req, res){
  res.status(200)
  res.send(dataRunningTime)
}

module.exports = { cariPlayer, dataRuntime };
