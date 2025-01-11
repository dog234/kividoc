import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "KiviBot",
  description: "轻量、跨平台的 QQ 机器人框架",
  head: [["link", { rel: "icon", type: "image/png", href: `/dimo.png` }]],
  lastUpdated: true,
  srcDir: "src",
  markdown: {
    theme: "one-dark-pro",
    // lineNumbers: true
  },
  themeConfig: {
    logo: "/dimo.png",
    nav: [
      { text: "简介", link: "/about" },
      {
        text: "开发",
        link: "/develop/before.md",
      },
      {
        text: "插件",
        items: [
          {
            items: [{ text: "插件索引", link: "/plugin/list" }],
          },
          {
            items: [
              {
                text: "待完善",
                link: "#",
              },
              // {
              //   text: "Gitee 插件索引",
              //   link: "https://gitee.com/pupbotjs/plugins-index",
              // },
              // {
              //   text: "Github 插件索引",
              //   link: "https://github.com/Pupbotjs/plugins-index",
              // },
              // {
              //   text: "Npm 平台",
              //   link: "https://npm.im/search?q=pupbot-plugin",
              // },
              // {
              //   text: "提供插件思路",
              //   link: "https://gitee.com/pupbotjs/plugins-index/issues",
              // },
            ],
          },
        ],
      },
      {
        text: "工具",
        items: [
          {
            items: [
              { text: "待完善", link: "#" },
              // { text: "图形化开发", link: "https://pup.coco-central.cn/" },
            ],
          },
        ],
      },
      {
        text: "更多",
        link: "/more",
      },
    ],
    sidebar: [
      {
        text: "开始",
        collapsible: true,
        items: [
          { text: "简介", link: "/about" },
          {
            text: "快速上手",
            link: "/start/online",
          },
          {
            text: "部署",
            items: [
              { text: "Linux", link: "/start/linux" },
              { text: "Windows", link: "/start/win" },
              { text: "Macos", link: "/start/macos" },
              { text: "Android (Termux)", link: "/start/android" },
              { text: "其他", link: "/start/other" },
            ],
          },
          {
            text: "命令",
            items: [
              { text: "消息指令", link: "/start/cmd/msg" },
              { text: "CLI 命令", link: "/start/cmd/cli" },
            ],
          },
          {
            text: "配置文件",
            link: "/start/config",
          },
          {
            text: "常见问题",
            link: "/start/problem",
          },
        ],
      },
      {
        text: "插件",
        collapsible: true,
        items: [
          { text: "插件说明", link: "/plugin/note" },
          { text: "安装插件", link: "/plugin/install" },
          // { text: "插件仓库", link: "/plugin/warehouse" },
          { text: "插件索引", link: "/plugin/list" },
        ],
      },
      {
        text: "开发",
        collapsible: true,
        items: [
          { text: "前置知识", link: "/develop/before" },
          { text: "开发入门", link: "/develop/guide" },
          { text: "开发技巧", link: "/develop/tricks" },
          { text: "发布插件", link: "/develop/publish" },
        ],
      },
      {
        text: "API 文档",
        collapsible: true,
        items: [
          { text: "Kivi API", link: "/api/plugin" },
          { text: "Bot API", link: "/api/bot" },
          { text: "oicq v2 标准事件", link: "/api/oicq_events" },
        ],
      },
    ],
    outline: 2,
    outlineTitle: "目录",
    socialLinks: [
      { icon: "github", link: "https://github.com/dog234/kividoc" },
      {
        icon: {
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M3.18 13.54c.58-1.38 1.39-2.4 1.99-2.62c-.01-.8.14-1.3.39-1.7c0-.03-.06-.36.16-.77C5.87 4.85 8.21 2 12 2s6.13 2.85 6.28 6.45c.22.41.16.74.16.77c.25.4.4.9.39 1.7c.6.22 1.41 1.24 1.99 2.63c.75 1.76.87 3.45.27 3.75c-.41.2-1.06-.3-1.67-1.18c-.24.98-.84 1.88-1.69 2.59c.9.33 1.48.87 1.48 1.48c0 1-1.58 1.81-3.52 1.81c-1.76 0-3.19-.66-3.48-1.5h-.42c-.29.84-1.72 1.5-3.48 1.5c-1.94 0-3.52-.81-3.52-1.81c0-.61.58-1.15 1.48-1.48c-.85-.71-1.45-1.61-1.69-2.59c-.61.88-1.26 1.38-1.67 1.18c-.6-.3-.48-1.99.27-3.76\"/></svg>"
        },
        link: "https://qm.qq.com/cgi-bin/qm/qr?k=fteC6GcYQzcT1nnaBYDVbRWCIUkpIQrk&jump_from=webapi&authKey=GlN8HuZgPU0ze6EMYWk/8ZS5OGKtKZKxWzZjrj/NWMWEXHXVGpDrxJsmZ/feQcwp",
      },
    ],
    footer: {
      message:
        'KiviBot 使用 MIT 协议开放源代码 | 基于 <a href="https://github.com/takayama-lily/oicq">icqq</a> 实现',
      copyright: 'Copyright © 2025-PRESENT <a href="#">Kivibot社区</a>',
    },
    lastUpdatedText: "上次更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    editLink: {
      pattern: "https://github.com/dog234/kividoc/edit/main/src/:path",
      text: "在 GitHub 上编辑",
    },
  },
});
