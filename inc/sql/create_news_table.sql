CREATE TABLE news_cards (
  id int(11) not null PRIMARY KEY AUTO_INCREMENT,
  card_color varchar(30) not null,
  color_drk varchar(30) not null,
  card_category varchar(25) not null,
  image_name varchar(150) not null,
  image_url varchar(6000) not null,
  card_title varchar(100) not null,
  card_content varchar(150) not null,
  icon_name varchar(150) not null,
  icon_url varchar(6000) not null,
  card_author varchar(35) not null,
  date varchar(30) not null
);
