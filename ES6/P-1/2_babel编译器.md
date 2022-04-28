#

## babel编译器

- 在上线之前用编译器，将ES6语法转化成ES5的语法

## Traceur转换器

## npm 包管理工具

- node

- npm init 初始化项目

  会在目标文件夹生成一个package.json文件

## 安装babel

- 1、新建文件：.babelrc 指定当前指定当前对应安装的规则是什么

  { "presets": ["babel-preset-env"] }

- 2、npm i babel-preset-env --save-dev 安装到当前目录文件 (i -> install)

- 3、npm i babel-cli --save-dev

  会生成一个"babel-cli":" "

- 4、在package.json文件的"script":下面配置"build":"babel + 转译文件名 -o bundle.js"  -> 把转译文件输出到当前文件目录下的bundle.js （-o 全称：--out-file）

  执行：npm run build

- 5、若把src文件夹下面的app.js转译到lib文件夹下："build":"babel src -d lib"

  "script-name":"babel-node ./src/app.js"

  执行：npm run script-name
