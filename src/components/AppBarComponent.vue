<template>
  <v-container fluid class="pa-0">
    <v-layout>
      <v-app-bar color="primary elevation-0">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="$chevronDown" variant="text"></v-btn>

          <v-btn icon="$chevronDown" variant="text"></v-btn>
        </template>

        <v-btn icon="$chevronDown" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          :items="[
            {
              title: 'Foo',
              value: 'foo',
            },
            {
              title: 'Bar',
              value: 'bar',
            },
            {
              title: 'Fizz',
              value: 'fizz',
            },
            {
              title: 'Buzz',
              value: 'buzz',
            },
          ]"
        ></v-list>
      </v-navigation-drawer>
      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-layout>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";
const drawer = ref(false);
</script>
