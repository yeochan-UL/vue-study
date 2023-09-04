<template>
    <div>
        <h3
            style="margin-bottom: 10px;" 
        >Select Study</h3>
        <p
            style="margin-bottom: 15px;"
        >v-model 컴포넌트 데이터 주고 받기</p>
        <VMSelect
            :options="options"
            v-model="selectValue"
        />
        <div style="margin-top: 20px;">
            {{ selectValue }}
        </div>
    </div>
</template>

<script setup>
import VMSelect from '../../../module/VModel/VMSelect.vue';
import { ref } from 'vue';

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