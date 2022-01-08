---
layout: 'layouts/base.njk'
pagination: 
  data: posts
  size: 1
  alias: post
permalink: 'posts/{{ post.id }}/'
---
<div class='page-content'>
    <h2>{{ post.name }}</h2>
    <img alt='' src='/img/{{ post.filename }}' />
    <p>{{ post.introduction }}</p>
</div>