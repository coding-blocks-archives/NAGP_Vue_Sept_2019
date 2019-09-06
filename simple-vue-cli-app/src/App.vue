<template>
  <div>
    <input v-model="task">
    <button @click="addTask()">ADD</button>
    <ul>
      <todo-item
        v-for="t in taskList"
        :task="t"
        :key="t.id"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import Todo from "./models/Todo";

export default {
  data() {
    return {
      task: "",
      taskList: [
        new Todo(0, "First Task", true),
        new Todo(1, "Second Task", false)
      ]
    };
  },
  methods: {
    addTask() {
      this.taskList.push(new Todo(this.taskList.length, this.task, false));
      this.task = "";
    }
  },
  components: { TodoItem }
};
</script>

<style>
</style>
