/*let numsArray = [5, 500 ,40 ,5.5]

for (let i = 0; i<numsArray.length; i++){
    console.log(numsArray[i])
}

let newArr = [5, 6, 'Du', 'keturi', [1,2,5]];

console.log(newArr[2])
console.log(newArr[4])
console.log(newArr[4][2])

newArr[2] = 3
newArr[6] = 4333333
console.log(newArr)


let cities = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys']

console.log(cities)
//console.log(typeof cities)]

let lastCity = cities.pop()
console.log(lastCity)
console.log(cities)
cities.pop()
console.log(cities)

cities.shift()
console.log(cities)

cities.push('Siauliai', 'Vilnius')
console.log(cities)

cities.unshift('Panevezys')
console.log(cities)

let countries = ['Lithuania', 'Germany', 'France', 'Italy', 'Poland']


console.log(countries.slice(1, 3))
console.log(countries.slice(-2))


let number = [1,2,3,4,5,6,7,8]

console.log(number)

//let spliceNums = number.splice(2)
//let spliceNums = number.splice(2,4)
//let spliceNums = number.splice(-4,2)
let spliceNums = number.splice(-4,2,55,95,'Hello')

console.log(spliceNums)
console.log(number)*/


let numsArray = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

numsArray.shift()
numsArray.pop()
let length = numsArray.length / 2
numsArray.splice(-(Math.trunc(length) + 1), 1)
numsArray.splice(-2, 1)
numsArray.splice(1,1)
numsArray.splice(6,2)
numsArray.splice(-6,3)
numsArray.splice(2,1,888)
numsArray.splice(9,1,33,789,6543)
numsArray.splice(14,1,321,654,987)
numsArray.splice(1,0,11)
numsArray.splice(13,0,1)
numsArray.splice(-1,0,-1)
numsArray.splice(0,0,1,2,3)
numsArray.push(-333,-321,-312)
numsArray.splice(-((numsArray.length)/2), 0,0)
numsArray.shift()
numsArray.pop()
numsArray.splice(0,0,"start")
numsArray.push("end")

console.log(numsArray)
let task1 = numsArray.slice(0, 1)
console.log(task1)
let task2 = numsArray.slice(-1)
console.log(task2)
let task3 = numsArray.slice(1, 2)
console.log(task3)
let task4 = numsArray.slice(-2, -1)
console.log(task4)
let task5 = numsArray.slice(7, 8)
console.log(task5)
let task6 = numsArray.slice(-19, -18)
console.log(task6)
let avg = Math.trunc(numsArray.length/2)
let task7 = numsArray.slice(avg, avg+1)
console.log(task7)
let task8 = numsArray.slice(0, 3)
console.log(task8)
let task9 = numsArray.slice(-3)
console.log(task9)
let task10 = numsArray.slice(0, 10)
console.log(task10)
let task11 = numsArray.slice(-10)
console.log(task11)
let task12 = numsArray.slice(2, 8)
console.log(task12)
let task13 = numsArray.slice(-23,-18)
console.log(task13)
let task14 = numsArray.slice(10, 19)
console.log(task14)
let task15 = numsArray.slice(-19, -10)
console.log(task15)
let task16 = numsArray.slice(1)
console.log(task16)
let task17 = numsArray.slice(0, -1)
console.log(task17)
let task18 = numsArray.slice(5, 27)
console.log(task18)
let task19 = numsArray.slice(0, -5)
console.log(task19)
let task20 = numsArray.slice(0, avg)
console.log(task20)
let task21 = numsArray.slice(avg+1, 27)
console.log(task21)
let task22 = numsArray.slice(1, -1)
console.log(task22)
let task23 = numsArray.slice(5, -3)
console.log(task23)
let task24 = numsArray.slice(1, -8)
console.log(task24)
let task25 = numsArray.slice(7, -1)
console.log(task25)
let task26 = numsArray.slice(9, -12)
console.log(task26)
let task27 = numsArray.slice(10, 19)
console.log(task27)
let task28 = numsArray.slice(9, 21)
console.log(task28)
let array1 = numsArray.slice(0, 5)
let array2 = numsArray.slice(-6)
let task29 = array1.concat(array2)
console.log(task29)
let array3 = numsArray.slice(2, 5)
let array4 = numsArray.slice(14,17)
let task30 = array3.concat(array4)
console.log(task30)