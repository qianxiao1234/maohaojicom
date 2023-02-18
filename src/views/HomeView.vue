<template>
  <!--手机端的显示-->
  <template v-if="screen_type == 'mobile'">
    <el-container>
      <el-header>
        <span>
          <el-button
            text
            circle
            style="margin-left: -12px"
            @click="menu_show = true"
          >
            <el-icon size="25"><Expand /></el-icon>
          </el-button>
        </span>

        <span class="mobile-home-title"> 泰迪熊的小站 </span>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <el-footer id="mobile-home-footer">
        <span id="mobile-home-copyrighttext">{{ copyright_text }}</span
        ><br />
        <el-button text link @click="jmp_url('https://beian.miit.gov.cn/')"
          >陕ICP备2022002542号-2</el-button
        >
        <el-button
          text
          link
          @click="jmp_url('https://icp.gov.moe/?keyword=20228899')"
          >萌ICP备20228899号</el-button
        ></el-footer
      >
    </el-container>

    <el-drawer
      v-model="menu_show"
      :with-header="false"
      direction="ltr"
      size="60%"
    >
      <div>
        <span>菜单列表</span>
        <el-button
          text
          circle
          style="float: right; margin-left: 5px; margin-top: -5px"
          @click="menu_show = false"
        >
          <el-icon size="25"><Fold /></el-icon>
        </el-button>
      </div>
      <div style="margin-top: 10px"></div>
      <el-menu
        style="margin-top: 10px"
        default-active="1"
        :default-openeds="['2']"
      >
        <el-menu-item
          index="1"
          @click="
            {
              jmp_url('https://maohaoji.com');
              menu_show = false;
            }
          "
        >
          <el-icon><Location /></el-icon>
          <span>关于泰迪熊</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>作品展示</span>
          </template>
          <el-menu-item-group title="服务端类">
            <template v-for="item in menu.aside.serve">
              <el-menu-item
                :index="item.index"
                @click="
                  () => {
                    (menu_show = false), jmp_url(item.url, item.newwindow);
                  }
                "
              >
                {{ item.lable }}
              </el-menu-item>
            </template>
          </el-menu-item-group>
          <el-menu-item-group title="客户端类">
            <template v-for="item in menu.aside.desktop">
              <el-menu-item
                :index="item.index"
                @click="
                  () => {
                    (menu_show = false), jmp_url(item.url, item.newwindow);
                  }
                "
              >
                {{ item.lable }}
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="3" disabled>
          <el-icon><Document /></el-icon>
          <span>申请参加新项目内测</span>
        </el-menu-item>
        <el-menu-item index="4" @click="dialog = true">
          <el-icon><Phone /></el-icon>
          <span>寻求合作</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>

    <el-dialog v-model="dialog" width="200px" draggable>
      <template #header>
        <div style="margin: 0 auto; text-align: center">
          <span>联系站长</span>
        </div>
      </template>
      <div style="margin: 0 auto; text-align: center">
        <span>请选择联系途径</span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <div style="margin: 0 auto; text-align: center">
            <template v-for="item in menu.contact">
              <el-button @click="jmp_url(item.url, item.newwindow)">
                {{ item.lable }}
              </el-button>
            </template>
          </div>
        </span>
      </template>
    </el-dialog>
  </template>

  <!--电脑端的显示-->
  <template v-else>
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :ellipsis="false">
          <el-menu-item index="0"
            ><img
              src="https://q2.qlogo.cn/g?b=qq&nk=2870926164&s=100"
              alt=""
              :id="headimg_id"
              @mousemove="
                () => {
                  head_title_html = `<span style='margin-left: 5px'>不要欺负头像</span>`;
                  headimg_id = 'pc-home-headimg-big';
                }
              "
              @mouseleave="
                () => {
                  head_title_html = '<span>泰迪熊的小站</span>';
                  headimg_id = 'pc-home-headimg';
                }
              " /><span v-html="head_title_html"></span
          ></el-menu-item>
          <div style="flex-grow: 1" />
          <el-sub-menu index="1">
            <template #title>Github</template>
            <template v-for="item in menu.aside.pc_top">
              <el-menu-item
                :index="item.index"
                @click="jmp_url(item.url, item.newwindow)"
                >{{ item.lable }}</el-menu-item
              >
            </template>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            style="margin-top: 10px"
            default-active="1"
            :default-openeds="['2']"
          >
            <el-menu-item index="1" @click="jmp_url('https://maohaoji.com')">
              <el-icon><Location /></el-icon>
              <span>关于泰迪熊</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Menu /></el-icon>
                <span>作品展示</span>
              </template>
              <el-menu-item-group title="服务端类">
                <template v-for="item in menu.aside.serve">
                  <el-menu-item
                    :index="item.index"
                    @click="
                      () => {
                        (menu_show = false), jmp_url(item.url, item.newwindow);
                      }
                    "
                  >
                    {{ item.lable }}
                  </el-menu-item>
                </template>
              </el-menu-item-group>
              <el-menu-item-group title="客户端类">
                <template v-for="item in menu.aside.desktop">
                  <el-menu-item
                    :index="item.index"
                    @click="
                      () => {
                        (menu_show = false), jmp_url(item.url, item.newwindow);
                      }
                    "
                  >
                    {{ item.lable }}
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item index="3" disabled>
              <el-icon><Document /></el-icon>
              <span>申请参加新项目内测</span>
            </el-menu-item>
            <el-menu-item index="4" @click="dialog = true">
              <el-icon><Phone /></el-icon>
              <span>寻求合作</span>
            </el-menu-item>
          </el-menu> </el-aside
        ><el-main><RouterView /></el-main>
      </el-container>

      <el-footer id="pc-home-footer">
        <span id="pc-home-copyrighttext">{{ copyright_text }}</span
        ><br />
        <el-button text link @click="jmp_url('https://beian.miit.gov.cn/')"
          >陕ICP备2022002542号-2</el-button
        >
        <el-button
          text
          link
          @click="jmp_url('https://icp.gov.moe/?keyword=20228899')"
          >萌ICP备20228899号</el-button
        ></el-footer
      >
    </el-container>
    <el-dialog v-model="dialog" width="200px" draggable>
      <template #header>
        <div style="margin: 0 auto; text-align: center">
          <span>联系站长</span>
        </div>
      </template>
      <div style="margin: 0 auto; text-align: center">
        <span>请选择联系途径</span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <div style="margin: 0 auto; text-align: center">
            <template v-for="item in menu.contact">
              <el-button @click="jmp_url(item.url, item.newwindow)">
                {{ item.lable }}
              </el-button>
            </template>
          </div>
        </span>
      </template>
    </el-dialog>
  </template>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import HeadImg from "@/assets/old_head_img.jpg";
export default defineComponent({
  name: "home",
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        that.screen_width = window.innerWidth;
      })();
    };
  },
  data() {
    return {
      /**窗口宽度 */
      screen_width: ref(0),
      /**弹出窗口状态 */
      dialog: false,
      /**头像 */
      HeadImg: HeadImg,
      menu_show: false,
      /**底部声明文字 */
      copyright_text: `CopyRight © 2019-${new Date().getFullYear()} maohaoji.com 版权所有`,
      /**菜单数组 */
      menu: {
        aside: {
          serve: [
            {
              lable: "TDServe",
              url: "https://github.com/taidixiong233/TDserve",
              newwindow: true,
              index: "2-1",
            },
            {
              lable: "TD-QQBot",
              url: "https://github.com/taidixiong233/TD-QQbot",
              newwindow: true,
              index: "2-2",
            },
          ],
          desktop: [
            {
              lable: "TDui",
              url: "https://github.com/taidixiong233/TDui",
              newwindow: true,
              index: "2-3",
            },
            {
              lable: "随机数生成器",
              url: "https://random-number.maohaoji.com",
              newwindow: true,
              index: "2-4",
            },
          ],
          pc_top: [
            {
              lable: "Github主页",
              url: "https://github.com/taidixiong233",
              newwindow: true,
              index: "1-1",
            },
            {
              lable: "TD-QQBot",
              url: "https://github.com/taidixiong233/TD-QQbot",
              newwindow: true,
              index: "1-2",
            },
            {
              lable: "TDui",
              url: "https://github.com/taidixiong233/TDui",
              newwindow: true,
              index: "1-3",
            },
            {
              lable: "TD Serve",
              url: "https://github.com/taidixiong233/TDserve",
              newwindow: true,
              index: "1-4",
            },
          ],
        },
        contact: [
          {
            lable: "QQ",
            url: "tencent://message/?uin=2870926164&Site=&Menu=yes",
            newwindow: true,
          },
          {
            lable: "Email",
            url: "mailto:maohaoji2006@163.com",
            newwindow: true,
          },
        ],
      },
      headimg_id: "pc-home-headimg",
      head_title_html: "<span>泰迪熊的小站</span>",
    };
  },
  computed: {
    /**显示类型 */
    screen_type(): "mobile" | "pc" {
      this.$store.commit("saveValue", {
        name: "UA",
        value: this.screen_width >= 750 ? "pc" : "mobile",
      });
      return this.$store.state.UA;
    },
  },
  methods: {
    jmp_url(url: string, newWindow = false) {
      if (newWindow) {
        window.open(url, "_blank");
        return;
      } else {
        document.location = url;
      }
    },
  },
});
</script>
<style>
#pc-home-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

#pc-home-headimg {
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 100%;
}

#pc-home-headimg-big {
  height: 60px;
  width: 60px;
  border-radius: 100%;
}

#pc-home-copyrighttext {
  font-size: 14px;
  color: rgb(95, 95, 95);
}
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
