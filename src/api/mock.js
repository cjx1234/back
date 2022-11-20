import Mock from "mockjs";

import home from './mockDataServe/home'
import user from "./mockDataServe/user";
import permission from './mockDataServe/permission'

Mock.mock('/home/getData',home.getStatisticalData)

//用户列表数据
Mock.mock(/\/user\/getUser/,user.getUserList)
Mock.mock('/user/add','post',user.createUser)
Mock.mock('/user/edit','post',user.updateUser)
Mock.mock('/user/del','post',user.deletUser)

Mock.mock(/\/permission\/getMenu/,'post',permission.getMenu)
