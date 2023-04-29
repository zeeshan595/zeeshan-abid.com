<template>
  <div id="experience" class="experiences">
    <h2>experience</h2>
    <div v-for="(experience, index) in data" :key="index" class="experience">
      <div class="timeline">
        <div class="circle"></div>
        <div class="line" :class="{ last: index + 1 === data.length }"></div>
      </div>
      <div class="info">
        <h4 class="title">
          {{ experience.title }}
          <a :href="experience.link" target="_blank">{{
            experience.company
          }}</a>
        </h4>
        <div class="time">
          {{ experience.time }}
        </div>
        <div class="tags">
          <div v-for="tag in experience.tags" :key="tag" class="tag">
            {{ tag }}
          </div>
        </div>
        <div v-if="experience.references" class="references">
          <a
            v-for="reference in experience.references"
            :key="reference"
            :href="reference"
            target="_blank"
          >
            {{ reference }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = [
  {
    title: 'Senior Full-Stack Developer',
    company: '@Holo',
    link: 'https://holo.host/',
    time: 'Oct 2021 - Present',
    tags: [
      'Vue',
      'Tailwind',
      'Typescript',
      'Jest',
      'Cypress',
      'NestJs',
      'graphql',
      'MongoDb',
      'Docker',
      'Sentry',
      'Linux',
      'Rust',
      'Digital Ocean',
      'Postmark',
    ],
  },
  {
    title: 'Senior Full-Stack Developer',
    company: '@Cox Automotive',
    link: 'https://www.coxautoinc.eu/',
    time: 'May 21 - October 21',
    tags: [
      'React',
      '.NET',
      'M-SQL',
      'Azure',
      'Docker',
      'CI/CD',
      'Azure Dev Ops',
      'Application Insight',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: '@Waracle',
    link: 'https://waracle.com/',
    time: 'April 19 - May 21',
    tags: [
      'Angular',
      'React',
      'Typescript',
      'Node Js',
      '.NET',
      'Postgres',
      'M-SQL',
      'Azure',
      'Docker',
      'Jest',
      'CI/CD',
      'Azure Dev Ops',
      'Application Insight',
      'Azure Data Factory',
      'Azure Storage Account',
      'Azure API Management',
      'RabbitMQ',
      'Sentry',
    ],
  },
  {
    title: 'Front-End Developer',
    company: '@Scottish Power',
    link: 'https://scottishpower.co.uk',
    time: 'September 18 - April 19',
    tags: ['React', 'Typescript', 'NodeJs', 'SASS', 'Jest'],
  },
  {
    title: 'Games Programmer',
    company: '@Hyper Luminal Games',
    link: 'https://hyperluminalgames.com/',
    time: 'December 17 - September 18',
    tags: ['React', 'Firebase', 'Unity 3D', 'C#', 'Azure'],
  },
  {
    title: 'Undergraduate Degree',
    company: '@Caledonian University',
    link: 'https://www.gcu.ac.uk/',
    time: 'September 2013 - June 2017',
    tags: ['Unity 3D', 'C/C++', 'C#', 'Java', 'SQL', 'Javascript'],
    references: [
      'https://github.com/zeeshan595/Neural-Network',
      'https://github.com/tortuga-foundation/tortuga',
      'https://github.com/zeeshan595/League-Extras',
      'https://www.npmjs.com/package/bulletproof-email-creator',
      'https://github.com/zeeshan595/plychannel',
    ],
  },
];
</script>

<style lang="scss" scoped>
.experiences {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }

  .experience {
    display: flex;
    margin-bottom: 20px;
    width: 410px;

    .timeline {
      display: block;
      position: relative;
      margin-right: 20px;

      .circle {
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #84a98c;
        border: 3px solid white;
        z-index: 5;
      }
      .line {
        display: block;
        position: relative;
        top: -5px;
        left: calc(50% - 2px);
        width: 4px;
        background-color: white;
        border-radius: 3px;
        z-index: 1;
        height: calc(100% + 50px);

        &.last {
          height: 100%;
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .title {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
      }
      .time {
        font-size: 14px;
        font-weight: bold;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .tag {
          display: flex;
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          color: #52796f;
          font-weight: normal;
          font-size: 12px;
          padding: 5px 10px;
        }
      }
      .references {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        gap: 10px;
      }

      a {
        color: #2f3e46;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}
</style>
