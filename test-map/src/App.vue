<template>
  <v-app>
    <v-main>
      <!-- <router-link to="/">지도 보기</router-link> |
      <router-link to="/sliding">슬라이딩</router-link> -->
      <router-view/>
      

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
