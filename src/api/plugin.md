# Kivi API/工具函数 文档

::: tip
大部分都是工具函数，ctx.bot 是 icqq(oicq)的 client 实例，更多 API 参考 [Bot API](/api/bot)
:::

## 核心 API

### handle

#### 注册事件处理器

```typescript
declare function handle<EventName extends keyof oicq.EventMap>(
  eventName: EventName,
  handler: oicq.EventMap[EventName]
): any;
```

### hasRight

#### 是否有权限，即：主人或管理员

```typescript
declare function hasRight(
  id: number | { sender: { user_id: number } }
): boolean;
```

### isOwner

#### 是否为主人

```typescript
declare function isOwner(id: number | { sender: { user_id: number } }): boolean;
```

### isAdmin

#### 是否为管理员

```typescript
declare function isAdmin(id: number | { sender: { user_id: number } }): boolean;
```

### http

#### 用于发送 HTTP 请求的 axios 实例

```typescript
declare const http: ReturnType<typeof oicq.axios.create>;
```

### createVanilla

#### 创建一个简单的状态管理器

```typescript
declare function createVanilla<T extends object>(
  initial: T
): {
  mutate: T;
  snapshot: () => Snapshot<T>;
  subscribe(fn: (state: Snapshot<T>) => any): () => void;
};
```

## 加密与编码

### md5

#### MD5 加密

```typescript
declare function md5(text: BinaryLike, encoding: "buffer"): Buffer;
declare function md5(text: BinaryLike, encoding?: BinaryToTextEncoding): string;
```

### base64Encode

#### Base64 编码

```typescript
declare function base64Encode(str: string | number): string | number;
```

### base64Decode

#### Base64 解码

```typescript
declare function base64Decode(str: string): string;
```

## 数据处理

### unique

#### 数组去重

```typescript
declare function unique<T>(array: T[]): T[];
```

### ensureArray

#### 确保值为数组

```typescript
declare function ensureArray<T>(value: T | T[]): T[];
```

## 类型判断

### isGroupMsg

#### 是否是群消息

```typescript
declare const isGroupMsg: (
  event: AllMessageEvent
) => event is oicq.GroupMessageEvent;
```

### isDiscussMsg

#### 是否是讨论组消息

```typescript
declare const isDiscussMsg: (
  event: AllMessageEvent
) => event is oicq.DiscussMessageEvent;
```

### isPrivateMsg

#### 是否是私聊消息

```typescript
declare const isPrivateMsg: (
  event: AllMessageEvent
) => event is oicq.PrivateMessageEvent;
```

### isBoolean

#### 判断是否为布尔值

```typescript
declare function isBoolean(val: unknown): val is boolean;
```

### isNumber

#### 判断是否为数字

```typescript
declare function isNumber(val: unknown): val is number;
```

### isString

#### 判断是否为字符串

```typescript
declare function isString(val: unknown): val is string;
```

### isObject

#### 判断是否为对象

```typescript
declare function isObject(val: unknown): val is object;
```

### isFunction

#### 判断是否为函数

```typescript
declare function isFunction<T extends AnyFunc>(val: unknown): val is T;
```

### isDefined

#### 判断是否定义

```typescript
declare function isDefined<T = unknown>(val?: T): val is T;
```

### noNullish

#### 排除 null 和 undefined

```typescript
declare function noNullish<T>(val: T | null): val is T;
```

## 时间与延时

### wait

#### 异步延时函数

```typescript
declare function wait(ms: number): Promise<void>;
```

### now

#### 获取当前时间

```typescript
declare function now(): number;
```

### timestamp

#### 获取当前时间戳

```typescript
declare function timestamp(): number;
```

## 随机数

### randomInt

#### 生成随机整数

```typescript
declare function randomInt(min: number, max: number): number;
```

### randomItem

#### 取数组内随机一项

```typescript
declare function randomItem<T = any>(array: T[]): T;
```

## 工具函数

### noop

#### 空函数

```typescript
declare function noop(): undefined;
```

### clamp

#### 限制数值在指定范围内

```typescript
declare function clamp(n: number, min: number, max: number): number;
```

### stringifyError

#### 错误信息字符串格式化

```typescript
declare function stringifyError(error: any): string;
```

### qs

#### JS 对象转换成 `urlencoded` 格式字符串

```typescript
declare function qs(obj: Record<number | string, any>): string;
```

## 图片处理

### getQQAvatarLink

#### 通过 QQ 号获取任意头像链接

```typescript
declare function getQQAvatarLink(qq: number, size?: number): string;
```

### getGroupAvatarLink

#### 通过群号获取任意群头像链接

```typescript
declare function getGroupAvatarLink(group: number, size?: number): string;
```

### getImageUrl

#### 获取消息中的图片链接

```typescript
declare function getImageUrl(event: AllMessageEvent): string;
```

### getQuoteImageUrl

#### 获取引用回复的消息中的图片链接

```typescript
declare function getQuoteImageUrl(event: AllMessageEvent): Promise<string>;
```

### getMentionedImageUrl

#### 获取消息提及的图片链接（消息或者引用消息）

```typescript
declare function getMentionedImageUrl(event: AllMessageEvent): Promise<string>;
```

### getImage

#### 获取消息中的图片元素

```typescript
declare function getImage(event: AllMessageEvent): oicq.ImageElem | null;
```

### getFaceImage

#### 获取消息中的图片元素

```typescript
declare function getFaceImage(event: AllMessageEvent): oicq.BfaceElem | null;
```

### getQuoteImage

#### 获取引用回复的图片消息

```typescript
declare function getQuoteImage(
  event: AllMessageEvent
): Promise<oicq.ImageElem | null>;
```

### getMentionedImage

#### 获取消息提及的图片（消息或者引用消息）

```typescript
declare function getMentionedImage(
  event: AllMessageEvent
): Promise<oicq.ImageElem | null>;
```

## 消息处理

### getText

#### 获取消息中的文本内容

```typescript
declare function getText(event: {
  message: AllMessageEvent["message"];
}): string;
```

### getQuoteText

#### 获取回复的消息中的文本内容

```typescript
declare function getQuoteText(event: AllMessageEvent): Promise<string>;
```

### getMentionedUserId

#### 获取提到的用户 QQ 号

```typescript
declare function getMentionedUserId(
  event: AllMessageEvent
): Promise<number | 0>;
```

## 图片搜索

### BaiDuSearchPic

#### 百度图片以图搜图

```typescript
declare function BaiDuSearchPic(urlOrBuffer: string | Buffer): Promise<any>;
```

## 图片代理

### proxyImageWithCgi

#### 使用 CGI 服务代理图片链接

```typescript
declare function proxyImageWithCgi(url: string): Promise<any>;
```

## 消息发送

### noticeGroups

#### 群发群消息

```typescript
declare function noticeGroups(
  this: oicq.Client,
  groupIdList: number[],
  message: oicq.Sendable,
  delay?: number
): Promise<void>;
```

### noticeFriends

#### 群发好友消息

```typescript
declare function noticeFriends(
  this: oicq.Client,
  friendIdList: number[],
  message: oicq.Sendable,
  delay?: number
): Promise<void>;
```

### noticeAdmins

#### 群发通知给管理员

```typescript
declare function noticeAdmins(
  this: oicq.Client,
  message: oicq.Sendable,
  delay?: number
): Promise<void>;
```

### noticeOwners

#### 群发通知给主人

```typescript
declare function noticeOwners(
  this: oicq.Client,
  message: oicq.Sendable,
  delay?: number
): Promise<void>;
```

### noticeMainOwner

#### 群发通知给第一个主人

```typescript
declare function noticeMainOwner(
  this: oicq.Client,
  message: oicq.Sendable
): Promise<void>;
```

## 登录与认证

### getPskey

#### 通过域名获取 pskey

```typescript
declare function getPskey(this: oicq.Client, domain: string): Promise<string>;
```

### getCookie

#### 通过域名获取 cookie 和其他认证信息，支持缓存

```typescript
declare function getCookie(
  this: oicq.Client,
  domain: string
): Promise<{
  pskey: string;
  skey: any;
  uin: number;
  gtk: string;
  bkn: string;
  cookie: string;
}>;
```

### getCookieByQRCode

#### 通过扫码登录获取 cookie

```typescript
declare function getCookieByQRCode(
  this: oicq.Client,
  appid: number,
  appkey: string,
  ticket: string
): Promise<void>;
```

### getDevToolsLoginCode

#### 获取开发者工具登录码

```typescript
declare function getDevToolsLoginCode(): Promise<string>;
```

### requestLoginViaDevTools

#### 申请通过开发者工具登录，以获取 Cookie

```typescript
declare function requestLoginViaDevTools(): Promise<{
  code: string;
  url: string;
}>;
```

### queryDevToolsLoginStatus

#### 获取开发者工具登录结果

```typescript
declare function queryDevToolsLoginStatus(code: string): Promise<{
  status: "OK" | "Wait" | "Expired" | "Used" | "Error";
  ticket?: string;
}>;
```

### getAuthCodeViaTicket

#### 通过开发者工具登录获取 AuthCode

```typescript
declare function getAuthCodeViaTicket(
  ticket: string,
  appid: number
): Promise<string>;
```

### getAuthCodeOfBot

#### 通过 Oicq 协议获取小程序 AuthCode

```typescript
declare function getAuthCodeOfBot(
  this: oicq.Client,
  appid: number
): Promise<any>;
```

### getMinicoTokenViaAuthCode

#### 通过 Auth Code 获取 minico Token

```typescript
declare function getMinicoTokenViaAuthCode(
  authCode: string,
  appid: number
): Promise<any>;
```

### getViolationRecords

#### 获取 QQ 安全中心违规记录

```typescript
declare function getViolationRecords(
  this: oicq.Client,
  authCode: string,
  appid: number,
  size?: number
): Promise<
  {
    type: string;
    time: string;
    duration: string;
    reason: number;
  }[]
>;
```

### uid2uin

#### uid 转 uin

```typescript
declare function uid2uin(this: oicq.Client, uid: string): Promise<any>;
```

## 文件上传

### uploadFileToDir

#### 上传文件到指定群的群文件的指定目录

```typescript
declare function uploadFileToDir(
  this: oicq.Client,
  group: number,
  filepath: string,
  uploadFilename?: string,
  dirname?: string
): Promise<boolean>;
```

### uploadImageToCollection

#### 上传图片到收藏

```typescript
declare function uploadImageToCollection(
  this: oicq.Client,
  buffer: ArrayBuffer
): Promise<string>;
```

### uploadImageToGroupHomework

#### 上传图片到群作业

```typescript
declare function uploadImageToGroupHomework(
  this: oicq.Client,
  imgBase64: string
): Promise<string>;
```

### uploadImageToQQMail

#### 上传图片到 QQ 邮箱

```typescript
declare function uploadImageToQQMail(
  this: oicq.Client,
  url: string,
  sid: {
    sid: string;
    qm_sid: string;
  }
): Promise<string>;
```

### uploadImageToGroupNotice

#### 上传图片到群公告

```typescript
declare function uploadImageToGroupNotice(
  this: oicq.Client,
  urlOrBlob: string | Blob
): Promise<{
  h: string;
  w: string;
  id: string;
  url: string;
  url2: string;
  url3: string;
}>;
```

## 高级消息功能

### signArk

#### 签名卡片 json

```typescript
declare function signArk(this: oicq.Client, json: string): Promise<any>;
```

### runWithErrorHandler

#### 运行函数并捕获错误, 并通过 event.reply 发送错误信息

```typescript
declare function runWithErrorHandler(
  this: oicq.Client,
  fn: () => any,
  event?: {
    reply: (
      content: oicq.Sendable,
      quote?: boolean
    ) => Promise<oicq.MessageRet>;
  },
  message?: oicq.Sendable | ((error: string) => oicq.Sendable)
): Promise<any>;
```

### createMarkdown

#### 创建 markdown 消息

```typescript
declare function createMarkdown(
  this: oicq.Client,
  markdown: string
): Promise<oicq.JsonElem>;
```

### createHighlightJson

#### 创建高亮显示的 json 消息

```typescript
declare function createHighlightJson(
  this: oicq.Client,
  json: string | object
): Promise<oicq.JsonElem>;
```

### canBan

#### 判断 Bot 是否有权限或者是否能够禁言目标群的目标 qq

```typescript
declare function canBan(
  this: oicq.Client,
  gid: number,
  qq: number
): Promise<boolean>;
```

### getUserProfile

#### 获取用户资料

```typescript
declare function getUserProfile(
  this: oicq.Client,
  uin: number
): Promise<{
  qq: any;
  qid: string;
  uid: string;
  nickname: string;
  level: number;
  signature: string;
  registerAt: number;
}>;
```
