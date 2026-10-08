# Hello World —— 我的第一个 AI 开发的 Node.js 网站

一个用 Node.js + Express 开发的简单网站：浏览器访问显示 **"Hello World！我是【你的名字】，我的第一个AI开发的网站"**，并实时显示**当前服务器时间**。

## 项目文件结构

```
hello-world/
├── package.json          # 项目配置与依赖（express）
├── server.js             # Node.js 服务器主文件（路由 + /api/time 接口）
├── vercel.json           # Vercel 部署配置文件
└── public/
    └── index.html        # 前端页面（Hello World + 服务器时间）
```

## 环境要求

- **Node.js** 18 或以上版本（`node -v` 查看）
- **npm**（随 Node.js 一起安装）
- （可选）**Git**：用于推送到 GitHub
- （可选）**Vercel 账号 + Vercel CLI**：用于部署

---

## 一、本地运行

```bash
# 1. 进入项目目录
cd hello-world

# 2. 安装依赖
npm install

# 3. 启动服务器
npm start
```

启动成功后控制台会显示：

```
✅ Hello World 服务器已启动：http://localhost:3000
```

然后用浏览器打开 **http://localhost:3000**，即可看到页面。

---

## 二、推送到 GitHub

```bash
# 1. 进入项目目录
cd hello-world

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件到暂存区
git add .

# 4. 提交代码
git commit -m "feat: Hello World Node.js 网站"

# 5. 关联远程仓库（换成你自己的 GitHub 仓库地址）
git remote add origin https://github.com/你的用户名/hello-world.git

# 6. 推送到 GitHub
git push -u origin main
```

> 提示：如果默认分支名不是 `main`，可先执行 `git branch -M main` 重命名。

---

## 三、部署到 Vercel（获取全世界可访问的网址）

### 方式 A：Vercel CLI（命令行）

```bash
# 1. 全局安装 Vercel CLI（只需一次）
npm install -g vercel

# 2. 登录 Vercel（按提示完成登录授权）
vercel login

# 3. 在项目目录内执行部署，首次会询问配置，一路回车使用默认即可
cd hello-world
vercel

# 4. 部署到生产环境（正式线上地址）
vercel --prod
```

部署完成后，Vercel 会返回一个类似 `https://hello-world-xxxx.vercel.app` 的网址，**全世界任何设备都能访问**。

### 方式 B：GitHub 关联（推荐，自动部署）

1. 先把项目推到 GitHub（见上面第二步）。
2. 打开 [vercel.com](https://vercel.com)，用 GitHub 账号登录。
3. 点击 **Add New → Project**，选择你的 `hello-world` 仓库，点击 **Deploy**。
4. 等待构建完成，即可获得线上网址。以后每次 `git push` 到 GitHub 都会自动重新部署。

---

## 四、验证

- 本地：浏览器打开 `http://localhost:3000`，应看到 "Hello World！我是【你的名字】，我的第一个AI开发的网站"，以及每秒刷新的服务器时间。
- 线上：访问 Vercel 生成的网址，效果与本地一致。

> 别忘了把页面里的 **【你的名字】** 替换成你的真实名字。

## 常见问题

- **端口被占用**：修改 `server.js` 里的 `PORT` 变量（例如改成 `3001`）。
- **`npm install` 报错**：确认 Node.js 版本 ≥ 18，并检查网络。
