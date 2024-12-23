const dataRuntime = require('./runtime.json')
var dataRekursif = []
var dataIteratif = []

for(i = 0; i < dataRuntime.length; i++){
    if(dataRuntime[i].algoritma == "Recursive"){
        dataRekursif.push(dataRuntime[i])
    }else if(dataRuntime[i].algoritma == "Iterative"){
        dataIteratif.push(dataRuntime[i])
    }
}
console.log("Runtime Rekursif")
for(j = 0; j < dataRekursif.length; j++){
    console.log((dataRekursif[j].runtime.microseconds + (dataRekursif[j].runtime.milliseconds*1000))/1000)
}
console.log("Runtime Iteratif")
for(k = 0; k < dataIteratif.length; k++){
    console.log((dataIteratif[k].runtime.microseconds + (dataIteratif[k].runtime.milliseconds*1000))/1000)
}