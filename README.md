# TasteNote

เว็บบันทึกร้านอาหารและเมนูที่เคยกิน — จำมื้อเก่า เลือกมื้อใหม่

## Stack

- Next.js 16 / App Router
- React 19 / TypeScript
- Tailwind CSS 4 / ESLint
- pnpm 10.13.1 (ใช้ Node.js 22 LTS)

## เริ่มต้น

```sh
pnpm install
pnpm dev
```

เปิด http://localhost:3000

## ตรวจสอบและ build

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

`pnpm start` ใช้หลัง build สำเร็จ

## โครงสร้าง

- `src/app/page.tsx` — หน้าแรก TasteNote ที่ route `/`
- `src/app/layout.tsx` — layout, ภาษา และ metadata
- `src/app/globals.css` — Tailwind และ theme
- `src/app/icon.svg` — ไอคอนเว็บ

ตอนนี้มีหน้าแรกแบบ responsive เพียงหน้าเดียว ส่วนการบันทึกข้อมูล, dashboard, guest session และ NestJS API ยังไม่ได้เชื่อมต่อ
