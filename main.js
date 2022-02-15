// const arr1 = ['Ahmad', 'Yazeed', 'Adam', 'Ibrahim']


// const sayHello = function (givenArr) {

//     for (let i = 0; i < arr.length; i++) {
//         console.log('Hello ' + givenArr[i]);

//     }

// }

// sayHello(arr)


// const arr1 = ['Ahmad', 'Yazeed', 'Adam', 'Ibrahim']
// const formatArray = function (arr) { // this function shows how the arrays are refrence datatypes so the editing is not being made on a new array but on the orignal array because it's refrenced 
//     for (let i = 0; i < arr.length; i++) {
//         arr[i]= 'Hello '+ arr[i]


//     }

// }
// formatArray(arr1)
// console.log(arr1);

const arr1 = ['ahmad', 'yazeed', 'adam', 'ibrahim']

const CaptilaizeNames = function (sen) {

  

    for (let i = 0; i < sen.length; i++) {   
        sen[i] = sen[i].split('')
        sen[i][0]= sen[i][0].toUpperCase()
        sen[i] = sen[i].join('')
        
    }


}

CaptilaizeNames(arr1)
console.log(arr1);