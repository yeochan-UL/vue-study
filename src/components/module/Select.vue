<template>
    <select
        class="selectStyle"
        :value="props.value"
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
    'value', 'options'
]);

const emit = defineEmits();
</script>

<style>
.selectStyle {
    text-align: center;
    width: 300px;
    border: 1px solid #000000; 
}
</style>
