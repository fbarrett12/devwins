"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getCategoryStyle } from "@/lib/categoryStyles";

type WinListItem = {
  id: string;
  title: string;
  category: string;
  impactMetric: string | null;
  result: string | null;
};
    
type WinSearchListProps = {
  wins: WinListItem[];
  basePath?: string;
  totalWins: number;
  totalCategories: number;
};

function formatCategory(category: string) {
  return category.replaceAll("_", " ");
}

export default function WinSearchList({ wins, basePath = "/wins",}: WinSearchListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = useMemo(() => {
    return [...new Set(wins.map((win) => win.category))].sort();
  }, [wins]);

  const filteredWins = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return wins.filter((win) => {
      const matchesCategory =
        selectedCategory === "ALL" || win.category === selectedCategory;

      const searchableContent = [
        win.title,
        win.result,
        win.impactMetric,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedQuery.length === 0 ||
        searchableContent.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [wins, searchQuery, selectedCategory]);

  const hasActiveFilters =
    searchQuery.trim().length > 0 || selectedCategory !== "ALL";

  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory("ALL");
  }

  return (
  <section>
    <div className="mb-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />

        <h2 className="text-lg font-semibold text-slate-950">
          Impact at a Glance
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
          <p className="text-sm font-medium text-indigo-700">
            Total Wins
          </p>

          <p className="mt-1 text-3xl font-bold tracking-tight text-indigo-950">
            {wins.length}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
          <p className="text-sm font-medium text-emerald-700">
            Active Categories
          </p>

          <p className="mt-1 text-3xl font-bold tracking-tight text-emerald-950">
            {categories.length}
          </p>
        </div>
      </div>
    </div>

    <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-950/[0.02] sm:grid-cols-[1fr_220px]">
      <div>
        <label
          htmlFor="win-search"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Search wins
        </label>

        <input
          id="win-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search titles, results, or impact..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
        />
      </div>

      <div>
        <label
          htmlFor="category-filter"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Category
        </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
        >
          <option value="ALL">All categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {formatCategory(category)}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div className="mb-4 flex items-center justify-between gap-4">
      <p className="text-sm text-slate-500">
        Showing {filteredWins.length} of {wins.length}{" "}
        {wins.length === 1 ? "win" : "wins"}
      </p>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-sm font-medium text-indigo-600 transition hover:text-indigo-800"
        >
          Clear filters
        </button>
      )}
    </div>

    {filteredWins.length === 0 ? (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h2 className="mb-2 text-xl font-semibold text-slate-950">
          No matching wins
        </h2>

        <p className="mb-6 text-slate-600">
          Try another keyword or select a different category.
        </p>

        <button
          type="button"
          onClick={clearFilters}
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
        >
          Clear filters
        </button>
      </div>
    ) : (
      <div className="grid gap-4">
        {filteredWins.map((win) => (
          <Link
            key={win.id}
            href={`${basePath}/${win.id}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-950 transition group-hover:text-indigo-700">
                {win.title}
              </h2>

              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium capitalize ${getCategoryStyle(win.category).badge}`}>
                {formatCategory(win.category)}
              </span>
            </div>

            {win.impactMetric && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-500"
                />

                <span>Impact: {win.impactMetric}</span>
              </div>
            )}

            {win.result && (
              <p className="line-clamp-2 text-sm text-slate-600">
                {win.result}
              </p>
            )}
          </Link>
        ))}
      </div>
    )}
  </section>
);
}