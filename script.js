let array=[0,1,2,3,4]
let tries=0

console.log("Original Array:")
console.log(array)
shuffle(array)

function shuffle(array){
    let lengthArray=[]
    for (let i = 0; i < array.length; i++) {
        lengthArray.push(i)
    }
    for (let i = 0; i < array.length; i++) {
        let n=lengthArray[Math.floor(Math.random()*(lengthArray.length))]
        let temp=array[i]
        array[i]=array[n]
        array[n]=temp
    }
    tries++
    if(checkIfSorted(array)){
        console.log("Attempt "+tries+" Success")
        console.log(array)
    }else{
        console.log("Attempt "+tries+" Failed")
        console.log(array)
        shuffle(array)
    }
}

function checkIfSorted(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i]>array[i+1]){
            return false
        }
    }
    return true
}