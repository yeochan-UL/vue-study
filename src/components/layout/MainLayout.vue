<template>
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
import vueComponent from './vueComponent.vue';
import VModelLayout from './VModelLayout.vue';
import DMComponent from './DMComponent.vue';
import TestComponent from './TestComponent.vue';

</script>