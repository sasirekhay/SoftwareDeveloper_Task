-----Problem 1-----------


CREATE TABLE my_table (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name CHAR(1)
);

INSERT INTO my_table (Name)
VALUES ('A'),
       ('B'),
       ('C'),
       ('D'),
       ('E'),
       ('F'),
       ('G');

select * from  my_table;

CREATE TABLE AttendanceRegister (
    Id INT PRIMARY KEY IDENTITY(1,1),
    EmployeeId INT,
    Date DATE
);

INSERT INTO AttendanceRegister (EmployeeId, Date)
VALUES (1, '2021-01-01'),
       (2, '2021-01-01'),
       (5, '2021-01-01'),
       (6, '2021-01-01'),
       (2, '2021-01-02'),
       (3, '2021-01-02'),
       (4, '2021-01-02'),
       (2, '2021-01-03'),
       (3, '2021-01-03'),
       (6, '2021-01-03'),
       (9, '2021-01-23');
	   
select * from  AttendanceRegister;




-- Find the number of days each employee has attended
SELECT EmployeeId, COUNT(DISTINCT Date) AS Attendance
FROM AttendanceRegister
GROUP BY EmployeeId;

-- Find the employee(s) with the maximum attendance
SELECT TOP 1 m.Name, a.Attendance
FROM my_table m
JOIN (
    SELECT EmployeeId, COUNT(DISTINCT Date) AS Attendance
    FROM AttendanceRegister
    GROUP BY EmployeeId
) a ON m.Id = a.EmployeeId
ORDER BY a.Attendance DESC;

-- Find the employee(s) with the minimum attendance
SELECT TOP 1 m.Name, a.Attendance
FROM my_table m
JOIN (
    SELECT EmployeeId, COUNT(DISTINCT Date) AS Attendance
    FROM AttendanceRegister
    GROUP BY EmployeeId
) a ON m.Id = a.EmployeeId
ORDER BY a.Attendance ASC;



-----Problem 2-------

CREATE TABLE employee_attendance (
    Date DATE,
    Employee_Name TEXT,
    Status TEXT
);

INSERT INTO employee_attendance (Date, Employee_Name, Status)
VALUES
('2021-01-01', 'A', 'Present'),
('2021-01-01', 'B', 'Present'),
('2021-01-01', 'C', 'Absent'),
('2021-01-01', 'D', 'Absent'),
('2021-01-01', 'E', 'Present'),
('2021-01-01', 'F', 'Present'),
('2021-02-01', 'A', 'Absent'),
('2021-02-01', 'B', 'Present');


	SELECT Date,
       Employee_Name,
       CASE
           WHEN COUNT(*) OVER (PARTITION BY Date, Employee_Name) > 1 THEN 'Present'
           ELSE 'Absent'
       END AS Status
FROM employee_attendance
GROUP BY Date, Employee_Name, Status
ORDER BY Date, Employee_Name;

