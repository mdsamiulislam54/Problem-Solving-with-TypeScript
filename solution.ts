type valueType = string | number | boolean
const formatValue = (value: valueType): valueType => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return value ? false : true
    }

}


const getLength = <T>(value: string | T[]): number => {
    if (Array.isArray(value)) {
        return value.length
    } else {
        return value.length
    }
}

