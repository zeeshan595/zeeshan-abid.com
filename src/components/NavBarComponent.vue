<template>
  <div class="nav-bar">
    <a href="#home">home</a>
    <a href="#skills">skills</a>
    <a href="#experience">experience</a>
    <a href="#contact">contact</a>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  gap: 40px;

  a {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: normal;
    color: inherit;
    text-decoration: none;
  }
}
</style>
