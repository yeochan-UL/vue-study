<template>
    <div>
        <h3
            style="margin-bottom: 10px; width: 300px;"
        >Radio Study</h3>
        <p
            style="margin-bottom: 15px;"
        >emit과 props로 컴포넌트 데이터 주고 받기</p>
        <div>
            <DMRadio
                id="dmRadioGroup0"
                name="dmRadioGroup"
                value="frontend"
                v-model:handlerRadio="handlerRadio"
            >
                frontend
            </DMRadio>
        </div>
        <div>
            <DMRadio
                id="dmRadioGroup1"
                name="dmRadioGroup"
                value="backend"
                v-model:handlerRadio="handlerRadio"
            >
                backend
            </DMRadio>
        </div>
        <div>
            <DMRadio
                id="dmRadioGroup2"
                name="dmRadioGroup"
                value="server"
                v-model:handlerRadio="handlerRadio"
            >
                server
            </DMRadio>
        </div>
        <div style="margin-top: 20px;">
            {{ handlerRadio }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DMRadio from '../../../module/DefineModel/DMRadio.vue'

const handlerRadio = ref('');
</script>