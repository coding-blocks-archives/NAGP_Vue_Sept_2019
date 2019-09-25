<template>
  <div>
    <div v-if="task">
      <router-link to="/">back</router-link>
      <br>
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
  beforeCreate() {console.log('ListItem', 'beforeCreate', this.task)},
  created() {console.log('ListItem', 'created', this.task)},
  beforeMount() {console.log('ListItem', 'beforeMount')},
  beforeUpdate() {console.log('ListItem', 'beforeUpdate')},
  updated() {console.log('ListItem', 'updated', this.task)},
  beforeDestroy() {console.log('ListItem', 'beforeDestroy')},
  destroyed() {console.log('ListItem', 'destroyed')},
  updated() {console.log('ListItem', 'updated', this.task)},


  mounted() {
    console.log('ListItem', 'mounted')
    this.taskId = this.$route.params.id;
    // this.task = store.state.todoitems[taskId];
  },
  computed: {
    task: function () {
      return store.state.todoitems[this.$route.params.id]
    }
  },
  data() {
    return {
      taskId: false
    };
  }
};
</script>
