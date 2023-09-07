<template>
    <v-card>
      <v-toolbar
      color="light-blue-darken-4"
      >
        <v-toolbar-title>v-model</v-toolbar-title>
      </v-toolbar>
      <div class="d-flex flex-row">
        <v-tabs
          v-model="tab"
          direction="vertical"
          color="light-blue-darken-4"
        >
          <v-tab value="input">
            <v-icon start>
              mdi-account
            </v-icon>
              input
          </v-tab>
          <v-tab value="select">
            <v-icon start>
              mdi-account
            </v-icon>
              select
          </v-tab>
          <v-tab value="radio">
            <v-icon start>
              mdi-account
            </v-icon>
              radio
          </v-tab>
          <v-tab value="radioGroup">
            <v-icon start>
              mdi-account
            </v-icon>
              radioGroup
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="input">
            <v-card flat>
              <v-card-text>
                <VMInputComponent />
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="select">
            <v-card flat>
              <v-card-text>
                <VMSelectComponent />
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="radio">
            <v-card flat>
              <v-card-text>
                <VMRadioComponent />
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="radioGroup">
            <v-card flat>
              <v-card-text>
                <VMRadioGroupComponent />
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import VMInputComponent from './components/VModel/VMInputComponent.vue';
import VMSelectComponent from './components/VModel/VMSelectComponent.vue';
import VMRadioComponent from './components/VModel/VMRadioComponent.vue';
import VMRadioGroupComponent from './components/VModel/VMRadioGroupComponent.vue';

  
  const tab = ref(null);
  </script>
  