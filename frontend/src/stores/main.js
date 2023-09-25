import { defineStore } from "pinia";
import { ref } from "vue";
import request from 'axios';

// 예외 처리

const url = 'http://apis.data.go.kr/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson?serviceKey=qGgEFX9oODY%2BXEvbfmXwl%2FiG5K6Eth8EoARTEvua8g3ms%2BHfRxhmEOeHaLYPYzEQNHf6MkQgKHbdDf7mefTrDA%3D%3D';

export const useListStore = defineStore("main", {
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
                    // Object.entries(datas).forEach(([key, value]) => {
                    //     key.startsWith('cnt') && key !== 'cnt8' ? cnt.push(value) : key.startsWith('mmdd') && mmdd.push(value);
                    // });
                        
                    // 리듀스 를 사용해서 해보자. --- 미션  
                    Object.entries(datas).reduce((acc, [key, value]) => {
                        key.startsWith('cnt') ? cnt.push(value) : key.startsWith('mmdd') && mmdd.push(value);
                    })
                }

            this.cntArray[0].data = cnt;
            
            // labels
            this.mmddArray.value = mmdd.filter(item => !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(item));

            } catch (error) {
                console.log(error, '에러 메세지');
            }
        },
    },
});

export default useListStore;