# Genart Studio

以 Vue 3 建立的個人作品集網站：首頁、About、圖片庫、Tag 分類與作品詳細頁。本機路徑：`D:\Genart-studio`。

GitHub：https://github.com/montagnacii/Genart-studio

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

產出在 `dist/`。這也是 Vercel 會執行的指令。

## 部署到 Vercel

1. 匯入這個 GitHub 儲存庫。
2. Framework Preset 選 Vite，Build Command 用 `npm run build`，Output Directory 用 `dist`。
3. 專案裡的 `vercel.json` 會把 `/about`、`/gallery`、`/gallery/:id` 導回 `index.html`，重新整理子頁面才不會 404。

作品清單在 `src/data/works.ts`，圖片在 `public/works/`。改這兩處即可更新圖庫，不必接資料庫。
