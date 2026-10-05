import Link from "next/link";

const features = [
  {
    number: "01",
    title: "ร้านที่เคยไป",
    description: "เก็บร้านโปรดและร้านที่อยากกลับไปอีกไว้ในที่เดียว",
  },
  {
    number: "02",
    title: "เมนูที่จำได้",
    description: "จดว่าอะไรอร่อย อะไรไม่ถูกใจ และครั้งหน้าควรสั่งอะไร",
  },
  {
    number: "03",
    title: "มื้อที่อยากลอง",
    description: "เก็บไอเดียสำหรับมื้อต่อไป ก่อนจะลืมว่าอยากกินอะไร",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-6 sm:px-10">
      <header className="flex items-center justify-between border-b border-stone-200 py-6">
        <Link href="/" aria-label="TasteNote หน้าแรก" className="flex items-center gap-3">
          <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-2xl bg-orange-600 font-bold text-white">t.</span>
          <span className="text-xl font-semibold tracking-tight">TasteNote</span>
        </Link>
        <span className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-500">เริ่มต้นด้วยมื้อที่จำได้</span>
      </header>

      <main className="flex flex-1 flex-col justify-center py-16 sm:py-24">
        <section aria-labelledby="intro-title" className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-orange-700">YOUR PERSONAL FOOD JOURNAL</p>
          <h1 id="intro-title" className="text-4xl leading-[1.35] font-semibold tracking-tight sm:text-6xl">
            จำมื้อเก่า<br />
            <span className="text-orange-600">เลือกมื้อใหม่</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
            ร้านที่เคยกิน เมนูที่เคยชอบ จดไว้ก่อนลืม<br className="hidden sm:block" />
            ให้มื้อถัดไปเริ่มจากความทรงจำดี ๆ ของคุณ
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-800">
            <span aria-hidden="true" className="size-2 rounded-full bg-orange-600" />
            กำลังเตรียมสมุดบันทึกของคุณ
          </div>
        </section>

        <section aria-label="แนวคิดของ TasteNote" className="mt-16 grid gap-5 sm:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number} className="rounded-3xl border border-stone-200 bg-white p-6">
              <span className="text-xs font-medium text-orange-700">{feature.number}</span>
              <h2 className="mt-5 text-lg font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm leading-7 text-stone-500">{feature.description}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-stone-200 py-6 text-sm text-stone-500">
        TasteNote · ความทรงจำดี ๆ เริ่มที่โต๊ะอาหาร
      </footer>
    </div>
  );
}
