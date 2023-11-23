-- CreateTable
CREATE TABLE `misidata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `feature_id` VARCHAR(191) NOT NULL,
    `feature_name` VARCHAR(191) NOT NULL,
    `feature_geometry_type` VARCHAR(191) NOT NULL,
    `feature_coordinates` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
