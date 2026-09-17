import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONDITIONS, getCitation, getCondition, getMedicine } from "@repo/kali-core";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return CONDITIONS.map((condition) => ({ id: condition.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: getCondition(id)?.nameVi ?? "Bệnh lý" };
}

export default async function ConditionDetailPage({ params }: Props) {
  const { id } = await params;
  const condition = getCondition(id);
  if (!condition) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
      <Link href="/benh-ly" className="text-sm text-moss">
        ← Tất cả bệnh lý
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
        {condition.nameVi}
      </h1>
      <DisclaimerBanner />
      <p>{condition.summaryVi}</p>
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Gợi ý ăn uống</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {condition.dietGuidanceVi.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Thuốc liên quan</h2>
        <ul className="mt-3 space-y-2">
          {condition.relatedMedicineIds.map((medicineId) => {
            const medicine = getMedicine(medicineId);
            if (!medicine) {
              return null;
            }
            return (
              <li key={medicineId}>
                <Link href={`/thuoc/${medicine.id}`} className="text-moss underline">
                  {medicine.innVi} {medicine.strength}
                </Link>
                <span className="opacity-70"> — {medicine.tradeNamesVn[0]}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Nguồn</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {condition.sourceIds.map((sourceId) => {
            const source = getCitation(sourceId);
            return (
              <li key={sourceId}>
                {source?.org}: {source?.title} ({source?.year})
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
