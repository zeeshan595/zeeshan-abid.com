<template>
  <div class="full-width" :class="{ green: green, white: !green }">
    <div class="container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
  green: boolean;
}>();
</script>

<style lang="scss" scoped>
.green {
  background-color: #84a98c;
  color: white;
}
.white {
  background-color: #efefef;
  color: #52796f;
}
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
