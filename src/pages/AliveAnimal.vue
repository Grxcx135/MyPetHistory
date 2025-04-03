<template>
  <v-container fluid class="pa-0">
    <v-card
      rounded="0"
      height="20vh"
      class="d-flex align-center justify-center"
    >
      <h2>Alive</h2>
    </v-card>
    <v-card class="bg-secondaryLighten1" height="80vh">
      <v-row class="text-center">
        <v-col
          ><v-card>
            <v-img src="/public/cat.webp" height="300px"> </v-img>
            <p>Cat</p></v-card
          ></v-col
        >
        <v-col
          ><v-card
            ><v-img src="/public/bird.webp" height="300px"> </v-img>
            <p>Bird</p></v-card
          ></v-col
        >
        <v-col
          ><v-card
            ><v-img src="/public/rodent.webp" height="300px"> </v-img>
            <p>Rodent</p></v-card
          ></v-col
        >
      </v-row>
    </v-card>
  </v-container>
</template>
