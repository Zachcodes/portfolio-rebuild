select p.title, 
p.id as post_id, 
p.file_name, 
p.header_image_url,
p.created_date,
v.count,
(select count(*)
from comments 
where blog_post = p.id)
as comment_count
from blog_posts p
join post_views v 
on p.id = v.blog_post
join comments c 
on c.blog_post = p.id
group by post_id, v.count
order by p.created_date desc;
