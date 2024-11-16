/*
  Warnings:

  - You are about to drop the `PostToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `PostToTag` DROP FOREIGN KEY `PostToTag_postId_fkey`;

-- DropForeignKey
ALTER TABLE `PostToTag` DROP FOREIGN KEY `PostToTag_tagId_fkey`;

-- DropTable
DROP TABLE `PostToTag`;

-- CreateTable
CREATE TABLE `sys_post_to_tag` (
    `postId` INTEGER NOT NULL,
    `tagId` INTEGER NOT NULL,

    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sys_post_to_tag` ADD CONSTRAINT `sys_post_to_tag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `sys_posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sys_post_to_tag` ADD CONSTRAINT `sys_post_to_tag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `sys_tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
