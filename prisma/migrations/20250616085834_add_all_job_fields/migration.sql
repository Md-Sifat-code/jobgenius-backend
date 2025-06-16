-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "absoluteUrl" TEXT NOT NULL,
    "internalJobId" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "metadata" JSONB,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstPublished" TIMESTAMP(3) NOT NULL,
    "requisitionId" TEXT NOT NULL,
    "dataCompliance" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_internalJobId_key" ON "Job"("internalJobId");
