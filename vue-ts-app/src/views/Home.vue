<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p> Count = {{count}} </p>
    <input v-model="user">
    <HelloWorld :name="user" msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import counter from '../store/counter';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private user: string = 'Anonymous';

  private get count() {
    return counter.count;
  }
}
</script>
