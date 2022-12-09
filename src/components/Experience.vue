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
        <h4>
          <a v-if="item.link" class="company-link" :href="item.link">{{
            item.company
          }}</a>
          <template v-if="!item.link">{{ item.company }}</template>
        </h4>
        <ul>
          <li v-for="(info, index) in item.info" :key="index">
            <p>{{ info }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { events } from '@/data/experience';
</script>

<style lang="scss" scoped>
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
      .company-link {
        color: darkcyan;
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;

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
      ul {
        text-align: left;
        padding-left: 20px;
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
