<template>
    <h3
        style="margin-bottom: 10px;"
    >Input Study</h3>
    <p
        style="margin-bottom: 15px;"
    >v-model 이름 없이 소통</p>
    <VMInput
        v-model:handlerInput1="handlerInput1"
        v-model:handlerInput2="handlerInput2"
    />
    <div style="margin-top: 20px;">
        <div style="margin-bottom: 10px;">
            첫 번째 입력창 :{{ handlerInput1 }}

        </div>
        <div>
            두 번째 입력창 :{{ handlerInput2 }}
        </div>
    </div>
</template>

<script setup>
import VMInput from '../../../module/VModel/VMInput.vue';
import { ref } from 'vue';

const handlerInput1 = ref('');
const handlerInput2 = ref('');
</script>