<template>
  <div>
    <TopBar @toggle-drawer="drawer = !drawer" />
    <NavigationDrawer v-model="drawer"></NavigationDrawer>
    <WelcomeDialog :dialog="openWelcomeDialog"></WelcomeDialog>




    <!-- Main Content -->
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card class="elevation-13">
            <v-tabs v-model="activeTab">
              <v-tab v-for="(user, index) in users" :key="index">
                {{ user.personalInfo.firstName }}
              </v-tab>
            </v-tabs>
            <v-table>
              <thead>
              <tr>
                <th class="text-left">Item</th>
                <th class="text-left">Price</th>
                <th class="text-left">Link</th>
                <th class="text-left">Type</th>
                <th class="text-left">Status</th>
                <th class="text-left">Select</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in filteredItems" :key="index">
                <td>{{ item.item }}</td>
                <td>{{ item.price[0] }} - {{ item.price[1] }} €</td>
                <td><a :href="item.link" target="_blank">{{ item.link }}</a></td>
                <td>{{ item.type }}</td>
                <td><v-chip>{{ item.status }}</v-chip></td>
                <td>
                  <v-checkbox v-model="selectedItems" :value="index"></v-checkbox>
                </td>
              </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>

        <!-- Actions Panel -->
        <v-col cols="4">
          <v-card class="pa-4" elevation="13">
            <v-card-title>Actions</v-card-title>
            <v-card-text>
              <v-btn color="orange" block class="mb-2" @click="openAddItemDialog = true">
                ADD ITEM
              </v-btn>
              <v-btn color="red" block class="mb-2" @click="deleteSelectedItems">
                DELETE SELECTED
              </v-btn>
              <v-btn color="green" block class="mb-2" @click="buySelectedItems">
                BUY SELECTED
              </v-btn>
            </v-card-text>

          </v-card>
          <v-col cols="6"></v-col>
          <v-card class="pa-4">
            <ChatView ref="chatComponent" />
          </v-card>
        </v-col>

      </v-row>


    </v-container>

    <!-- Dialog: Add Item -->
    <v-dialog v-model="openAddItemDialog" max-width="500px">
      <v-card elevation="12" class="pa-4">
        <v-card-title class="text-center">Add Item</v-card-title>
        <v-card-text>
          <v-text-field v-model="newItem.item" label="Item" :rules="itemRules"></v-text-field>
          <v-text-field v-model="newItem.link" label="Link" :rules="linkRules"></v-text-field>

          <v-range-slider
              v-model="newItem.price"
              :min="5"
              :max="45"
              step="5"
              thumb-label="always"
          ></v-range-slider>

          <v-autocomplete
              v-model="newItem.type"
              clearable
              label="Type"
              :items="['Type 1', 'Type 2']"
              :rules="typeRules"
          ></v-autocomplete>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="red" @click="openAddItemDialog = false">Cancel</v-btn>
          <v-btn color="green" @click="addItem">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>



</template>

<script>
import ChatView from "@/components/ChatView.vue";
import TopBar from "@/components/TopBar.vue";

import NavigationDrawer from "@/components/NavigationDrawer.vue";
import WelcomeDialog from "@/components/WelcomeDialog.vue";
import {users} from "@/data/userData"

export default {
  data() {
    return {
      activeTab: 0,
      openAddItemDialog: false,
      newItem: {item: "", price: [5, 30], link: "", type: "", status: "New"},
      selectedItems: [],
      users,
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
    WelcomeDialog,
    NavigationDrawer,
    ChatView,
    TopBar,
  },
  computed: {
    filteredItems() {
      return this.activeTab === 0 ? this.user1 : this.user2;
    }
  },
  methods: {
    addItem() {
      if (this.activeTab === 0) {
        this.user1.push({...this.newItem});
      } else {
        this.user2.push({...this.newItem});
      }
      this.resetNewItem();
      this.openAddItemDialog = false;
    },
    deleteSelectedItems() {
      if (this.activeTab === 0) {
        this.user1 = this.user1.filter((_, index) => !this.selectedItems.includes(index));
      } else {
        this.user2 = this.user2.filter((_, index) => !this.selectedItems.includes(index));
      }
      this.selectedItems = [];
    },
    buySelectedItems() {
      if (this.activeTab === 0) {
        this.user1.forEach((item, index) => {
          if (this.selectedItems.includes(index)) {
            item.status = "Bought";

          }
        });
      } else {
        this.user2.forEach((item, index) => {
          if (this.selectedItems.includes(index)) {
            item.status = "Bought";
          }
        });
      }
      this.selectedItems = [];
    },
    resetNewItem() {
      this.newItem = {item: "", price: [20, 40], link: "", type: "", status: "New"};

    }
  }
}

</script>
<style scoped>

</style>