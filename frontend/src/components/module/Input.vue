<template>
    <input
        type="text"
        placeholder="input 입력해주세요"
        class="inputText"
        :value="props.value"
        @input="emit('handlerInput', $event.target.value)"
    />
</template>

<script setup>
const props = defineProps([
    'value'
])
const emit = defineEmits(['handlerInput']);
</script>

<style>
.inputText {
    border: 1px solid #000000;
}
</style>
