<template>
  <div id="contact" class="contact">
    <h2>Contact</h2>
    <div class="field">
      <span>name</span>
      <input type="text" name="name" placeholder="John Smith" />
    </div>
    <div class="field">
      <span>email</span>
      <input type="text" name="email" placeholder="John.Smith@gmail.com" />
    </div>
    <div class="field">
      <span>message</span>
      <textarea
        type="text"
        name="message"
        placeholder="What would you like to talk about?"
      ></textarea>
    </div>
    <div class="submit-button">
      <a href="#" class="button">Send</a>
    </div>
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
