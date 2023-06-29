-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema emmaus_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emmaus_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emmaus_db` DEFAULT CHARACTER SET utf8 ;
USE `emmaus_db` ;

-- -----------------------------------------------------
-- Table `emmaus_db`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_db`.`account` (
  `id_account` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `pwd` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,

  PRIMARY KEY (`id_account`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `emmaus_db`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_db`.`product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `OS` VARCHAR(45) NOT NULL,
  `ram` INT NOT NULL,
  `storage` INT NOT NULL,
  `screen_size` INT NOT NULL,
  `network` VARCHAR(45) NOT NULL,
  `charger` TINYINT NOT NULL,
  `phone_condition` VARCHAR(100) NOT NULL,
  `blocked_operator` VARCHAR(100) NULL,
  `price` INT NULL,
  `phone_img` VARCHAR(255) NULL,
  `account_id_account` INT NOT NULL,
  PRIMARY KEY (`product_id`, `account_id_account`),
  INDEX `fk_product_account_idx` (`account_id_account` ASC) VISIBLE,
  CONSTRAINT `fk_product_account`
    FOREIGN KEY (`account_id_account`)
    REFERENCES `emmaus_db`.`account` (`id_account`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO account (email, pwd, role) VALUES ("admin@gmail.com", "monmdpsupersafe", "administrateur");
INSERT INTO account (email, pwd, role) VALUES ("user@gmail.fr", "monmdpencoreplussafe", "utilisateur");
INSERT INTO product (brand, model, os, ram, storage, screen_size, network, charger, phone_condition, blocked_operator, price, phone_img, account_id_account)
VALUES 
("Motorola", "Motorola Edge+", "Windows", 64, 1000, 6.1, "4G", 0, "intact", NULL, 90,"https://images.frandroid.com/wp-content/uploads/2021/11/motorola-moto-g31-frandroid-2021.png", 1),
("Apple", "Iphone 8", "iOS", 8, 128, 5.5, "3G", 1, "Comme neuf", NULL, 120,"https://beemyphone.fr/wp-content/uploads/2021/06/refurb-iphone8-silver.jpg", 1),
("Huawei", "P30", "Android", 16, 256, 5.5, "5G", 1, "Comme neuf", NULL, 40,"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list/black.png", 1),
("Samsung", "Galaxy A13", "Android", 16, 256, 7.1, "5G", 1, "intact", "SFR", 50,"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662443349/Croma%20Assets/Communication/Mobiles/Images/249606_xmeidf.png/mxw_640,f_auto", 1),
("OnePlus", "10 Pro", "Windows", 8, 64, 5.5, "4G", 1, "rayures", "Orange", 10,"https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png", 1),
("Huawei", "Huawei P30 Pro", "Android", 6, 64, 5.5, "4G", 1, "rayures", "Free", 30, "https://www.refurbished.fr/cache/images/huawei-p30-lite-new-multi_600x600_BGresize_16777215-tj.png", 1),
("OnePlus", "CE 3 Lite", "Windows", 4, 128, 4.7, "4G", 1, "rayures", NULL, 20,"https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png", 1),
("Samsung", "LG V60 ThinQ", "Linux", 16, 256, 6.1, "4G", 1, "rayures", NULL, 70, "https://www.maxigadget.com/wp-content/uploads/2020/02/LG-V60_ThinQ_5G_prix_date_de_sortie.jpg", 1),
("Huawei", "Huawei P30 Pro", "Android", 2, 128, 4.7, "5G", 0, "rayures", NULL, 10, "https://www.refurbished.fr/cache/images/huawei-p30-crystal-blauw-multi_600x600_BGresize_16777215-tj.png", 1),
("Honor", "X7", "Windows", 8, 64, 5.5, "4G", 0, "rayures", NULL, 20, "https://leclaireur.fnac.com/wp-content/uploads/4d/6973316856637/9218743-pictures-defaut.png", 1),
("Motorola", "Motorola Edge+", "Windows", 64, 128, 6.1, "4G", 0, "intact", NULL, 90,"https://images.frandroid.com/wp-content/uploads/2021/11/motorola-moto-g31-frandroid-2021.png", 1),
("Apple", "Iphone 8", "iOS", 8, 64, 5.5, "3G", 1, "Comme neuf", NULL, 120,"https://beemyphone.fr/wp-content/uploads/2021/06/refurb-iphone8-silver.jpg", 1),
("Huawei", "P30", "Android", 16, 128, 7.1, "5G", 1, "rayures", NULL, 40,"https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50-pro/list/black.png", 1),
("Samsung", "Galaxy A13", "Android", 16, 256, 7.1, "5G", 1, "intact", "SFR", 50,"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662443349/Croma%20Assets/Communication/Mobiles/Images/249606_xmeidf.png/mxw_640,f_auto", 1),
("OnePlus", "10 Pro", "Windows", 8, 128, 5.5, "4G", 1, "rayures", "SFR", 30,"https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png", 1),
("Huawei", "Huawei P30 Pro", "Android", 4, 64, 5.1, "4G", 1, "rayures", "Free", 30, "https://www.refurbished.fr/cache/images/huawei-p30-lite-new-multi_600x600_BGresize_16777215-tj.png", 1),
("OnePlus", "CE 3 Lite", "Windows", 8, 64, 6.1, "4G", 1, "rayures", "Bouygues", 20,"https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png", 1),
("Samsung", "LG V60 ThinQ", "Linux", 8, 256, 6.1, "4G", 1, "rayures", NULL, 70, "https://www.maxigadget.com/wp-content/uploads/2020/02/LG-V60_ThinQ_5G_prix_date_de_sortie.jpg", 1),
("Huawei", "Huawei P30 Pro", "Android", 1, 32, 5.7, "5G", 0, "rayures", NULL, 10, "https://www.refurbished.fr/cache/images/huawei-p30-crystal-blauw-multi_600x600_BGresize_16777215-tj.png", 1),
("Honor", "X7", "Windows", 4, 32, 5.1, "4G", 0, "rayures", NULL, 20, "https://leclaireur.fnac.com/wp-content/uploads/4d/6973316856637/9218743-pictures-defaut.png", 1);
