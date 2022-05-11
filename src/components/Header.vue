<template>
  <header>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>
      <a href="#" class="logo"
        ><img alt="Vue logo" src="../assets/logo.png" width="80"
      /></a>
    </h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="/login">로그인</a></li>
        <li><a href="/board/list">list</a></li>
        <li><router-link to="/shop/list">shop list</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e;
}
header h1 {
  position: absolute;
  top: 0;
  left: 100px;
}
header ul.menu:after {
  display: block;
  clear: both;
  content: "";
}
header ul.menu {
  position: absolute;
  top: 20px;
  right: 50px;
}
header ul.menu li {
  float: left;
  padding: 10px 20px;
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
