/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP DATABASE IF EXISTS `aplikacija`;
CREATE DATABASE IF NOT EXISTS `aplikacija` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `aplikacija`;

DROP TABLE IF EXISTS `korisnik`;
CREATE TABLE IF NOT EXISTS `korisnik` (
  `korisnik_id` int unsigned NOT NULL AUTO_INCREMENT,
  `korisnicko_ime` varchar(50) NOT NULL DEFAULT '0',
  `lozinka` varchar(128) NOT NULL DEFAULT '0',
  PRIMARY KEY (`korisnik_id`),
  UNIQUE KEY `uq_korisnik_korisnicko_ime` (`korisnicko_ime`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `korisnik`;
/*!40000 ALTER TABLE `korisnik` DISABLE KEYS */;
INSERT INTO `korisnik` (`korisnik_id`, `korisnicko_ime`, `lozinka`) VALUES
	(1, 'ivana', 'ivana123'),
	(2, 'admin', 'admin123'),
	(3, 'korisnik', 'korisnik123'),
	(4, 'ivan', 'ivan123'),
	(5, 'jovana', 'jovana123'),
	(6, 'jovan', 'jovan123');
/*!40000 ALTER TABLE `korisnik` ENABLE KEYS */;

DROP TABLE IF EXISTS `ljubimac`;
CREATE TABLE IF NOT EXISTS `ljubimac` (
  `ljubimac_id` int unsigned NOT NULL AUTO_INCREMENT,
  `is_papiri` tinyint(1) NOT NULL DEFAULT '0',
  `is_vakcinacija` tinyint(1) NOT NULL DEFAULT '0',
  `uzrast` int NOT NULL DEFAULT '0',
  `boja` varchar(10) NOT NULL DEFAULT '0',
  `tezina` double NOT NULL DEFAULT '0',
  `opis_oglasa` text NOT NULL,
  `korisnik_id` int unsigned NOT NULL DEFAULT '0',
  `rasa_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ljubimac_id`),
  KEY `fk_ljubimac_korisnik_id` (`korisnik_id`),
  KEY `fk_ljubimac_rasa_id` (`rasa_id`),
  CONSTRAINT `fk_ljubimac_korisnik_id` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnik` (`korisnik_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_ljubimac_rasa_id` FOREIGN KEY (`rasa_id`) REFERENCES `rasa` (`rasa_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `ljubimac`;
/*!40000 ALTER TABLE `ljubimac` DISABLE KEYS */;
/*!40000 ALTER TABLE `ljubimac` ENABLE KEYS */;

DROP TABLE IF EXISTS `rasa`;
CREATE TABLE IF NOT EXISTS `rasa` (
  `rasa_id` int unsigned NOT NULL AUTO_INCREMENT,
  `naziv` varchar(50) NOT NULL DEFAULT '0',
  `vrsta_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`rasa_id`),
  UNIQUE KEY `uq_rasa_naziv` (`naziv`),
  KEY `fk_rasa_vrsta_id` (`vrsta_id`),
  CONSTRAINT `fk_rasa_vrsta_id` FOREIGN KEY (`vrsta_id`) REFERENCES `vrsta` (`vrsta_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `rasa`;
/*!40000 ALTER TABLE `rasa` DISABLE KEYS */;
/*!40000 ALTER TABLE `rasa` ENABLE KEYS */;

DROP TABLE IF EXISTS `slika`;
CREATE TABLE IF NOT EXISTS `slika` (
  `slika_id` int unsigned NOT NULL AUTO_INCREMENT,
  `image_path` varchar(128) NOT NULL DEFAULT '0',
  `ljubimac_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`slika_id`),
  KEY `fk_slika_ljubimac_id` (`ljubimac_id`),
  CONSTRAINT `fk_slika_ljubimac_id` FOREIGN KEY (`ljubimac_id`) REFERENCES `ljubimac` (`ljubimac_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `slika`;
/*!40000 ALTER TABLE `slika` DISABLE KEYS */;
/*!40000 ALTER TABLE `slika` ENABLE KEYS */;

DROP TABLE IF EXISTS `vrsta`;
CREATE TABLE IF NOT EXISTS `vrsta` (
  `vrsta_id` int unsigned NOT NULL AUTO_INCREMENT,
  `ime` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`vrsta_id`),
  UNIQUE KEY `uq_vrsta_ime` (`ime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELETE FROM `vrsta`;
/*!40000 ALTER TABLE `vrsta` DISABLE KEYS */;
/*!40000 ALTER TABLE `vrsta` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
