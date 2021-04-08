<template>
  <div>

    <user-dialog :show="dialogs.user" :loading="loadingDialog" @ok="submitUser" @cancel="cancelUserDialog" @deleteUser="deleteUser"></user-dialog>
    <delete-dialog :show="dialogs.delete" :loading="loadingDelete" @ok="destroyUser" @cancel="cancelDeleteDialog"></delete-dialog>

    <v-btn color="red" fixed dark fab right bottom @click="createUser">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-card class="mx-auto">
      <v-skeleton-loader :loading="loadingData" type="list-item@5" class="mx-auto">
        <v-list>

          <v-list-item v-for="user in users" :key="user.id" @click="editUser(user)">
            <v-list-item-content>
              <v-list-item-title v-text="user.username"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-if="!users.length">
            <v-list-item-content>
              <v-list-item-title class="text-center" v-text="$t('errors.no data found')"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-skeleton-loader>
    </v-card>

  </div>
</template>

<script>
export default {

  data () {
    return {
      dialogs: {
        user: false,
        delete: false
      }
    }
  },

  computed: {
    users () {
      return this.$store.getters['users/getUsers']
    },

    loadingData () {
      return this.$store.getters['common/getLoadingData']
    },

    loadingDialog () {
      return this.$store.getters['common/getLoadingDialog']
    },

    loadingDelete () {
      return this.$store.getters['common/getLoadingDelete']
    }
  },

  mounted () {
    this.$store.dispatch('users/fetchUsers').then(() => {
    })
  },

  methods: {

    submitUser (user) {
      if (user.id) {
        this.updateUser(user)
      }
      else {
        this.storeUser(user)
      }
    },

    createUser () {
      this.openUserDialog()
    },

    editUser (user) {
      this.$store.commit('users/setUser', user)
      this.openUserDialog()
    },

    deleteUser () {
      this.openDeleteDialog()
    },

    storeUser (data) {
      this.$store.dispatch('users/storeUser', data).then(() => {
        this.closeUserDialog()
        this.$store.commit('users/resetUser')
      })
    },

    updateUser (user) {
      this.$store.dispatch('users/updateUser', user).then(() => {
        this.closeUserDialog()
        this.$store.commit('users/resetUser')
      })
    },

    destroyUser () {
      this.$store.dispatch('users/destroyUser').then(() => {
        this.closeDeleteDialog()
        this.closeUserDialog()
        this.$store.commit('users/resetUser')
      })
    },

    cancelUserDialog () {
      this.closeUserDialog()
      this.$store.commit('users/resetUser')
    },

    cancelDeleteDialog () {
      this.closeDeleteDialog()
    },

    openUserDialog () {
      this.dialogs.user = true
    },

    closeUserDialog () {
      this.dialogs.user = false
    },

    openDeleteDialog () {
      this.dialogs.delete = true
    },

    closeDeleteDialog () {
      this.dialogs.delete = false
    }
  }

}
</script>
