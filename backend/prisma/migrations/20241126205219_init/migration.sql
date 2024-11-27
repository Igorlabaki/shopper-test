-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "car" TEXT NOT NULL,
    "tax" TEXT NOT NULL,
    "minKm" INTEGER NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_name_key" ON "Driver"("name");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;
