-- CreateEnum
CREATE TYPE "Category" AS ENUM ('RELIABILITY', 'PERFORMANCE', 'COST_SAVINGS', 'REVENUE', 'LEADERSHIP', 'DEBUGGING', 'ARCHITECTURE');

-- CreateTable
CREATE TABLE "Win" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "situation" TEXT,
    "task" TEXT,
    "action" TEXT,
    "result" TEXT,
    "impactMetric" TEXT,
    "technologies" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Win_pkey" PRIMARY KEY ("id")
);
