<template>
  <div id="home" class="home-page">
    <div class="profile-picture"></div>
    <h1>zeeshan abid</h1>
    <p>
      Hi, my name is Zeeshan Abid, and I am a Glasgow based freelancer /
      contractor. I work remotely for clients all over the world.
    </p>
    <p>
      I specialise in Full Stack Development using React / Vue3 on the front-end
      and Nest JS in the back-end.
    </p>
    <div class="badges">
      <a
        href="https://www.testdome.com/certificates/298f6de9a3a44553a6b083d1bcb6ce02"
        class="badge"
        target="_blank"
      >
        Top 10% on Javascript Test by Test Dome
      </a>
      <a
        href="https://www.linkedin.com/in/zeeshan595/"
        class="badge"
        target="_blank"
      >
        Top 5% of 2.4M people JavaScript Assessment LinkedIn
      </a>
    </div>
    <a href="/resume.pdf" class="button" target="_blank">Download Resume</a>
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

  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url(@/assets/zeeshan.jpeg);
    background-size: cover;
    background-position: center;
  }

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
