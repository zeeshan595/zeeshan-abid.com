<template>
  <h2>Skills</h2>
  <div class="skills" @mousemove="updateMousePosition">
    <div id="tooltip" :class="{ visible: tooltipText !== '' }">
      {{ tooltipText }}
    </div>
    <img
      v-for="(skill, index) in skills"
      :key="index"
      :src="skill.image"
      :alt="skill.text"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
  </div>
</template>

<script lang="ts" setup>
import { skills } from '@/data/skill';
import { ref } from 'vue';

const tooltipText = ref<string>('');

function showTooltip(e: MouseEvent) {
  const target = e.target as HTMLImageElement;
  tooltipText.value = target.getAttribute('alt') as string;
}
function hideTooltip() {
  tooltipText.value = '';
}
function updateMousePosition(e: MouseEvent) {
  const tooltip = document.getElementById('tooltip');
  if (!tooltip || !tooltip.parentElement) return;
  const rect = tooltip.getBoundingClientRect();
  const parentRect = tooltip.parentElement.getBoundingClientRect();

  const x = e.clientX - rect.width / 2 - parentRect.x;
  const y = e.clientY - rect.height - parentRect.y;

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}
</script>

<style lang="scss" scoped>
h2 {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 40px;
  gap: 20px;
  justify-content: center;
  img {
    display: flex;
    height: 160px;
  }
  #tooltip {
    display: flex;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    color: white;
    padding: 10px 15px;
    border-radius: 15px;
    opacity: 0;
    pointer-events: none;

    &.visible {
      opacity: 1;
    }
  }
}
</style>
