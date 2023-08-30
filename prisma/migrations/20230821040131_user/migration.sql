-- AlterTable
ALTER TABLE `order` ADD COLUMN `code_postal` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `message` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `userId` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `ville` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mdp` VARCHAR(191) NOT NULL,
    `date_n` DATETIME(3) NULL,

    INDEX `User_storeId_idx`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Order_userId_idx` ON `Order`(`userId`);
