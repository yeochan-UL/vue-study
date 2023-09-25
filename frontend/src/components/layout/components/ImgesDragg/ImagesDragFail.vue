<template>
    <div
        :style="{
            width: props.width,
            height: props.height,
            backgroundColor: '#ccc',
            position: 'relative',
            overflow: 'auto',
        }"
        ref="container"
    >
        <div
            ref="draggable"
            :style="{
                userSelect: 'none',
                position: 'fixed',
                top: `${locationY}px`,
                left: `${locationX}px`,
            }"
        >
        <img 
            src= "/images/icon.png"
            style="width: 100px; height: 100px;" 
        />
        </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, computed } from 'vue';
/**
 * useDraggable: 드래그를 위해서 사용
 * useElementBounding: 위치 값을 가져오기 위해서 사용
 * clamp: 최댓값 최소값을 지정해주기 위해서 사용
 */
import { useDraggable, useElementBounding, clamp } from '@vueuse/core';

const props = defineProps([
    'width', 'height'
])

const container = ref();
const draggable = ref();

const { left, right, top, bottom } = useElementBounding(container);
const { width, height } = useElementBounding(draggable);
const { x, y } = useDraggable(draggable);

const locationX = computed(() => 
    // 1. min, 2. value, 3 max
    // x 현재, x가 left 보다 작으면 left 반환 x가 right - width 보다 크면 right-width 반환 그래서 안에서 머물게함
    clamp(left.value, x.value, right.value - width.value)
);

const locationY = computed(() =>
    // top을 기준으로 y를 min, bottom -heght가 max이다.
    clamp(top.value, y.value, bottom.value - height.value)
);


</script>