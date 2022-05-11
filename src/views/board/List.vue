<template>
  <div>
    <h2>게시판 리스트</h2>
    <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
  </div>
</template>

<script>
import axios from "axios"; //axios 호출
export default {
  methods: {
    getList() {
      console.log("함수 호출: 클릭시 ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ");
      console.log("함수 호출: 클릭시 ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ");
      console.log("함수 호출: 클릭시 ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ");
      console.log("함수 호출: 클릭시 ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ");

      axios
        .get("http://localhost:3000/api/board")
        .then((res) => {
          console.log(res);
          alert(JSON.stringify(res.data.data));
        })
        .then((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
