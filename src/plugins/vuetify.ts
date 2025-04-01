import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/styles/main.scss";

import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdiChevronDown, mdiCloseCircle } from "@mdi/js";

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#4C6FFF",
    primaryDarken: "#003660",
    secondary: "#E4ECF7",
    tertiary: "#FF92AE",
    success: "#66CB9F",
    warning: "#F7936F",
    danger: "#F16063",
    info: "#68DBF2",
  },
};

const vuetify = createVuetify({
  directives,
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      chevronDown: mdiChevronDown,
      closeCircle: mdiCloseCircle,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme: {
        ...myCustomLightTheme,
        variables: {
          fontFamily: '"Roboto", sans-serif',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variant: "flat",
      rounded: "lg",
      class: "text-capitalize",
    },
    VChip: {
      density: "comfortable",
    },
    VRow: {
      class: "ma-0",
    },
    VCol: { class: "ma-0" },
    VSelect: {
      variant: "outlined",
      rounded: "lg",
      density: "compact",
      singleLine: true,
    },
    VAutocomplete: {
      variant: "outlined",
      density: "compact",
      rounded: "lg",
      hideDetails: "auto",
    },
    VTextField: {
      variant: "outlined",
      density: "compact",
      rounded: "lg",
      hideDetails: "auto",
    },
    VFileInput: {
      variant: "outlined",
      density: "compact",
      rounded: "lg",
      hideDetails: "auto",
    },
    VCheckbox: {
      hideDetails: "auto",
    },
  },
});

export default vuetify;
