<!-- emit, props -->
<!-- <template>
    <div class="checkboxStyle">
        <label :for="id">
        <input 
            type="checkbox"
            :id="props.id"
            :checked="props.checked"
            :value="props.value"
            @click="emit('checked', $event.target.value)"
        >
        <slot />
    </label>
    </div>
</template>

<script setup>
const emit = defineEmits([]);

const props = defineProps([
    'id', 'checked', 'value'
]);
</script>

<style>
.checkboxStyle {
    width: 500px;
    margin: 10px;
}
</style> -->

<!-- v-model -->
<template>
    <div class="checkboxStyle">
        <label :for="id">
        <input 
            type="checkbox"
            :id="props.id"
            :checked="props.checked"
            :value="props.value"
            @click="emit('update:checkboxClick', $event.target.value)"
        >
        <slot />
    </label>
    </div>
</template>

<script setup>
const emit = defineEmits([
    'update:checkboxClick',
]);

const props = defineProps([
    'id', 'checked', 'value'
]);
</script>

<style>
.checkboxStyle {
    margin: 10px;
}
</style>