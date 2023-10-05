<template>
    <h2>reduce 함수</h2>
    <p class="mt-5">초기 배열 : [1, 2, 3, 4]</p>
    <p class="mt-2">reduce() : {{ result }}</p>
    <p>reduce() 초기 값 10을 설정 : {{ result2 }}</p>
    <p>numbers.filter(val => val % 2 === 0); : {{ result3 }}</p>
    <p> : {{ result4 }}</p>
</template>

<script setup>
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((number1, number2) => number1 + number2); 
const result2 = numbers.reduce((number1, number2) => number1 + number2, 10); 

const result3 = numbers.filter(val => val % 2 === 0);
const result4 = numbers.reduce((acc, acl) => {
    if(acl % 2 === 0)
        acc.push(acl)
    return acc;
}, []);

console.log(result);
console.log(result2);
</script>