<template>
  <div class="home-page">
    <h1>zeeshan abid</h1>
    <p>
      Hi, my name is Zeeshan Abid, and I am a Glasgow based freelancer /
      contractor. I work remotely for clients all over the world.
    </p>
    <p>
      I specialise in Full Stack Development using Vue3 on the front-end and
      Nest JS in the back-end.
    </p>
    <div class="badges">
      <a href="#" class="badge" target="_blank">
        Top 10% on Javascript Test by Test Dome
      </a>
      <a href="#" class="badge" target="_blank">
        Top 5% of 2.4M people JavaScript Assessment LinkedIn
      </a>
    </div>
    <a href="#" class="button" target="_blank">Download Resume</a>
    <img src="@/assets/down.svg" alt="scroll-down" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 24px;
    font-weight: normal;
    text-transform: uppercase;
    color: white;
    margin: 0;
  }
  p {
    margin: 0;
    max-width: 300px;
    text-align: center;
  }

  .badges {
    display: flex;
    gap: 40px;

    .badge {
      display: flex;
      background-color: #52796f;
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      padding: 20px 40px;
      width: 150px;
      text-align: center;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
    }
  }
}
</style>
