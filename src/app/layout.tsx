import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TasteNote — จำมื้อเก่า เลือกมื้อใหม่",
  description: "บันทึกร้านที่เคยกิน เมนูที่เคยชอบ และสิ่งที่อยากลองครั้งหน้า",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="antialiased">{children}</body>
    </html>
  );
}
