import Mock from "mockjs";
let List=[]
export default {
    getStatisticalData:()=>{
        for(let i = 0;i < 7;i++) {
            List.push(
                Mock.mock({
                    苹果:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    oppo:Mock.Random.float(100,8000,0,0),
                    魅族:Mock.Random.float(100,8000,0,0),
                    三星:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return{
            code:20000,
            data:{
                //饼图
                videoData:[
                    {
                        name:'小米',
                        value:2999
                    },
                    {
                        name:'苹果',
                        value:4999
                    },
                    {
                        name:'vivo',
                        value:1999
                    },
                    {
                        name:'三星',
                        value:3999
                    },
                    {
                        name:'oppo',
                        value:1999
                    },
                    {
                        name:'魅族',
                        value:2999
                    },
                    
                ],
                userData:[
                    {
                        date:'周一',
                        new:16,
                        active:200
                    },
                    {
                        date:'周二',
                        new:10,
                        active:500
                    },
                    {
                        date:'周三',
                        new:12,
                        active:550
                    },
                    {
                        date:'周四',
                        new:13,
                        active:200
                    },
                    {
                        date:'周五',
                        new:8,
                        active:200
                    },
                    {
                        date:'周六',
                        new:17,
                        active:200
                    },
                    {
                        date:'周日',
                        new:21,
                        active:200
                    },
                ],
                orderData:{
                    date:['20201001','20201002','20201003','20201004','20201005','20201006','20201007'],
                    data:List
                },
                tableData:[
                    {
                        name: "vivo",
                        todayBuy: 20,
                        monthBuy: 50,
                        totalBuy: 200,
                      },
                    {
                        name: "苹果",
                        todayBuy: 400,
                        monthBuy: 800,
                        totalBuy: 1100,
                      },
                      {
                        name: "oppo",
                        todayBuy: 200,
                        monthBuy: 500,
                        totalBuy: 700,
                      },
                      {
                        name: "小米",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800,
                      },
                      {
                        name: "三星",
                        todayBuy: 200,
                        monthBuy: 300,
                        totalBuy: 500,
                      },
                      {
                        name: "魅族",
                        todayBuy: 200,
                        monthBuy: 400,
                        totalBuy: 900,
                      },
                ]
            }
        }
    }
}