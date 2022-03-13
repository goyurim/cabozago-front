<template>
  <div class="container">
   <v-app id="login">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                 
                  <v-card class="elevation-12">
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-inner-icon="mdi-account"
                              name="login"
                              label="Login"
                              type="text"
                             
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-inner-icon="mdi-lock"
                              name="password"
                              label="Password"
                              type="password"
                              
                           ></v-text-field>
                            
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn to="/Map">지도로</v-btn>
                        <v-btn type="submit">로그인</v-btn>
                       
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
   </div>
</template>

<script>
export default {
  name: 'Login',
  methods:{},
  computed:{
  
  },
  data(){
    return{}
  },
   props: { }
}
</script>

<style lang="scss" src="@/assets/style.scss">


</style>