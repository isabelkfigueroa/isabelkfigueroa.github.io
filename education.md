---
layout: default
permalink: /education/
title: Education
---
<h1>EDUCATION</h1>

<div class="home">
  {%- if site.posts.size > 0 -%}
    <ul class="post-list">
      {%- for post in site.categories['education'] -%}
        <li id="post-{{ forloop.rindex }}">
          <div class="img-container">
            <a class="post-link" href="{{ post.url | relative_url }}">
              <img class="cover" width="100px" height="150px" src="{{ site.baseurl }}/assets/images/{{ post.image }}"/>
            </a>
          </div>
        </li>
      {%- endfor -%}
    </ul>
  {%- endif -%}
</div>
