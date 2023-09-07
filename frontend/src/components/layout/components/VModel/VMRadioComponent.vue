<template>
    <div>
        <h3
            style="margin-bottom: 10px;"
        >Radio Study</h3>
        <p
            style="margin-bottom: 15px;"
        >emit과 props로 컴포넌트 데이터 주고 받기</p>
        <div>
        <VMRadio
            id="vmRadioGroup0"
            name="vmRadioGroup"
            value="frontend"
            v-model:handlerInput="handlerInput"
        >
            frontend
        </VMRadio>
    </div>
    <div>
        <VMRadio
            id="vmRadioGroup1"
            name="vmRadioGroup"
            value="backend"
            v-model:handlerInput="handlerInput"
        >
            backend
        </VMRadio>
    </div>
    <div>
        <VMRadio
            id="vmRadioGroup2"
            name="vmRadioGroup"
            value="server"
            v-model:handlerInput="handlerInput"
        >
            server
        </VMRadio>
    </div>
        <div style="margin-top: 20px;">
            {{ handlerInput }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VMRadio from '../../../module/VModel/VMRadio.vue';

const handlerInput = ref('');
</script>
