<template>
  <div>
    <div v-if="task">
      <input type="checkbox" v-model="task.done" />
      {{ task.title }}
      <br />
      {{ task.createdAt }}
      <br />
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  mounted() {
    let taskId = this.$route.params.id;
    this.task = store.state.todoitems[taskId];
  },
  data() {
    return {
      task: false
    };
  }
};
</script>
