delimiter $$

CREATE DATABASE `report_db` /*!40100 DEFAULT CHARACTER SET latin1 */$$

delimiter $$

CREATE TABLE `nodes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(45) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1$$

delimiter $$

CREATE TABLE `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nodeid` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `number` varchar(45) DEFAULT NULL,
  `timestamp` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `accuracy` decimal(5,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1$$

