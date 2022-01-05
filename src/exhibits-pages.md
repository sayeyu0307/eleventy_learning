---
layout: 'layouts/base.njk'
pagination: 
  data: posts
  size: 1
  alias: post
permalink: 'posts/{{ post.id }}/'
---
<div class='page-content'>
    <h2>{{ post.title }}</h2>
    <image alt='' src='https://picsum.photos/300/300' />
    <p>{{ post.body }}</p>
</div>