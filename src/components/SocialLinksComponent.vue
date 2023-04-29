<template>
  <div class="social-links">
    <a href="#">
      <img src="@/assets/github.svg" alt="github" />
    </a>
    <a href="#">
      <img src="@/assets/linkedin.svg" alt="linkedin" />
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
