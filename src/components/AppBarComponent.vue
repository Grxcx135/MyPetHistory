<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = !rail"
        class="bg-primary"
      >
        <v-list density="compact" nav>
          <v-list-item prepend-icon="$home">
            <v-card class="pa-0 bg-primary">
              <template v-slot:append>
                <p>My Pet History</p>
              </template>
            </v-card>
          </v-list-item>

          <v-divider
            :thickness="2"
            color="white"
            class="border-opacity-75 pb-3"
          ></v-divider>

          <v-list-item class="px-0" value="alive">
            <v-card height="100%" class="d-flex flex-row">
              <v-icon icon="$home"></v-icon>
              <v-spacer></v-spacer>
              <p>alive</p>
            </v-card>
          </v-list-item>
          <v-list-item class="px-0" value="noneAlive">
            <v-card class="d-flex flex-row set-text">
              <v-icon icon="$home"></v-icon>
              <v-spacer></v-spacer>
              <p>none-alive</p>
            </v-card>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped>
.set-text {
  white-space: nowrap;
}
</style>
