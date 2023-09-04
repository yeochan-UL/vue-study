<template>
<div>
    <h3>Watch deep 속성</h3>
    <h4 style="margin-top: 30px;">deep 속성: {{ watchedObject }}</h4>
    <h4 style="margin-top: 10px;">deep 속성 없음: {{ watchedNone }}</h4>
    
    <div style="margin-top: 30px;">
        <v-btn dark color="blue" @click="changeProperty">deep</v-btn>
        <v-btn style="margin-left: 5px;" dark color="blue" @click="changeNoneProperty">none</v-btn>
    </div>
    <div style="margin-top: 15px;">
        <p>deep 속성 <span style="font-weight: bold;">있음</span></p>
        {{ watchText }}
    </div>
    <div style="margin-top: 15px;">
        <p>deep 속성 <span style="font-weight: bold;">없음</span></p>
        {{ watchNoneText }}
    </div>
</div>
</template>

<script setup>
import { ref, watch } from 'vue';

const watchedObject = ref({ watchValue: '변경 전' });

const watchText = ref('Watch가 반영되지 않았습니다.')

const changeProperty = () => {
    // 객체 내부의 속성 변경
    watchedObject.value.watchValue = '변경 후';
};

// Deep Watch 설정
watch(watchedObject, (value) => {
    console.log(value, 'deep 속성을 watch하고 있을 경우');
    watchText.value = '--- Watch 반영 완료 ---'
}, { deep: true });

// ----------------------------------------------------------------
const watchedNone = ref({ watchValue: '변경 전' });

const watchNoneText = ref('Watch가 반영되지 않았습니다.')

const changeNoneProperty = () => {
    // 객체 내부의 속성 변경
    watchedNone.value.watchValue = '변경 후';
};

// Deep none Watch 설정
watch(watchedNone, (value) => {
    console.log(value, 'deep 속성을 watch하고 있을 경우');
    watchNoneText.value = '--- Watch 반영 완료 ---'
});
</script>