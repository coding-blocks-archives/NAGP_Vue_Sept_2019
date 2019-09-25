<template>
  <div class="row">
    <div class="col-8">
      <b-form-input v-model="newTodo"></b-form-input>
    </div>
    <div class="col-4">
      <b-button @click="addTask()" variant="success">
        Add
      </b-button>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTask() {
      store.commit("addTask", { title: this.newTodo, done: true });
      this.newTodo = "";
    }
  }
};
</script>
