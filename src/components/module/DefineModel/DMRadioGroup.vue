<!-- defineModel -->
<template>
    <div>
        <Radio
            class="radioStyle"
            v-for="option in options"
            :key="option.id"
            :value="option.label"
            :name="props.name"
            v-model:handlerRadio="handlerRadio"
        >
            {{ option.label }}
        </Radio>
    </div>
</template>

<script setup>
const handlerRadio = defineModel('handlerRadio');

const props = defineProps([
    'value', 'options', 'name', 'id'
]);
</script>

<style>
.radioStyle {
    margin: 10px;
}
</style>