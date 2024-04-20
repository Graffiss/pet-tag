/*
  Warnings:

  - You are about to alter the column `name` on the `Pet` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[addressId]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breed` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryPhone` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondaryPhone` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vetName` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PET_TYPE" AS ENUM ('DOG', 'CAT', 'OTHER');

-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "breed" VARCHAR(255) NOT NULL,
ADD COLUMN     "color" VARCHAR(255) NOT NULL,
ADD COLUMN     "primaryPhone" VARCHAR(255) NOT NULL,
ADD COLUMN     "secondaryPhone" VARCHAR(255) NOT NULL,
ADD COLUMN     "type" "PET_TYPE" NOT NULL,
ADD COLUMN     "vetName" VARCHAR(255) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "zip" VARCHAR(255) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pet_addressId_key" ON "Pet"("addressId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
