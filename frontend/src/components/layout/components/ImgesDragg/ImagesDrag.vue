<template>
    <h2 class="mt-2">이미지 드래그 기능 구현 🖱️</h2>
    <p class="mt-4">
        이미지가 이미지 내부에 존재하며 외부 이미지안에서 내부 이미지가 한정적으로 이동하는 기능을 구현 
        <br> 단 스크롤, 화면 크기 변경시도 내부 이미지가 그대로 그 자리 위치할 것
    </p>
    <!-- 이미지 추가 버튼 -->
    <v-btn dark color="blue" class="mb-5 mt-4" @click="addImage">설비 추가</v-btn>
    <div>
        <div
            :style="{
                height: props.height,
                width: props.width
            }"
            class="imgBox"
        >
        <!-- 이미지 목록을 렌더링 -->
            <vue-draggable-resizable
                v-for="(image, index) in imageList"
                :key="index"
                :w="image.width"
                :h="image.height"
                :parent="true"
                :resizable="false"
            >
                <img
                    style="width: 150px; height: 150px; border: 3px solid #49cfd7;"
                    :src="`/images/${image.src}`" 
                    :alt="image.alt"
                />
            </vue-draggable-resizable>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps([
    'width', 'height'
])

const imageList = ref([
    { src: 'work-on.gif', alt: 'image', width: 150, height: 150 },
]);

const addImage = () => {
    // 이미지 추가 버튼 클릭 시 새 이미지 데이터 추가
    imageList.value.push({
        src: 'work-on.gif',
        alt: 'image',
        width: 150,
        height: 150,
    });
};
</script>

<style>
.imgBox {
    position: relative;
    background-image: url(/images/line.png);
}
</style>
