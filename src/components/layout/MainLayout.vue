<template>
    <v-system-bar window>
        <h3>vue-study</h3>
        <v-icon icon="mdi-wifi-strength-4"></v-icon>
        <v-icon icon="mdi-signal" class="ms-2"></v-icon>
        <v-icon icon="mdi-battery" class="ms-2"></v-icon>

        <span class="ms-2">{{ currentTime }}</span>
    </v-system-bar>
    <!-- <EmitStudy /> -->
    <div style="display: flex;">
      <div style="margin: 10px;">
        <TestComponent />
      </div>
      <div style="margin: 10px;">
        <vueComponent />
      </div>
    </div>
    <div style="display: flex;">
      <div style="margin: 10px;">
        <VModelLayout />
      </div>
      <div style="margin: 10px;">
        <DMComponent />
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import EmitStudy from './EmitStudy.vue';
import vueComponent from './vueComponent.vue';
import dayjs from "dayjs";
import VModelLayout from './VModelLayout.vue';
import DMComponent from './DMComponent.vue';
import TestComponent from './TestComponent.vue';

const currentTime = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));

const updateCurrentTime = () => {
  currentTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
};

onMounted(() => {
  setInterval(updateCurrentTime, 1000);
});
</script>