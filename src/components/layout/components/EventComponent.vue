<template>
    <h3
        style="margin-bottom: 10px; width: 300px; "
    >key event Study</h3>
    <p
        style="margin-bottom: 15px;"
    >key 이벤트 발생 log 확인</p>
        <input
            placeholder="입력해주세요"
            class="inputStyle"
            v-model="inputValue"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            @keypress="onKeyPress"
            @keyup="onKeyUp"
            @input="onInput"
            @change="onChange"
            @dblclick="ondDlclick"
            @mouseover="onMouseover"
            @mouseout="onMouseout"
            @mousedown="onMousedown"
        />
</template>
  ​
<script setup>
import { ref } from 'vue';
const inputValue = ref('');

const onFocus = (e) => {
    console.log(`focus 이벤트: ${e.target.value}`);
};
const onBlur = (e)  =>{
    console.log(`blur 이벤트: ${e.target.value}`);
};
const onKeyPress = (e) => {
    console.log(`keyPress 이벤트: ${e.target.value}`);
};
const onKeyDown = (e) => {
    console.log(`keyDown 이벤트: ${e.target.value}`);
};

const onInput = (e) => {
    console.log(`input 이벤트: ${e.target.value}`);
};
const onKeyUp = (e) => {
    console.log(`keyUp 이벤트: ${e.target.value}`);
};
const onChange = (e) => {
    console.log(`change 이벤트: ${e.target.value}`);
};
const ondDlclick = (e) => {
    console.log(`dblclick 이벤트: ${e.target.value}`);
};
const onMouseover = (e) => {
    console.log(`mouseover 이벤트: ${e.target.value}`);
};
const onMouseout = (e) => {
    console.log(`mouseout 이벤트: ${e.target.value}`);
};
const onMousedown = (e) => {
    console.log(`mousedown 이벤트: ${e.target.value}`);
};
</script>

<style>
.inputStyle {
    border: 1px solid #000000;
    text-align: center;
}
</style>