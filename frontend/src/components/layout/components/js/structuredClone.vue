<template>
    <h2>structuredClone() 깊은 복사 메소드</h2>
    
    <h4 class="mt-8">원본 객체 입니다.</h4>
    <p class="mt-3">
        {{ original }}
    </p>
    <h4 class="mt-8">structuredClone으로 <br> 깊은 복사를 진행한 후 변경을 한 객체입니다.</h4>
    <p class="mt-3">
        {{ clone }}
    </p>
</template>

<script setup>
const original = {
    objectName: { age: "31", address: "군포시" },
    name: "윤여찬",
};

const clone = structuredClone(original);

clone.objectName.age = "20";
clone.name = "여찬윤";
</script>
