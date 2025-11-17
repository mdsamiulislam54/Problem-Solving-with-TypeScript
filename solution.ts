type valueType = string | number | boolean
const formatValue = (value: valueType): valueType => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value
    }

}

const getLength = <T>(value: string | T[]): number => {
    if (Array.isArray(value)) {
        return value.length
    } else {
        return value.length
    }
}


class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}

interface FilterByRatingType { title: string, rating: number }

const filterByRating = (value: FilterByRatingType[]): FilterByRatingType[] => {
    const newFilterArray = value.filter((item: FilterByRatingType) => item.rating > 4);
    return newFilterArray
}


interface IUser {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (user: IUser[]): IUser[] => {
    const activeUserArray = user.filter((user:IUser)=> user.isActive)
    return activeUserArray
}


interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}

const printBookDetails = (book: Book): void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear},
         Available: ${book.isAvailable ? " Yes " : " NO "}`)
}

const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
    const flatArray = [...arr1, ...arr2];
    const uniqueArray = flatArray.reduce((uniqueArray: T[], item: T) => {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item)
        }
        return uniqueArray
    }, [])
    return uniqueArray
}

interface IProduct {
    name: string
    price: number
    quantity: number
    discount?: number
}


const calculateTotalPrice = (product: IProduct[]) => {
    const totalPrice = product.reduce((total: number, product: IProduct) => {
        const { price, quantity ,discount} = product;
        const discountAmount = discount ?? 0
        const totalPrice = price * quantity;
        const discountPrice = (totalPrice* discountAmount)/100
        total += totalPrice- discountPrice;
        return total
    }, 0);
    return totalPrice
}




