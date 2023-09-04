<template>
  <v-card>
    <v-toolbar
      color="light-blue-darken-2"
    >
      <v-toolbar-title>emit, props</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        direction="vertical"
        color="light-blue-darken-2"
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
        <v-tab value="checkbox">
          <v-icon start>
            mdi-account
          </v-icon>
            checkbox
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="input">
          <v-card flat>
            <v-card-text>
              <InputComponent />
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="select">
          <v-card flat>
            <v-card-text>
              <SelectComponent />
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="radio">
          <v-card flat>
            <v-card-text>
              <RadioComponent />
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="radioGroup">
          <v-card flat>
            <v-card-text>
              <RadioGroupComponent />
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="checkbox">
          <v-card flat>
            <v-card-text>
              <CheckboxComponent />
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import InputComponent from '../layout/components/EmitProps/inputcomponent.vue'
import RadioComponent from '../layout/components/EmitProps/RadioComponent.vue'
import SelectComponent from '../layout/components/EmitProps/SelectComponent.vue'
import RadioGroupComponent from '../layout/components/EmitProps/RadioGroupComponent.vue'
import CheckboxComponent from '../layout/components/EmitProps/CheckboxComponent.vue'


const tab = ref(null);
</script>
