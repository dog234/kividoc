# 发布插件

:::danger 警告
当前无法发布插件，只能通过打包插件文件让别人下载
:::
:::danger 警告
当前无法发布插件，只能通过打包插件文件让别人下载
:::
:::danger 警告
当前无法发布插件，只能通过打包插件文件让别人下载
:::
:::tip 推荐（npm 插件）
如果你的插件有**实用的功能**，\
建议发布到 [npmjs 平台](https://www.npmjs.com/)，以供他人更方便的下载！
:::
**按照下面步骤依次操作:**

## 注册账号

在 [npmjs 平台](https://www.npmjs.com/)，**注册你自己的账号**。<br>

> 请记住你的名称，密码，以及邮箱。

## cd 文件夹

接下来有两种操作:

- **方法一：** 终端 `cd` 到 框架 > plugins > `插件所在文件夹`\
  文件夹下应有 index.js 文件

```cmd
cd /plugins/myplugin
```

- **方法二：** 新建文件夹，将 index.js 拖入

## 执行指令

1.在插件文件夹终端 **初始化** 模块/包

```cmd
npm init
```

根据提示设置参数:

> name：pupbot-plugin-xxxx<br>
> version：Enter<br>
> description： 简单介绍模块内容<br>
> main： Enter/入口文件<br>
> test command： Enter<br>
> git repository： Enter/若在 github 发布可有<br>
> keywords： 关键词(pupbot pupbot-plugin)<br>
> author： 作者<br>
> license（ISC）：Enter/代码授权许可

2.**检测报错**

```cmd
npm install -g
```

3.**连接账号**
输入名称，密码，邮箱

```cmd
npm link
npm login
```

本次连接账号后，以后可不用再登录。<br>

4.**上传代码**

```cmd
npm publish
```

## 更新插件

```cmd
npm version patch
//更新版本号
```

```cmd
npm publish
```

## 更改信息

可以到 [npmjs 平台](https://www.npmjs.com/)更改你的 packages 信息。

## 展示文档

为了使别人直接看到插件的功能，指令等。\
你可以在文件夹下，创建 **README.md** 文件显示插件相关内容。

README.md 以 markdown 语法编写，\
可到 [markdown 语法](https://markdown.com.cn/editor/) 学习文档的编写。\
或参考别人的 md 写法：
[示例 1](https://www.npmjs.com/package/pupbot-plugin-ai?activeTab=explore)，[示例 2](https://www.npmjs.com/package/pupbot-plugin-mcmotd?activeTab=explore)
