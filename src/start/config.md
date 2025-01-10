# 配置文件

框架目录下的 `kivi.config.toml` 是 `KiviBot` 的配置文件，包含了一系列框架配置，可以手动进行修改，重启后生效。

> `npm start` 命令会检索当前目录下的 `kivi.config.toml` 配置文件以及 `app.js` 入口文件，从而使用正确的配置启动框架。
## 字段说明

```shell
# 机器人的 QQ 号
uin = 1145141919
# 机器人的 QQ 密码，为空则使用扫码
password = ""
# 机器人的主人，拥有框架层的最高权限，可以执行所有命令
owners = [1919114514]
# 机器人的管理员，原则上只有插件层管理权限，不能执行框架层的命令
admins = []
# 机器人的插件，插件的加载顺序按照列表的顺序
plugins = ["echo"]

# 传给 oicq/icqq 的 createClient 方法的参数
[oicq]
# 日志级别，可选值：trace, debug, info, warn, error
log_level = "trace"
# 登录协议，1 为安卓手机, 2 为安卓平板, 3 为安卓手表, 4 为 MacOS, 5 为 iPad
platform = 2
# 使用的协议版本，不指定或为空时使用最新版本
# ver = ""
# 签名 API 地址，不指定使用内置默认签名
sign_api_addr = ""
```