<template>
    <div>
      <!-- 이미지 추가 버튼 -->
      <v-btn dark color="blue" class="mb-5" @click="addImage">설비 추가</v-btn>
      <!-- 이미지 목록을 렌더링 -->
      <div class="imgBox">
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
  
  const imageList = ref([
    { src: 'work-on.gif', alt: '이미지 1', width: 150, height: 150 },
  ]);
  
  const addImage = () => {
    // 이미지 추가 버튼 클릭 시 새 이미지 데이터 추가
    imageList.value.push({
      src: 'work-on.gif', // 새 이미지의 경로 (public 디렉터리 기준)
      alt: '새 이미지',     // 새 이미지의 대체 텍스트
      width: 150,            // 초기 너비
      height: 150,           // 초기 높이
    });
  };
  </script>
  
  <style>
  .imgBox {
    height: 600px;
    width: 800px;
    position: relative;
    background-image: url(/images/line.png);
  }
  </style>
  