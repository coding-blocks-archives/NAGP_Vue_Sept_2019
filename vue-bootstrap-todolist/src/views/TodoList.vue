<template>
  <div class="row">
    <TodoForm/>
    <TodoListGroup/>
  </div>

</template>
<script>
import TodoListGroup from "../components/TodoListGroup.vue";
import TodoForm from "../components/TodoForm.vue";

export default {
  name: 'TodoList',
  components: {
    TodoListGroup,
    TodoForm
  }
};
</script>
