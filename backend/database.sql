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
  `price` INT NULL,
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

INSERT INTO account (email, pwd) VALUES ("admin", "monmdpsupersafe");