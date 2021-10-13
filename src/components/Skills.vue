<template>
  <h2>Skills</h2>
  <div class="skills" @mousemove="updateMousePosition">
    <div id="tooltip" :class="{ visible: tooltipText !== '' }">
      {{ tooltipText }}
    </div>
    <img
      src="@/assets/skills/react.svg"
      alt="react"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/angular.png"
      alt="angular"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/redux.png"
      alt="redux"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/rxjs.png"
      alt="rxjs"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/typescript.png"
      alt="typescript"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/sass.png"
      alt="sass"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/dotnet.png"
      alt="dotnet"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/nodejs.jpg"
      alt="nodejs"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/rabbitmq.png"
      alt="rabbitmq"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/entity-framework.png"
      alt="entity-framework"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/typeorm.png"
      alt="typeorm"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/azure.png"
      alt="azure"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/dev-ops.png"
      alt="dev-ops"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/yaml.png"
      alt="yaml"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/azure-cli.png"
      alt="azure-cli"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/gcs.png"
      alt="google cloud platform"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/git.png"
      alt="git"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/bash.png"
      alt="bash"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/powershell.png"
      alt="powershell"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/docker.png"
      alt="docker"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/es-lint.png"
      alt="es-lint"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/resharper.png"
      alt="resharper"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/postman.png"
      alt="postman"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
    <img
      src="@/assets/skills/graphql.png"
      alt="graphql"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Skills',
  data() {
    return {
      tooltipText: ''
    };
  },
  methods: {
    showTooltip(e: MouseEvent): void {
      const target = e.target as HTMLImageElement;
      this.tooltipText = target.getAttribute('alt') as string;
    },
    hideTooltip(): void {
      this.tooltipText = '';
    },
    updateMousePosition(e: MouseEvent): void {
      const tooltip = document.getElementById('tooltip');
      if (!tooltip) return;

      const rect = tooltip.getBoundingClientRect();

      const x = e.clientX - rect.width / 2;
      const y = e.clientY - rect.height;

      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    }
  }
});
</script>

<style scoped lang="scss">
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
    display: inline-block;
    max-height: 160px;
  }
  #tooltip {
    display: flex;
    position: fixed;
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
