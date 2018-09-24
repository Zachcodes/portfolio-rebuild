select p.*, pi.link from projects p
inner join projects_images pi 
on pi.project_id = p.id
where p.id = ${projectId}