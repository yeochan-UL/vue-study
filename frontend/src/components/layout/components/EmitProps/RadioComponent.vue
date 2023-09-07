<!-- emit, props -->
<template>
    <h3
        style="margin-bottom: 10px;"
    >Radio Study</h3>
    <p
        style="margin-bottom: 15px;"
    >emit과 props로 컴포넌트 데이터 주고 받기</p>
    <div>
        <Radio
            id="radioGroup0"
            name="radioGroup"
            value="frontend"
            @handlerRadio="onClick"
        >
            frontend
        </Radio>
    </div>
    <div>
        <Radio
            id="radioGroup1"
            name="radioGroup"
            value="backend"
            @handlerRadio="onClick"
        >
            backend
        </Radio>
    </div>
    <div>
        <Radio
            id="radioGroup2"
            name="radioGroup"
            value="server"
            @handlerRadio="onClick"
        >
            server
        </Radio>
    </div>
    <div style="margin-top: 20px;">
        {{ clickItem }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const clickItem = ref('');

const onClick = (e) => {
    console.log(e, '이벤트가 발생 되었다.');
    clickItem.value = e
};
</script>
