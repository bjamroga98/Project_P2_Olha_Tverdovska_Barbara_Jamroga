-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 03 2021 г., 16:31
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `warehouse`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `ID` int(250) NOT NULL,
  `PRD_NAME` varchar(30) COLLATE utf32_polish_ci NOT NULL,
  `PRD_CODE` int(12) NOT NULL,
  `PRD_WEIGHT` double NOT NULL,
  `PRD_HEIGHT` double NOT NULL,
  `PRD_WIDTH` double NOT NULL,
  `PRD_COUNT` int(11) NOT NULL,
  `PRD_SLF_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_polish_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`ID`, `PRD_NAME`, `PRD_CODE`, `PRD_WEIGHT`, `PRD_HEIGHT`, `PRD_WIDTH`, `PRD_COUNT`, `PRD_SLF_ID`) VALUES
(2, 'SZAFA', 11111111, 1, 0, 0, 3, 3),
(3, 'STÓŁ', 22222222, 5, 0, 0, 5, 1),
(4, 'KRZESŁO', 33333333, 6, 0, 0, 4, 8),
(5, 'SZAFA', 44444444, 0, 0, 0, 0, 12),
(6, 'SOFA', 55555555, 0, 0, 0, 0, 3),
(7, 'Kanapa', 43576589, 15, 1, 3, 4, 5),
(8, 'Stolik', 96587645, 6, 0, 1.5, 10, 9),
(9, 'Kanapa', 43576589, 15, 1, 3, 4, 5),
(10, 'Stolik', 96587645, 6, 0.8, 1.5, 10, 9),
(11, 'Dywan', 43544489, 15, 1, 3, 4, 5),
(12, 'Poduszka', 96877645, 6, 0.8, 1.5, 10, 9);

-- --------------------------------------------------------

--
-- Структура таблицы `shelfs`
--

CREATE TABLE `shelfs` (
  `ID` int(250) NOT NULL,
  `SLF_NAME` varchar(30) COLLATE utf32_polish_ci NOT NULL,
  `SLF_CRD_X` int(11) NOT NULL,
  `SLF_CRD_Y` int(11) NOT NULL,
  `SLF_HEIGHT` int(11) NOT NULL,
  `SLF_WIDTH` int(11) NOT NULL,
  `SLF_COLOR` varchar(7) COLLATE utf32_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_polish_ci;

--
-- Дамп данных таблицы `shelfs`
--

INSERT INTO `shelfs` (`ID`, `SLF_NAME`, `SLF_CRD_X`, `SLF_CRD_Y`, `SLF_HEIGHT`, `SLF_WIDTH`, `SLF_COLOR`) VALUES
(2, 'RHY768564', 150, 90, 60, 170, '#C598F4'),
(3, 'RHY768565', 400, 90, 60, 170, '#C598F4'),
(4, 'RHY768566', 650, 90, 60, 170, '#C598F4'),
(5, 'RHY768567', 900, 90, 60, 170, '#C598F4'),
(6, 'RHY768568', 1150, 90, 60, 170, '#C598F4'),
(7, 'ADY768569', 285, 200, 60, 170, '#C598F4'),
(8, 'ADY768570', 535, 200, 60, 170, '#C598F4'),
(9, 'ADY768571', 775, 200, 60, 170, '#C598F4'),
(10, 'ADY768572', 1025, 200, 60, 170, '#C598F4'),
(11, 'GHY768571', 285, 435, 60, 170, '#C598F4'),
(12, 'GHY768572', 535, 435, 60, 170, '#C598F4'),
(13, 'GHY768573', 775, 435, 60, 170, '#C598F4'),
(14, 'GHY768574', 1025, 435, 60, 170, '#C598F4'),
(15, 'TYU768574', 150, 535, 60, 170, '#C598F4'),
(16, 'TYU768575', 400, 535, 60, 170, '#C598F4'),
(17, 'TYU768576', 650, 535, 60, 170, '#C598F4'),
(18, 'TYU768577', 900, 535, 60, 170, '#C598F4'),
(19, 'TYU768578', 1150, 535, 60, 170, '#C598F4');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `ID` int(250) NOT NULL,
  `USR_LOGIN` varchar(30) COLLATE utf32_polish_ci NOT NULL,
  `USR_PASSWORD` varchar(30) COLLATE utf32_polish_ci NOT NULL,
  `USR_ROLE_ID` int(11) NOT NULL DEFAULT 1,
  `USR_FULLNAME` varchar(250) COLLATE utf32_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_polish_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`ID`, `USR_LOGIN`, `USR_PASSWORD`, `USR_ROLE_ID`, `USR_FULLNAME`) VALUES
(6, 'olga.twerdowska', 'hbj65r77', 2, 'Olga Twerdowska'),
(8, 'postman.postman2', 'bjdbfds', 1, 'Postman Postman'),
(9, 'postman.postman', 'bjdbfds', 2, 'Postman Postman'),
(12, 'postman.postman5', 'bjdbfds', 1, 'Postman Postman'),
(13, 'artur.nowak', '$2b$15$h82hG5iw8qTOlE1Nzap.K.3', 1, 'Postman Postman');

-- --------------------------------------------------------

--
-- Структура таблицы `users_roles`
--

CREATE TABLE `users_roles` (
  `ID` int(250) NOT NULL,
  `USR_ROLE_NAME` varchar(30) COLLATE utf32_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_polish_ci;

--
-- Дамп данных таблицы `users_roles`
--

INSERT INTO `users_roles` (`ID`, `USR_ROLE_NAME`) VALUES
(1, 'Admin'),
(2, 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `shelfs`
--
ALTER TABLE `shelfs`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- Индексы таблицы `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `ID` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `shelfs`
--
ALTER TABLE `shelfs`
  MODIFY `ID` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `ID` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
