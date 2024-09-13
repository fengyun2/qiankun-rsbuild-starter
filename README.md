# qiankun-rsbuild-starter
> 基于qiankun2.0+rsbuild1.0实现的微服务

## 安装依赖

```bash
# 进入项目根目录
pnpm install
```

- 给子项目(如packages/main)安装依赖
```bash
# 给main 子项目安装qiankun 依赖
pnpm add qiankun --filter main
pnpm add vue-router --filter main

# 给 app-vue3 子项目安装vue-router 依赖
pnpm add vue-router --filter app-vue3

# 给 app-vue2 子项目安装vue-router@3 依赖
pnpm add vue-router@3 --filter app-vue2
```

 启动项目
```

