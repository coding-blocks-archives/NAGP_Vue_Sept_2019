<template>
  <section>
    <h1>FAQ</h1>
    <h2>How to build a Vue app?</h2>
    <p>Start with vue create</p>

    <button @click="addPeople">Ask</button>

    <h3>How many people have asked this question ?</h3>
    <p>{{ count }}</p>
  </section>
</template>
<script>
import store, {MUTATIONS} from "../store";

export default {
  methods: {
    addPeople() {
      store.commit(MUTATIONS.ADD_PEOPLE)
    }
  },
  computed: {
    count: () => store.state.count
  }
};
</script>
