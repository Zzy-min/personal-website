# 个人网站部署到韩国服务器

目标服务器已经通过 `xiangqi-vps` SSH 别名管理。个人网站与轻·棋局共用现有 Caddy，
但使用独立目录和域名，禁止覆盖 `/opt/chinese-chess` 的应用文件。

## 服务器目录

```text
/opt/sites/personal-website/
├── current -> releases/<release-id>
└── releases/
    └── <release-id>/
```

每次发布先上传到新的 release 目录，完成检查后再切换 `current`。旧 release 至少保留一份，
用于快速回滚。

## Caddy 集成

1. 将 `compose.mount.override.yaml` 放到服务器 `/opt/chinese-chess/`。
2. 在 Spaceship DNS 中将 `qling.it.com` 和 `www.qling.it.com` 的 A 记录指向
   `47.80.60.26`，删除当前 `198.18.0.58/59` 记录。
3. 把该站点块追加到 `/opt/chinese-chess/deploy/Caddyfile`。
4. 在宿主机执行配置校验：

   ```sh
   docker run --rm \
     -v /opt/chinese-chess/deploy/Caddyfile:/etc/caddy/Caddyfile:ro \
     caddy:2.10-alpine caddy validate --config /etc/caddy/Caddyfile
   ```

5. 使用基础 Compose 文件和 override 重建 Caddy：

   ```sh
   cd /opt/chinese-chess
   docker compose -f compose.yaml -f compose.mount.override.yaml up -d \
     --force-recreate --no-deps caddy
   ```

   `current` 是软链接，而 Docker 会在创建容器时解析绑定挂载的源路径。每次切换
   release 后都必须重新创建 Caddy 容器，否则容器可能继续读取旧 release。

## 发布前检查

- `npm ci`
- `npm run lint`
- `npm test`
- `npm run build`
- 检查 `nextjs/out` 中不存在外部字体和分析脚本依赖
- 分别验证个人站和 `https://xiangqiarena.com/`
- 验证 Caddy 容器、Java 应用和 PostgreSQL 仍为 healthy/running

域名、DNS、服务器配置和容器重建属于外部变更，执行前必须单独确认。

正式地址为 `https://qling.it.com`，`https://www.qling.it.com` 永久跳转到主域名。
