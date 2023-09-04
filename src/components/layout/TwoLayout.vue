<template>
    <h2 style="margin-top: 30px;">질병관리청_코로나19 국내발생현황</h2>
    {{ resData }}
   <v-btn style="margin-top: 40px;" @click="getData">요청</v-btn>
</template>

<script setup>
import { ref, watch } from 'vue';
import request from 'axios';

let resData = ref({
    cnt8: '',
    mmdd8: '',
    cnt7: '',
    mmdd7: '',
    cnt6: '',
    mmdd6: '',
    cnt5: '',
    mmdd5: '',
    cnt4: '',
    mmdd4: '',
    cnt3: '',
    mmdd3: '',
    cnt2: '',
    mmdd2: '',
    cnt1: '',
    mmdd1: ''
});

const datas = ref();

const getData = async (params) => {
    const url = "http://apis.data.go.kr/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson?serviceKey=qGgEFX9oODY%2BXEvbfmXwl%2FiG5K6Eth8EoARTEvua8g3ms%2BHfRxhmEOeHaLYPYzEQNHf6MkQgKHbdDf7mefTrDA%3D%3D"
    // 데이터를 받아왔어 그럼 이걸 가공해야 어떻게? 분류해야함 cnt는 cnt 대로 그리고 mmdd는 mmdd로
    // 어떻게? 받아온 데이터가 현재 통 객체에 담겨있음
    // 객체를 순회하며 cnt와 mmdd를 기준으로 다른 배열로 담아 value값만
    // 그럼 그 벨류를 bar와 line에 내려주면됨
    const { data: response } = await request.get(url, { params });

    Object.entries(resData.value).forEach(([key, value]) => console.log(`${key}: ${value}`));
    resData.value = response.response.result[0]

    return resData
};

watch(resData, (data1, data2) => {
    console.log(data1, data2, 'watch가 변경을 감지함');
});
</script>