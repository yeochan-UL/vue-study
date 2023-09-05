import Chart from 'chart.js/auto';
import { ref, onMounted, nextTick } from 'vue';


const setup = (props) => {
    let chart = ref(null);

    const chartElement = ref();

    // 초기 차트 설정
    const initChart = () => {
        if (chartElement.value) {
            chart = new Chart(chartElement.value, {
                type: props.type,
                data: {
                    datasets: props.datasets,
                    labels: props.labels,
                },
                options: props.options,
            });
        }
    };

    // 차트의 데이터를 변경
    const updateChartDatas = (datas, index) => {
        if (!chart || !chart.data.datasets[index]) {
            return;
        }
        
        chart.data.datasets[index].data = datas;
        // chart.js 내장 함수인 update
        chart.update();
    }

    // 차트의 라벨을 변경
    const updateChartLabel = (labels) => {
        if(!chart) {
            return;
        }

        chart.data.labels = labels;
        // chart.js 내장 함수인 update
        chart.update();
    }

    // lifecycle 마운트가 완료 되고 async -> await 데이터가 들어오면 그때 initChart를 실행한다.
    onMounted(async () => {
        await nextTick()
        initChart();
    });

    return {
        chartElement,
        updateChartDatas,
        updateChartLabel
    };
}
export default setup;