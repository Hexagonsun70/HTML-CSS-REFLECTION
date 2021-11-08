CREATE TABLE contact_details (
  id int(11) not null PRIMARY KEY AUTO_INCREMENT,
  first_name varchar(128) not null,
  last_name varchar(128) not null,
  email varchar(128) not null,
  date datetime not null,
  subject varchar(300) not null,
  message varchar(4000) not null,
  gdpr varchar (10) not null
);
