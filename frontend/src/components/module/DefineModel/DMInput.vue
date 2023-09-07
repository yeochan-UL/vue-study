<!-- defineModel -->
<template>
    <input
        type="text"
        placeholder="input 입력해주세요"
        class="inputText2"
        v-model="handlerInput"
        />
        <!-- :value="handlerInput"
        @input="handlerInput = $event.target.value" -->
</template>

<script setup>
const handlerInput = defineModel();
</script>

<style>
.inputText2 {
    border: 1px solid #000000;
    text-align: center;
    width: 265px;
}
</style>