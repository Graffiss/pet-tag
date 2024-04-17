-- CreateEnum
CREATE TYPE "MISSING_STATUS" AS ENUM ('MISSING', 'NOT_MISSING', 'FOUND');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "belongsToId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "missing" "MISSING_STATUS" NOT NULL DEFAULT 'NOT_MISSING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pet_belongsToId_key" ON "Pet"("belongsToId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
