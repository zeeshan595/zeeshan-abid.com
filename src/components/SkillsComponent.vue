<template>
  <div id="skills" class="skills">
    <h2>Skills</h2>
    <div class="skill">
      <div class="image">
        <img src="@/assets/vue.svg" alt="Vue" />
        <h5>Front-End</h5>
      </div>
      <div class="info">
        <p>
          I love working with React & Vue 3 alongside tailwind and typescript for front
          end development.
        </p>
        <div class="progress">
          <div class="completed" style="width: 85%"></div>
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="image">
        <img src="@/assets/nest.svg" alt="Vue" />
        <h5>Back-End</h5>
      </div>
      <div class="info">
        <p>
          For back end development I prefer using NestJs with either MongoDb or
          Postgres.
        </p>
        <div class="progress">
          <div class="completed" style="width: 95%"></div>
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="image">
        <img src="@/assets/azure.png" alt="Vue" />
        <h5>Dev-Ops</h5>
      </div>
      <div class="info">
        <p>
          I've used Azure for Application Monitoring, CI / CD, Alerting, Cost
          Optimisation and IaC.
        </p>
        <div class="progress">
          <div class="completed" style="width: 65%"></div>
        </div>
      </div>
    </div>
    <div class="skill">
      <div class="image">
        <img src="@/assets/jest.svg" alt="Vue" />
        <h5>Testing</h5>
      </div>
      <div class="info">
        <p>
          Jest is my go to unit testing framework. Also, I love using Cypress
          and postman.
        </p>
        <div class="progress">
          <div class="completed" style="width: 80%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.skills {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }

  .skill {
    display: flex;
    gap: 20px;

    .image {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      img {
        display: flex;
        width: 50px;
        height: 50px;
      }
      h5 {
        margin: 0;
        margin-top: 10px;
        text-align: center;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      p {
        margin: 0;
        width: 350px;
        font-size: 15px;
      }
      .progress {
        width: 100%;
        height: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);

        .completed {
          height: 100%;
          width: 50%;
          background-color: #84a98c;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
