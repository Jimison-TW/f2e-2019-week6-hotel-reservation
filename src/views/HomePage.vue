<template>
  <div class="content-home">
    <img id="bg" src="@/assets/room-picture/home-page.jpg" alt="lost picture" />
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
    <div class="select-wrap" v-for="(item, name, index) in roomList" :key="index">
      <div class="select-item">
        <img :src="item.imageUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{ item.name }}</p>
          <p>{{ item.name }}</p>
          <span>NT.{{ item.normalDayPrice }}平日</span>
          <span>NT.{{ item.holidayPrice }}假日</span>
        </div>
      </div>
    </div>
    <!-- <div class="select-wrap">
      <div class="select-item" @click="selectRoom(0)">
        <img :src="roomList[0].pictureUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{roomList[0].roomType}}</p>
          <p>{{roomList[0].roomName}}</p>
          <span>NT.{{roomList[0].priceNormal}}平日</span>
          <span>NT.{{roomList[0].priceVacation}}假日</span>
        </div>
      </div>
      <div class="select-item" @click="selectRoom(1)">
        <img :src="roomList[1].pictureUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{roomList[1].roomType}}</p>
          <p>{{roomList[1].roomName}}</p>
          <span>NT.{{roomList[1].priceNormal}}平日</span>
          <span>NT.{{roomList[1].priceVacation}}假日</span>
        </div>
      </div>
      <div class="select-item" @click="selectRoom(2)">
        <img :src="roomList[2].pictureUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{roomList[2].roomType}}</p>
          <p>{{roomList[2].roomName}}</p>
          <span>NT.{{roomList[2].priceNormal}}平日</span>
          <span>NT.{{roomList[2].priceVacation}}假日</span>
        </div>
      </div>
      <div class="select-item" @click="selectRoom(3)">
        <img :src="roomList[3].pictureUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{roomList[3].roomType}}</p>
          <p>{{roomList[3].roomName}}</p>
          <span>NT.{{roomList[3].priceNormal}}平日</span>
          <span>NT.{{roomList[3].priceVacation}}假日</span>
        </div>
      </div>
      <div class="select-item" @click="selectRoom(4)">
        <img :src="roomList[4].pictureUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{roomList[4].roomType}}</p>
          <p>{{roomList[4].roomName}}</p>
          <span>NT.{{roomList[4].priceNormal}}平日</span>
          <span>NT.{{roomList[4].priceVacation}}假日</span>
        </div>
      </div>
      <div class="select-item" @click="selectRoom(5)">
        <img :src="roomList[5].pictureUrl" alt="No Image!" />
        <div>
          <p class="room-type">{{roomList[5].roomType}}</p>
          <p>{{roomList[5].roomName}}</p>
          <span>NT.{{roomList[5].priceNormal}}平日</span>
          <span>NT.{{roomList[5].priceVacation}}假日</span>
        </div>
      </div>
    </div> -->
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
    roomList: [
      // {
      //   pictureUrl: 'assets/room-picture/room-single.jpg',
      //   roomType: 'Single Room',
      //   roomName: '單人房',
      //   priceNormal: 1380,
      //   priceVacation: 1500
      // },
      // {
      //   pictureUrl: 'assets/room-picture/deluxe-single-room.jpg',
      //   roomType: 'Deluxe Single Room',
      //   roomName: '高級單人房',
      //   priceNormal: 1899,
      //   priceVacation: 2000
      // },
      // {
      //   pictureUrl: 'assets/room-picture/room-double.jpg',
      //   roomType: 'Double Room',
      //   roomName: '雙人房',
      //   priceNormal: 2460,
      //   priceVacation: 2500
      // },
      // {
      //   pictureUrl: 'assets/room-picture/deluxe-double-room.jpg',
      //   roomType: 'Deluxe Double Room',
      //   roomName: '高級雙人房',
      //   priceNormal: 2888,
      //   priceVacation: 3000
      // },
      // {
      //   pictureUrl: 'assets/room-picture/twin-room.jpg',
      //   roomType: 'Twin Room',
      //   roomName: '雙床房',
      //   priceNormal: 3350,
      //   priceVacation: 3500
      // },
      // {
      //   pictureUrl: 'assets/room-picture/deluxe-twin-room.jpg',
      //   roomType: 'Deluxe Twin Room',
      //   roomName: '高級雙床房',
      //   priceNormal: 3899,
      //   priceVacation: 4000
      // }
    ]
  }),
  methods: {
    selectRoom(roomId) {}
  },
  async created() {
    console.log(this.roomList)
    this.roomList = await this.axios
      .get('')
      .then(function(response) {
        return response.data.items
        console.log(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
      console.log(this.roomList)
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
