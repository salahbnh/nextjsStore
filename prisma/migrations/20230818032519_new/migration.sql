/*
  Warnings:

  - Added the required column `storeId` to the `SubCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subcategory` ADD COLUMN `storeId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Contact` (
    `id` VARCHAR(191) NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `nom_prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sujet` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Contact_storeId_idx`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `SubCategory_storeId_idx` ON `SubCategory`(`storeId`);
