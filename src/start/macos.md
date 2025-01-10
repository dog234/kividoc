# Macos平台 部署Kivibot
视频教程：[bilibili-Mac](https://www.bilibili.com/video/BV19xrkYnEEj/)
## 安装 Node.js
在[node 官网](https://nodejs.org/zh-cn/download/)进行下载安装，版本请选择18以上版本，推荐最新长期稳定版。
>安装教程可自行搜索。

## 通过 npx 快速配置项目
手动新建文件夹,把文件夹图标拖到终端图标上一键打开。
::: warning 注意⚠️
当前仅支持密码登陆(扫码登录有错误)
:::
命令行/终端输入：
``` shell
# 根据引导生成配置文件
npx kivibot
# 如果密码错误，请删除文件夹重新创建
```
## 启动 Kivibot
``` shell
npm start
# 或者npm run start
```
如果启动出现报错，可以看[常见问题](/start/problem)

## 后台部署(可选)
pm2管理
``` shell
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
