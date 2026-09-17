import type { Metadata } from "next";
import Link from "next/link";
import { MEDICINES } from "@repo/kali-core";

export const metadata: Metadata = {
  title: "Thuốc và Kali",
};

const effectLabel = {
  increase: "Tăng Kali máu",
  decrease: "Hạ Kali máu",
  shift_into_cells: "Đưa Kali vào tế bào",
  caution_both: "Theo dõi hai chiều",
};

export default function MedicinesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
        Thuốc cần chú ý Kali
      </h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Mỗi mục có hoạt chất (INN), hàm lượng, dạng bào chế và biệt dược thường gặp / từng được
        cấp số đăng ký tại Việt Nam. Đối chiếu vỉ thuốc; tra cứu số đăng ký trên cổng Cục Quản
        lý Dược khi cần.
      </p>
      <div className="mt-8 overflow-x-auto rounded-3xl border border-line bg-card">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-line bg-paper">
            <tr>
              <th className="px-4 py-3">Hoạt chất</th>
              <th className="px-4 py-3">Hàm lượng</th>
              <th className="px-4 py-3">Biệt dược (VN)</th>
              <th className="px-4 py-3">Ảnh hưởng Kali</th>
            </tr>
          </thead>
          <tbody>
            {MEDICINES.map((medicine) => (
              <tr key={medicine.id} className="border-b border-line last:border-0">
                <td className="px-4 py-3">
                  <Link href={`/thuoc/${medicine.id}`} className="font-semibold text-moss-deep">
                    {medicine.innVi}
                  </Link>
                  <div className="text-xs opacity-70">{medicine.inn}</div>
                </td>
                <td className="px-4 py-3">{medicine.strength}</td>
                <td className="px-4 py-3">{medicine.tradeNamesVn.join("; ")}</td>
                <td className="px-4 py-3">{effectLabel[medicine.potassiumEffect]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
