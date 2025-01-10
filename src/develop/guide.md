# 开发入门
## 前言
**KiviBot插件**基于TypeScript开发。<br>因此，本教程假设您已经具有一定的**TypeScript基础**，并对Node.js有一定的了解。
- [前置知识](before.md)

## 所需工具

#### 1.KiviBot框架
通过 开始 中的 [快速上手](/start/online) 安装框架。
#### 2.代码编辑器
您需要一个文本编辑器来编写代码。 我们推荐使用 Visual Studio Code (VS Code)，因为它是免费和强大的，且支持终端的运行。[vscode官网](https://code.visualstudio.com/)

## 创建第一个插件/demo1
- 在`框架目录/plugins` 下新建文件夹(文件夹名称即插件名)
- 文件夹下新建index.ts(插件主文件)
- 将下列代码粘贴到index.ts文件中并保存

你可以新建一个demo1文件夹(文件夹名字要和下面name一样)
```typescript
import { definePlugin } from 'kivibot'

export default definePlugin({
    name: 'demo1',
    version: '1.0.0',
    async setup(ctx) {
        //改为自己的qq号
        ctx.bot.sendPrivateMsg(114514, '插件被启用了！')
    }
})
```

- 接着向机器人发送`#插件 启用 demo1`
- 再发送`#插件 禁用 demo1`

可以看到的是，在启用插件时机器人会向指定QQ发送"插件被启用了！"

**至此，你成功创建了第一个插件并启用。**

接下来，对插件内容进行简要的讲解：

**必要部分** 为每个插件都应有的代码：
```typescript
import { definePlugin } from 'kivibot' //[!code focus]
//第一行代码，引入了框架核心kivibot里面的definePlugin函数 //[!code focus]

export default definePlugin({ //[!code focus]
    name: 'demo1',  // 插件名
    version: '1.0.0', // 插件版本
    async setup(ctx) {
        // 插件启用时的逻辑 
    }
}) //[!code focus]
```

**主体部分** 实现插件的功能：
```typescript
import { definePlugin } from 'kivibot'

export default definePlugin({
    name: 'demo1',
    version: '1.0.0',
    async setup(ctx) { //[!code focus]
        // ctx是插件上下文对象,包含bot等属性和handle等方法 //[!code focus]
        ctx.bot.sendPrivateMsg(1706328818, '插件被启用了！') //[!code focus]
        // 调用bot对象的发送私聊消息方法 //[!code focus]
    }
})
```

> 注意，虽然demo1演示了 **插件启用后** 发送消息，但实际插件开发中我们**不推荐**你这样做。

**小结**：插件分为必要部分和本体部分，其中在必要部分定义插件的基本信息，在本体部分实现插件功能。通过demo1，你应该了解到了如何创建一个基础插件，以及如何使用ctx.bot发送消息。

## 实现监听消息并回复/demo2 
在KiviBot中，我们使用ctx.handle()方法来监听和处理消息事件。参考下面的示例：

```typescript
import { definePlugin } from 'kivibot'

export default definePlugin({
    name: 'demo2',
    version: '1.0.0',
    async setup(ctx) {
        ctx.handle('message', async (e) => { //[!code focus]
            // 监听所有消息事件 //[!code focus]
            if(e.message_type === 'private') { //[!code focus]
                // 判断是否为私聊消息 //[!code focus]
                e.reply(e.sender.nickname + '给我发了消息：' + e.raw_message) //[!code focus]
                // 使用reply方法直接回复消息 //[!code focus]
            }
        })
    }
})
```

**下面简要介绍下事件对象e**：
e为接收到的消息事件对象，包含消息的各种信息和回复等方法。
例如一个群消息事件对象的结构如下:
::: warning = =
(这是不完全的，可以自己console.log相应内容查看结构)
:::
```typescript
{
    post_type: 'message',
    message_id: 'xxx',
    user_id: 1234567,
    time: 1672304636,
    message: [
        { type: 'text', text: '这是文字' },
        { type: 'at', qq: 1234567, text: '@用户' },
        { 
            type: 'image',
            file: 'xxx.jpg',
            url: 'https://xxx.com/xxx.jpg'
        }
    ],
    raw_message: '这是文字@用户 [图片]',
    message_type: 'group',
    sender: {
        user_id: 1234567,
        nickname: '用户名',
        // ...其他发送者信息
    },
    group_id: 12345,
    // ...其他群消息相关信息
}
```

## 指定词回复/demo-2.5
再来一个示例，巩固一下demo-2的知识：

```typescript
import { definePlugin } from 'kivibot'

export default definePlugin({
    name: 'demo-2.5',
    version: '1.0.0',
    async setup(ctx) {
        ctx.handle('message', (e) => {
            if(e.raw_message === '你好') {
                // raw_message是消息的文本内容
                e.reply('世界！', true) 
                // reply方法第二个参数为是否引用回复,默认false
            }
        })
    }
})
```

## 发送图片,语音等消息/demo-3
在KiviBot中，我们使用segment工具来构造特殊消息：

```typescript
import { definePlugin, segment } from 'kivibot'

export default definePlugin({
    name: 'demo-3', 
    version: '1.0.0',
    async setup(ctx) {
        ctx.handle('message', (e) => {
            if(e.raw_message === '发图片') {
                const str = '这是个图片：'
                const img = 'https://example.com/image.png'
                e.reply([str, segment.image(img)])
                // 使用segment.image()构造图片消息
                // 复杂消息需要用数组形式发送
            }
        })
    }
})
```

支持的segment方法包括:
- segment.at() - @某人
- segment.image() - 图片
- segment.record() - 语音
- segment.video() - 视频 
等等

更多请看Bot API中的segment

## 提升自己
入门教程暂时到这里,接下来可以:
- 学习进阶开发技巧
- 阅读API文档深入学习