<template>
  <div class="test" :style="{ width: width + 'px', height: height + 'px' }">
    <component :is="currentIcon"></component>
  </div>
</template>

<script>
//index_icon
import iconMail from '@/assets/svg/index_icon/envelope-solid.svg'
import iconFacebook from '@/assets/svg/index_icon/facebook-square-brands.svg'
import iconHome from '@/assets/svg/index_icon/home-solid.svg'
import iconInstagram from '@/assets/svg/index_icon/instagram-brands.svg'
import iconLogoBlock from '@/assets/svg/index_icon/logo_block.svg'
import iconLogoWhite from '@/assets/svg/index_icon/logo_white.svg'
import iconCellphone from '@/assets/svg/index_icon/phone-alt-solid.svg'
//info_icon
import iconBar from '@/assets/svg/info_icon/bar.svg'
import iconBreakfast from '@/assets/svg/info_icon/breakfast.svg'
import iconBreeze from '@/assets/svg/info_icon/breeze.svg'
import iconBaby from '@/assets/svg/info_icon/crawling-baby-silhouette.svg'
import iconDog from '@/assets/svg/info_icon/dog.svg'
import iconMountain from '@/assets/svg/info_icon/mountain-range.svg'
import iconNoSmoke from '@/assets/svg/info_icon/no-smoke-symbol.svg'
import iconPhone from '@/assets/svg/info_icon/phone.svg'
import iconService from '@/assets/svg/info_icon/room_service.svg'
import iconCheckOk from '@/assets/svg/info_icon/tick-inside-circle.svg'
import iconWifi from '@/assets/svg/info_icon/wifi.svg'
import iconRefrigerator from '@/assets/svg/info_icon/refrigerator.svg'
import iconSofa from '@/assets/svg/info_icon/sofa.svg'

export default {
  name: 'icon',
  props: ['iconName', 'width', 'height'],
  components: {
    iconMail,
    iconFacebook,
    iconHome,
    iconInstagram,
    iconLogoBlock,
    iconLogoWhite,
    iconCellphone,
    iconBar,
    iconBreakfast,
    iconBreeze,
    iconBaby,
    iconDog,
    iconMountain,
    iconNoSmoke,
    iconPhone,
    iconService,
    iconCheckOk,
    iconWifi,
    iconRefrigerator,
    iconSofa
  },
  computed: {
    currentIcon() {
      return 'icon-' + this.iconName
    }
  }
}
</script>

<style scoped>
.test{
  z-index: 100;
}
</style>
