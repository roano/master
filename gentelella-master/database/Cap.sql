-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: capstone
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `area` (
  `Area_ID` int(11) NOT NULL,
  `Area_Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Area_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Purposes and Objectives'),(2,'Faculty'),(3,'Instruction'),(4,'Library'),(5,'Laboratories'),(6,'Physial Plan'),(7,'Student Services'),(8,'Administration'),(9,'School and Community');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `group` (
  `Group_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Group_Name` varchar(45) DEFAULT NULL,
  `Area_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`Group_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` VALUES (1,'Analysis',1),(2,'Evaluation',1),(3,'Analysis',2),(4,'Evaluation',2),(5,'Analysis',3),(6,'Evaluation',3),(7,'Analysis',4),(8,'Evaluation',4),(9,'Analysis',5),(10,'Evaluation',5),(11,'Analysis',6),(12,'Evaluation',6),(13,'Analysis',7),(14,'Evaluation',7),(15,'Analysis',8),(16,'Evaluation',8),(17,'Analysis',9),(18,'Evaluation',9);
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupdetails`
--

DROP TABLE IF EXISTS `groupdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `groupdetails` (
  `Groupdetails_ID` int(11) NOT NULL,
  `Group_Leader_ID` int(11) DEFAULT NULL,
  `Group_Member_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupdetails`
--

LOCK TABLES `groupdetails` WRITE;
/*!40000 ALTER TABLE `groupdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `groupdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roles` (
  `Role_ID` int(11) NOT NULL,
  `Role_Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Role_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'QA Officer'),(3,'Group Leader'),(4,'Group Member');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `User_ID` int(11) NOT NULL AUTO_INCREMENT,
  `User_First` varchar(45) DEFAULT NULL,
  `User_Last` varchar(45) DEFAULT NULL,
  `email_address` varchar(45) DEFAULT NULL,
  `Role` int(11) DEFAULT NULL,
  `Group` int(11) DEFAULT NULL,
  `ContactNo` varchar(15) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `passwd` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','admin@admin.com',1,NULL,NULL,NULL,NULL),(2,'Purpose and Objective Evaluation','1','PaO@Eval.com',NULL,2,NULL,NULL,NULL),(3,'Purpose and Objective Evaluation','2','PaO@Eval2.com',NULL,2,NULL,NULL,NULL),(4,'Purpose and Objective Analysis','1','PaO@Anal.com',NULL,1,NULL,NULL,NULL),(5,'Purpose and Objective Analysis','2','Pao@Anal2.com',NULL,1,NULL,NULL,NULL),(6,'Faculty Analysis','1','Faculty@Anal.com',NULL,3,NULL,NULL,NULL),(7,'Faculty Analysis','2','Faculty@Anal2.com',NULL,3,NULL,NULL,NULL),(8,'Faculty Evaluation','1','Faculty@Eval.com',NULL,4,NULL,NULL,NULL),(9,'Faculty Evaluation','2','Faculty@Eval2.com',NULL,4,NULL,NULL,NULL),(10,'Instruction Analysis','1','Instruction@Anal.com',NULL,5,NULL,NULL,NULL),(11,'Instruction Analysis','2','Instruction@Anal2.com',NULL,5,NULL,NULL,NULL),(12,'Instruction Evaluation','1','Instruction@Eval.com',NULL,6,NULL,NULL,NULL),(13,'Instruction Evaluation','2','Instruction@Eval2.com',NULL,6,NULL,NULL,NULL),(14,'Library Analysis','1','Library@Anal.com',NULL,7,NULL,NULL,NULL),(15,'Library Analysis','2','Library@Anal2.com',NULL,7,NULL,NULL,NULL),(16,'Library Evaluation','1','Library@Eval.com',NULL,8,NULL,NULL,NULL),(17,'Library Evaluation','2','Library@Eval2.com',NULL,8,NULL,NULL,NULL),(18,'Laboratories Analysis','1','Lab@Anal.com',NULL,9,NULL,NULL,NULL),(19,'Laboratories Analysis','2','Lab@Anal2.com',NULL,9,NULL,NULL,NULL),(20,'Laboratories Evaluation','1','Lab@Eval.com',NULL,10,NULL,NULL,NULL),(21,'Laboratories Evaluation','2','Lab@Eval2.com',NULL,10,NULL,NULL,NULL),(22,'Physical Plan Analysis','1','PP@Anal.com',NULL,11,NULL,NULL,NULL),(23,'Physical Plan Analysis','2','PP@Anal2.com',NULL,11,NULL,NULL,NULL),(24,'Physical Plan Evaluation','1','PP@Eval.com',NULL,12,NULL,NULL,NULL),(25,'Physical Plan Evaluation','2','PP@Eval.com',NULL,12,NULL,NULL,NULL),(26,'Student Services Analysis','1','SS@Anal.com',NULL,13,NULL,NULL,NULL),(27,'Student Services Analysis','2','SS@Anal2.com',NULL,13,NULL,NULL,NULL),(28,'Student Services Evaluation','1','SS@Eval.com',NULL,14,NULL,NULL,NULL),(29,'Student Services Evaluation','2','SS@Eval2.com',NULL,14,NULL,NULL,NULL),(30,'Administration Analysis','1','Admin@Anal.com',NULL,15,NULL,NULL,NULL),(31,'Administration Analysis','2','Admin@Anal2.com',NULL,15,NULL,NULL,NULL),(32,'Administration Evaluation','1','Admin@Eval.com',NULL,16,NULL,NULL,NULL),(33,'Administration Evaluation','2','Admin@Eval2.com',NULL,16,NULL,NULL,NULL),(34,'School and Community Analysis','1','SaC@Anal.com',NULL,17,NULL,NULL,NULL),(35,'School and Community Analysis','2','SaC@Anal2.com',NULL,17,NULL,NULL,NULL),(36,'School and Community Evaluation','1','SaC@Eval.com',NULL,18,NULL,NULL,NULL),(37,'School and Community Evaluation','2','SaC@Eval2.com',NULL,18,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-09 23:29:46
