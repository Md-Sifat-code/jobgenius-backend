/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Job` table. All the data in the column will be lost.
  - Made the column `metadata` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dataCompliance` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "createdAt",
ALTER COLUMN "internalJobId" SET DATA TYPE BIGINT,
ALTER COLUMN "metadata" SET NOT NULL,
ALTER COLUMN "dataCompliance" SET NOT NULL;
