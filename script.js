
const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];


const wordsWithN = words.filter(word => word.includes('n'));
console.log(wordsWithN, "'n harfi ishtirok etgan so'zlar'");


const wordsWithoutN = words.filter(word => !word.includes('n'));
console.log(wordsWithoutN, "'n harfi ishtirok etmagan so'zlar'");










// // for (let i= 0; i<10; i++){
// //     console.log(i)
// // }


// // for (let i= 1; i<=100; i++){
// //      if (i%2==0){
// //         console.log(i)
// //      }
// // }


// // Вывод чисел от 1 до 5
// // let i = 1;
// // while (i <=5){
// //     console.log(i)
// //     i++ //Уведомленим счетчик
// // }


// let fruits = ["Яблоко", "Банан", "Апельсин",];

// for (let element of fruits) {
//     console.log(element); 
// }

// fruits.sort();
// console.log(fruits);

// let number = [1,2,3,4,5,6,0]
// number.reverse()
// console.log(number);