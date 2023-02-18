<template>
    <el-empty :description="`没有找到页面: ${original_url}`" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "notfound",
  setup() {
    return {
      original_url: location.host + "/404",
    };
  },
  beforeRouteEnter() {
    localStorage.removeItem("original_url");
    localStorage.setItem("original_url", location.href);
  },
  created() {
    if (typeof localStorage.getItem("original_url") != null){
        this.original_url = localStorage.getItem("original_url") as string;
    }
  },
  mounted() {
    document.title = '404 没有找到这个页面'
  }
});
</script>
