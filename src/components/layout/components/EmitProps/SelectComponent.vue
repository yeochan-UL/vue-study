<!-- emit과 props로 컴포넌트 데이터 주고 받기 -->
<template>
    <h3
        style="margin-bottom: 10px;"
    >Select Study</h3>
    <p
        style="margin-bottom: 15px;"
    >emit과 props로 컴포넌트 데이터 주고 받기</p>
    <Select
        :options="options"
        :value="selectValue"
        @update:modelValue="onSelect"
    />
    <div style="margin-top: 20px;">
        {{ selectValue }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const onSelect = (e) => {
    selectValue.value = e
}

const selectValue = ref('server');

const options = [
    {
        id: 0,
        label: 'frontend'
    },
    {
        id: 1,
        label: 'backend'
    },
    {
        id: 2,
        label: 'server'
    },
]
</script>
