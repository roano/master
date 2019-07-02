-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2019 at 10:29 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `Area_ID` int(11) NOT NULL,
  `Area_Name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`Area_ID`, `Area_Name`) VALUES
(1, 'Purposes and Objectives'),
(2, 'Faculty'),
(3, 'Instruction'),
(4, 'Library'),
(5, 'Laboratories'),
(6, 'Physial Plan'),
(7, 'Student Services'),
(8, 'Administration'),
(9, 'School and Community');

-- --------------------------------------------------------

--
-- Table structure for table `cycle`
--

CREATE TABLE `cycle` (
  `cycle_ID` int(11) NOT NULL,
  `cycle_Name` varchar(45) NOT NULL,
  `start_Date` date NOT NULL,
  `end_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cycle`
--

INSERT INTO `cycle` (`cycle_ID`, `cycle_Name`, `start_Date`, `end_Date`) VALUES
(1, 'CYCLE 1', '2019-07-02', '2019-07-31'),
(2, 'CYCLE 2', '2019-07-16', '2020-03-05');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `Document_ID` int(11) NOT NULL,
  `Document_Name` varchar(45) NOT NULL,
  `Document_Route` varchar(100) NOT NULL,
  `Document_Desc` varchar(300) DEFAULT 'No Description Given.',
  `Document_Ext` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`Document_ID`, `Document_Name`, `Document_Route`, `Document_Desc`, `Document_Ext`) VALUES
(20, 'IMAGE TEST', 'uploads/picture.jpg', 'TESTING TESTING ', '.jpg'),
(21, 'DOCUMENT TEST', 'uploads/asean.docx', 'DOCUMENT TESTING TESTING', '.docx'),
(22, 'Test File', 'uploads/GEFILIFINALPRESENTATION.pdf', 'Hi', '.pdf'),
(23, 'Test', 'uploads/Jeld-RentalReceipt.docx', 'Test', '.docx'),
(24, 'wsdfawqefq', 'uploads/05UsersandFilePermissionsv2.pptx', 'wefqwefqw', '.pptx'),
(25, 'ewqfqfeqefqwefqwefq', 'uploads/LSDC-Folk-Attendance.pdf', 'qfwefqwefqwefqwefqewf', '.pdf'),
(26, 'TEST PPTX', 'uploads/05UsersandFilePermissionsv2.pptx', 'TESTING', '.pptx'),
(27, 'Network Test', 'uploads/__ai_chan_getsuyoubi_no_tawawa_drawn_by_himura_kiseki__351255e59b8f196938aa0f378be7a6f1.png', 'Tawawa', '.png');

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `Group_ID` int(11) NOT NULL,
  `Group_Name` varchar(45) DEFAULT NULL,
  `Area_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`Group_ID`, `Group_Name`, `Area_ID`) VALUES
(1, 'Analysis', 1),
(2, 'Evaluation', 1),
(3, 'Analysis', 2),
(4, 'Evaluation', 2),
(5, 'Analysis', 3),
(6, 'Evaluation', 3),
(7, 'Analysis', 4),
(8, 'Evaluation', 4),
(9, 'Analysis', 5),
(10, 'Evaluation', 5),
(11, 'Analysis', 6),
(12, 'Evaluation', 6),
(13, 'Analysis', 7),
(14, 'Evaluation', 7),
(15, 'Analysis', 8),
(16, 'Evaluation', 8),
(17, 'Analysis', 9),
(18, 'Evaluation', 9),
(19, 'Test Area', 1);

-- --------------------------------------------------------

--
-- Table structure for table `groupdetails`
--

CREATE TABLE `groupdetails` (
  `Groupdetails_ID` int(11) NOT NULL,
  `Group_Leader_ID` int(11) DEFAULT NULL,
  `Group_Member_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `Plan_ID` int(11) NOT NULL,
  `GenObjective` varchar(200) NOT NULL,
  `Measurement` varchar(200) NOT NULL,
  `BaseFormula` varchar(200) NOT NULL,
  `QualityTarget` varchar(200) NOT NULL,
  `Procedures` varchar(500) NOT NULL,
  `GroupAssigned` int(11) DEFAULT NULL,
  `CycleTime` int(11) DEFAULT NULL,
  `PriorityLevel` varchar(45) DEFAULT NULL,
  `BaseStandard` varchar(200) DEFAULT NULL,
  `recommendation_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`Plan_ID`, `GenObjective`, `Measurement`, `BaseFormula`, `QualityTarget`, `Procedures`, `GroupAssigned`, `CycleTime`, `PriorityLevel`, `BaseStandard`, `recommendation_ID`) VALUES
(1, '1', '2', '3', '4', '5', NULL, NULL, NULL, NULL, NULL),
(2, '1', '2', '3', '4', '5', NULL, NULL, NULL, NULL, NULL),
(3, '1', '2', '3', '4', '5', NULL, NULL, NULL, NULL, NULL),
(4, '1', '2', '3', '4', '5', NULL, NULL, NULL, NULL, NULL),
(5, '1', '2', '3', '4', '5', NULL, NULL, NULL, NULL, NULL),
(6, '1', '2', '3', '4', '5', NULL, NULL, NULL, NULL, NULL),
(7, 'TEST', 'TEST', 'TEST', 'TEST', 'TEST', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `recommendation`
--

CREATE TABLE `recommendation` (
  `recommendation_ID` int(11) NOT NULL,
  `recommendation_Name` varchar(45) DEFAULT NULL,
  `recommendation_Desc` varchar(200) DEFAULT NULL,
  `recommendation_Grade` varchar(45) DEFAULT NULL,
  `priority_Level` varchar(45) DEFAULT NULL,
  `status` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recommendation`
--

INSERT INTO `recommendation` (`recommendation_ID`, `recommendation_Name`, `recommendation_Desc`, `recommendation_Grade`, `priority_Level`, `status`) VALUES
(1, 'TEST', 'TEST', 'B', 'Medium', NULL),
(2, '1', '2', 'A', 'High', '2019-06-29 00:00:00'),
(14, '123123', '123123', 'A', 'Medium', '2019-07-02 00:00:00'),
(15, '123123', '123123', 'A', 'Medium', '2019-07-02 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `Role_ID` int(11) NOT NULL,
  `Role_Name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`Role_ID`, `Role_Name`) VALUES
(1, 'Admin'),
(2, 'QA Officer'),
(3, 'Group Leader'),
(4, 'Group Member');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_ID` int(11) NOT NULL,
  `User_First` varchar(45) DEFAULT NULL,
  `User_Last` varchar(45) DEFAULT NULL,
  `email_address` varchar(45) DEFAULT NULL,
  `Role` int(11) DEFAULT NULL,
  `Group` int(11) DEFAULT NULL,
  `ContactNo` varchar(12) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `passwd` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_ID`, `User_First`, `User_Last`, `email_address`, `Role`, `Group`, `ContactNo`, `username`, `passwd`) VALUES
(19, 'admin', 'admin', 'debug@debug.com', 1, NULL, '99999999999', 'Admin', '$2b$10$b0yHVAlc2Na94ldTZQU.X.v.l.sDBOY1zBn6UzYwHkkUjIPpjtmo2'),
(21, 'admin', 'admin', 'debug@debug.com', 1, NULL, '99999999999', 'test', '$2b$10$VRmnG4HQneaQbP0CNjiAc.xjMixPshuYxBK7P6nQmUUgloQvlYYiq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`Area_ID`);

--
-- Indexes for table `cycle`
--
ALTER TABLE `cycle`
  ADD PRIMARY KEY (`cycle_ID`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`Document_ID`);

--
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`Group_ID`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`Plan_ID`);

--
-- Indexes for table `recommendation`
--
ALTER TABLE `recommendation`
  ADD PRIMARY KEY (`recommendation_ID`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`Role_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cycle`
--
ALTER TABLE `cycle`
  MODIFY `cycle_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `Document_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `Group_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `Plan_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `recommendation`
--
ALTER TABLE `recommendation`
  MODIFY `recommendation_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
