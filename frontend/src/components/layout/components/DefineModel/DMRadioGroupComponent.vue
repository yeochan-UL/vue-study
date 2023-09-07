<template>
    <div>
        <h3
            style="margin-bottom: 10px;"
        >Radio Study</h3>
        <p
            style="margin-bottom: 15px;"
        >emit과 props로 컴포넌트 데이터 주고 받기</p>
        <DMRadioGroup
            name="radioGroup"
            :options="options"
            v-model:handlerRadio="handlerRadio"
        />
        <div style="margin-top: 20px;">
            {{ handlerRadio }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DMRadioGroup from '../../../module/DefineModel/DMRadioGroup.vue'

const handlerRadio = ref('');

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