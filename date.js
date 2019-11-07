var tgl = 12012012
console.log(tgl + ' >>>> ' + tanggal(tgl))


function tanggal(str) {
    var arr=str.toString().split('')
    var dates=arr.slice(0,2)
    dates=dates.join('')
    
    var month=arr.slice(2,4)
    month=month.join('')
    var intMonth=parseInt(month)
    var arrayMonths=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var months=arrayMonths[intMonth-1]
    
    var years=arr.slice(4,8)
    years=years.join('')
    
    return (dates+'-'+months+'-'+years)
}