# qiankun-rsbuild-starter
> 基于qiankun2.0+rsbuild1.0实现的微服务

## 安装依赖

```bash
# 进入项目根目录
pnpm install
```

### 安装全局的依赖包，如格式化涉及到的`eslint`、`prettier`等
```bash
pnpm add eslint -wD
pnpm add prettier -wD
```

### 给某个 package 单独安装指定依赖
pnpm 提供了 `--filter` 参数，可以用来对特定的package进行某些操作。
`--filter` 参数跟着的是package下的`package.json`的`name`字段，并不是目录名。

```bash
# 给 main 子项目安装qiankun 依赖
pnpm add qiankun --filter main
pnpm add vue-router --filter main

# 给 app-vue3 子项目安装vue-router 依赖
pnpm add vue-router --filter app-vue3

# 给 app-vue2 子项目安装vue-router@3 依赖
pnpm add vue-router@3 --filter app-vue2
```

## 启动项目
```bash
# 启动所有应用
pnpm dev-all
# 单独启动子应用
pnpm dev --filter app-vue3
pnpm dev --filter app-vue2
```

### 打包项目
```bash
# 打包所有应用
pnpm build-all
# 单独打包子应用
pnpm build --filter app-vue3
pnpm build --filter app-vue2
```
