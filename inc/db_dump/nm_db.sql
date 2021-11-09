-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2021 at 03:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nm_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_details`
--

CREATE TABLE `contact_details` (
  `id` int(11) NOT NULL,
  `first_name` varchar(128) NOT NULL,
  `last_name` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `date` datetime NOT NULL,
  `subject` varchar(300) NOT NULL,
  `message` varchar(4000) NOT NULL,
  `gdpr` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_details`
--

INSERT INTO `contact_details` (`id`, `first_name`, `last_name`, `email`, `date`, `subject`, `message`, `gdpr`) VALUES
(1, 'Alex', 'McKendrick', 'alex.mckendrick@gmail.com', '2021-11-05 15:00:48', 'This is the subject line! ', 'Message', 'checked');

-- --------------------------------------------------------

--
-- Table structure for table `news_cards`
--

CREATE TABLE `news_cards` (
  `id` int(11) NOT NULL,
  `card_color` varchar(30) NOT NULL,
  `color_drk` varchar(30) NOT NULL,
  `card_category` varchar(25) NOT NULL,
  `image_name` varchar(150) NOT NULL,
  `image_url` varchar(6000) NOT NULL,
  `card_title` varchar(100) NOT NULL,
  `card_content` varchar(150) NOT NULL,
  `icon_name` varchar(150) NOT NULL,
  `icon_url` varchar(6000) NOT NULL,
  `card_author` varchar(35) NOT NULL,
  `date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news_cards`
--

INSERT INTO `news_cards` (`id`, `card_color`, `color_drk`, `card_category`, `image_name`, `image_url`, `card_title`, `card_content`, `icon_name`, `icon_url`, `card_author`, `date`) VALUES
(1, '#926fb1', '#79539a', 'careers', 'now hiring', '/img/news/news-hiring.jpg', 'Office Administrator/Receptionist', 'Salary:£18k-£24k + Bonuses + Pension Hours :40 hours per week, Monday -\r\n    Friday Location: W...', 'nm logo', '/img/mini-logo.png', 'Netmatters Ltd', '8th March 2021'),
(2, '#2ecc71', '#25a25a', 'news', 'carbon neutral', '/img/news/news-carbon.jpg', 'Netmatters is Carbon Neutral!', 'As a business, Netmatters pledged that 2021 would be the year that we\r\n    became carbon neutral...', 'nm logo', '/img/mini-logo.png', 'Netmatters Ltd', '2nd March 2021'),
(3, '#4183d7', '#286abd', 'news', 'how not to apply for a job', '/img/news/news-how.jpg', 'How Not To Apply For A Job In IT', 'As we open up our Scion Scheme even further, we wanted to put together a\r\n    list of tips to he...', 'nm logo', '/img/mini-logo.png', 'Netmatters Ltd', '27th January 2021');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_details`
--
ALTER TABLE `contact_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_cards`
--
ALTER TABLE `news_cards`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_details`
--
ALTER TABLE `contact_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `news_cards`
--
ALTER TABLE `news_cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
