<template>
    <v-card style="padding: 20px;">
        <template v-slot:title>
            질병관리청_코로나19 국내발생현황
        </template>
        <template v-slot:subtitle>
            공공 Api에서 받아와 Bar, Line 컴포넌트를 활용하여 그려낸 chart입니다.
        </template>
        <div style="display: flex; justify-self: center;">
            <Bar 
                style="margin-top: 30px; width: 500px; height: 100%;"
                :labels="mmddArray"
                :datasets="cntArray"
            />
            <Line 
                style="margin-top: 30px; width: 500px; height: 100%; margin-left: 50px;"
                :labels="mmddArray"
                :datasets="cntArray"
            />
        </div>
        <h3 style="margin-top: 40px;">
            들어오는 데이터 형식 : <span class="spanLayout">{{ resData }}</span>   
        </h3>
        <h3 class="pt-5">
            가공 된 데이터 : 
            <span class="spanLayout">{{ cntArray }}</span>
            <span class="spanLayout">{{ mmddArray }}</span>
        </h3>
    </v-card>
</template>

<script setup>
import Bar from '../module/Bar.vue'
import Line from '../module/Line.vue'
import { ref, watch, onMounted, nextTick } from 'vue';
import request from 'axios';

let resData = ref({});

const getData = async (params) => {
    const url = "http://apis.data.go.kr/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson?serviceKey=qGgEFX9oODY%2BXEvbfmXwl%2FiG5K6Eth8EoARTEvua8g3ms%2BHfRxhmEOeHaLYPYzEQNHf6MkQgKHbdDf7mefTrDA%3D%3D"

    const { data: response } = await request.get(url, { params });

    // LIMITED_NUMBER_OF_SERVICE_REQUESTS_EXCEEDS_ERROR : 서비스 요청 수 초과 에러
    resData.value = response.response.result[0];
};

onMounted(async () => {
    await nextTick()
    getData();
});

let cntArray = ref([
    {
        data: new Array(7).fill(0),
        backgroundColor: '#0099FF',
    },
]);

let mmddArray = ref([]);

watch(resData, (data1, data2) => {
    // data1 : 새로운 데이터, data2 : 이전 데이터
    console.log(data1,'새로운 데이터', data2, '이전 데이터');

    let cnt = [];
    let mmdd = [];

    if(data1) {
        for(let key in data1) {
            if (key.startsWith("cnt")) {
                if(key !== "cnt8") {
                    cnt.push(data1[key]);
                }
            } else if(key.startsWith("mmdd")) {
                mmdd.push(data1[key]);
            }
        }
    }

    // datasets
    cntArray = cnt;
    // labels
    mmddArray = mmdd.filter(item => !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(item));
});
</script>

<style>
.spanLayout {
    font-weight: 300;
}
</style>
