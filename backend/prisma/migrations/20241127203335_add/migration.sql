/*
  Warnings:

  - Added the required column `custumerId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "custumerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_custumerId_fkey" FOREIGN KEY ("custumerId") REFERENCES "Custumer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
