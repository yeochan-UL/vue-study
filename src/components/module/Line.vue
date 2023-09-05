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
        interaction: {
            intersect: false,
            mode: 'index',
        },
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        responsive: true,
        min: 0,
        max: 100,
        scales: {
            x: {
                grid: { color: '#dedfe4' },
                ticks: {
                    color: '#717886',
                    font: { size: 12 },
                    padding: 2,
                },
            },
            y: {
                grid: { color: '#dedfe4' },
                ticks: {
                    color: '#717886',
                    font: { size: 9 },
                    padding: 5,
                },
            },
        },
    }
});

watch(() => props.datasets, (datas) => updateChartDatas(datas, 0));
// watch(() => props.datasets, (datas) => updateChartDatas(datas, 0), {deep: true});

watch(() => props.labels, updateChartLabel);
// watch(() => props.labels, updateChartLabel, {deep: true});
</script>
