<template>
    <Radio
        class="radioStyle"
        v-for="option in options"
        :key="option.id"
        :value="option.label"
        :name="props.name"
        @click="emit('handlerRadio', $event.target.value)"
    >
        {{ option.label }}
    </Radio>
</template>

<script setup>
const emit = defineEmits(['handlerRadio']);
const props = defineProps([
    'value', 'options', 'name', 'id'
]);
</script>

<style>
.radioStyle {
    margin: 10px;
}
</style>