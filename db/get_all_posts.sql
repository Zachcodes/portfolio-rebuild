select p.title, 
p.id as post_id, 
p.file_name, 
p.header_image_url,
p.snippet,
p.created_date,
v.count as view_count,
(select count(*)
from comments 
where blog_post = p.id)
as comment_count,
u.first,
u.last
from blog_posts p
join post_views v 
on p.id = v.blog_post
join comments c 
on c.blog_post = p.id
join users u 
on u.id = p.author
group by post_id, v.count, u.id
order by p.created_date desc;

