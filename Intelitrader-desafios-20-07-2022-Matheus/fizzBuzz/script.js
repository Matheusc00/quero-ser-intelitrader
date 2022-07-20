function numero(n){

    if ((n % 3 === 0) && (n % 5 === 0)) {
        return `${n} FizzBuzz`;
    }else if (n % 5 === 0){
        return `${n} Buzz`;
    }else if (n % 3 === 0 ){
        return `${n} Fizz`;
    }else if ((n % 3 != 0) || (n % 5 != 0)){
        return `${n} Não divisível por 3 ou 5`;
    }else if (n != NaN){
        return n;
    }else{
        console.log('Não e')
    }
}
for(let i = 0; i <= 100; i++){
    console.log(numero(i));
}