<template>

 <div class="box">
    <v-container fluid class="pa-0">
      
      <v-row>
        
      <DatePicker :label="'시작날짜'"></DatePicker>
      <DatePicker :label="'종료날짜'"></DatePicker>
      </v-row>
        

    </v-container>
  </div>
 
</template>

<script>
  //import DatePicker from 'vue2-datepicker';
  //import 'vue2-datepicker/index.css';
  //import moment from 'moment'
  import DatePicker from "./DatePicker.vue";

  export default {
    components: { DatePicker
    },
    data() {
      return {
        value1: [],
        value2: [],
      };
    },
    methods:{
      
  },    


  };
</script>
