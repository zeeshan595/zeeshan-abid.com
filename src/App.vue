<template>
  <div class="container">
    <title-component />
    <skills-component />
    <experience-component />
  </div>
</template>

<script lang="ts" setup>
import TitleComponent from '@/components/TitleComponent.vue';
import SkillsComponent from '@/components/SkillComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
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
