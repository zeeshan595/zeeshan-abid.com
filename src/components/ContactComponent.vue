<template>
  <div id="contact" class="contact">
    <h2>Contact</h2>
    <p>
      If you wish to reach out to me please send me an email at
      <a href="mailto:zeeshan.abid.com@gmail.com">
        zeeshan.abid.com@gmail.com
      </a>
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    margin: 0;
  }
  a {
    color: #2f3e46;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
