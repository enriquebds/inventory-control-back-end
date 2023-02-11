/*
  Warnings:

  - You are about to drop the column `clientId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_clientId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "clientId";

-- CreateTable
CREATE TABLE "Cart" (
    "clientId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("clientId","productId")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
