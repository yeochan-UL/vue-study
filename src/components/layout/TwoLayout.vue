<template>
    <h2 style="margin-top: 30px;">질병관리청_코로나19 국내발생현황</h2>
    {{ resData }}
   <v-btn style="margin-top: 40px;" @click="getData">요청</v-btn>
</template>

<script setup>
import { ref, watch } from 'vue';
import request from 'axios';

let resData = ref({
    cnt7: 0,
    mmdd7: 0,
    cnt6: 0,
    mmdd6: 0,
    cnt5: 0,
    mmdd5: 0,
    cnt4: 0,
    mmdd4: 0,
    cnt3: 0,
    mmdd3: 0,
    cnt2: 0,
    mmdd2: 0,
    cnt1: 0,
    mmdd1: 0
});

const getData = async (params) => {
    const url = "http://apis.data.go.kr/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson?serviceKey=qGgEFX9oODY%2BXEvbfmXwl%2FiG5K6Eth8EoARTEvua8g3ms%2BHfRxhmEOeHaLYPYzEQNHf6MkQgKHbdDf7mefTrDA%3D%3D"
    
    const { data: response } = await request.get(url, { params });

    resData.value = response.response.result[0]

    return resData
};

watch(resData, (data1, data2) => {
    console.log(data1, data2, 'watch가 변경을 감지함');
});
</script>