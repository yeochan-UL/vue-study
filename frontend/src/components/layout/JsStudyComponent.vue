<template>
    <v-card>
        <v-toolbar
            color="blue-accent-2"
        >
            <v-toolbar-title>Javascript</v-toolbar-title>
        </v-toolbar>
    <div class="d-flex flex-row">
        <v-tabs
            v-model="tab"
            direction="vertical"
            color="blue-accent-2"
        >
            <v-tab value="option-1">
                <v-icon start>
                    mdi-account
                </v-icon>
                structuredClone()
            </v-tab>
            <v-tab value="option-2">
                <v-icon start>
                    mdi-lock
                </v-icon>
                Option 2
            </v-tab>
            <v-tab value="option-3">
                <v-icon start>
                    mdi-access-point
                </v-icon>
                Option 3
            </v-tab>
        </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="option-1">
            <v-card flat>
                <v-card-text>
                <structuredClone />
                </v-card-text>
            </v-card>
        </v-window-item>
        <v-window-item value="option-2">
            <v-card flat>
                <v-card-text>
                </v-card-text>
            </v-card>
        </v-window-item>
        <v-window-item value="option-3">
            <v-card flat>
                <v-card-text>
                </v-card-text>
            </v-card>
        </v-window-item>
    </v-window>
    </div>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import structuredClone from './components/js/structuredClone.vue';

const tab = ref('option-1');
</script>

