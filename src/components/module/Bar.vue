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
    options: {
        layout: { padding: 0 },
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: { display: false },
            tooltip: { enabled: true },
        },
        responsive: true,
        scales: {
            x: {
                grid: {
                    color: '#dedfe4',
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks: {
                    backdropPadding: 0,
                    color: '#717886',
                    font: { size: 12 },
                    padding: 2,
                },
            },
            y: {
                grid: {
                    color: '#dedfe4',
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                ticks: {
                    color: '#717886',
                    font: { size: 10 },
                    padding: 5,
                },
            },
        },
    },
});
watch(() => props.datasets, (datas) => updateChartDatas(datas, 0));

watch(() => props.labels, updateChartLabel);
</script>
