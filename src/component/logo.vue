<template>
  <div class="logo">
    <div id="block1">
      <div id="block2"><span>White Space</span></div>
    </div>
  </div>
</template>

<style scoped>
#block1 {
  width: 148px;
  height: 148px;
  position: relative;
  left: -10px;
  top: -10px;
  background: rgba(255, 255, 255, 0.28);
  background-size: 148px 148px;
  background-image: linear-gradient(45deg,rgba(0,0,0,1));
}

#block2 {
  width: 144px;
  height: 144px;
  position: relative;
  left: 10px;
  top: 10px;
  display: table;
  font-size: 31px;
  border: 2px solid #fff;
  background: rgba(255, 0, 255, 0.3);
  color: #000;
}

span{
  color: #fff;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  line-height: 44px;
}
</style>
