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
            // 마우스를 요소에 가까이 가면 바로 뜸
            intersect: false,
            /**
             * index: 가까운 인덱스를 기반으로
             * point: 마우스 포인터 가까이
             * nearest: index와 비슷하지만 다르다고하는데 뭔지 모르겠음 가까운 데이터 포인트를 이용한다고함
             * x, y : 축을 기반으로
             */ 
            mode: 'index',
        },
        maintainAspectRatio: true,
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

watch(() => props.labels, updateChartLabel);
</script>
