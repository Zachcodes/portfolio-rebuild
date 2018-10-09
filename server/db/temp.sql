INSERT INTO image_type (type)
VALUES ('main'), ('secondary');

INSERT INTO projects (name, link, description)
VALUES ('DevMountain Personal Project', 'https://sleepy-scrubland-94070.herokuapp.com/#!/', 'This was my personal project that I built while in DevMountain'), 
('DevMountain Group Project', 'https://neighborhoods.herokuapp.com/#!/', 'This was my group project that I built while at DevMountain.');

INSERT INTO projects_images (link, project_id, type_id)
VALUES ('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+11.52.12+AM.png', 1, 1),
('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+11.52.41+AM.png', 1, 2),
('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+11.53.19+AM.png', 1, 2),
('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+11.53.30+AM.png', 1, 2),
('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+12.02.28+PM.png', 2, 1),
('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+12.04.28+PM.png', 2, 2),
('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+12.06.39+PM.png', 2, 2),
('https://s3-us-west-1.amazonaws.com/personal-portfolio-zach/project-pictures/Screen+Shot+2018-09-26+at+12.10.32+PM.png', 2, 2);
