import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-moss-deep text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm leading-6 sm:flex-row sm:justify-between">
        <p className="max-w-xl">
          Công cụ giáo dục dinh dưỡng. Không chẩn đoán, không kê toa. Số liệu Kali là ước
          lượng theo USDA / bảng thành phần thực phẩm; biệt dược ưu tiên nhóm thường gặp tại
          Việt Nam — đối chiếu hộp thuốc và bác sĩ điều trị.
        </p>
        <Link href="/nguon" className="underline decoration-paper/40 underline-offset-4">
          Nguồn và khuyến cáo
        </Link>
      </div>
    </footer>
  );
}
