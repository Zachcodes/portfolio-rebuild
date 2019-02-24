select p.title, p.id as post_id, p.file_name, v.count
from blog_posts p
join post_views v 
on p.id = v.blog_post;