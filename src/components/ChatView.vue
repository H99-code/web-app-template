<template>
  <v-card class="pa-4">
    <v-card-title>Chat</v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item v-for="(msg, index) in messages" :key="index">
          <v-list-item-title>{{ msg }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-text-field
          v-model="newMessage"
          label="Nachricht schreiben..."
          outlined
          dense
          class="flex-grow-1"
          @keyup.enter="sendMessage"
      ></v-text-field>
      <v-btn color="blue" @click="sendMessage">Senden</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "",
      messages: [],
    };
  },
  mounted() {

    this.messages.push("Willkommen im Chat!");
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push(this.newMessage);
        this.newMessage = "";
      }
    }
  }
};
</script>
