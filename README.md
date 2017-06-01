# Node + MongoDB建站攻略（一期）

> 课程：[node + mongodb建站攻略（一期）](http://www.imooc.com/learn/75)

## 简介

- 后端搭建：

  ```javascript
  "dependencies": {
    "body-parser": "^1.17.2", // 解析表单`post`数据
    "express": "^4.15.3", // 项目基于`express`搭建
    "moment": "^2.18.1", // 格式化操作的时间
    "mongoose": "^4.10.4",  // mongodb设计与编码
    "pug": "^2.0.0-rc.1",  // 模板引擎完成页面渲染
    "serve-static": "^1.12.3", // 指定文件路径
    "underscore": "^1.8.3" // _.extend()
  }
  ```

- 前端构建：

  ```json
  "dependencies": {
    "bootstrap": "^3.3.7"
  }
  ```

  因为是一期项目，还没有设计的过于复杂，项目到二期时会补充。

- 网站功能

  电影预告片相关信息从后台录入，在前台展示，用户点击后即可观看预告片。

## 下载使用

### 使用Git

```
git clone https://github.com/lusg02/movieweb.git
```

### 手动下载

右上角，`Clone or download` =》 `Download ZIP`。

## 运行环境

### Node.js

[安装教程](http://www.runoob.com/nodejs/nodejs-install-setup.html)

### MongoDB

[安装教程](http://www.cnblogs.com/lzrabbit/p/3682510.html)

### Cmder

[使用教程](http://jeffjade.com/2016/01/13/2016-01-13-windows-software-cmder/)

非必须，推荐Windows用户使用。

### 步骤

1. 下载本项目。

2. 在本项目根目录下右键，`Cmder Here`。或者如果您恰好使用了Sublime，打开本项目，安装`Terminal`插件，配置`Cmder`的[教程](http://www.jianshu.com/p/20eb268b2223)，配置完成后快捷键`Shift+Ctrl+t`即可直接打开`Cmder`。

3. `npm install`。

4. `bower install`。

5. 打开`mongod.exe`。

6. `node app.js`。

   使用了`Cmder`后它是带有自动命令补全功能的（使用Tab键）。常用命令介绍：

   ```javascript
   node ap  -> node app.js
   cd com  -> cd component
   mkdir views // 新建文件夹
   touch app.js // 新建文件
   rm app.js // 删除文件
   ```

7. 测试

   ```javascript
   http://localhost:3000              // 首页
   http://localhost:3000/admin/movie  // 电影录入页
   http://localhost:3000/admin/list   // 显示录入信息，可修改和删除
   ```

8. 测试数据：

   ```json
   {
     "电影名称": "机械战警",
     "导演": "何塞·帕迪利亚",
     "国家": "美国",
     "语种": "英语",
     "海报": "http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
     "片源": "http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
     "上映": "2014",
     "简介": "我最帅"
   }
   ```

   ​



