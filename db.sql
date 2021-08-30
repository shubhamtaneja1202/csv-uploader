create database `file_uploader`;
use  `file_uploader`;

CREATE TABLE `csv_requests` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `file_name` varchar(255),
  `status` int(11),
  `progress` int(11),
  `created_at` timestamp default CURRENT_TIMESTAMP,
  `updated_at` timestamp default CURRENT_TIMESTAMP
);

CREATE TABLE `file_headers` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `file_id` int(11),
  `header` varchar(255),
  FOREIGN KEY (`file_id`) REFERENCES `csv_requests` (`id`)
);

CREATE TABLE `header_data` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `header_id` varchar(255),
  `value` varchar(255),
  `row` int(11),
  FOREIGN KEY (`header_id`) REFERENCES `file_headers` (`id`)
);

