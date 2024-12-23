function IterativeNama(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.nama === data[i].nama){
            hasil.push(data[i])
        }
    } 
    return hasil;
}

function IterativeUmur(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.umur === data[i].umur){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativePosisi(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.position === data[i].posisi){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativeCAbility(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.ca === data[i].ca){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativePAbility(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.pa === data[i].pa){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativeSpecial(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.speciality === data[i].specialAtribut){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativeReputasi(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.reputation === data[i].reputation){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativeNationality(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.nationality === data[i].nationality){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativeGaji(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.wage === data[i].gaji){
            hasil.push(data[i])
        }
    }
    return hasil;
}

function IterativeHarga(requests,data){
    var hasil=[]
    for(let i = 0; i < data.length; i++){
        if(requests.value === data[i].harga){
            hasil.push(data[i])
        }
    }
    return hasil;
}

module.exports = {IterativeNama, IterativeUmur, IterativePosisi, IterativeReputasi, IterativeSpecial, IterativeCAbility, IterativePAbility, IterativeNationality, IterativeGaji, IterativeHarga}