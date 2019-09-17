<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3> {{count}} people have asked about Vue</h3>
  </div>
</template>

<script>
import store from '../store'
export default {
  computed: {
    count: () => store.state.count
  }
};
</script>
