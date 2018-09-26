select p.*, 
pi.link, 
pi.type_id, 
pi.id as project_image_id from projects p
inner join projects_images pi 
on pi.project_id = p.id
where p.id = ${projectId}