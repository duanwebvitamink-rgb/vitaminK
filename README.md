# Kali Bữa Ăn

Monorepo pnpm + Turborepo + Next.js: ước lượng Kali theo cách chế biến, món Việt, bệnh lý và thuốc (biệt dược hay gặp tại Việt Nam).

## Cấu trúc

- `apps/web` — giao diện Next.js
- `packages/kali-core` — dữ liệu + công thức + Vitest
- `packages/config-vitest` — cấu hình test dùng chung

## Lệnh

```bash
pnpm install
pnpm test
pnpm dev
```

Mở http://localhost:3000

## Deploy GitHub Pages (`*.github.io`)

GitHub Pages chỉ phục vụ HTML/CSS/JS tĩnh. App đã bật `output: "export"` — `pnpm --filter web build` tạo `apps/web/out`.

1. Tạo repo GitHub (ví dụ `webkalicalculate`) và đẩy `main`.
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
3. Push lên `main` (workflow `.github/workflows/deploy-github-pages.yml` sẽ build và publish).

URL:

- Repo `yourname/webkalicalculate` → `https://yourname.github.io/webkalicalculate/`
- Repo `yourname/yourname.github.io` → `https://yourname.github.io/`

Công cụ mang tính giáo dục, không thay thế tư vấn y khoa.
