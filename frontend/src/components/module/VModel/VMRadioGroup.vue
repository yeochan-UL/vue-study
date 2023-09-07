<template>
    <div>
        <Radio
            class="radioStyle"
            v-for="option in options"
            :key="option.id"
            :value="option.label"
            :name="props.name"
            @click="emit('update:handlerRadio', $event.target.value)"
        >
            {{ option.label }}
        </Radio>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:handlerRadio']);
const props = defineProps([
    'value', 'options', 'name', 'id'
]);
</script>

<style>
.radioStyle {
    margin: 10px;
}
</style>