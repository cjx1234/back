# 后台管理系统


## 说明

> 本项目后端数据主要使用Mock模拟实现
> 项目登录账号为：
主权限：账号：admin，密码：admin，次权限：账号xiaoxiao，密码：xiaoxiao
> 如果觉得这个项目还不错，您可以点右上角 `Star`支持一下， 谢谢！ ^_^
## 项目简介
本项目基于`Vue`+`Vue-router`+`Vuex`+`Mock`+`Element-ui`+`Echars`实现。

包含了首页，商品以及用户管理界面。

实现了图标的展示、用户的查询、登录、面包屑、Tab、用户列表的增删改查功能。

### 登录

页面使用了element-ui的`Form`表单实现登录注册界面，使用全局前置导航钩子判断Cookie中是否存在对应token判断是否登录，并对表单填写进行了规范和校验。
作为后台管理系统，权限是十分重要的。

### 首页

首页主要是对图标数据和用户信息进行展示。


```
1. Clone project
git clone https://github.com/cjx1234/back 
2. Project setup
cd my-app
npm install
3. Compiles and hot-reloads for development
npm run serve
4. Compiles and minifies for production
npm run build
```
