<template>
    <v-app class="no_dot">
        <v-container fluid>
            <TabComponent />
        </v-container>
    </v-app>
</template>

<script setup>
import MainLayout from './components/layout/MainLayout.vue'
import TabComponent from './components/layout/TabComponent.vue';

</script>

<style scoped>
.no_dot {
    list-style-type: none;
}
</style>
