<template>
    <div>
        <h3>Line Chart study</h3>
        <Line 
            style="margin-top: 20px;"
            :labels="labels"
            :datasets="datasets"
        />
        <p style="margin-top: 20px;">10초 마다 데이터가 갱신 되도록 설정</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Line from '../../module/Line.vue';
import dayjs from 'dayjs';

const randomInt = (from, to) => Math.floor((Math.random() * (to - from + 1)) + from);

const datasets = ref([
  {
    data: new Array(10)
        .fill(0)
        .map(() => randomInt(0, 100)),
    backgroundColor: '#50bcdf',
  },
]);

const labels = ref(new Array(10)
    .fill('')
    .map(
        (value, index) => dayjs()
            .subtract(index, 'second')
            .format('HH:mm:ss'),
));

const updateData = () => {
    // 새로운 데이터 생성
    datasets.value = new Array(10)
        .fill(0)
        .map(() => randomInt(0, 100));

    // 새로운 라벨 생성
    labels.value = new Array(10)
        .fill('')
        .map(
            (value, index) => dayjs()
                .subtract(index, 'second')
                .format('HH:mm:ss'),
        );
};

setInterval(updateData, 10000); // 10초마다 업데이트
</script>
