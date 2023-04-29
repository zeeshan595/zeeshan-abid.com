<template>
  <div class="full-width">
    <container-component :green="true">
      <div class="content">
        <nav-bar-component />
        <social-links-component />
        <home-page-component />
      </div>
    </container-component>
  </div>
</template>

<script lang="ts" setup>
import ContainerComponent from './components/ContainerComponent.vue';
import NavBarComponent from './components/NavBarComponent.vue';
import SocialLinksComponent from './components/SocialLinksComponent.vue';
import HomePageComponent from './components/HomePageComponent.vue';
</script>

<style lang="scss">
@import './common.scss';
</style>
