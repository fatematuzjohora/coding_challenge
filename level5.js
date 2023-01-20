// 1. Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHtml(str) {
    let temp = str.split('');
    
    for(let i = 0; i < temp.length; i++) {
        switch(temp[i]) {
            case '<':
                temp[i] = '&lt;';
                break;
                case '&':
                    temp[i] = '&amp;';
                    break;
                    case '>':
                        temp[i] = '&gt;';
                        break;
                        case '"':
                            temp[i] = '&quot;';
                            break;
                            case "'":
                                temp[i] = '&apos;';
                                break;
        }
    }
    temp = temp.join("");
    return temp;
}
let convert = convertHtml("Nadia < Sadia <tonni")
let cont = convertHtml("Nadia & Sadia & tonni");
let quotation = convertHtml('Stuff in "quotation marks"')
console.log(convert, cont, quotation);

//2.Sum All Primes
function sumAllPrimes(num){
    function isPrime(num){
        let sqrt = Math.sqrt(num);
        for (let i = 2; i <=sqrt; i++) {
            if (num % i === 0) 
            return false
        }
        return true;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++){
        if(isPrime(i))
        sum += i;
    }
    return sum;
}
let ans = sumAllPrimes(977);
console.log(ans);