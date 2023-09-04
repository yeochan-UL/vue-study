<template>
    <div style="width: 230px;">
        <h3>첫 번째 입력창</h3>
        <input
            type="text"
            placeholder="input 입력해주세요"
            class="inputText"
            :value="handlerInput1"
            @input="emit('update:handlerInput1', $event.target.value)"
        />
    </div>
    <div style="margin-top: 15px;">
        <h3>두 번째 입력창</h3>
        <input
            type="text"
            placeholder="input 입력해주세요"
            class="inputText"
            :value="handlerInput2"
            @input="emit('update:handlerInput2', $event.target.value)"
        />
    </div>
</template>

<script setup>
const props = defineProps([
    'handlerInput1', 'handlerInput2'
])
const emit = defineEmits([
    'update:handlerInput1',
    'update:handlerInput2'
]);
</script>

<style>
.inputText {
    border: 1px solid #000000;
    text-align: center;
    width: 290px;
}
</style>