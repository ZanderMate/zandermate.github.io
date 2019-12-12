USE employeetracker_db;

INSERT INTO department (department_name)
VALUES 
("Sales"),
("IT"),
("Finance"),
("Legal"),
("Human Resources"),
("Management");

INSERT INTO role (title, salary, department_id)
VALUES 
("Salesperson", 45000, 1),
("Sales Manager", 75000, 1),
("Sales Intern", 25000, 1),
("Project Manager", 85000, 2),
("Computer Programer", 70000, 2),
("Database Administrator", 65000, 2),
("UI Developer", 65000, 2),
("Accountant", 55000, 3),
("Accounting Manager", 75000, 3),
("Lawyer", 125000, 4),
("Paralegal", 45000, 4),
("Human Resources Manager", 55000, 5),
("Human Resources Associate", 45000, 5),
("CEO", 250000, 6),
("CFO", 200000, 6),
("CIO", 200000, 6),
("CMO", 200000, 6),
("CHRO", 200000, 6),
("CLO", 200000, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Howard", "Stark", 14);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Tom", "Sawyer", 18, 1),
("Jack", "Bauer", 17, 1),
("Keith", "Richards", 17, 1),
("Paul", "McCartney", 15, 1),
("John", "Hopkins", 2, 4),
("Lionel", "Ritchie", 1, 6),
("Walter", "White", 3, 6),
("Michael", "Tyson", 4, 3),
("Reed", "Richards", 5, 9),
("Bruce", "Banner", 6, 9),
("Padme", "Amidala", 7,	9),
("Janet", "Jackson", 9, 5),
("Otis", "Redding", 8, 13),
("Isaac", "Newton", 10, 16),
("Nicolas", "Cage", 19, 1),
("Beyonce", "Knowles", 11, 15),
("Michael", "Jordan", 12, 2),
("Mark", "Twain", 13, 18);