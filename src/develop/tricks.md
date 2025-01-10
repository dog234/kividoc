# 插件开发技巧
- [插件开发技巧](#插件开发技巧)
  - [*判断首字符*](#判断首字符)
  - [*发送图文*](#发送图文)
  - [*数据存储*](#数据存储)
    - [临时存储(重载丢失)](#临时存储重载丢失)
    - [持久存储(ai生成)](#持久存储ai生成)
  - [*网络请求*](#网络请求)
  - [待更新补充](#待更新补充)

**下面均为部分代码!**

## *判断首字符*
```typescript
if (e.raw_message.startsWith('点歌')) {
    // 执行代码
}
```

## *发送图文*
```typescript
import { definePlugin, segment } from 'kivibot'

export default definePlugin({
    name: 'demo',
    version: '1.0.0',
    async setup(ctx) {
        ctx.handle('message', async (e) => {
            const img = segment.image('https://example.com/image.jpg')
            const msg = 'Hello World'
            e.reply([img, msg])
        })
    }
})
```

## *数据存储*
### 临时存储(重载丢失)
```typescript
// 在插件作用域内使用 Map 存储临时数据
const tempData = new Map<string, any>()

export default definePlugin({
    name: 'demo',
    version: '1.0.0', 
    async setup(ctx) {
        tempData.set('key', 'value')
        console.log(tempData.get('key')) // 输出: value
    }
})
```

### 持久存储(ai生成)
```typescript
import { definePlugin } from 'kivibot'
import { join } from 'path'
import { readFileSync, writeFileSync, existsSync } from 'fs'

export default definePlugin({
    name: 'demo',
    version: '1.0.0',
    async setup(ctx) {
        // 数据文件路径
        const dataPath = join(__dirname, 'config.json')
        
        // 默认配置
        const defaultConfig = {
            name: 'kivibot',
            enabled: true
        }

        // 读取数据
        function loadData() {
            try {
                if (existsSync(dataPath)) {
                    const data = readFileSync(dataPath, 'utf8')
                    return JSON.parse(data)
                }
                // 首次运行时创建默认配置
                saveData(defaultConfig)
                return defaultConfig
            } catch (err) {
                console.error('读取配置文件失败:', err)
                return defaultConfig
            }
        }

        // 保存数据
        function saveData(data: any) {
            try {
                writeFileSync(dataPath, JSON.stringify(data, null, 2))
                return true
            } catch (err) {
                console.error('保存配置文件失败:', err)
                return false
            }
        }

        // 使用示例
        const config = loadData()
        config.lastUpdate = Date.now()
        saveData(config)
    }
})
```

## *网络请求*
KiviBot 内置了 axios,可直接使用:

```typescript
import { definePlugin,axios } from 'kivibot'

export default definePlugin({
    name: 'demo',
    version: '1.0.0',
    async setup(ctx) {
        ctx.handle('message', async (e) => {
            try {
                const res = await axios.get('https://api.example.com')
                e.reply(res.data)
            } catch (err) {
                console.error('请求失败:', err)
            }
        })
    }
})
```

## 待更新补充
如果您有好的技巧，欢迎在群内分享或提交 PR，感谢您的贡献！