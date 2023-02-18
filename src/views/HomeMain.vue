<template>
  <div class="mobile-home-main">
    <img class="mobile-home-homemain-headimg" :src="HeadImg" alt="" />
    <span class="mobile-home-homemain-title">Mao Haoji</span>
    <small class="mobile-home-homemain-about"
      >陕西省宝鸡市虢镇中学学生 毛浩吉</small
    >
    <h3 class="mobile-home-homemain-aboutme">About Me</h3>
    <div class="mobile-home-homemain-line" />
    <div id="mobile-home-homemain-main">
      <span
        style="
          font-weight: 700;
          font-size: 18px;
          color: #7f8a90;
          margin: 10px 0 15px 0;
        "
        >原本以为这条路很难走,幸好我有这么多和我一起走的伙伴
      </span>
      <br />
      <div
        style="text-align: center; margin: 0 auto; width: 80%; margin-top: 20px"
      >
        <span
          style="
            font-weight: 400;
            font-size: 17px;
            color: #7f8a90;

            text-align: left;
          "
          >自从2019年建站以来,曾经使用过很多域名,但是都没有继续使用下去,现在我将使用maohaoji.com来完成网页浏览,软件数据存放等工作,谢谢大家的支持!</span
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeadImg from "@/assets/old_head_img.jpg";
export default defineComponent({
  name: "MobileHome",
  data() {
    return {
      copyright_text: "",
      HeadImg: HeadImg,
      menu: false,
      dialog: false,
    };
  },
  created() {
    this.copyright_text = `CopyRight © 2019-${new Date().getFullYear()} maohaoji.com 版权所有`;
    document.title = "欢迎访问毛浩吉的网站呐";
  },
  methods: {
    jump(url: string) {
      document.location = url;
    },
    new_web(url: string) {
      window.open(url, "_blank");
    },
  }
});
</script>
<style>
#mobile-home-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
#mobile-home-copyrighttext {
  font-size: 14px;
  color: rgb(95, 95, 95);
}
.mobile-home-title {
  font-size: 18px;
  display: block;
  margin-top: -27px;
  text-align: center;
}

.mobile-home-main {
  margin-top: -25px;
}

.mobile-home-homemain-headimg {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  text-align: center;
  display: block;
  border-radius: 100%;
}

.mobile-home-homemain-title {
  margin: 0 auto;
  text-align: center;
  display: block;
  font-size: 35px;
  font-weight: 800;
  color: #2b3b4b;
}

.mobile-home-homemain-about {
  margin: 0 auto;
  text-align: center;
  display: block;
  font-weight: 800;
  color: rgb(95, 95, 95);
  margin-top: 0px;
}

.mobile-home-homemain-line {
  width: 5%;
  height: 1px;
  background: #2b3b4b;
  display: block;
  margin: 0 auto;
}

.mobile-home-homemain-aboutme {
  margin: 50px auto 0px;
  text-align: center;
}

#mobile-home-homemain-main {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
</style>
