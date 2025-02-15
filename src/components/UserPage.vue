<script>
import TopBar from "@/components/TopBar.vue";
import { users } from "@/data/userData";

export default {
  components: { TopBar },
  data() {
    return {
      user: {},
      editMode: false,
    };
  },
  created() {

    const userId = localStorage.getItem('userId');
    if (userId) {
      this.user = users.find(user => user.id === userId);
    } else {
      this.$router.push('/login');
    }
  },
  methods: {
    toggleEdit() {
      this.editMode = !this.editMode;
    },
    saveChanges() {
      this.editMode = false;

      console.log('Changes saved', this.user);
    },
  },
};
</script>


<template>
  <TopBar />

  <v-container class="d-flex justify-center">
    <v-card width="400px" class="pa-4">
      <v-list>
        <v-list-item>
          <v-text-field v-model="user.personalInfo.firstName" :disabled="!editMode" label="Name"></v-text-field>
          <v-text-field v-model="user.personalInfo.lastName" :disabled="!editMode" label="Nachname"></v-text-field>
          <v-text-field v-model="user.email" :disabled="!editMode" label="Email"></v-text-field>
        </v-list-item>
      </v-list>

      <v-row class="mt-2">
        <v-col>
          <v-btn color="primary" @click="toggleEdit">
            {{ editMode ? "Cancel" : "Edit" }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn color="success" :disabled="!editMode" @click="saveChanges">
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

