import * as oicq from '../develop/_internal';
export * from '../develop/_internal';
export { oicq };
import * as _jiti from 'jiti';
import * as vanilla from 'valtio/vanilla';
import { Snapshot } from 'valtio/vanilla';
export { vanilla as valtio };
import { BinaryLike, BinaryToTextEncoding } from 'node:crypto';
import dayjs from 'dayjs';
export { default as dayjs } from 'dayjs';
import mri from 'mri';
export { default as mri } from 'mri';
import dedent from 'dedent';
export { default as dedent } from 'dedent';
import { string2argv } from 'string2argv';
export { string2argv } from 'string2argv';
import { filesize } from 'filesize';
export { filesize } from 'filesize';
import node_fs from 'node:fs';
export { default as fs } from 'node:fs';
import node_path from 'node:path';
export { default as path } from 'node:path';

type Noop = () => void;
type AnyFunc = (...args: any[]) => any;
type PureObject<T = any> = Record<PropertyKey, T>;
type Arrayable<T> = T | T[];
type Gettable<T> = T | (() => T);
type AllMessageEvent = oicq.GroupMessageEvent | oicq.PrivateMessageEvent | oicq.DiscussMessageEvent;
/**
 * 用于发送 HTTP 请求的 axios 实例
 */
declare const http: ReturnType<typeof oicq.axios.create>;
/**
 * 创建一个简单的状态管理器
 */
declare function createVanilla<T extends object>(initial: T): {
    mutate: T;
    snapshot: () => Snapshot<T>;
    subscribe(fn: (state: Snapshot<T>) => any): () => void;
};
declare const jiti: _jiti.Jiti;
/**
 * MD5 加密
 */
declare function md5(text: BinaryLike, encoding: 'buffer'): Buffer;
declare function md5(text: BinaryLike, encoding?: BinaryToTextEncoding): string;
/**
 * 数组去重
 */
declare function unique<T>(array: T[]): T[];
/**
 * 确保值为数组
 */
declare function ensureArray<T>(value: T | T[]): T[];
/**
 * 是否是群消息
 */
declare const isGroupMsg: (event: AllMessageEvent) => event is oicq.GroupMessageEvent;
/**
 * 是否是讨论组消息
 */
declare const isDiscussMsg: (event: AllMessageEvent) => event is oicq.DiscussMessageEvent;
/**
 * 是否是私聊消息
 */
declare const isPrivateMsg: (event: AllMessageEvent) => event is oicq.PrivateMessageEvent;
/**
 * 通过 pskey 获取 gtk
 */
declare function getGTk(pskey: string): number;
/**
 * 异步延时函数
 * @param {number} ms 等待毫秒数
 * @return {Promise<void>}
 */
declare function wait(ms: number): Promise<void>;
/**
 * 生成随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {number} 随机范围内的整数
 */
declare function randomInt(min: number, max: number): number;
/**
 * 取数组内随机一项
 * @param {Array<T>} array 待操作数组
 * @return {T} 数组内的随机一项
 */
declare function randomItem<T = any>(array: T[]): T;
/**
 * 空函数
 */
declare function noop(): undefined;
/**
 * 获取当前时间
 */
declare function now(): number;
/**
 * 获取当前时间戳
 */
declare function timestamp(): number;
/**
 * clamp 操作，限制数值在指定范围内
 */
declare function clamp(n: number, min: number, max: number): number;
/**
 * 排除 null 和 undefined
 */
declare function noNullish<T>(val: T | null): val is T;
/**
 * 判断是否定义
 */
declare function isDefined<T = unknown>(val?: T): val is T;
/**
 * 判断是否为函数
 */
declare function isFunction<T extends AnyFunc>(val: unknown): val is T;
/**
 * 判断是否为数字
 */
declare function isNumber(val: unknown): val is number;
/**
 * 判断是否为布尔值
 */
declare function isBoolean(val: unknown): val is boolean;
/**
 * 判断是否为字符串
 */
declare function isString(val: unknown): val is string;
/**
 * 判断是否为对象
 */
declare function isObject(val: unknown): val is object;
/**
 * 通过 QQ 号获取任意头像链接
 *
 * size 可选： 0 | 40 | 100 | 160 | 640，0 为原图
 */
declare function getQQAvatarLink(qq: number, size?: number): string;
/**
 * 通过群号获取任意群头像链接
 *
 * size 可选： 40 | 100 | 640，0 为原图
 */
declare function getGroupAvatarLink(group: number, size?: number): string;
/** 获取引用回复的消息 */
declare function getQuoteMessage(event: AllMessageEvent): Promise<oicq.GroupMessage | oicq.PrivateMessage | null>;
/**
 * 获取消息中的图片链接
 */
declare function getImageUrl(event: AllMessageEvent): string;
/**
 * 获取引用回复的消息中的图片链接
 */
declare function getQuoteImageUrl(event: AllMessageEvent): Promise<string>;
/**
 * 获取消息提及的图片链接（消息或者引用消息）
 */
declare function getMentionedImageUrl(event: AllMessageEvent): Promise<string>;
/**
 * 获取消息中的图片元素
 */
declare function getImage(event: AllMessageEvent): oicq.ImageElem | null;
/**
 * 获取消息中的图片元素
 */
declare function getFaceImage(event: AllMessageEvent): oicq.BfaceElem | null;
/**
 * 获取引用回复的图片消息
 */
declare function getQuoteImage(event: AllMessageEvent): Promise<oicq.ImageElem | null>;
/**
 * 获取消息提及的图片（消息或者引用消息）
 */
declare function getMentionedImage(event: AllMessageEvent): Promise<oicq.ImageElem | null>;
/**
 * 获取消息中的文本内容
 */
declare function getText(event: {
    message: AllMessageEvent['message'];
}): string;
/**
 * 获取回复的消息中的文本内容
 */
declare function getQuoteText(event: AllMessageEvent): Promise<string>;
/**
 * 获取提到的用户 QQ 号
 */
declare function getMentionedUserId(event: AllMessageEvent): Promise<number | 0>;
/**
 * 错误信息字符串格式化
 * @param {any} error 待处理错误
 * @return {string} stringify 结果
 */
declare function stringifyError(error: any): string;
/**
 * Encodes the string using base64.
 * @param {string|number} str - The string to encode.
 * @returns {string} The base64-encoded string.
 */
declare function base64Encode(str: string | number): string | number;
/**
 * Decodes the string from base64 to UTF-8.
 * @param {string} str - The base64-encoded string.
 */
declare function base64Decode(str: string): string;
/**
 * JS 对象转换成 `urlencoded` 格式字符串 { name: 'Bob', age: 18 } => name=Bob&age=18
 * @param {Record<number | string, any>} obj JS 对象
 * @return {string} 转换后的字符串
 */
declare function qs(obj: Record<number | string, any>): string;
/**
 * 格式化展示 QQ 等级
 */
declare function formatQQLevel(level: number): string;
/**
 * 使用 CGI 服务代理图片链接
 */
declare function proxyImageWithCgi(url: string): Promise<any>;
/**
 * 百度图片以图搜图
 *
 * url 或者 buffer
 */
declare function BaiDuSearchPic(urlOrBuffer: string | Buffer): Promise<any>;

type utils_AllMessageEvent = AllMessageEvent;
type utils_AnyFunc = AnyFunc;
type utils_Arrayable<T> = Arrayable<T>;
declare const utils_BaiDuSearchPic: typeof BaiDuSearchPic;
type utils_Gettable<T> = Gettable<T>;
type utils_Noop = Noop;
type utils_PureObject<T = any> = PureObject<T>;
declare const utils_base64Decode: typeof base64Decode;
declare const utils_base64Encode: typeof base64Encode;
declare const utils_clamp: typeof clamp;
declare const utils_createVanilla: typeof createVanilla;
declare const utils_dayjs: typeof dayjs;
declare const utils_dedent: typeof dedent;
declare const utils_ensureArray: typeof ensureArray;
declare const utils_filesize: typeof filesize;
declare const utils_formatQQLevel: typeof formatQQLevel;
declare const utils_getFaceImage: typeof getFaceImage;
declare const utils_getGTk: typeof getGTk;
declare const utils_getGroupAvatarLink: typeof getGroupAvatarLink;
declare const utils_getImage: typeof getImage;
declare const utils_getImageUrl: typeof getImageUrl;
declare const utils_getMentionedImage: typeof getMentionedImage;
declare const utils_getMentionedImageUrl: typeof getMentionedImageUrl;
declare const utils_getMentionedUserId: typeof getMentionedUserId;
declare const utils_getQQAvatarLink: typeof getQQAvatarLink;
declare const utils_getQuoteImage: typeof getQuoteImage;
declare const utils_getQuoteImageUrl: typeof getQuoteImageUrl;
declare const utils_getQuoteMessage: typeof getQuoteMessage;
declare const utils_getQuoteText: typeof getQuoteText;
declare const utils_getText: typeof getText;
declare const utils_http: typeof http;
declare const utils_isBoolean: typeof isBoolean;
declare const utils_isDefined: typeof isDefined;
declare const utils_isDiscussMsg: typeof isDiscussMsg;
declare const utils_isFunction: typeof isFunction;
declare const utils_isGroupMsg: typeof isGroupMsg;
declare const utils_isNumber: typeof isNumber;
declare const utils_isObject: typeof isObject;
declare const utils_isPrivateMsg: typeof isPrivateMsg;
declare const utils_isString: typeof isString;
declare const utils_jiti: typeof jiti;
declare const utils_md5: typeof md5;
declare const utils_mri: typeof mri;
declare const utils_noNullish: typeof noNullish;
declare const utils_noop: typeof noop;
declare const utils_now: typeof now;
declare const utils_oicq: typeof oicq;
declare const utils_proxyImageWithCgi: typeof proxyImageWithCgi;
declare const utils_qs: typeof qs;
declare const utils_randomInt: typeof randomInt;
declare const utils_randomItem: typeof randomItem;
declare const utils_string2argv: typeof string2argv;
declare const utils_stringifyError: typeof stringifyError;
declare const utils_timestamp: typeof timestamp;
declare const utils_unique: typeof unique;
declare const utils_wait: typeof wait;
declare namespace utils {
    export { type utils_AllMessageEvent as AllMessageEvent, type utils_AnyFunc as AnyFunc, type utils_Arrayable as Arrayable, utils_BaiDuSearchPic as BaiDuSearchPic, type utils_Gettable as Gettable, type utils_Noop as Noop, type utils_PureObject as PureObject, utils_base64Decode as base64Decode, utils_base64Encode as base64Encode, utils_clamp as clamp, utils_createVanilla as createVanilla, utils_dayjs as dayjs, utils_dedent as dedent, utils_ensureArray as ensureArray, utils_filesize as filesize, utils_formatQQLevel as formatQQLevel, node_fs as fs, utils_getFaceImage as getFaceImage, utils_getGTk as getGTk, utils_getGroupAvatarLink as getGroupAvatarLink, utils_getImage as getImage, utils_getImageUrl as getImageUrl, utils_getMentionedImage as getMentionedImage, utils_getMentionedImageUrl as getMentionedImageUrl, utils_getMentionedUserId as getMentionedUserId, utils_getQQAvatarLink as getQQAvatarLink, utils_getQuoteImage as getQuoteImage, utils_getQuoteImageUrl as getQuoteImageUrl, utils_getQuoteMessage as getQuoteMessage, utils_getQuoteText as getQuoteText, utils_getText as getText, utils_http as http, utils_isBoolean as isBoolean, utils_isDefined as isDefined, utils_isDiscussMsg as isDiscussMsg, utils_isFunction as isFunction, utils_isGroupMsg as isGroupMsg, utils_isNumber as isNumber, utils_isObject as isObject, utils_isPrivateMsg as isPrivateMsg, utils_isString as isString, utils_jiti as jiti, utils_md5 as md5, utils_mri as mri, utils_noNullish as noNullish, utils_noop as noop, utils_now as now, utils_oicq as oicq, node_path as path, utils_proxyImageWithCgi as proxyImageWithCgi, utils_qs as qs, utils_randomInt as randomInt, utils_randomItem as randomItem, utils_string2argv as string2argv, utils_stringifyError as stringifyError, utils_timestamp as timestamp, utils_unique as unique, vanilla as valtio, utils_wait as wait };
}

/**
 * 群发群消息
 */
declare function noticeGroups(this: oicq.Client, groupIdList: number[], message: oicq.Sendable, delay?: number): Promise<void>;
/**
 * 群发好友消息
 */
declare function noticeFriends(this: oicq.Client, friendIdList: number[], message: oicq.Sendable, delay?: number): Promise<void>;
/**
 * 群发通知给管理员
 */
declare function noticeAdmins(this: oicq.Client, message: oicq.Sendable, delay?: number): Promise<void>;
/**
 * 群发通知给主人
 */
declare function noticeOwners(this: oicq.Client, message: oicq.Sendable, delay?: number): Promise<void>;
/**
 * 群发通知给第一个主人
 */
declare function noticeMainOwner(this: oicq.Client, message: oicq.Sendable): Promise<void>;
/**
 * 通过域名获取 pskey
 */
declare function getPskey(this: oicq.Client, domain: string): Promise<string>;
/**
 * 通过域名获取 cookie 和其他认证信息，支持缓存
 */
declare function getCookie(this: oicq.Client, domain: string): Promise<{
    pskey: string;
    skey: any;
    uin: number;
    gtk: string;
    bkn: string;
    cookie: string;
}>;
/**
 * 签名卡片 json
 */
declare function signArk(this: oicq.Client, json: string): Promise<any>;
/**
 * 运行函数并捕获错误, 并通过 event.reply 发送错误信息
 */
declare function runWithErrorHandler(this: oicq.Client, fn: () => any, event?: {
    reply: (content: oicq.Sendable, quote?: boolean) => Promise<oicq.MessageRet>;
}, message?: oicq.Sendable | ((error: string) => oicq.Sendable)): Promise<any>;
/** 创建 markdown 消息 */
declare function createMarkdown(this: oicq.Client, markdown: string): Promise<oicq.JsonElem>;
/** 创建高亮显示的 json 消息 */
declare function createHighlightJson(this: oicq.Client, json: string | object): Promise<oicq.JsonElem>;
/** 判断 Bot 是否有权限或者是否能够禁言目标群的目标 qq  */
declare function canBan(this: oicq.Client, gid: number, qq: number): Promise<boolean>;
/**
 * 上次文件到指定群的群文件的指定目录
 */
declare function uploadFileToDir(this: oicq.Client, group: number, filepath: string, uploadFilename?: string, dirname?: string): Promise<boolean>;
/**
 * 获取用户资料
 */
declare function getUserProfile(this: oicq.Client, uin: number): Promise<{
    qq: any;
    qid: string;
    uid: string;
    nickname: string;
    level: number;
    signature: string;
    registerAt: number;
}>;
/**
 * 上传图片到收藏
 */
declare function uploadImageToCollection(this: oicq.Client, buffer: ArrayBuffer): Promise<string>;
/**
 * 上传图片到群作业
 */
declare function uploadImageToGroupHomework(this: oicq.Client, imgBase64: string): Promise<string>;
/**
 * 上传图片到 QQ 邮箱
 */
declare function uploadImageToQQMail(this: oicq.Client, url: string, sid: {
    sid: string;
    qm_sid: string;
}): Promise<string>;
/**
 * 上传图片到群公告
 */
declare function uploadImageToGroupNotice(this: oicq.Client, urlOrBlob: string | Blob): Promise<{
    h: string;
    w: string;
    id: string;
    url: string;
    url2: string;
    url3: string;
}>;
/**
 * 通过扫码登录获取 cookie
 */
declare function getCookieByQRCode(this: oicq.Client, appid: number, appkey: string, ticket: string): Promise<void>;
/**
 * 获取开发者工具登录码
 */
declare function getDevToolsLoginCode(): Promise<string>;
/**
 * 申请通过开发者工具登录，以获取 Cookie
 */
declare function requestLoginViaDevTools(): Promise<{
    code: string;
    url: string;
}>;
/**
 * 获取开发者工具登录结果
 */
declare function queryDevToolsLoginStatus(code: string): Promise<{
    status: 'OK' | 'Wait' | 'Expired' | 'Used' | 'Error';
    ticket?: string;
}>;
/**
 * 通过开发者工具登录获取 AuthCode
 */
declare function getAuthCodeViaTicket(ticket: string, appid: number): Promise<string>;
/**
 * 通过 Oicq 协议获取小程序 AuthCode
 */
declare function getAuthCodeOfBot(this: oicq.Client, appid: number): Promise<any>;
/**
 * 通过 Auth Code 获取 minico Token
 */
declare function getMinicoTokenViaAuthCode(authCode: string, appid: number): Promise<any>;
/**
 * 获取 QQ 安全中心违规记录
 */
declare function getViolationRecords(this: oicq.Client, authCode: string, appid: number, size?: number): Promise<{
    type: string;
    time: string;
    duration: string;
    reason: number;
}[]>;
/**
 * uid 转 uin
 */
declare function uid2uin(this: oicq.Client, uid: string): Promise<any>;

declare const services_canBan: typeof canBan;
declare const services_createHighlightJson: typeof createHighlightJson;
declare const services_createMarkdown: typeof createMarkdown;
declare const services_getAuthCodeOfBot: typeof getAuthCodeOfBot;
declare const services_getAuthCodeViaTicket: typeof getAuthCodeViaTicket;
declare const services_getCookie: typeof getCookie;
declare const services_getCookieByQRCode: typeof getCookieByQRCode;
declare const services_getDevToolsLoginCode: typeof getDevToolsLoginCode;
declare const services_getMinicoTokenViaAuthCode: typeof getMinicoTokenViaAuthCode;
declare const services_getPskey: typeof getPskey;
declare const services_getUserProfile: typeof getUserProfile;
declare const services_getViolationRecords: typeof getViolationRecords;
declare const services_noticeAdmins: typeof noticeAdmins;
declare const services_noticeFriends: typeof noticeFriends;
declare const services_noticeGroups: typeof noticeGroups;
declare const services_noticeMainOwner: typeof noticeMainOwner;
declare const services_noticeOwners: typeof noticeOwners;
declare const services_queryDevToolsLoginStatus: typeof queryDevToolsLoginStatus;
declare const services_requestLoginViaDevTools: typeof requestLoginViaDevTools;
declare const services_runWithErrorHandler: typeof runWithErrorHandler;
declare const services_signArk: typeof signArk;
declare const services_uid2uin: typeof uid2uin;
declare const services_uploadFileToDir: typeof uploadFileToDir;
declare const services_uploadImageToCollection: typeof uploadImageToCollection;
declare const services_uploadImageToGroupHomework: typeof uploadImageToGroupHomework;
declare const services_uploadImageToGroupNotice: typeof uploadImageToGroupNotice;
declare const services_uploadImageToQQMail: typeof uploadImageToQQMail;
declare namespace services {
    export { services_canBan as canBan, services_createHighlightJson as createHighlightJson, services_createMarkdown as createMarkdown, services_getAuthCodeOfBot as getAuthCodeOfBot, services_getAuthCodeViaTicket as getAuthCodeViaTicket, services_getCookie as getCookie, services_getCookieByQRCode as getCookieByQRCode, services_getDevToolsLoginCode as getDevToolsLoginCode, services_getMinicoTokenViaAuthCode as getMinicoTokenViaAuthCode, services_getPskey as getPskey, services_getUserProfile as getUserProfile, services_getViolationRecords as getViolationRecords, services_noticeAdmins as noticeAdmins, services_noticeFriends as noticeFriends, services_noticeGroups as noticeGroups, services_noticeMainOwner as noticeMainOwner, services_noticeOwners as noticeOwners, services_queryDevToolsLoginStatus as queryDevToolsLoginStatus, services_requestLoginViaDevTools as requestLoginViaDevTools, services_runWithErrorHandler as runWithErrorHandler, services_signArk as signArk, services_uid2uin as uid2uin, services_uploadFileToDir as uploadFileToDir, services_uploadImageToCollection as uploadImageToCollection, services_uploadImageToGroupHomework as uploadImageToGroupHomework, services_uploadImageToGroupNotice as uploadImageToGroupNotice, services_uploadImageToQQMail as uploadImageToQQMail };
}

/**
 * Onebot 12 HTTP 配置
 *
 * @see https://12.onebot.dev/connect/communication/http/
 */
interface Onebot12HttpConfig {
    /** 连接类型 */
    type: 'http';
    /** HTTP 服务器监听 IP */
    host?: string;
    /** HTTP 服务器监听端口 */
    port?: number;
    /** 访问令牌 */
    access_token?: string;
    /** 是否启用 get_latest_events 元动作 */
    event_enabled?: boolean;
    /** 事件缓冲区大小，超过该大小将会丢弃最旧的事件，0 表示不限大小 */
    event_buffer_size?: number;
}
/**
 * Onebot 12 HTTP WebHook 配置
 *
 * @see https://12.onebot.dev/connect/communication/http-webhook/
 */
interface Onebot12HttpWebHookConfig {
    /** 连接类型 */
    type: 'http-webhook';
    /** Webhook 上报地址 */
    url: string;
    /** 访问令牌 */
    access_token?: string;
    /** 上报请求超时时间，单位：毫秒，0 表示不超时 */
    timeout?: number;
}
/**
 * Onebot 12 正向 WebSocket 配置
 *
 * @see https://12.onebot.dev/connect/communication/websocket/
 */
interface OneBot12ForwardWebSocketConfig {
    /** 连接类型 */
    type: 'ws';
    /** WebSocket 服务器监听 IP */
    host?: string;
    /** WebSocket 服务器监听端口 */
    port?: number;
    /** 访问令牌 */
    access_token?: string;
    /** 心跳配置 */
    heartbeat?: {
        /** 是否启用 */
        enable?: boolean;
        /** 心跳间隔 */
        interval?: number;
    };
}
/**
 * Onebot 12 反向 WebSocket 配置
 *
 * @see https://12.onebot.dev/connect/communication/websocket-reverse/
 */
interface OneBot12ReverseWebSocketConfig {
    /** 连接类型 */
    type: 'ws-reverse';
    /** 反向 WebSocket 连接地址 */
    url: string;
    /** 访问令牌 */
    access_token?: string;
    /** 反向 WebSocket 重连间隔，单位：毫秒，必须大于 0 */
    reconnect_interval?: number;
}
interface KiviConfig {
    uin: number;
    password: string;
    owners: number[];
    admins: number[];
    plugins: string[];
    online_push: boolean;
    oicq?: oicq.Config;
    onebot?: (Onebot12HttpConfig | Onebot12HttpWebHookConfig | OneBot12ForwardWebSocketConfig | OneBot12ReverseWebSocketConfig)[];
}

interface KiviPluginState {
    /** 机器人实例 */
    bot: oicq.Client;
    /** 主人列表 */
    owners: readonly number[];
    /** 管理员列表 */
    admins: readonly number[];
    /** 插件列表 */
    plugins: readonly string[];
}
/**
 * 工具函数
 */
type Util = typeof utils;
/**
 * 需要使用 .call 调用 ctx.bot 的服务
 */
type Service = typeof services;
interface KiviPluginContext extends KiviPluginState, Util, Service {
    config: KiviConfig;
    /** axios */
    axios: typeof oicq.axios;
    /** 注册事件处理器 */
    handle: <EventName extends keyof oicq.EventMap>(eventName: EventName, handler: oicq.EventMap[EventName]) => any;
    /** 是否为主人 */
    isOwner: (id: number | {
        sender: {
            user_id: number;
        };
    }) => boolean;
    /** 是否为管理员 */
    isAdmin: (id: number | {
        sender: {
            user_id: number;
        };
    }) => boolean;
    /** 是否有权限，即：主人或管理员 */
    hasRight: (id: number | {
        sender: {
            user_id: number;
        };
    }) => boolean;
}
interface KiviPlugin {
    /** 插件 ID */
    name: string;
    /** 插件版本 */
    version?: string;
    /** 插件描述 */
    description?: string;
    /** cron 定时任务 */
    cron?: [CronExpress: string, handler: (ctx: KiviPluginContext, now: Date | 'manual' | 'init') => any][];
    /** 插件初始化，可返回一个函数用于清理 */
    setup?: (ctx: KiviPluginContext) => any;
}
declare const pluginsMap: Map<string, [plugin: KiviPlugin, clear: () => void | Promise<void>, info: {
    name: string;
    version: string;
    description: string;
    type: "builtin" | "external";
}]>;
declare function definePlugin(plugin: KiviPlugin): KiviPlugin;
declare function enablePlugin(this: oicq.Client, pluginPath: string | KiviPlugin, state: KiviPluginState): Promise<KiviPlugin | undefined>;

declare function bootstrap(): Promise<void>;

export { type AllMessageEvent, type AnyFunc, type Arrayable, BaiDuSearchPic, type Gettable, type KiviPlugin, type KiviPluginContext, type KiviPluginState, type Noop, type PureObject, base64Decode, base64Encode, bootstrap, clamp, createVanilla, definePlugin, enablePlugin, ensureArray, formatQQLevel, getFaceImage, getGTk, getGroupAvatarLink, getImage, getImageUrl, getMentionedImage, getMentionedImageUrl, getMentionedUserId, getQQAvatarLink, getQuoteImage, getQuoteImageUrl, getQuoteMessage, getQuoteText, getText, http, isBoolean, isDefined, isDiscussMsg, isFunction, isGroupMsg, isNumber, isObject, isPrivateMsg, isString, jiti, md5, noNullish, noop, now, pluginsMap, proxyImageWithCgi, qs, randomInt, randomItem, stringifyError, timestamp, unique, wait };
