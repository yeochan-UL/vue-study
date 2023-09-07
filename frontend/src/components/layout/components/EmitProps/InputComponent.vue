<!-- emit과 props로 데이터 주고 받기 -->
<template>
    <h3
        style="margin-bottom: 10px;"
    >Input Study</h3>
    <p
        style="margin-bottom: 15px;"
    >emit과 props로 컴포넌트 데이터 주고 받기</p>
    <Input
        :value="inputText"
        @handlerInput="onInput"
    />
    <div style="margin-top: 20px;">
        {{ inputText }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref('');

const onInput = (e) => {
    inputText.value = e
}
</script>
