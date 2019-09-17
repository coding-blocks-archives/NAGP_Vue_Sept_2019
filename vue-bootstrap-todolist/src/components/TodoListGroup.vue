<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="todo in todolist" :key="todo.id">
        <router-link :to="'/task/' + todo.id">
          {{ todo.title }}
        </router-link>
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
