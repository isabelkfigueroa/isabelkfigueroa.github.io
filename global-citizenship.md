---
layout: default
permalink: /global-citizenship/
title: Global Citizenship
---
<h1>GLOBAL CITIZENSHIP</h1>

<div class="home">
  {%- if site.posts.size > 0 -%}
    <ul class="global-citizenship-post-list">
      {%- for post in site.categories['global-citizenship'] -%}
        <li id="global-citizenship-post-{{ forloop.rindex }}">
          <div class="img-container">
            <img class="cover" width="100px" height="150px" src="{{ site.baseurl }}/assets/images/{{ post.image }}"/>
          </div>
          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          <span class="post-meta">{{ post.date | date: date_format }}</span>
          <a class="post-link" href="{{ post.url | relative_url }}">
            <h3>
              {{ post.title | escape | markdownify | remove: '<p>' | remove: '</p>'}}
            </h3>
            <h4>
              {{ post.book_author | escape | markdownify | remove: '<p>' | remove: '</p>'}}
            </h4>
          </a>
          {%- if site.show_excerpts -%}
          {{ post.excerpt }}
          {%- endif -%}
        </li>
      {%- endfor -%}
    </ul>
  {%- endif -%}
</div>
