<template>
  <v-dialog v-model="show" max-width="290" persistent>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <v-card>

        <v-card-title class="headline">
          {{ $t('dialogs.titles.login') }}
        </v-card-title>

        <v-card-text>
          <v-container>

            <v-row>
              <v-col cols="12">
                <validation-provider v-slot="{ errors }" rules="required" name="username">
                  <v-text-field v-model="login.username" required :label="$t('dialogs.fields.username')" :error-messages="errors"></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <validation-provider v-slot="{ errors }" rules="required" name="password">
                  <v-text-field v-model="login.password" required :label="$t('dialogs.fields.password')" :error-messages="errors" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" @click:append="showPassword = !showPassword"></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row v-show="error">
              <v-col cols="12">
                <p class="text-caption red--text">
                  {{ $t('errors.username or password in incorrect') }}
                </p>
              </v-col>
            </v-row>

          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancel">
            {{ $t('dialogs.buttons.cancel') }}
          </v-btn>
          <v-btn color="primary" @click.stop="handleSubmit(userLogin)">
            {{ $t('dialogs.buttons.login') }}
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
    }
  },

  data () {
    return {
      error: false,
      showPassword: false,
      login: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    async userLogin () {
      try {
        await this.$auth.loginWith('local', {
          data: this.login
        })
      }
      catch (error) {
        this.error = true
      }
    },
    cancel () {
      this.$refs.observer.reset()
      this.error = false
      this.$emit('cancel')
    }
  }

}
</script>
