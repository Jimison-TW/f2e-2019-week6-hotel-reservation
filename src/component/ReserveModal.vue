<template>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <h3>預約時段</h3>
      <div><span>姓名</span><input type="text" /></div>
      <div><span>電話</span><input type="text" /></div>
      <div>
        <span>預約起訖</span>
        <v-date-picker />
        <span> ~ </span>
        <v-date-picker />
      </div>
      <button>取消</button>
      <button>確定預約</button>
    </div>
  </div>
</template>

<style scoped>


/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 423px; /* Could be more or less, depending on screen size */
  height: 485px;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>