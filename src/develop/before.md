# 前置知识

要想学习好编写插件，**第一步**应有

- 基础的 TypeScript 知识
- 理解 npm 模块并学会使用

**⚠️ 注意**：前置知识很重要！不牢固将影响插件的开发！

> 接下来，将对前置知识进行<透析>

## TypeScript

想必你已经知道，[Kivibot 框架](#)基于 [node.js](#)，那 node.js 与 TypeScript 有什么区别呢？

- 第一，node.js 是平台，TypeScript 是编程语言的超集
- 第二，TypeScript 在编译后生成 JavaScript，可以在浏览器和 node.js 中运行。

**了解区别后，我们接下来学习 TypeScript 这门编程语言：**<br>

- 如果你只是**基础开发**，你可以选择**下列教程**:<br>
  xxx<br>
  不自己提供了，推荐看阮一峰的 JavaScript 和 TypeScript 教程，好像也可以只看 TypeScript 教程

```typescript
//巩固对象知识
//TypeScript 中的所有事物都是对象：字符串、数值、数组、函数...
//对象拥有`属性`和`方法`,访问对象需要用到`.`，下面演示String对象:
let a: string = "Hello KiviBot!";
//那么a.length == 15，length即为a的属性
//那么a.slice(1) == 'ello KiviBot!'，slice()即为a的方法/函数
```

## npm 模块

npm（“Node 包管理器”）是 JavaScript 运行时 Node.js 的默认**程序包（模块）管理器**。
<br>你可以把 npm 理解为一个存储很多模块(软件包)的仓库。

> **npm 组成**：
>
> - [npm 官网](https://www.npmjs.com/)（发布和搜索模块的网站）
> - 注册表（巨大的数据库）
> - 命令行工具/终端
>   npm 模块的实质是将代码 `模块化`，使用模块可以**简化你的操作，直接实现某些功能。**

例如我开发了一个 “吃饭” 模块并上传到了[npm 官网](https://www.npmjs.com/),你若想要使用模块，需要用**命令行工具/终端** 输入:

```bash
npm i -D 吃饭
```

- 这里的`npm`是必须要带的，因为你使用的是 npm 管理器。
- `i`是 install 的缩写，意为安装。
- `-D` 指的是开发环境安装（你也可以不输入），`-g` 是全局安装，正如你安装 kivibot 框架（模块），其中的命令就包含了 `-g` 。

输入后，npm 模块会被安装在当前目录下的 node_modules 目录下，如 KiviBot 框架下就有该目录，里面有内置的模块，例如 `oicq`，`axios` 等。

最后就需要在 ts 文件里引入（import）了，它通常放在文件的开头：

```typescript
import eat from "吃饭";
//这只是 ES 模块的引入方式，其他的可自行搜索
//接下来便可以通过 eat，来访问方法。
eat.do();
```

## API（接口）

API（Application Programming Interface, 应用程序编程接口）是一些**预先定义**的`函数`。

> 例如你**想要给** viki 送篮球，你必须**先给**小明送篮球，让小明把篮球给小蔡，**最后**小蔡把篮球给 viki。而别人已经写好了**连续送篮球**的 `函数`，你只需要调用这个 `函数`，就可以直接把篮球送到 viki 手里，这就是 API（接口）。
> **KiviBot 就有很多的 API，以便更快实现某功能：**

- Kivi API
- [Bot(Oicq) API](https://oicqjs.github.io/oicq/)

这时候解释一下，**KiviBot 是依靠 Oicq API 来编写的框架**，意思是实现框架离不开 Oicq，编写插件中同样可以使用 Oicq API。**请以官方 API 为主，Bot(Oicq) API 为辅。**
