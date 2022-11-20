<template>
  <div class="tabs">
    <el-tag
      v-for=" (item,index) in tags"
      :key="item.name"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'" 
      @click="changeMenu(item)"  
      @close="handleClose(item,index)"  
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList,     
    }),
  },
  methods: {
    ...mapMutations(['closeTag']),
    changeMenu(item){
        this.$router.push(item.path)
    },
    handleClose(item,index){
        this.closeTag(item)
        const length=this.tags.length
        //删除后的跳转逻辑。如果删除的是中间的
        if(item.name !== this.$route.name){
            return
        }
        //删除最后一项
        if(index === length){
            this.$router.push({
                name:this.tags[index-1].name
            })
        }else{
            //删除中间的
            this.$router.push({
                name :this.tags[index].name
            })
        }
        
    }
  },
};
</script>
<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>