type CategoryStyle = {
  badge: string;
  impact: string;
  dot: string;
};

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  COST_SAVINGS: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    impact: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },

  PERFORMANCE: {
    badge: "border-blue-200 bg-blue-50 text-blue-700",
    impact: "bg-blue-50 text-blue-700",
    dot: "bg-blue-500",
  },

  RELIABILITY: {
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    impact: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },

  LEADERSHIP: {
    badge: "border-purple-200 bg-purple-50 text-purple-700",
    impact: "bg-purple-50 text-purple-700",
    dot: "bg-purple-500",
  },

  ARCHITECTURE: {
    badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
    impact: "bg-indigo-50 text-indigo-700",
    dot: "bg-indigo-500",
  },

  DEBUGGING: {
    badge: "border-rose-200 bg-rose-50 text-rose-700",
    impact: "bg-rose-50 text-rose-700",
    dot: "bg-rose-500",
  },

  REVENUE: {
    badge: "border-cyan-200 bg-cyan-50 text-cyan-700",
    impact: "bg-cyan-50 text-cyan-700",
    dot: "bg-cyan-500",
  },
};

const DEFAULT_CATEGORY_STYLE: CategoryStyle = {
  badge: "border-slate-200 bg-slate-100 text-slate-700",
  impact: "bg-slate-100 text-slate-700",
  dot: "bg-slate-500",
};

export function getCategoryStyle(category: string): CategoryStyle {
  return CATEGORY_STYLES[category] ?? DEFAULT_CATEGORY_STYLE;
}