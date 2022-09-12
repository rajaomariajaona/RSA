const N1 = 13;
const N2 = 17;
const N = N1 * N2;

console.log(N1, N2, N)
/**
 * Nombre premier entre 0 et N = (N1 * N2)
 * Pour p nombre premier, fi(p) = p - 1
 */
function fi(N1, N2) {
    return (N1 - 1) * (N2 - 1);
}

const fiN = fi(N1, N2)
console.log("FIN", fiN)
// d.e === 1[fiN]
// d.e + k. fiN = 1
function calculD(fiN, e){
    var first = [fiN, 1, 0];
    var second = [e, 0, 1];
    while(true){
        var reste = first[0] % second[0];
        if(reste == 0) break;
        var quotient = (first[0] - reste) / second[0];
        var next = [reste, first[1] - second[1] * quotient, first[2] - second[2] * quotient]
        first = second;
        second = next;
    }
    return second;
}
let res = null;
let i = 2;
do {
    res = calculD(fiN, ++i);
} while (res[0] != 1);
const e = i;
const d = res[2] < 0 ? res[2] + fiN : res[2];

const dec = 30;
const text = "ABCD";

const textInAscii = text.split("").map(s => s.charCodeAt(0) - dec)

console.log("textInAscii", textInAscii);

/**
 * Use this function to avoid the integer to overflow
 * 
 */

function modPow(a, b, n) {
    var result = 1;
    while (b > 0) {
        if (b % 2 == 1) {
            result = (result * a) % n;
        }
        a = (a * a) % n;
        b = Math.floor(b / 2);
    }
    return result;
}
//(s ** e) > N ? (s ** e) % N : (s ** e)
const encodedNumber = textInAscii.map(s => modPow(s, e, N));

console.log("encodedNumber", encodedNumber);

const textEncoded = String.fromCharCode(...encodedNumber.map(s => s + dec));

console.log("textEncoded", textEncoded);

const decodedNumber = encodedNumber.map(s => modPow(s, d, N));

console.log("decodedNumber", decodedNumber);
const textDecoded = String.fromCharCode(...decodedNumber.map(s => s + dec));

console.log("textDecoded", textDecoded);