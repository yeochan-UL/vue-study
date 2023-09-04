<template>
    <v-app class="no_dot">
        <v-container fluid>
            <MainLayout />
        </v-container>
    </v-app>
</template>

<script setup>
import MainLayout from './components/layout/MainLayout.vue'

</script>

<style scoped>
.no_dot {
    list-style-type: none;
}
</style>
