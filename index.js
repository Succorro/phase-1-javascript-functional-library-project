function onlyArrays(collection){
    return (collection instanceof Array) ? collection.slice(): Object.values(collection);

};

function myEach (collection, callback){
    const newCollection = onlyArrays(collection)
    for (let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection;
};

function myMap (collection, callback){
    const newCollection = onlyArrays(collection);
    let array = [];
    for (let i = 0; i< newCollection.length; i++){
      array.push(callback(newCollection[i]))
    }
    return array
};

function myReduce (collection, callback, acc){
    let newCollection = onlyArrays(collection);
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    for (let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
};

function myFind (collection, predicate){
    let newCollection = onlyArrays(collection)
    for (let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
            return newCollection[i]
        }
    }
};

function myFilter (collection, predicate){
    let newCollection = onlyArrays(collection);
    let array = []
    for (let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i])){
            array.push(newCollection[i])
        }
    }
    return array;
};

function mySize (collection){
    let newCollection = onlyArrays(collection)
    let size = newCollection.length;
    return size
};

function myFirst (array, n = false ){
    return (n) ? array.slice(0,n): array[0]
};

function myLast ( array, n = false){
    return (n) ? array.slice(array.length-n, array.length) : array[array.length - 1] 
};

function myKeys (object){
    const keys = [];
    for (let key in object){
        keys.push(key)
    }
    return keys;
};
 
function myValues (object){
    const values = [];
    for (let val in object){
        values.push(object[val])
    }
    return values
}