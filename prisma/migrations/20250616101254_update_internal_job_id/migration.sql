/*
  Warnings:

  - The primary key for the `Job` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Job` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Job_internalJobId_key";

-- AlterTable
ALTER TABLE "Job" DROP CONSTRAINT "Job_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Job_pkey" PRIMARY KEY ("internalJobId");
