<template>
  <div class="container">
    <Title />
    <Skills />
    <Experience />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '@/components/Title.vue';
import Skills from '@/components/Skills.vue';
import Experience from '@/components/Experience.vue';

export default defineComponent({
  name: 'App',
  components: {
    Title,
    Skills,
    Experience
  }
});
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 800px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 150px;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
