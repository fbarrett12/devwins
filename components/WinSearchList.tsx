"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
      <div className="mb-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_220px]">
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
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10"
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
            className="text-sm font-medium text-slate-700 hover:text-slate-950"
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
            className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
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
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-slate-950">
                  {win.title}
                </h2>

                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">
                  {formatCategory(win.category)}
                </span>
              </div>

              {win.impactMetric && (
                <p className="mb-3 text-sm font-semibold text-slate-900">
                  Impact: {win.impactMetric}
                </p>
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