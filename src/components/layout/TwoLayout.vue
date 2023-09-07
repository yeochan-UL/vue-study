
<template>
    <VCard style="padding: 20px;">
        <template #title>
            질병관리청_코로나19 국내발생현황
        </template>
        <template #subtitle>
            공공 Api에서 받아와 Bar, Line 컴포넌트를 활용하여 그려낸 chart입니다.
        </template>
        <div style="display: flex; justify-self: center;">
            <Bar
                style="margin-top: 30px; width: 500px; height: 100%;"
                :labels="mmddArray.value"
                :datasets="cntArray"
            />
            <Line
                style="margin-top: 30px; width: 500px; height: 100%; margin-left: 50px;"
                :labels="mmddArray.value"
                :datasets="cntArray"
            />
        </div>
        <h3 style="margin-top: 40px;">
            들어오는 데이터 형식 : <span class="spanLayout">{{ resData.value }}</span>
        </h3>
        <h3 class="pt-5">
            가공 된 데이터 :
            <span class="spanLayout">{{ cntArray[0].data }}</span>
            <span class="spanLayout">{{ mmddArray.value }}</span>
        </h3>
    </VCard>
</template>

<script setup>
import Bar from '../module/Bar.vue';
import Line from '../module/Line.vue';
import { useListStore } from '../../stores/main';
import { onMounted, nextTick } from 'vue';
import { storeToRefs } from "pinia";

const store = useListStore();
const { resData, cntArray, mmddArray } = storeToRefs(store);

onMounted(async () => {
    await nextTick()
    store.getData();
});
</script>

<style>
.spanLayout {
    font-weight: 300;
}
</style>
