<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="todo in todolist" :key="todo.id">
        {{ todo.title }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import store from "../store";
export default {
  computed: {
    todolist: () => store.state.todoitems
  }
};
</script>
