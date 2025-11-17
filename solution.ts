type valueType = string | number | boolean
const formatValue=(value:valueType )=>{
    if(typeof value === "string"){
        return value.toUpperCase();
    }else if(typeof value === 'number'){
        return value*10;
    }else{
        return value ? false : true
    }

} 
