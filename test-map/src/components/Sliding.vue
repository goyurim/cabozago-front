<template>
  
  <div id="app">
    <v-spacer></v-spacer>
      <!-- {{drawerVal}} -->
    <v-navigation-drawer
      :value="drawerVal"
      
      absolute
      
      temporary
      right
      width="200"
      height="100vh"
      
    >
    
      <v-list
        nav
        dense
      >
        <v-list-item-group
         
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>북마크 리스트</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>문의하기</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>공유하기<v-icon right>mdi-open-in-new</v-icon></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
 
</template>

<script>
  export default {
    props: ['drawerVal'],
    
}
  
</script>
<style>


</style>