import Link from "next/link";

const links = [
  { href: "/bua-an", label: "Tính bữa ăn" },
  { href: "/nguyen-lieu", label: "Nguyên liệu" },
  { href: "/mon-an", label: "Món ăn" },
  { href: "/benh-ly", label: "Bệnh lý" },
  { href: "/thuoc", label: "Thuốc" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl text-moss-deep">
          Kali Bữa Ăn
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-moss-deep">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-clay">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
