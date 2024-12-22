function recursiveNama(requests,data,n){
    if(n >= 0){
        if(requests.nama == data[n].nama){
            return [...recursiveNama(requests,data,n-1),data[n]]
        }else{
            return recursiveNama(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursiveUmur(requests,data,n){
    if(n >= 0){
        if(requests.umur === data[n].umur){
            return [...recursiveUmur(requests,data,n-1),data[n]]
        }else{
            return recursiveUmur(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursivePosisi(requests,data,n){
    if(n >= 0){
        if(requests.posisi == data[n].posisi){
            return [...recursivePosisi(requests,data,n-1),data[n]]
        }else{
            return recursivePosisi(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursiveCAbility(requests,data,n){
    if(n >= 0){
        if(requests.current == data[n].ca){
            return [...recursiveCAbility(requests,data,n-1),data[n]]
        }else{
            return recursiveCAbility(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursivePAbility(requests,data,n){
    if(n >= 0){
        if(requests.potential == data[n].pa){
            return [...recursivePAbility(requests,data,n-1),data[n]]
        }else{
            return recursivePAbility(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursiveSpecial(requests,data,n){
    if(n >= 0){
        if(requests.special == data[n].specialAtribut){
            return [...recursiveSpecial(requests,data,n-1),data[n]]
        }else{
            return recursiveSpecial(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursiveReputasi(requests,data,n){
    if(n >= 0){
        if(requests.reputasi == data[n].reputation){
            return [...recursiveReputasi(requests,data,n-1),data[n]]
        }else{
            return recursiveReputasi(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursiveNationality(requests,data,n){
    if(n >= 0){
        if(requests.nationality == data[n].nationality){
            return [...recursiveNationality(requests,data,n-1),data[n]]
        }else{
            return recursiveNationality(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursiveGaji(requests,data,n){
    if(n >= 0){
        if(requests.gaji == data[n].gaji){
            return [...recursiveGaji(requests,data,n-1),data[n]]
        }else{
            return recursiveGaji(requests,data,n-1)
        }
    }else{
        return [];
    }
}

function recursiveHarga(requests,data,n){
    if(n >= 0){
        if(requests.harga == data[n].harga){
            return [...recursiveHarga(requests,data,n-1),data[n]]
        }else{
            return recursiveHarga(requests,data,n-1)
        }
    }else{
        return [];
    }
}

module.exports = {recursiveNama, recursiveUmur, recursivePosisi, recursiveCAbility, recursivePAbility, recursiveSpecial, recursiveReputasi, recursiveHarga, recursiveGaji, recursiveNationality}