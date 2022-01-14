const row = 5

if(typeof row === "number"){
    for (let i = row; i >= 0; i--){
        let result = ' '
        for(let j = 1; j <= i; j++){
        result += j + " "
    }
    console.log(result)
    }
}else{
    console.log("Data harus number")
}