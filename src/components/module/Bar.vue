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
                beginAtZero: true,
                grid: {
                    color: '#dedfe4',
                    drawTicks: false,
                },
                min: 0,
                max: 100,
                // x 축 텍스트
                ticks: {
                    backdropPadding: 0,
                    color: '#717886',
                    font: { size: 12 },
                    padding: 2,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#dedfe4',
                    drawOnChartArea: false,
                    drawTicks: false,
                },
                // y 축 텍스트
                ticks: {
                    backdropPadding: 0,
                    color: '#717886',
                    font: { size: 10 },
                    padding: 5,
                },
            },
        },
    },
});

watch(() => props.datasets, ((datas) => {
    // console.log(datas, '들어오는 데이터');
    updateChartDatas(datas, 0)
}));

watch(() => props.labels, updateChartLabel);
</script>
