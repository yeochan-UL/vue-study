<!-- emit, props -->
<!-- <template>
    <h3
        style="margin-bottom: 10px;"
    >Checkbox Study</h3>
    <p
        style="margin-bottom: 15px;"
    >emit과 props로 컴포넌트 데이터 주고 받기</p>
    <Checkbox 
        v-for="option in options"
        :key="option.id"
        :value="option.label"
        :id="option.id"
        @checked="onClick"
    >
        {{ option.label }}
    </Checkbox>
    <div>
        {{ checks }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checkValue = ref([]);
const checks = ref([]);

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
    if (checkValue.value.includes(e)) {
        checkValue.value = checkValue.value.filter(item => item !== e);
    } else {
        checkValue.value.push(e);
    }
    
    updateChecks();
}

const updateChecks = () => {
    checks.value = checkValue.value.filter(Boolean);
}
</script> -->

<!-- v-model -->
<template>
    <h3
        style="margin-bottom: 10px;"
    >Checkbox Study</h3>
    <p
        style="margin-bottom: 15px;"
    >v-model 컴포넌트 데이터 주고 받기</p>
    <Checkbox 
        v-for="option in options"
        :key="option.id"
        :value="option.label"
        :id="option.id"
        :checked="option.checked"
        v-model:checkboxClick="checkboxClick"
        @click="onClick"
    >
        {{ option.label }}
    </Checkbox>
    <div>
        {{ checks }}
        {{ checkboxClick }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checkboxClick = ref([]);
const checkValue = ref([]);
const checks = ref([]);

const options = [
    {
        id: 0,
        label: 'frontend',
        checked: false
    },
    {
        id: 1,
        label: 'backend',
        checked: false
    },
    {
        id: 2,
        label: 'server',
        checked: false
    },
]

const onClick = (e) => {
    if (checkValue.value.includes(e.target.value)) {
        checkValue.value = checkValue.value.filter(item => item !== e.target.value);
    } else {
        checkValue.value.push(e.target.value);
    }
    
    updateChecks();
}

const updateChecks = () => {
    checks.value = checkValue.value.filter(Boolean);
}
</script>