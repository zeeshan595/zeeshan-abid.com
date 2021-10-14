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

<script lang="ts">
import { defineComponent } from 'vue';

export type Skill = {
  image: string;
  text: string;
};

export default defineComponent({
  name: 'Skills',
  data() {
    return {
      tooltipText: '',
      skills: [
        {
          image: 'img/skills/vue.png',
          text: 'Vue'
        },
        {
          image: '/img/skills/react.svg',
          text: 'React'
        },
        {
          image: '/img/skills/angular.png',
          text: 'Angular'
        },
        {
          image: '/img/skills/redux.png',
          text: 'Redux'
        },
        {
          image: '/img/skills/rxjs.png',
          text: 'RxJs'
        },
        {
          image: '/img/skills/typescript.png',
          text: 'Typescript'
        },
        {
          image: '/img/skills/sass.png',
          text: 'SASS'
        },
        {
          image: '/img/skills/dotnet.png',
          text: '.Net'
        },
        {
          image: '/img/skills/nodejs.jpg',
          text: 'NodeJs'
        },
        {
          image: '/img/skills/rabbitmq.png',
          text: 'RabbitMq'
        },
        {
          image: '/img/skills/entity-framework.png',
          text: 'Entity Framework'
        },
        {
          image: '/img/skills/typeorm.png',
          text: 'Type ORM'
        },
        {
          image: '/img/skills/azure.png',
          text: 'Azure'
        },
        {
          image: '/img/skills/dev-ops.png',
          text: 'Dev Ops'
        },
        {
          image: '/img/skills/yaml.png',
          text: 'yaml'
        },
        {
          image: '/img/skills/azure-cli.png',
          text: 'Azure CLI'
        },
        {
          image: '/img/skills/gcs.png',
          text: 'Google Cloud Platform'
        },
        {
          image: '/img/skills/git.png',
          text: 'Git'
        },
        {
          image: '/img/skills/bash.png',
          text: 'Bash'
        },
        {
          image: '/img/skills/powershell.png',
          text: 'Powershell'
        },
        {
          image: '/img/skills/docker.png',
          text: 'Docker'
        },
        {
          image: '/img/skills/es-lint.png',
          text: 'ES Lint'
        },
        {
          image: '/img/skills/postman.png',
          text: 'Postman'
        },
        {
          image: '/img/skills/graphql.png',
          text: 'Graph QL'
        }
      ] as Skill[]
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
      if (!tooltip || !tooltip.parentElement) return;
      const rect = tooltip.getBoundingClientRect();
      const parentRect = tooltip.parentElement.getBoundingClientRect();

      const x = e.clientX - rect.width / 2 - parentRect.x;
      const y = e.clientY - rect.height - parentRect.y;

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
