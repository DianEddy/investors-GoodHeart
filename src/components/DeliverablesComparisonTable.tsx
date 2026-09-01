import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Table, Check, Minus, Sparkles } from 'lucide-react';

interface DeliverableRow {
  deliverable: string;
  pioneer: string;
  catalyst: string;
  horizon: string;
}

const COMPARISON_DATA: DeliverableRow[] = [
  {
    deliverable: "Duration",
    pioneer: "1 Month",
    catalyst: "3 Months",
    horizon: "6 Months"
  },
  {
    deliverable: "Community Upcycle Challenge",
    pioneer: "1 Campaign",
    catalyst: "2 Campaigns",
    horizon: "Dedicated Continuous"
  },
  {
    deliverable: "Creator Onboarding Credits",
    pioneer: "$5,000",
    catalyst: "$10,000",
    horizon: "$15,000"
  },
  {
    deliverable: "Artisan Repair/Alteration Linkage",
    pioneer: "Standard",
    catalyst: "Dedicated",
    horizon: "Full Integration"
  },
  {
    deliverable: "Custom SPMG AI Recognition",
    pioneer: "—",
    catalyst: "—",
    horizon: "YES"
  },
  {
    deliverable: "Wardrobe Trade-In Engine",
    pioneer: "—",
    catalyst: "Partial",
    horizon: "YES"
  },
  {
    deliverable: "Anonymized Closet Data Report",
    pioneer: "Basic",
    catalyst: "Comprehensive",
    horizon: "Full Enterprise"
  }
];

interface DeliverablesComparisonTableProps {
  onSelectTier?: (tier: string) => void;
}

export const DeliverablesComparisonTable: React.FC<DeliverablesComparisonTableProps> = ({
  onSelectTier
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatValue = (val: string, tier: string) => {
    if (val === '—') {
      return <span className="text-neutral-400 font-medium select-none">—</span>;
    }
    if (val === 'YES') {
      return (
        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-black text-[11px] border border-emerald-200">
          <Check className="w-3 h-3 stroke-[3]" /> YES
        </span>
      );
    }
    return <span className="font-bold text-neutral-900">{val}</span>;
  };

  return (
    <div className="w-full mt-6 mb-8 border border-black bg-white overflow-hidden shadow-xs transition-all duration-200">
      {/* Accordion / Dropdown Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full px-4 sm:px-5 py-3.5 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-between transition text-left cursor-pointer border-b border-transparent group"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center">
            <Table className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-black uppercase tracking-tight flex items-center gap-2">
              <span>Compare Full Deliverables Matrix</span>
              <span className="text-[10px] text-amber-900 bg-amber-100 px-2 py-0.5 rounded font-bold">
                Detailed Scope
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-neutral-600 font-normal">
              Feature-by-feature side-by-side comparison across all 3 partnership tiers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-black">
          <span className="hidden sm:inline text-neutral-600 font-medium">
            {isOpen ? "Collapse Table" : "Expand Table"}
          </span>
          <div className="w-6 h-6 rounded-full bg-white border border-neutral-300 flex items-center justify-center group-hover:border-black transition">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="p-3 sm:p-5 bg-white border-t border-black animate-in fade-in duration-150">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b-2 border-black bg-neutral-100/70">
                  <th className="py-2.5 px-3 font-black text-black text-[11px] uppercase tracking-tight w-[34%]">
                    Deliverable
                  </th>
                  <th className="py-2.5 px-2.5 font-black text-black text-[11px] uppercase tracking-tight text-center w-[22%]">
                    <div>Pioneer</div>
                    <div className="text-[10px] text-neutral-600 font-bold">$20K</div>
                  </th>
                  <th className="py-2.5 px-2.5 font-black text-black text-[11px] uppercase tracking-tight text-center w-[22%] bg-amber-500/10">
                    <div className="text-black">Catalyst</div>
                    <div className="text-[10px] text-neutral-700 font-bold">$35K</div>
                  </th>
                  <th className="py-2.5 px-2.5 font-black text-black text-[11px] uppercase tracking-tight text-center w-[22%]">
                    <div>Horizon</div>
                    <div className="text-[10px] text-neutral-600 font-bold">$50K</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {COMPARISON_DATA.map((row, index) => (
                  <tr 
                    key={index}
                    className={`hover:bg-neutral-50/80 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/40'
                    }`}
                  >
                    <td className="py-2.5 px-3 font-bold text-black text-xs">
                      {row.deliverable}
                    </td>
                    <td className="py-2.5 px-2.5 text-center text-xs">
                      {formatValue(row.pioneer, 'Pioneer')}
                    </td>
                    <td className="py-2.5 px-2.5 text-center text-xs bg-amber-500/5">
                      {formatValue(row.catalyst, 'Catalyst')}
                    </td>
                    <td className="py-2.5 px-2.5 text-center text-xs">
                      {formatValue(row.horizon, 'Horizon')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick select buttons below table */}
          {onSelectTier && (
            <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="font-bold text-neutral-700 text-[11px]">Choose a plan to collaborate:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={() => onSelectTier('TIER 1: PIONEER PACKAGE ($20,000)')}
                  className="px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-[10px] border border-neutral-300 transition"
                >
                  Pioneer ($20K)
                </button>
                <button
                  onClick={() => onSelectTier('TIER 2: CATALYST PACKAGE ($35,000)')}
                  className="px-2.5 py-1 rounded bg-[#FBB040] hover:bg-amber-400 text-black font-bold text-[10px] border border-black transition shadow-2xs"
                >
                  Catalyst ($35K)
                </button>
                <button
                  onClick={() => onSelectTier('TIER 3: HORIZON PACKAGE ($50,000)')}
                  className="px-2.5 py-1 rounded bg-black hover:bg-neutral-800 text-white font-bold text-[10px] transition shadow-2xs"
                >
                  Horizon ($50K)
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
