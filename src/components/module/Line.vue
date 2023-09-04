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
    type: 'line',
    labels: props.labels,
    datasets: props.datasets,
    options:{
        plugins:{
            legend: {
                display: false
            },
            tooltip: { enabled: false },
        }
    }
});

watch(() => props.datasets, (datas) => updateChartDatas(datas, 0));
// watch(() => props.datasets, (datas) => updateChartDatas(datas, 0), {deep: true});

watch(() => props.labels, updateChartLabel);
// watch(() => props.labels, updateChartLabel, {deep: true});
</script>
