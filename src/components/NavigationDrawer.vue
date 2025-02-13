<script >



export default {
  data() {
    return {
      activeTab: 0,
      openAddItemDialog: false,
      newItem: {item: "", price: [5, 30], link: "", type: "", status: "New"},
      selectedItems: [],
      openWelcomeDialog: true,

      drawer: true,

      itemRules: [v => !!v || "Item Name is required"],
      typeRules: [v => !!v || "Item Type is required"],
      linkRules: [v => !!v || "Item Link is required"],
      user1: [
        {item: "Item 1", price: [10, 30], link: "https://example.com", type: "Type 1", status: "Active"}
      ],
      user2: [
        {item: "Item 2", price: [40, 60], link: "https://example.com", type: "Type 2", status: "Pending"}
      ]
    };
  },
  components: {

  },
  computed: {
  },
  methods: {

    goToLogin() {
      this.$router.push("/")
    },
    goToUser() {
      this.$router.push("/user")
    },
    goToSettings() {
      this.$router.push("/settings")

    }
  }
}

</script>

<template>
  <v-navigation-drawer elevation="16" app>
    <v-list>
      <v-list-item @click="goToUser">
        Profile
      </v-list-item>
      <v-list-item @click="goToSettings">
        Settings
      </v-list-item>
      <v-col>
        <v-btn @click="goToLogin">Log out</v-btn>
      </v-col>
    </v-list>
  </v-navigation-drawer>
</template>

