# Bot(Oicq) API

KiviBot 框架基于 icqq/OICQ，在插件中可以通过 `ctx.bot` 访问 OICQ 的完整 API。具体参考:

- [`icqq`文档](https://icqq.pages.dev/)
- [`oicq v2` 文档](https://oicqjs.github.io/oicq/classes/Client.html) - 官方文档
- [`oicq` 带注解文档](https://ltxhhz.github.io/oicq-wiki/api/%E5%BA%94%E7%94%A8%E7%B1%BBapi.html) - 中文详解(旧版)

> ⚠️ 注意：旧版文档中的 CQCode 已弃用，请使用 segment 代替。

## 示例

```typescript
import { definePlugin } from 'kivibot'

export default definePlugin({
    name: 'demo',
    version: '1.0.0',
    async setup(ctx) {
        // ctx.bot 即为 OICQ Client 实例
        
        // 发送私聊消息
        ctx.bot.sendPrivateMsg(1234567, 'Hello')
        
        // 获取好友列表
        const friendList = ctx.bot.getFriendList()
        
        // 处理群消息
        ctx.handle('message.group', (e) => {
            // 使用 OICQ API
            const groupInfo = ctx.bot.getGroupInfo(e.group_id)
            console.log(groupInfo)
        })
    }
})
```

更多 API 用法请参考 OICQ 文档。