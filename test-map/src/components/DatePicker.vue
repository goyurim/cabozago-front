<template>
  <v-col cols="4" sm="6" md="6">

    <v-dialog
      ref="dialog"
      v-model="dateModal"
      :return-value.sync="date"
      persistent
      
      width="300px"
    >





      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          :label="`${label}`"
          prepend-inner-icon="mdi-calendar-blank"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" scrollable>
        <v-spacer></v-spacer>
        
        <v-btn  color="primary" @click="set()">OK</v-btn>
      </v-date-picker>
    </v-dialog>

  </v-col>
</template>

<script>

export default {
  name: "DateTimePicker",
  props: ['label'],
  data: () => ({
    date: "",
    dateModal: false,
    
  }),
  methods: {
    set() {
      this.$refs.dialog.save(this.date);
      }
  }, 
}
</script>