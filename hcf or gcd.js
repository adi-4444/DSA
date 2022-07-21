// HCF( hightest commomn factor) or GCD (gratest common devider)

const x=16;
const y=8;
let hcf;
for (let i = 1; i<=x && i<=y; i++) {
   if(x % i == 0 && y % i == 0) {
    hcf = i
   }
}
console.log(`hcf of ${x} and ${y} is ${hcf}`)