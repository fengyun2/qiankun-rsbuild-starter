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

## 部署(Nginx)

> Mac 下配置nginx

### nginx安装及配置

1. 安装
```bash
brew install nginx
```

2. 启动
```bash
brew services start nginx
```

3. 重启
```bash
brew services restart nginx
```

4. 停止
```bash
brew services stop nginx
```

mac intel芯片的nginx配置目录在 `/usr/local/etc/nginx`，mac m1芯片的nginx配置目录在 `/opt/homebrew/etc/nginx`。
mac intel芯片nginx根目录在 `/usr/local/var/www`，mac m1芯片nginx根目录在 `/opt/homebrew/var/www`。

nginx目录结构如下：
> /usr/local/var/www
```md
├── 50x.html
├── app
│   ├── app-vue2
│   ├── app-vue3
│   └── main
└── index.html
```

1. 配置nginx.conf关键代码，详情看[nginx.conf](./nginx.conf)文件

```conf
http {

    server {
        listen       8009;
        server_name  localhost;

        location / {
          add_header Access-Control-Allow-Origin *;
          add_header Cache-Control no-cache;
          root html/app/main;
          index index.html index.htm;
          try_files $uri $uri/ /index.html;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       8010;
        server_name  localhost;

        location / {
          add_header Access-Control-Allow-Origin *;
          add_header Cache-Control no-cache;
          root html/app/app-vue2;
          index index.html index.htm;
          try_files $uri $uri/ /index.html;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       8011;
        server_name  localhost;

        location / {
          add_header Access-Control-Allow-Origin *;
          add_header Cache-Control no-cache;
          root html/app/app-vue3;
          index index.html index.htm;
          try_files $uri $uri/ /index.html;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

