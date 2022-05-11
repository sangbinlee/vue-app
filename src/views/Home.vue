<template>
  <div>
    <HelloWorld msg="Home" />
    <!-- 메인 문구에 Home 표시를 해주자 -->
    this is main page.
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
