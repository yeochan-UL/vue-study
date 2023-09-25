<template>
    <div style="width: 300px;">
        <h2>키 없음</h2>
        <ul style="margin-top: 20px;">
            <li
                class="inputStyle"
                v-for="item in items"
            >
                    {{ item.label }} <input style="margin-left: 60px;" type="number"/> 개
            </li>
        </ul>
        <v-btn @click="shift">버튼</v-btn>
    </div>

    <!-- 키를 추가해서 이동을 매칭을 시켜서 노드에 매칭해줌 -->
    <div style="margin-top: 30px;">
        <h2>키를 지정해주기</h2>
        <ul style="margin-top: 20px;">
            <li
                class="inputStyle"
                v-for="item in itemskey"
                :key="item.id"
                v-cloak
            >
                    {{ item.label }} <input style="margin-left: 60px;" type="number"/> 개
            </li>
        </ul>
        <v-btn @click="shiftOn">버튼</v-btn>
    </div>

    <!-- 키를 인덱스로해보자-->
    <div style="margin-top: 30px;">
        <h2>키를 인덱스로해보자</h2>
        <ul style="margin-top: 20px;">
            <li
                class="inputStyle"
                v-for="(item, index) in key"
                :key="index"
            >
                    {{ item.label }} <input :value="item.value" style="margin-left: 60px;" type="number"/> 개
            </li>
        </ul>
        <v-btn @click="shiftOns">버튼</v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: '푸바오',
        value: '0'
    },
    {
        label: '꿈돌이',
        value: '1'
    },
    {
        label: '호돌이',
        value: '2'
    },
]);

const itemskey = ref([
    {
        id: 0,
        label: '푸바오',
        value: '0'
    },
    {
        id: 1,
        label: '꿈돌이',
        value: '1'
    },
    {
        id: 2,
        label: '호돌이',
        value: '2'
    },
]);

const key = ref([
    {
        id: 0,
        label: '푸바오',
        value: '0'
    },
    {
        id: 1,
        label: '꿈돌이',
        value: '1'
    },
    {
        id: 2,
        label: '호돌이',
        value: '2'
    },
]);

const shift = () => {
    // items.value.shift();
    items.value.push(items.value.shift());
}

const shiftOn = () => {
    // itemskey.value.shift();
    itemskey.value.push(itemskey.value.shift());
}

const shiftOns = () => {
    // key.value.shift();
    key.value.push(key.value.shift());
}
</script>

<style>
.inputStyle {
    margin-bottom: 12px;
    list-style-type: none;
}
</style>