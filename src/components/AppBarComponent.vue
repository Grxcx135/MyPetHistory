<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list-item>
          <template v-slot:append>
            <v-btn icon="$home" variant="text"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="$home"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="$home"
            title="My Account"
            value="account"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
</script>
