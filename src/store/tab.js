import Cookies from "js-cookie"

export default {
    state:{
        isCollapse:false,
        tabsList:[
            {
                path:"/",
                name:"home",
                label:'首页',
                icon:'s-home',
                url:'Home/Home'
            }
        ],
        menu:[]
    },
    mutations:{
        collapseMenu(state){
          state.isCollapse=!state.isCollapse
        },
        //更新面包屑
        selectMenu(state,val){
            console.log(val,'val')
            //判断添加的是否为首页
            if(val.name !== 'home'){
                const index= state.tabsList.findIndex(item=> item.name === val.name)
                if(index === -1){
                    state.tabsList.push(val)
                }
            }
        },
        //关闭指定tag
        closeTag(state,item){
            const index= state.tabsList.findIndex(val=>val.name === item.name)
            state.tabsList.splice(index,1)
        },
        //存储路由数据
        setMenu(state,val){
            state.menu=val
            Cookies.set('menu',JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state,router){
            //判断缓存是否有数据
            if(!Cookies.get('menu')) return
            const menu=JSON.parse((Cookies.get('menu')))
            state.menu=menu
            const menuArray=[]
            menu.forEach(item => {
                if(item.children){
                    item.children=item.children.map(item=>{
                        item.component=()=>import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component=()=>import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            menuArray.forEach(item=>{
                router.addRoute('Main',item)
            })
        }
    }
}