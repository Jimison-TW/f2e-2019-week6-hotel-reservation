<template>
  <div class="content-home">
    <img id="bg" :src="roomList[0].imageUrl" alt="lost picture" />
    <icon class="icon" width="148" height="148" iconName="logo-white" />
    <div class="contact-area">
      <div class="social-icon">
        <icon width="25" height="25" iconName="instagram" />
        <icon width="25" height="25" iconName="facebook" />
      </div>
      <div class="info">
        <div>
          <icon class="icon" width="19" height="19" iconName="cellphone" />
          <span>02-17264937</span>
        </div>
        <div>
          <icon class="icon" width="19" height="19" iconName="mail" />
          <span>whitespace@whitespace.com.tw</span>
        </div>
        <div>
          <icon class="icon" width="19" height="19" iconName="home" />
          <span>台北市羅斯福路十段30號</span>
        </div>
      </div>
    </div>
    <div class="select-wrap" v-for="(item, index) in roomList" :key="index">
      <div class="select-item" @click="selectRoom(item.id)">
        <img :src="item.imageUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{ item.name }}</p>
          <p>{{ item.name }}</p>
          <span>NT.{{ item.normalDayPrice }}平日</span>
          <span>NT.{{ item.holidayPrice }}假日</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../component/Icon.vue'

export default {
  name: 'home-page',
  components: {
    Icon
  },
  data: () => ({
    roomList: [{}]
  }),
  methods: {
    selectRoom(roomId) {
      console.log(roomId)
      this.$router.push({ name: 'room-reservation', params: { roomId: roomId } })
    }
  },
  async created() {
    let response = await this.axios
      .get('/rooms')
      .then(function(response) {
        console.log(response)
        return response
      })
      .catch(error => {
        console.log(error)
      })
    this.roomList = response.data.items
  }
}
</script>

<style scoped>
.content-home {
  display: flex;
  flex-direction: column;
}
#bg {
  width: 100%;
  position: absolute;
  z-index: -1;
}
.select-wrap {
  display: flex;
  width: 1000px;
  background-color: darkgray;
  flex-wrap: wrap;
  justify-content: center;
}
.select-item {
  width: 300px;
  height: 350px;
  margin: 10px;
  background-color: darkcyan;
}
.select-item img {
  width: 300px;
  height: 200px;
}
.room-type {
  font-size: 14px;
  letter-spacing: 1.46px;
}
</style>
