/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pet_id_belongsToId_key" ON "Pet"("id", "belongsToId");
