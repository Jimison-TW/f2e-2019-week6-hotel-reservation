<template>
  <div class="content">
    <img id="bg" :src="roomDatas[0].imageUrl[0]" alt="lost picture" />
    <icon id="logo-block" width="150" height="43" iconName="logo-block" />
    <div v-for="item in roomDatas" :key="item.id">
      <div id="down-area">
        <div id="left-side">
          <h1>{{ item.name }}</h1>
          <ul>
            <li>房客人數限制： {{ item.descriptionShort['GuestMax'] + ' ~ ' + item.descriptionShort['GuestMin'] }} 人</li>
            <li>床型：{{ item.descriptionShort.Bed[0] === 'Single' ? '單人床' : '雙人床' }}</li>
            <li>衛浴數量： {{ item.descriptionShort['Private-Bath'] }} 間</li>
            <li>房間大小： {{ item.descriptionShort.Footage }} 平方公尺</li>
          </ul>
          <p id="en-info">
            {{ item.description }}
          </p>
          <div id="time-block">
            <div>
              <h3>Check In</h3>
              <span>{{ item.checkInAndOut.checkInEarly + '—' + item.checkInAndOut.checkInLate }}</span>
            </div>
            <div>
              <h3>Check Out</h3>
              <span>{{ item.checkInAndOut.checkOut }}</span>
            </div>
          </div>
          <icon-info-area />
        </div>
        <div id="middle-side">
          <p>NT.{{ item.normalDayPrice }}</p>
          <p>平日(一~四)</p>
          <p>NT.{{ item.holidayPrice }}</p>
          <p>假日(五~日)</p>
        </div>
        <div id="right-side">
          <!-- <v-date-picker :value='today' mode="single" color="red" is-dark is-inline @dayclick="singleDayClicked" /> -->
          <v-date-picker v-model="rangeDate" mode="range" color="red" is-dark is-inline @dayclick="rangeDayClicked" />
          <!-- <v-calendar :attributes="attrs"> </v-calendar> -->
          <button>預約時段</button>
        </div>
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
  },
  data: () => ({
    roomDatas: [
      {
        amenities: {
          'Air-Conditioner': true,
          Breakfast: true,
          'Child-Friendly': false,
          'Great-View': false,
          'Mini-Bar': false,
          'Pet-Friendly': true,
          Refrigerator: true,
          'Room-Service': false,
          'Smoke-Free': true,
          Sofa: false,
          Television: true,
          'Wi-Fi': true
        },
        checkInAndOut: {
          checkInEarly: '',
          checkInLate: '',
          checkOut: ''
        },
        description: '',
        descriptionShort: {
          Bed: [],
          Footage: 18,
          GuestMax: 1,
          GuestMin: 1,
          'Private-Bath': 1
        },
        holidayPrice: 0,
        id: '',
        imageUrl: [],
        name: '',
        normalDayPrice: 0
      }
    ],
    isOnRangeDaySelect: false,
    today: new Date(),
    rangeDate: {
      start: new Date(2019, 7, 9),
      end: new Date(2019, 7, 10)
    },
    attrs: [
      {
        key: 'today',
        highlight: {
          backgroundColor: '#ff8080'
          // Other properties are available too, like `height` & `borderRadius`
        },
        dates: new Date()
      }
    ]
  }),
  methods: {
    singleDayClicked(selectDate) {
      let day = selectDate.day
      let month = selectDate.month
      let year = selectDate.year
      this.today = new Date(year, month - 1, day)
    },
    rangeDayClicked(selectDates){
      let day = selectDates.day
      let month = selectDates.month
      let year = selectDates.year
      if(!this.isOnRangeDaySelect){
        this.rangeDate.start = new Date(year, month - 1, day)
      }else{
        this.rangeDate.end = new Date(year, month - 1, day)
      }
    }
  },
  async created() {
    let id = this.$store.state.selectId
    let response = await this.axios
      .get(`/room/${id}`)
      .then(result => {
        return result
      })
      .catch(error => {
        console.log(error)
      })
    this.roomDatas = response.data.room
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
