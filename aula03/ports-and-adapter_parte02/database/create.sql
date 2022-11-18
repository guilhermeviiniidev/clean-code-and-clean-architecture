drop table guilherme.purchase;
create table guilherme.purchase (
    card_number text,
    soft_descriptor text,
    amount numeric,
    date timestamp,
    currency text
);

insert into  guilherme.purchase (card_number, soft_descriptor, amount, date, currency) values  ('1234123412341234', 'Amazon', 100, '2022-09-10T10:00:00',  'BRL');
insert into  guilherme.purchase (card_number, soft_descriptor, amount, date, currency) values  ('1234123412341234', 'Netflix', 30, '2022-09-16T10:00:00',  'USD');
insert into  guilherme.purchase (card_number, soft_descriptor, amount, date, currency) values  ('1234123412341234', 'Potato', 200, '2022-09-07T10:00:00',  'BRL');
insert into  guilherme.purchase (card_number, soft_descriptor, amount, date, currency) values  ('1234123412341234', 'Google Ads', 100, '2022-07-10T10:00:00',  'BRL');