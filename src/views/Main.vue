<template>
  <div>
    <el-container style="max-height: 100vh">
      <el-aside width="auto">
        <CommonAsid />
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader />
        </el-header>
        <CommonTag />
        <el-main
          ><el-main> <router-view></router-view></el-main
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import CommonAsid from "@/components/CommonAsid.vue";
import CommonTag from "@/components/CommonTag.vue";
import CommonHeader from "@/components/CommonHeader.vue";
export default {
  data() {
    return {};
  },
  components: { CommonAsid, CommonHeader, CommonTag },
};
</script>
<style lang="less" scoped>
.el-header {
  padding: 0px;
  margin: 0px;
  
}

.el-main{
    padding: 0 0 0 20px;
}
</style>
