<!-- defineModel -->
<template>
    <label :for="id">
        <input 
            type="radio"
            :id="props.id"
            :name="props.name"
            :value="props.value"
            v-model="handlerRadio"
        />
        <slot />
    </label>
</template>

<script setup>
const handlerRadio = defineModel('handlerRadio');

const props = defineProps([
    'value', 'id', 'name'
]);
</script>
