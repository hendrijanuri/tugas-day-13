var desimalKeBiner=(a)=> {
    let output = []
    while (a>=1) {
        output.push(a % 2) 
        a /= 2            
    }
    // let biner=output.reverse().join('')
    return output
}


var desimalKeHex=()=>{

}

console.log(desimalKeBiner(5))