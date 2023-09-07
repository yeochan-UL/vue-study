<template>
    <label :for="id">
        <input 
            type="radio"
            :id="props.id"
            :name="props.name"
            :value="props.value"
            @change="emit('handlerRadio', $event.target.value)"
        />
        <slot />
    </label>
</template>

<script setup>
const emit = defineEmits(['handlerRadio']);
const props = defineProps([
    'value', 'id', 'name'
]);
</script>
