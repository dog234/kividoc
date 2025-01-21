# Android 平台 部署 Kivibot

<!-- 视频教程：[bilibili-Android](https://space.bilibili.com/524190453) -->

## 安装 Termux APP

到 [Github-Termux](https://github.com/termux/termux-app/releases) 下载 APK 安装包，优先选择 `arm64-v8a` 版本，不可用再尝试使用其他版本。\
或[群文件下载](https://qm.qq.com/cgi-bin/qm/qr?k=fteC6GcYQzcT1nnaBYDVbRWCIUkpIQrk&jump_from=webapi&authKey=GlN8HuZgPU0ze6EMYWk/8ZS5OGKtKZKxWzZjrj/NWMWEXHXVGpDrxJsmZ/feQcwp)。

## 配置 Termux 国内源

命令行/终端输入：

```shell
match='s@packages.termux.org@mirrors.ustc.edu.cn/termux@'
sed -i $match $PREFIX/etc/apt/sources.list
pkg up
```

## 安装 Node.js

```shell
pkg install nodejs
```

## 通过 npx 快速配置项目

::: warning 注意 ⚠️
当前仅支持密码登陆（扫码登录有错误）
:::
命令行/终端输入：

```shell
# 创建空目录作为框架目录，并切换到这个目录
mkdir ~/bot && cd ~/bot
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
