<template>
  <v-dialog v-model="show" max-width="600px" persistent>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <v-card>

        <v-card-title>
          <span class="headline">{{ user.id ? $t('dialogs.titles.edit') : $t('dialogs.titles.create') }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>

            <v-row>
              <v-col cols="12" sm="6" md="6">
                <validation-provider v-slot="{ errors }" rules="required" name="name">
                  <v-text-field v-model="user.name" :error-messages="errors" :label="`${$t('dialogs.fields.name')}*`" required></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <validation-provider v-slot="{ errors }" rules="required" name="username">
                  <v-text-field v-model="user.username" :error-messages="errors" :label="`${$t('dialogs.fields.username')}*`" required></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <validation-provider v-slot="{ errors }" rules="" name="website">
                  <v-text-field v-model="user.website" :error-messages="errors" :label="`${$t('dialogs.fields.website')}`"></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" md="6">
                <validation-provider v-slot="{ errors }" rules="required|email" name="email">
                  <v-text-field v-model="user.email" :error-messages="errors" :label="`${$t('dialogs.fields.email')}*`" required></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <validation-provider v-slot="{ errors }" rules="" name="phone">
                  <v-text-field v-model="user.phone" :error-messages="errors" :label="`${$t('dialogs.fields.phone')}`"></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

          </v-container>
          <small>
            {{ $t('dialogs.strings.indicates required field') }}
          </small>
        </v-card-text>

        <v-card-actions>
          <v-btn v-if="user.id" color="red" text @click="deleteUser">
            {{ $t('dialogs.buttons.delete') }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="cancel">
            {{ $t('dialogs.buttons.cancel') }}
          </v-btn>
          <v-btn color="primary" :loading="loading" @click.stop="handleSubmit(ok)">
            {{ user.id ? $t('dialogs.buttons.update') : $t('dialogs.buttons.create') }}
          </v-btn>
        </v-card-actions>

      </v-card>
    </validation-observer>
  </v-dialog>
</template>

<script>
export default {

  props: {
    show: {
      type: Boolean,
      required: false,
      default: false
    },

    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    user () {
      return { ...this.$store.getters['users/getUser'] }
    }
  },

  methods: {
    cancel () {
      this.$refs.observer.reset()
      this.$emit('cancel')
    },

    ok () {
      this.$refs.observer.reset()
      this.$emit('ok', this.user)
    },

    deleteUser () {
      this.$emit('deleteUser')
    }

  }

}
</script>
