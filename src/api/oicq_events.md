# oicq v2 标准事件

详情参考 [`oicq v2` 文档](https://oicqjs.github.io/oicq/)的 [`EventMap`](https://oicqjs.github.io/oicq/interfaces/EventMap.html) 定义。
[icqq文档](https://icqq.pages.dev/)

## message

消息事件（私聊、群聊、讨论组、临时消息、私聊自身等）

- `message`
- `message.private`
- `message.private.friend`
- `message.private.group`
- `message.private.other`
- `message.private.self`
- `message.group`
- `message.group.normal`
- `message.group.anonymous`
- `message.discuss`

## notice

通知事件（列表、群管理员、群主变更、戳一戳、禁言等）

- `notice`
- `notice.friend`
- `notice.friend.increase`
- `notice.friend.decrease`
- `notice.friend.recall`
- `notice.friend.poke`
- `notice.group`
- `notice.group.increase`
- `notice.group.decrease`
- `notice.group.recall`
- `notice.group.admin`
- `notice.group.ban`
- `notice.group.transfer`
- `notice.group.poke`

## request

请求事件（加群申请、邀请进群、好友申请、单项好友添加等）

- `request`
- `request.friend`
- `request.friend.add`
- `request.friend.single`
- `request.group`
- `request.group.add`
- `request.group.invite`
-

## sync

同一账号的其他客户端做了某些操作而触发的事件。

- `sync.message`
- `sync.read.private`
- `sync.read.group`
- `sync.read`

## system

系统事件（账号登录、上线、离线、被冻结等）

- `system.login.qrcode`
- `system.login.slider`
- `system.login.device`
- `system.login.error`
- `system.online`
- `system.offline`
- `system.offline.network`
- `system.offline.kickoff`

## 其他

- `internal.sso`
- `internal.input`
- `guild.message`