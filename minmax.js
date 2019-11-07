var array = [40, 100, 1, 5, 25, 10]
console.log('nilai Min dari '+array+' adalah '+min(array))
console.log('nilai Max dari '+array+' adalah '+max(array))


function min(a) {
    a.sort(function (a, b) { return a - b })
    return a[0]
}
function max(a) {
    a.sort(function (a, b) { return a - b })
    return a[(a.length)-1]
}