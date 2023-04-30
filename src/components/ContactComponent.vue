<template>
  <div id="contact" class="contact">
    <h2>Contact</h2>
    <div class="field">
      <span>Subject</span>
      <input v-model="subject" type="text" placeholder="New Job Opertunity" />
    </div>
    <div class="field">
      <span>Message</span>
      <textarea
        v-model="body"
        type="text"
        name="message"
        placeholder="I am interested in working with you"
      ></textarea>
    </div>
    <div class="submit-button">
      <a @click="buildMailLink()" class="button">Send an Email</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const subject = ref('');
const body = ref('');

function buildMailLink() {
  const params = new URLSearchParams();
  params.append('subject', subject.value);
  params.append('body', body.value);
  parent.location = `mailto:zeeshan.abid.com@gmail.com?${params.toString()}`;
}
</script>

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
  .field {
    display: flex;
    flex-direction: column;
    gap: 5px;

    input,
    span {
      margin: 0;
    }
    span {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .submit-button {
    display: flex;
    flex-direction: row-reverse;
    width: 430px;
  }
}
</style>
