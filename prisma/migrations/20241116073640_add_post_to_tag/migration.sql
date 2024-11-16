/*
  Warnings:

  - You are about to drop the `_PostToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_PostToTag` DROP FOREIGN KEY `_PostToTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PostToTag` DROP FOREIGN KEY `_PostToTag_B_fkey`;

-- DropTable
DROP TABLE `_PostToTag`;

-- CreateTable
CREATE TABLE `PostToTag` (
    `postId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PostToTag` ADD CONSTRAINT `PostToTag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `sys_posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostToTag` ADD CONSTRAINT `PostToTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `sys_tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
