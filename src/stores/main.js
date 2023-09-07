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
                    for (const key in datas) {
                        if (key.startsWith('cnt')) {
                            if (key !== 'cnt8') {
                                cnt.push(datas[key]);
                            }
                        } else if (key.startsWith('mmdd')) {
                            mmdd.push(datas[key]);
                        }
                    }
                }

            this.cntArray[0].data = cnt;
            
            // labels
            this.mmddArray.value = mmdd.filter(item => !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(item));
            } catch (error) {
                console.log(error);
            }
        },
        async updateData() {
            try {
                datasets.value = new Array(10)
                    .fill(0)
                    .map(() => randomInt(0, 100));

                // 새로운 라벨 생성
                labels.value = new Array(10)
                    .fill('')
                    .map(
                        (value, index) => dayjs()
                            .subtract(index, 'second')
                            .format('HH:mm:ss'),
                    );
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