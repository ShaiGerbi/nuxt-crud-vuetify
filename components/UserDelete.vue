<template>
  <v-dialog v-model="show" max-width="290" persistent>
    <v-card>

      <v-card-title class="headline">
        {{ $t('dialogs.titles.delete') }}
      </v-card-title>

      <v-card-text>
        {{ $t('dialogs.strings.the deletion is permanent') }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="cancel">
          {{ $t('dialogs.buttons.cancel') }}
        </v-btn>
        <v-btn color="red" :loading="loading" text @click.stop="ok">
          {{ $t('dialogs.buttons.delete') }}
        </v-btn>
      </v-card-actions>

    </v-card>
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

  methods: {
    cancel () {
      this.$emit('cancel')
    },

    ok () {
      this.$emit('ok')
    }
  }

}
</script>
