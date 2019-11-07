var desimalKeBiner=(a)=> {
    let output = []
    while (a>=1) {
        output.push(a % 2) 
        a = Math.floor(a / 2)            
    }
    let biner=output.reverse().join('')
    return biner
}


// var desimalKeHex=()=>{



console.log(desimalKeBiner(1000))