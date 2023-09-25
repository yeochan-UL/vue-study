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
                <v-tab value="refReactive">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                    Ref(), Reactive()
                </v-tab>
                <v-tab value="nextTick">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                    nextTick()
                </v-tab>
                <v-tab value="event">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                        key event
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
                
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="refReactive">
                    <v-card flat>
                        <v-card-text>
                            <RefReactiveComponent />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="nextTick">
                    <v-card flat>
                        <v-card-text>
                            <NextTickComponent />
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
            </v-window>
        </div>
    </v-card>
</template>
  
<script setup>
import { ref } from 'vue';

import KeyComponent from './components/vue/KeyComponent.vue';
import EventComponent from './components/vue/EventComponent.vue';
import WatchComponent from './components/vue/WatchComponent.vue';
import RefReactiveComponent from './components/vue/RefReactiveComponent.vue';
import NextTickComponent from './components/vue/NextTickComponent.vue';
const tab = ref(null);
</script>
