<template>
  <div class="experience">
    <h2>Experience</h2>
    <div class="timeline">
      <div
        v-for="(item, index) in events"
        :key="index"
        class="event"
        :class="{ right: index % 2 !== 0 }"
      >
        <div class="date">
          {{ item.date }}
        </div>
        <h3>{{ item.title }}</h3>
        <h4>{{ item.company }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export type Event = {
  date: string;
  title: string;
  company: string;
  info: string;
};

export default defineComponent({
  name: 'Experience',
  data() {
    return {
      events: [
        {
          date: 'April 19 - May 21',
          title: 'Software Engineer',
          company: 'Waracle',
          info: ''
        },
        {
          date: 'April 19 - May 21',
          title: 'Software Engineer',
          company: 'Waracle',
          info: ''
        },
        {
          date: 'September 18 - April 19',
          title: 'Web Developer',
          company: 'Waracle',
          info: ''
        },
        {
          date: 'December 17 - September 18',
          title: 'Games Programmer',
          company: 'Hyper Luminal Games',
          info: ''
        },
        {
          date: 'September 2013 - June 2017',
          title: 'Undergraduate Degree',
          company: 'Caledonian University',
          info: ''
        }
      ] as Event[]
    };
  }
});
</script>

<style scoped lang="scss">
.experience {
  display: flex;
  position: relative;
  flex-basis: 100%;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  margin: 40px;
  .timeline {
    display: flex;
    position: relative;
    flex-grow: 1;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
    &:after {
      display: flex;
      position: absolute;
      content: '';
      width: 4px;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: 4px;
      background-color: lightgrey;
      border-radius: 10px;
      z-index: 1;
    }
    .event {
      display: flex;
      position: relative;
      width: calc(50% - 50px);
      padding: 10px 15px;
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
      border-radius: 7px;
      min-height: 100px;
      flex-direction: column;
      align-items: flex-start;

      &:after {
        display: flex;
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        right: -36px;
        top: 10px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 0 0 3px lightgrey;
        z-index: 2;
      }
      h3 {
        display: flex;
        font-weight: normal;
        font-size: 20px;
        margin-top: 20px;
      }
      h4 {
        display: flex;
        font-size: 15px;
      }
      .date {
        display: flex;
        top: 0;
        right: 0;
        position: absolute;
        font-weight: bold;
        font-size: 14px;
        padding: 5px;
        background-color: darkslategray;
        color: white;
        border-bottom-left-radius: 7px;
        border-top-right-radius: 7px;
      }
    }
    .right {
      left: 50%;
      margin-left: 33px;

      &:after {
        left: -37px;
      }
    }
  }
}
</style>
