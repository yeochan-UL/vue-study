<template>
    <h3>ref()와 reactive()의 차이점</h3>
    <p class="mt-5">
        {{ refObj }} <br>
        {{ reactiveObj }}
    </p>
    <p class="mt-5">두개가 같아 보이지만 console.log()를 <br> 확인하면 proxy 객체가 아닌 것을 <br> 확인할 수 있다.</p>
</template>

<script setup>
import { ref, reactive } from 'vue';

let refObj = ref({});
let reactiveObj = reactive({});


const newData = {name: 'proxy 객체일까?'};

refObj.value = {...newData};
reactiveObj = {...newData};

console.log(refObj, 'ref를 사용한 재할당');
console.log(reactiveObj, 'reactiveObj를 사용한 재할당');
</script>