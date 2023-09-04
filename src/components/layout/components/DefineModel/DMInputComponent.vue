<!-- defineModel -->
<template>
    <v-col
        justify="center"
    >
        <h3
            style="margin-bottom: 10px;"
        >Input Study</h3>
        <p
            style="margin-bottom: 15px;"
        >defineModel</p>
        <DMInput
            v-model.trim="handlerInput"
        />
        <div style="margin-top: 20px;">
            {{ handlerInput }}
        </div>
    </v-col>
</template>

<script setup>
import { ref } from 'vue';
import DMInput from '../../../module/DefineModel/DMInput.vue';

const handlerInput = ref('');
</script>