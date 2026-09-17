import Link from "next/link";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

const steps = [
  {
    n: "01",
    title: "Dữ liệu nguyên liệu",
    body: "Mỗi thực phẩm có Kali mg/100 g sống, khẩu phần điển hình, và nguồn USDA / Viện Dinh dưỡng.",
  },
  {
    n: "02",
    title: "Hệ số chế biến",
    body: "Luộc chắt nước làm mất Kali; nấu canh giữ Kali trong nước dùng; ngâm + luộc hai lần giảm mạnh với củ.",
  },
  {
    n: "03",
    title: "Món Việt",
    body: "Công thức mẫu (canh chua, rau muống xào, thịt kho…) cộng Kali từng dòng nguyên liệu.",
  },
  {
    n: "04",
    title: "Bệnh và thuốc",
    body: "Khung KDIGO, AHA/ESC, Bộ Y tế / VNHA. Thuốc có INN, hàm lượng, biệt dược hay gặp tại Việt Nam.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-moss">
            Dinh dưỡng điện giải
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight text-moss-deep sm:text-5xl">
            Tính Kali trong bữa ăn theo đúng cách bạn nấu.
          </h1>
          <p className="mt-4 max-w-xl text-lg opacity-85">
            So sánh sống, luộc, hấp, xào, nướng, canh, hoặc ngâm giảm Kali. Tra cứu bệnh cần
            theo dõi liều Kali và thuốc (biệt dược + hoạt chất) thường lưu hành tại Việt Nam.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/bua-an"
              className="rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white"
            >
              Bắt đầu tính bữa ăn
            </Link>
            <Link
              href="/nguyen-lieu"
              className="rounded-full border border-moss px-5 py-3 text-sm font-semibold text-moss-deep"
            >
              Tra cứu nguyên liệu
            </Link>
          </div>
        </div>
        <DisclaimerBanner />
      </div>

      <ol className="mt-14 grid gap-4 sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step.n} className="rounded-3xl border border-line bg-card p-5">
            <span className="text-clay">{step.n}</span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{step.title}</h2>
            <p className="mt-2 text-sm opacity-80">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
