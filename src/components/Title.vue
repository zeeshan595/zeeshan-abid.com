<template>
  <div class="title">
    <div class="left">
      <h2>{{ info.title }}</h2>
      <p>
        {{ info.subtitle }}
      </p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/zeeshan595/" target="_blank">
          <img src="@/assets/linkedin.png" alt="linked-in" />
        </a>
        <a href="https://github.com/zeeshan595" target="_blank">
          <img src="@/assets/github.png" alt="linked-in" />
        </a>
        <a class="mobile-only" href="./resume.pdf" target="_blank">
          <img src="@/assets/resume.png" alt="resume" />
        </a>
      </div>
    </div>
    <a class="right" href="./resume.pdf" target="_blank">
      <div
        class="resume"
        @mouseenter="showResumeOverlay = true"
        @mouseleave="showResumeOverlay = false"
      >
        <div class="overlay" :class="{ visible: showResumeOverlay }">
          View Resume
        </div>
        <div class="heading"></div>
        <div class="paragraph long light"></div>
        <div class="paragraph medium dark"></div>
        <div class="paragraph long light"></div>
        <div class="paragraph short dark"></div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { info } from '@/data/info';

const showResumeOverlay = ref(false);
</script>

<style scoped lang="scss">
.title {
  display: flex;
  flex-grow: 1;
  .left {
    display: flex;
    flex-basis: 40%;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 20px;
    h2 {
      display: flex;
      font-size: 40px;
    }
    p {
      display: flex;
      margin-top: 20px;
      font-size: 20px;
    }
    .social-links {
      display: flex;
      margin-top: 20px;
      a {
        display: flex;
        margin-right: 20px;
        img {
          display: flex;
          width: 40px;
          height: 40px;
          border-radius: 7px;
        }
      }
      .mobile-only {
        display: none;
      }
      @media screen and (max-width: 500px) {
        .mobile-only {
          display: flex;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-basis: 60%;
    max-width: 500px;

    @media screen and (max-width: 500px) {
      display: none;
    }

    .resume {
      display: flex;
      position: relative;
      flex-basis: 100%;
      flex-direction: column;
      border-radius: 7px;
      padding: 15px 20px;
      padding-bottom: 75px;
      box-shadow: 0 0 5px 3px rgb(0 0 0 / 30%);
      cursor: pointer;

      .heading {
        display: flex;
        width: 45%;
        height: 40px;
        border-radius: 30px;
        background-color: black;
        margin-bottom: 30px;
      }
      .paragraph {
        display: flex;
        height: 20px;
        border-radius: 30px;
        margin-bottom: 10px;
      }
      .short {
        width: 60%;
      }
      .medium {
        width: 70%;
      }
      .long {
        width: 90%;
      }
      .light {
        background-color: darkgrey;
      }
      .dark {
        background-color: grey;
      }

      .overlay {
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 7px;
        background: rgb(0 0 0 / 70%);
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 30px;
        opacity: 0;
        transition: 0.3s;
      }
      .visible {
        opacity: 1;
      }
    }
  }
}
</style>
