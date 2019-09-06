<template>
  <li>
    {{ task.name }}
  </li>
</template>

<script>
import Todo from '../models/Todo'
export default {
  props: {
    'task': Todo
  },

};
</script>

<style>
</style>
