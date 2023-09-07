<!-- defineModel -->
<template>
    <h3
        style="margin-bottom: 10px;"
    >Select Study</h3>
    <p
        style="margin-bottom: 15px;"
    >defineModel 컴포넌트 데이터 주고 받기</p>
    <DMSelect
        :options="options"
        v-model="selectValue"
    />
    <div style="margin-top: 20px;">
        {{ selectValue }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DMSelect from '../../../module/DefineModel/DMSelect.vue'

const selectValue = ref('frontend');

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