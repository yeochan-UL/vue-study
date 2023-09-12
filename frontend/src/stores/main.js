import { defineStore } from "pinia";
import { ref } from "vue";
import request from 'axios';

const url = 'http://apis.data.go.kr/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson?serviceKey=qGgEFX9oODY%2BXEvbfmXwl%2FiG5K6Eth8EoARTEvua8g3ms%2BHfRxhmEOeHaLYPYzEQNHf6MkQgKHbdDf7mefTrDA%3D%3D';

export const useListStore = defineStore("main",{
    state: () => ({
        resData: ref([]),
        cntArray: ref([
            {
                data: new Array(7)
                    .fill(0),
                backgroundColor: '#0099FF',
            },
        ]),
        mmddArray: ref([]),
      }),
    actions: {
        async getData(params) {
            try {
                const { data: response }  = await request.get(url, { params });

                this.resData.value = response.response.result[0];

                const cnt = [];
                const mmdd = [];

                const datas = this.resData.value

                if (datas) {
                    // key와 value를 쌍의 배열을 반환 시킨 후 forEach로 순회하며 cnt가 들어가거나 cnt8이 아닌 경우 cnt 배열에 넣도록한다. key가 mmdd로 시작하면 mmdd 배열 value를 넣는다.
                    Object.entries(datas).forEach(([key, value]) => {
                        key.startsWith('cnt') && key !== 'cnt8' ? cnt.push(value) : key.startsWith('mmdd') && mmdd.push(value);
                    });
                }

            this.cntArray[0].data = cnt;
            
            // labels
            this.mmddArray.value = mmdd.filter(item => !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(item));

            } catch (error) {
                console.log(error);
            }
        },
    },
});

export default useListStore;


/*
    // const resData = ref([]);

    // function getData() {async (params) => {
    //     const url = 'http://apis.data.go.kr/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson?serviceKey=qGgEFX9oODY%2BXEvbfmXwl%2FiG5K6Eth8EoARTEvua8g3ms%2BHfRxhmEOeHaLYPYzEQNHf6MkQgKHbdDf7mefTrDA%3D%3D';

    //     const { data: response } = await request.get(url, { params });
    //     // LIMITED_NUMBER_OF_SERVICE_REQUESTS_EXCEEDS_ERROR : 서비스 요청 수 초과 에러
    //     resData.value = response.response.result[0];
    // }};
*/
    /**
     * ref() → state
     * const count = ref(0) ← 예시 
     * computed() → getters
     * const doubleCount = computed(() => count.value * 2) ← 예시
     * function() → actions
     * function increment() {count.value++} ← 예시
     * mutation이 사라짐 
    */