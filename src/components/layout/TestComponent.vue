<template>
    <v-card>
        <v-toolbar
            color="light-blue-darken-1"
        >
            <v-toolbar-title>Experiment with features</v-toolbar-title>
        </v-toolbar>
        <div class="d-flex flex-row">
            <v-tabs
                v-model="tab"
                direction="vertical"
                color="light-blue-darken-2"
            >
                <v-tab value="line">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                        Line Chart 
                </v-tab>
                <v-tab value="bar">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                        Bar Chart 
                </v-tab>
                <v-tab value="watch">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                        watch
                </v-tab>
                <v-tab value="keytest">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                        Key
                </v-tab>
                <v-tab value="event">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                        key event
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="line">
                    <v-card flat>
                        <v-card-text>
                            <LineComponent />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="bar">
                    <v-card flat>
                        <v-card-text>
                            <BarComponent />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="watch">
                    <v-card flat>
                        <v-card-text>
                            <WatchComponent />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="keytest">
                    <v-card flat>
                        <v-card-text>
                            <KeyComponent />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="event">
                    <v-card flat>
                        <v-card-text>
                            <EventComponent />
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>
  
  <script setup>
  import { ref } from 'vue';
import BarComponent from './components/BarComponent.vue';
import LineComponent from './components/LineComponent.vue';
import KeyComponent from './components/KeyComponent.vue';
import EventComponent from './components/EventComponent.vue';
import WatchComponent from './components/WatchComponent.vue';
  const tab = ref(null);
  </script>
  