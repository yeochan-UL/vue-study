<template>
    <h3 class="mt-2">nextTick() 함수 예제</h3>
    <v-btn color="blue" class="mt-5" id="counter" @click="increment">{{ count }}</v-btn>
    <div class="mt-5" style="background-color: #000;">
        <p style="text-align: left; color: #fff; padding: 15px;">
            async function increment() { <br>
                &nbsp; count.value++ <br>
                <br>
                <span style="color: chartreuse;">&nbsp; // 아직 DOM 업데이트되지 않음. <br></span>
                console.log("----before DOM update----"); <br>
                &nbsp; console.log(document.getElementById('counter').textContent)<br>
                <br>
                &nbsp; await nextTick() <br>
                <br>
                <span style="color: chartreuse;">&nbsp; // DOM 업데이트됨. <br></span>
                &nbsp; console.log(document.getElementById('counter').textContent) <br>
                console.log("----after DOM update----");
            }
        </p>
    </div>
</template>
  
<script setup>
import { ref, nextTick } from 'vue'

const count = ref(0)

async function increment() {
    count.value++


    // 아직 DOM 업데이트되지 않음.
    console.log("----before DOM update----");
    console.log(document.getElementById('counter').textContent) // 0

    await nextTick()
    // 이제 DOM 업데이트됨.
    console.log(document.getElementById('counter').textContent) // 1
    console.log("----after DOM update----");
}
</script>