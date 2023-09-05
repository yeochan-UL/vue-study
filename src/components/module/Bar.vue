<template>
    <div>
        <canvas ref="chartElement"></canvas>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import useChart from '../global/chart';

const props = defineProps([
    'labels', 'datasets'
]);

const { chartElement, updateChartDatas, updateChartLabel } = useChart({
    type: 'bar',
    labels: props.labels,
    datasets: props.datasets,
    options:{
        plugins:{
            legend: {
                display: false
            },
        }
    }
});

watch(() => props.datasets, ((datas) => {
    // console.log(datas, '들어오는 데이터');
    updateChartDatas(datas, 0)
}));

watch(() => props.labels, updateChartLabel);
</script>
