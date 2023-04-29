<template>
  <div class="full-width">
    <!-- HOME -->
    <container-component :green="true">
      <nav-bar-component />
      <social-links-component />
      <home-page-component />
    </container-component>
    <!-- SKILLS -->
    <container-component :green="false">
      <skills-component />
    </container-component>
    <!-- EXPERIENCE -->
    <container-component :green="true">
      <experience-component />
    </container-component>
  </div>
</template>

<script lang="ts" setup>
import ContainerComponent from './components/ContainerComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import SocialLinksComponent from './components/SocialLinksComponent.vue';
import HomePageComponent from './components/HomePageComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';
</script>

<style lang="scss">
@import './common.scss';
</style>
