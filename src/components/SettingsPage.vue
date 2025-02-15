<script>
import TopBar from "@/components/TopBar.vue";

export default {
  components: {TopBar},
  data() {

    return {
      components: TopBar,
      selectedTheme: "darkmode",
      selectedLanguage: "englisch",
      themeSettings: ["Light Mode", "Dark Mode", "System"],
      languageSettings: ["Deutsch", "Englisch", "Französisch"],
    };
  },
  methods: {
    updateTheme() {
      console.log("Theme geändert zu:", this.selectedTheme);

    },
    updateLanguage() {
      console.log("Sprache geändert zu:", this.selectedLanguage);

    },
  },
};
</script>

<template>
  <TopBar/>
  <v-container class="d-flex justify-center">
    <v-card width="400px" class="pa-4">
    <v-list>
      <v-combobox
          label="Change Theme"
          v-model="selectedTheme"
          :items="themeSettings"
          @update:modelValue="updateTheme"
      ></v-combobox>

      <v-combobox

          label="Change Language"
          v-model="selectedLanguage"
          :items="languageSettings"
          @update:modelValue="updateLanguage"
      ></v-combobox>
    </v-list>
  </v-card>
    </v-container>
</template>
