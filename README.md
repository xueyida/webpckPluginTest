# webpckPluginTest
学习写一个webpack插件，实现的功能为实时检查一个文件的更新情况


## 两种构建方式：

1. npm start 使用webpack-cli

2. node index.js  用于调试


## 如何调试（使用第二种方式调试）

1. 在.vscode的launch.json添加如下内容

```json

   {
    "version": "0.2.0",
    "configurations": [

        **主要是这里的文件***
        {
            "type": "node",
            "request": "launch",
            "name": "define webpack",
            "program": "${workspaceFolder}/index.js"
        },
        ]
    }


```

2. f5开始调试




