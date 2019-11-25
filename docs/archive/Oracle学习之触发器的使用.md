---
title: Oracle学习之触发器的使用
date: 2018-08-20
categories: 
 - 归档
tags: 
 - Oracle
---

>触发器是存在于数据库服务器中的一个程序单元，当一个表或者视图发生改变，或者数据库中的某些事件，触发器自动执行；相比于存储过程来说，它不能被用户直接调用，相当于java中的事件监听程序。

<!-- more -->

## 分类
- 行级触发器和语句级触发器

  行级触发器是基于行的，当一条sql语句执行时，该语句改变了N行，触发器就执行N次；
  语句触发器是基于语句的，当一条sql语句执行时，无论该语句改变了多少行的数据，触发器只执行一次，只要SQL语句执行一次，不管是否修改值，触发器都会执行。

- Before和after触发器

  Before触发器在触发语句执行之前触发操作，After触发器在触发语句执行之后触发操作

- 复合触发器

  - 触发语句执行前（Before statement）
  - 触发语句执行后（After Statement）
  - 每行记录修改前（Before each row）
  - 每行记录修改后（After each row）

- instead of触发器

  有的视图，我们不能直接对其进行更新操作，但是我们可以再这种视图上建立触发器，利用触发器对视图的基表进行更新操作，这种类型的触发器就叫做“INSTEAD OF触发器”。

  **Notice：**只能是行触发器;只能应用于视图或者对象视图；

- 系统级触发器

  系统事件触发器是基于数据库系统的触发器，系统事件触发器与表、视图没有关系。系统事件包括数据库启动、关闭、服务器错误、数据库角色改变等。当这些事件发生时，就会触发系统事件触发器。可以通过系统事件触发器实现对数据库的审计。

- 用户级触发器

  用户事件包括用户登录数据库、用户退出数据库、用户执行DDL/DML语句等。当这些事件发生时，会触发用户事件触发器。

## 触发事件

触发器只能在以下事件中才能被调用：

- DML操作（INSERT、UPDATE、DELETE）
- DDL操作（CREATE、ALTER、DROP）
- 系统事件（数据库的关闭与启动等）
- 用户事件（用户的登陆等）

## 触发器使用

### 语法

创建一般触发器

```sql
CREATE [OR REPLACE] TRIGGER trigger_name
{BEFORE | AFTER }
{INSERT | DELETE | UPDATE [OF column [, column …]]}
[OR {INSERT | DELETE | UPDATE [OF column [, column …]]}...]
ON [schema.]table_name | [schema.]view_name 
[REFERENCING {OLD [AS] old | NEW [AS] new| PARENT as parent}]
[FOR EACH ROW ]
[WHEN condition]
PL/SQL_BLOCK | CALL procedure_name;
```

创建instead of触发器

```sql
CREATE [OR REPLACE] TRIGGER trigger_name
INSTEAD OF
{INSERT | DELETE | UPDATE [OF column [, column …]]}
[OR {INSERT | DELETE | UPDATE [OF column [, column …]]}...]
ON [schema.] view_name --只能定义在视图上
[REFERENCING {OLD [AS] old | NEW [AS] new| PARENT as parent}]
[FOR EACH ROW ] --因为INSTEAD OF触发器只能在行级上触发,所以没有必要指定
[WHEN condition]
PL/SQL_block | CALL procedure_name;
```

创建系统触发器

```sql
CREATE OR REPLACE TRIGGER [sachema.]trigger_name
{BEFORE|AFTER}
{ddl_event_list | database_event_list}
ON { DATABASE | [schema.]SCHEMA }
[WHEN condition]
PL/SQL_block | CALL procedure_name;
--1.ddl_event_list：一个或多个DDL 事件，事件间用 OR 分开；
--2.database_event_list：一个或多个数据库事件，事件间用 OR 分开；
```

创建复合触发器

```sql
CREATE [OR REPLACE] TRIGGER 触发器名称
trueFOR [INSERT | UPDATE | UPDATE OF 列名称 [,列名称,...] | DELETE] ON 表名称
    COMPOUND TRIGGER
        [ BEFORE STATEMENT IS    -- 语句执行前触发（表级）
            [ 声明部分 ; ]
        BEGIN
            程序主体部分 ;
        END BEFORE STATEMENT ; ]
        [ BEFORE EACH ROW IS    -- 语句执行前触发（行级）
            [ 声明部分 ; ]
        BEGIN
            程序主体部分 ;
        END BEFORE EACH ROW ; ]
        [ AFTER STATEMENT IS    -- 语句执行后触发（表级）
            [ 声明部分 ; ]
        BEGIN
            程序主体部分 ;
        END AFTER STATEMENT ; ]
        [ AFTER EACH ROW IS    -- 语句执行后触发（行级）
            [ 声明部分 ; ]
        BEGIN
            程序主体部分 ;
        END AFTER EACH ROW ; ]
    END ;
```

### 编写触发器

------

1.表t_user在更新name列时输出更新前的name和更新后的name

```sql
create or replace trigger user_insert_trigger
  after update of name on t_user
  for each row
begin
  dbms_output.put_line('old value:' || :old.name);
  dbms_output.put_line('new value:' || :new.name);
end;
```

**Notice：** 执行delete，insert操作语法与之类似，delete只有:old值，insert只有:new值，:old和:new只用于行级触发器中

2.复杂的安全检查

```sql
CREATE OR REPLACE TRIGGER org_trigger
BEFORE INSERT OR DELETE OR UPDATE
ON t_org
BEGIN
 IF (TO_CHAR(sysdate,'DAY') IN ('星期六', '星期日')) OR (TO_CHAR(sysdate, 'HH24:MI') NOT BETWEEN '08:30' AND '18:00') THEN
     RAISE_APPLICATION_ERROR(-20001, '不是上班时间，不能修改departments表');
 END IF;
END;
```

3.oracle判断SQL语句类型

```sql
create or replace trigger t_user_trigger
  before insert or update or delete on t_user
begin
  if updating then
    dbms_output.put_line('updating line');
  elsif deleting then
    dbms_output.put_line('deleting line');
  elsif inserting then
    dbms_output.put_line('inserting line');
  end if;
end;
```

4.创建复合触发器

```sql
create or replace trigger t_user_trigger
for update of name on t_user compound trigger

    info1 constant varchar2(200) := 'Before Statement';
    info2 constant varchar2(200) := 'Before Each Row';
    info3 constant varchar2(200) := 'After Each Row';
    info4 constant varchar2(200) := 'After Statement';

    before statement is
    begin
        dbms_output.put_line(info1);
    end before statement;

    before each row is
    begin
        dbms_output.put_line(info2);
    end before each row;

    after each row is
    begin
        dbms_output.put_line(info3);
    end after each row;

    after statement is
    begin
        dbms_output.put_line(info4);
    end after statement;
end;
```

5.创建系统事件触发器

```sql
//创建日志表
create table t_log
(
id number primary key,
username varchar2(255),
info varchar2(255)
);
//系统登录时触发
create or replace trigger logon_trigger
after LOGON on database
begin
  insert into t_log values(t_log_seq.nextval,ora_login_user,ora_sysevent);
  end;
//用户离开时触发
create or replace trigger logoff_trigger
before LOGOFF on database
begin
  insert into t_log values(t_log_seq.nextval,ora_login_user,ora_sysevent);
  end;
//执行DDL操作时触发
CREATE OR REPLACE TRIGGER tr_ddl
  AFTER DDL ON SCHEMA
BEGIN
  insert into t_log values (t_log_seq.nextval, ora_login_user,ora_sysevent);
END tr_ddl;
```

## 参考

[ORACLE PL/SQL编程之八：把触发器说透](https://www.cnblogs.com/huyong/archive/2011/04/27/2030466.html)

