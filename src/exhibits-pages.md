---
layout: 'layouts/base.njk'
pagination: 
  data: posts
  size: 1
  alias: post
permalink: 'posts/{{ post.id }}/'
---
<h2>{{ post.name }}</h2>
<div id="vs-body">
  <div id="vs" data-src="{{ post.voice }}" data-name="{{ post.name }}" ></div>
</div>
<img alt='' src='/img/{{ post.filename }}' />
<p>{{ post.introduction }}</p>
