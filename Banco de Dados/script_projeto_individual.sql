create database projeto_individual;
use projeto_individual;

create table usuario(
idUsuario int primary key auto_increment,
usuario varchar(45),
email varchar(45),
senha varchar(45)
);

insert into usuario values
(null, 'dono', 'donodoprojeto@gmail.com', '123');

create table sessao(
idSessao int auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario),
primary key (idSessao, fkUsuario),
data date,
ranque_inicio int,
ranque_final int
);

insert into sessao values
(null, 4, '2022-05-01','1500', '1800');

select * from usuario;
select * from sessao;

select * from usuario join sessao on fkUsuario = idUsuario;