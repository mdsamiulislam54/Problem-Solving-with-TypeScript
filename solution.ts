// type valueType = string | number | boolean
// const formatValue = (value: valueType): valueType => {
//     if (typeof value === "string") {
//         return value.toUpperCase();
//     } else if (typeof value === 'number') {
//         return value * 10;
//     } else {
//         return value ? false : true
//     }

// }

// const getLength = <T>(value: string | T[]): number => {
//     if (Array.isArray(value)) {
//         return value.length
//     } else {
//         return value.length
//     }
// }


// class Person {
//     name: string;
//     age: number

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age
//     }
//     getDetails(){
//         return `'Name: ${this.name}, Age: ${this.age}'`
//     }

// }

// interface FilterByRatingType { title: string, rating: number }

// const filterByRating = (value: FilterByRatingType[]): FilterByRatingType[] => {
//     const newFilterArray = value.reduce((newArray: FilterByRatingType[], item: FilterByRatingType) => {

//         if (item.rating > 4) {
//             newArray.push(item)
//         }

//         return newArray
//     }, []);

//     return newFilterArray
// }

// interface IUser {
//     id: number,
//     name: string,
//     email: string,
//     isActive: boolean
// }

// const filterActiveUsers = (user: IUser[]):IUser[] => {
//     const activeUserArray = user.reduce((isActiveUser: IUser[], user: IUser) => {
//         if (user.isActive) {
//             isActiveUser.push(user)
//         }
//         return isActiveUser
//     }, [])
//     return activeUserArray
// }


interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}

const printBookDetails = (book:Book):void=>{
    console.log(` Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear},
         Available: ${book.isAvailable ? "Yes":"NO"} `)
}

