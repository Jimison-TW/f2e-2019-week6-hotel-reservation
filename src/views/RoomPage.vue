<template>
  <div class="content">
    <img id="bg" src="@/assets/room-picture/home-page.jpg" alt="lost picture" />
    <icon id="logo-block" width="150" height="43" iconName="logo-block" />
    <div id="down-area">
      <div id="left-side">
        <h1>Single Room</h1>
        <ul>
          <li>房客人數限制： 1~1 人</li>
          <li>床型：單人床</li>
          <li>衛浴數量： 1 間</li>
          <li>房間大小： 18 平方公尺</li>
        </ul>
        <p id="en-info">
          Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you:
          sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.
        </p>
        <div id="time-block">
          <div>
            <h3>Check In</h3>
            <span>15:00 — 21:00</span>
          </div>
          <div>
            <h3>Check Out</h3>
            <span>10:00</span>
          </div>
        </div>
        <icon-info-area />
      </div>
      <div id="middle-side">
        <p>NT.1380</p>
        <p>平日(一~四)</p>
        <p>NT.1500</p>
        <p>假日(五~日)</p>
      </div>
      <div id="right-side">
        <button>預約時段</button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../component/Icon.vue'
import IconInfoArea from '../component/IconInfoArea.vue'

export default {
  components: {
    Icon,
    IconInfoArea
  }
}
</script>

<style scoped>
.content {
  /* background-color: #aaa; */
}
#bg {
  top: 0;
  width: 100%;
  position: absolute;
  z-index: -1;
}
#logo-block {
  margin-left: 63px;
  margin-top: 42px;
}
#left-side {
  margin-top: 567px;
  margin-left: 63px;
  display: inline-block;
}
#middle-side {
  display: inline-block;
  text-align: right;
  width: 150px;
}
#right-side {
  display: inline-block;
  width: 400px;
  height: 600px;
  background-color: burlywood;
}
h1 {
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
}
#en-info {
  width: 481px;
  height: 97px;
}
#time-block {
  width: 400px;
}
#time-block div {
  display: inline;
}
</style>
