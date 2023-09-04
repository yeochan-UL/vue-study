<template>
    <label :for="id">
        <input 
            type="radio"
            :id="props.id"
            :name="props.name"
            :value="props.value"
            @click="emit('update:handlerInput', $event.target.value)"
        />
        <slot />
    </label>
</template>

<script setup>
const emit = defineEmits([
    'update:handlerInput'
]);

const props = defineProps([
    'value', 'id', 'name'
]);
</script>