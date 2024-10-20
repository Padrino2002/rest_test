CREATE DATABASE IF NOT EXISTS mydata;
USE companydb;
CREATE TABLE employe(
    id INT(11) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(5), DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
)
INSERT INTO employe VALUES
(1,'ASDF11','123'),
(1,'ASDF22','123'),
(1,'ASDF33','123'),

select * from employe where id=1;

delete * from employe where id=1;

update employe SET name=? , salary=? WHERE id=?, [name, salary,id];