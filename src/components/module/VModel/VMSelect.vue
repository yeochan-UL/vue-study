<template>
    <select
        class="vmSelectStyle"
        :value="modelValue"
        @change="emit('update:modelValue', $event.target.value)"
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
    'modelValue', 'options'
]);

const emit = defineEmits();
</script>

<style>
.vmSelectStyle {
    text-align: center;
    width: 300px;
    border: 1px solid #000000; 
}
</style>