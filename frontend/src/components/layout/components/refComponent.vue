<!-- <template>
    <h3>ref()</h3>
    <p class="mt-3">{{ refTest }}</p>

    <h3 class="mt-5">reactive()</h3>
    <p class="mt-3">{{ reactiveTest }}</p>
    <p class="mt-2">{{ reactiveTest.data }}</p>
</template>

<script setup>
import { ref, reactive } from 'vue';

const refTest = ref('.value 붙이지 않아도 언래핑 자동');

const reactiveTest = reactive({
    data: '객체'
})
</script> -->

<template>
    <div>
        <p ref="message">{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello, Vue!",
        };
    },
    mounted() {
        setTimeout(() => {
            const messageElement = this.$refs.message;
            console.log(messageElement.textContent);
        }, 1000);
    },
};
</script>

<!-- 
<template>
    <div>
      <p ref="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue!",
      };
    },
    mounted() {
      // nextTick을 사용하여 DOM 업데이트를 기다린 후에 작업 실행
      this.$nextTick(() => {
        const messageElement = this.$refs.message;
        console.log(messageElement);
      });
    },
  };
  </script> -->