<template>
    <v-system-bar window color="light-blue-darken-1">
        <span class="ms-2">{{ currentTime }}</span>
    </v-system-bar>
    <div>
        <v-tabs  v-model="tab">
            <v-tab value="imgDarag">Drag images</v-tab>
            <v-tab value="jsStudy">javascript study</v-tab>
            <v-tab value="vueStudy">VUE3 STUDY</v-tab>
            <v-tab value="vueApiStudy">Chart Study</v-tab>
            <v-tab value="vueSoketIo">SoketIo</v-tab>
        </v-tabs>
        <v-window  v-model="tab">
            <v-window-item value="imgDarag">
            <v-card flat>
                <v-card-text>
                <ImagesDragComponent />
                </v-card-text>
            </v-card>
            </v-window-item>
            <v-window-item value="jsStudy">
            <v-card flat>
                <v-card-text>
                <JsStudyComponent />
                </v-card-text>
            </v-card>
            </v-window-item>
            <v-window-item value="vueStudy">
            <v-card flat>
                <v-card-text>
                <MainLayout />
                </v-card-text>
            </v-card>
            </v-window-item>
            <v-window-item value="vueApiStudy">
            <v-card flat>
                <v-card-text>
                <CovidChartComponent />
                </v-card-text>
            </v-card>
            </v-window-item>
            <v-window-item value="vueSoketIo">
            <v-card flat>
                <v-card-text>
                <SoketComponent />
                </v-card-text>
            </v-card>
            </v-window-item>
        </v-window>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dayjs from "dayjs";
import MainLayout from './MainLayout.vue';
import CovidChartComponent from './CovidChartComponent.vue';
import JsStudyComponent from './JsStudyComponent.vue';
import SoketComponent from './SoketComponent.vue';
import ImagesDragComponent from './components/ImgesDragg/ImagesDragComponent.vue';

const currentTime = ref(dayjs().format('YYYY년MM월DD일 HH시mm분ss초'));

const updateCurrentTime = () => {
  currentTime.value = dayjs().format('YYYY년MM월DD일 HH시mm분ss초');
};

onMounted(() => {
  setInterval(updateCurrentTime, 1000);
});

const tab = ref(null);
</script>