/*
  Warnings:

  - You are about to drop the column `car` on the `Driver` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[carId]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carId` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "car",
ADD COLUMN     "carId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Driver_carId_key" ON "Driver"("carId");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
