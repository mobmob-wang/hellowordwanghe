// ============================================================
// server.js —— Node.js + Express 服务器主文件
// 功能：1) 托管静态页面 public/index.html
//       2) 提供 /api/time 接口返回服务器当前时间
// 兼容：本地运行 (node server.js) 与 Vercel 无服务器部署双模式
// ============================================================
const express = require('express');
const path = require('path');

// 创建 Express 应用实例
const app = express();

// 端口：本地使用 3000，部署到 Vercel 时由平台环境变量注入
const PORT = process.env.PORT || 3000;

// 1. 静态文件托管：把 public 目录作为根目录对外提供
app.use(express.static(path.join(__dirname, 'public')));

// 2. API 接口：返回服务器当前时间
app.get('/api/time', (req, res) => {
  const now = new Date();
  res.json({
    time: now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
    timestamp: now.getTime()
  });
});

// 3. 根路径兜底：访问 / 时返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================================
// 本地运行：node server.js 时会执行下面的监听逻辑
// Vercel 部署：平台会直接导入本文件并调用导出的 app，不执行监听
// ============================================================
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ Hello World 服务器已启动：http://localhost:${PORT}`);
  });
}

// 导出 app，供 Vercel 无服务器环境调用
module.exports = app;
