<template>
  <div class="test-dome">
    <a
      href="https://www.testdome.com/certificates/298f6de9a3a44553a6b083d1bcb6ce02"
      target="_blank"
    >
      <div
        class="certificate"
        @mouseenter="onMouseEnterCertificate"
        @mouseleave="onMouseExitCertificate"
      >
        <div class="overlay" :class="{ show: isCertificateHovered }">
          <div class="text">View Certificate</div>
        </div>
        <div class="candidate-name">Zeeshan Abid</div>
        <div class="info">ranking in the top 10%</div>
        <div class="info">javascript</div>
        <div class="spacer"></div>
        <div class="info">testdome</div>
        <div class="info">certificate</div>
        <img class="branding" src="@/assets/test-dome-branding.svg" alt="" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isCertificateHovered = ref(false);

function onMouseEnterCertificate() {
  isCertificateHovered.value = true;
}
function onMouseExitCertificate() {
  isCertificateHovered.value = false;
}
</script>

<style scoped lang="scss">
.test-dome {
  display: flex;
  flex-grow: 1;

  a {
    text-decoration: none;
  }

  .certificate {
    position: relative;
    background: linear-gradient(to right bottom, #c7a225, #ebda65);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgb(0 0 0 / 30%);
    font-weight: bold;
    color: white;
    min-width: 250px;

    .spacer {
      padding: 10px;
    }
    .candidate-name {
      font-size: 1.7rem;
    }
    .info {
      text-transform: uppercase;
      font-size: 1rem;
    }
    .branding {
      position: absolute;
      width: 120px;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
    .overlay {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 2;
      border-radius: 10px;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;

      &.show {
        opacity: 1;
      }
      .text {
        display: flex;
        align-items: center;
        text-transform: uppercase;
      }
    }
  }
}
</style>
