# Genart Studio

未來網站用的 Vue 3 專案。本機路徑：`D:\Genart-studio`。

## 開發

```sh
npm install
npm run dev
```

瀏覽器打開終端機顯示的本機網址（通常是 `http://localhost:5173`）。

## 建置正式版

```sh
npm run build
```

產出會在 `dist/`，之後可以部署到 GitHub Pages 或其他靜態空間。

## 推送到 GitHub

第一次需要：

1. 到 [GitHub New repository](https://github.com/new) 建立一個名叫 `Genart-studio` 的 **private** 儲存庫（不要勾 README）。
2. 把下面的 `YOUR_GITHUB_USERNAME` 換成你的帳號後執行：

```sh
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/Genart-studio.git
git push -u origin main
```
