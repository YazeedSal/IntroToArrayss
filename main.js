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

// const arr1 = ['ahmad', 'yazeed', 'adam', 'ibrahim']

// const CaptilaizeNames = function (sen) {



//     for (let i = 0; i < sen.length; i++) {   
//         sen[i] = sen[i].split('')
//         sen[i][0]= sen[i][0].toUpperCase()
//         sen[i] = sen[i].join('')

//     }


// }

// CaptilaizeNames(arr1)
// // console.log(arr1);

// const arr1 = ['ahmad','yazeed','ibraheem','bahaa','haneen']

// console.log(arr1);
// arr1.push('Sammer')
// arr1.splice(3,1,'suad')
// console.log(arr1);
// const newArr = arr1.slice(2,arr1.length)
// console.log(newArr);

const user = {
    firstName: 'Ahmad',
    lastName: 'Kwasmi',
    age: 19,
    isLoggedIn: false,
    signIn: function () {
        this.isLoggedIn = true
    },
    signOut: function () {
        this.isLoggedIn = false
    },
}
user.monileNo = '08789989'
const newUser = user // this just showes that ibjects are refrenced data types
newUser.firstName = "yazeed"
console.log(user);