<template>
    <ImagesDrag
        height="600px"
        width="800px"
    />
    <div class="mt-10">
        <h2 class="mb-5">고정 되지 않는 문제 발생</h2>
        <p class="mb-5">해당 기능을 제작해 보았지만 아래 처럼 스크롤 시에 고정되지 않는 문제가 발생 해당 문제를 고친 부분이 위다.</p>
        <ImagesDragFail
            width="500px"
            height="500px"
        />  
    </div>
</template>

<script setup>
import ImagesDrag from './ImagesDrag.vue';
import ImagesDragFail from './ImagesDragFail.vue';
</script>