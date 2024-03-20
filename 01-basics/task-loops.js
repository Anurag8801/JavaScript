// Use loop to output even numbers from 2 to 10.

//let's do with wile first
/* let i=0
while(i<=10){
    i++
    if(i%2){
        continue;
    }
    console.log(i)
} */

// i=0
// do{
//     i++
//     if((i%2)){
//         continue;
//     }
//     console.log(i)
// }while(i<=10)

// USING FOR LOOP
/* for(let i=1;i<=10;i++){
    if(!(i%2))console.log(i);
} */


// output PRIME NUMBERS from 2 to n

let n = 20

nextPrime: for(let i=2;i<=n;i++){
    for(let j= 2; j<i; j++){
        if(!(i%j)) continue nextPrime;
    }
    console.log(i)
}