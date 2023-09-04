<!-- emit, props -->
<template>
    <div>
        <h3
            style="margin-bottom: 10px; width: 300px;"
        >Radio Study</h3>
        <p
            style="margin-bottom: 15px;"
        >emit과 props로 컴포넌트 데이터 주고 받기</p>
        <radioGroup
            name="radioGroup"
            :options="options"
            @handlerRadio="onClick"
        />
        <div style="margin-top: 20px;">
            {{ clickItem }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const clickItem = ref('');

const options = [
    {
        id: 0,
        label: 'frontend'
    },
    {
        id: 1,
        label: 'backend'
    },
    {
        id: 2,
        label: 'server'
    },
]

const onClick = (e) => {
    clickItem.value = e
}
</script>
