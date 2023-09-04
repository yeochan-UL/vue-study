<template>
    <select
        class="dmSelectStyle"
        v-model="handlerSelect"
    >
        <option
            v-for="option in options"
            :key="option.id"        
        >
            {{ option.label }}
        </option>
    </select>
</template>

<script setup>
const props = defineProps([
    'options'
]);

const handlerSelect = defineModel();
</script>

<style>
.dmSelectStyle {
    text-align: center;
    width: 300px;
    border: 1px solid #000000; 
}
</style>