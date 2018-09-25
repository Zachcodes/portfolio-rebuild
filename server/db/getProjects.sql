select p.id, p.name, pi.link from projects p
inner join projects_images pi 
on pi.project_id = p.id 
where pi.type_id = 1;