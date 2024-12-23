function recursiveNama(requests,data,n, result = []){
    if(n >= 0){
        if(requests.nama == data[n].nama){
            result.push(data[n])
        }
        return recursiveNama(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursiveUmur(requests,data,n, result = []){
    if(n >= 0){
        if(requests.umur == data[n].umur){
            result.push(data[n])
        }
        return recursiveUmur(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursivePosisi(requests,data,n, result = []){
    if(n >= 0){
        if(requests.posisi == data[n].posisi){
            result.push(data[n])
        }
        return recursivePosisi(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursiveCAbility(requests,data,n, result=[]){
    if(n >= 0){
        if(requests.current == data[n].ca){
            result.push(data[n])
        }
        return recursiveCAbility(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursivePAbility(requests,data,n, result = []){
    if(n >= 0){
        if(requests.potential == data[n].pa){
            result.push(data[n])
        }
        return recursivePAbility(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursiveSpecial(requests,data,n, result = []){
    if(n >= 0){
        if(requests.special == data[n].special){
            result.push(data[n])
        }
        return recursiveSpecial(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursiveReputasi(requests,data,n, result = []){
    if(n >= 0){
        if(requests.reputasi == data[n].reputation){
            result.push(data[n])
        }
        return recursiveReputasi(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursiveNationality(requests,data,n, result = []){
    if(n >= 0){
        if(requests.nationality == data[n].nationality){
            result.push(data[n])
        }
        return recursiveNationality(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursiveGaji(requests,data,n, result = []){
    if(n >= 0){
        if(requests.gaji == data[n].gaji){
            result.push(data[n])
        }
        return recursiveGaji(requests,data,n-1, result)
    }else{
        return result;
    }
}

function recursiveHarga(requests,data,n, result = []){
    if(n >= 0){
        if(requests.harga == data[n].harga){
            result.push(data[n])
        }
        return recursiveHarga(requests,data,n-1, result)
    }else{
        return result;
    }
}

module.exports = {recursiveNama, recursiveUmur, recursivePosisi, recursiveCAbility, recursivePAbility, recursiveSpecial, recursiveReputasi, recursiveHarga, recursiveGaji, recursiveNationality}