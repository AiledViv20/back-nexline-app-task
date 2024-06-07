CREATE TABLE TASKS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(155) NOT NULL,
    description VARCHAR(155) NOT NULL,
    status_id INT NOT NULL,
    deadline DATE NOT NULL,
    comments VARCHAR(255),
    created_by VARCHAR(155) NOT NULL,
    tags VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (status_id) REFERENCES TASKS_STATUS(id)
);

CREATE TABLE TASKS_STATUS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(155) NOT NULL,
);

INSERT INTO TASKS_STATUS(name) VALUES ("pendiente"), ("en progreso"), ("completada");
INSERT INTO TASKS(title, description, status, deadline, comments, created_by, tags)
VALUES ("Revisar calendario", "Agregar reuniones semanales", 1, "2024/07/01", "Nuevas reuniones", "Ailed Vivanco", "issue");