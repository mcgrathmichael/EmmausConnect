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
("Motorola", "Motorola Edge+", "Windows", 64, 1000, 6.1, "4G", 0, "intact", NULL, 90,"", 1),
("Apple", "Iphone 8", "iOS", 8, 128, 5.5, "3G", 1, "Comme neuf", NULL, 120,"", 1),
("Huawei", "Motorola Edge+", "Android", 16, 256, 5.5, "5G", 1, "Comme neuf", NULL, 40,"", 1),
("Samsung", "Galaxy S13", "Android", 16, 256, 7.1, "5G", 1, "intact", "SFR", 50,"", 1),
("OnePlus", "Motorola Edge+", "iOS", 8, 64, 5.5, "4G", 1, "rayures", "Orange", 10,"", 1),
("OnePlus", "Motorola Edge+", "iOS", 4, 128, 4.7, "4G", 1, "rayures", NULL, 20,"", 1),
("Huawei", "Huawei P30 Pro", "Android", 6, 64, 5.5, "4G", 1, "rayures", "Free", 30, NULL, 1),
("Samsung", "LG V60 ThinQ", "Linux", 16, 256, 6.1, "4G", 1, "rayures", NULL, 70, NULL, 1),
("Huawei", "Huawei P30 Pro", "Android", 2, 128, 4.7, "5G", 0, "rayures", NULL, 10, NULL, 1),
("OnePlus", "Motorola Edge+", "Windows", 8, 64, 5.5, "4G", 0, "rayures", NULL, 20, NULL, 1),
("Huawei", "Motorola Edge+", "Android", 8, 128, 6.1, "4G", 0, "rayures", NULL, 50, NULL, 1),
("Oppo", "Oppo Find X2 Pro", "Linux", 16, 256, 5.5 , "4G", 1, "rayures", "Orange", 65, NULL, 1),
("OnePlus", "Motorola Edge+", "iOS", 16, 256, 6.7, "3G", 0, "rayures", NULL, 34, NULL, 1),
("Apple", "Iphone 4", "iOS", 4, 256, 5.5, "3G", 0, "rayures", NULL, 20, NULL, 1),
("Apple", "Iphone 7", "iOS", 4, 64, 6.1, "4G", 1, "rayures", "SFR", 80, NULL, 1),
("Nokia", "Motorola Edge+", "Android", 8, 64, 4.7, "5G", 1, "rayures", NULL, NULL, NULL, 1),
("OnePlus", "Motorola Edge+", "Android", 4, 32, 5.5, "5G", 1, "rayures", NULL, NULL, NULL, 1),
("Nokia", "Motorola Edge+", "Android", 16, 256, 4.7, "3G", 0, "rayures", "Free", NULL, NULL, 1),
("OnePlus", "Motorola Edge+", "Windows", 2, 128, 4.7, "4G", 1, "Comme neuf", "Free", NULL, NULL, 1),
("Nokia", "Motorola Edge+", "Android", 4, 64, 5.5, "3G", 1, "rayures", "Free", NULL, NULL, 1);
