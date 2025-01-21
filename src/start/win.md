# Windows 平台 部署 Kivibot

视频教程：[bilibili-Windows](https://www.bilibili.com/video/BV19xrkYnEEj/)

## 安装 Node.js

在 [node 官网](https://nodejs.org/zh-cn/download/)进行下载安装，版本请选择 18 以上版本，推荐最新长期稳定版。

> 安装教程可自行搜索。

## 通过 npx 快速配置项目

手动新建文件夹,在`搜索栏/地址栏`输入`cmd`并回车，打开终端。
::: warning 注意 ⚠️
当前仅支持密码登陆（扫码登录有错误）
:::
命令行/终端输入：

```shell
# 根据引导生成配置文件
npx kivibot
# 如果密码错误，请删除文件夹重新创建
```

## 更新版本并启动 Kivibot
先根据上面提示切换到机器人目录
```shell
npm i
# 安装所有配置模块
npm i kivibot@2.0.0-rc.1
# 更新kivibot(目前需更新rc版本使用)
npm start
# 或者npm run start
```

如果启动出现报错，可以看[常见问题](/start/problem)

## 后台部署(可选)

pm2 管理

```shell
# 全局安装pm2
npm install pm2 -g
# 启动项目
pm2 start app.js
# 停止项目
pm2 stop app.js
```

## 插件安装

- [插件说明](/plugin/note)
- [插件安装](/plugin/install)

## 报错

- [常见问题](/start/problem)
