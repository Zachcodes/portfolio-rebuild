CREATE TABLE image_type (
    id SERIAL PRIMARY KEY,
    type TEXT
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name TEXT,
    link TEXT,
    description TEXT
);

CREATE TABLE projects_images (
    id SERIAL PRIMARY KEY,
    link TEXT,
    project_id INT REFERENCES projects(id),
    type_id INT REFERENCES image_type(id)
);

CREATE TABLE tech_used (
    id SERIAL PRIMARY KEY,
    tech_name TEXT,
    project_id INT REFERENCES projects(id)
);