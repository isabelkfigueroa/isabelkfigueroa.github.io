---
layout: default
permalink: /global-citizenship/
title: Global Citizenship
---
<h1>GLOBAL CITIZENSHIP</h1>

{%- if site.posts.size > 0 -%}
  <ul class="global-citizenship-post-list">
    {%- for post in site.categories['global-citizenship'] -%}
      <li class="post" id="post-{{ forloop.rindex }}">
        <img class="cover" src="{{ site.baseurl }}/assets/images/{{ post.image }}"/>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <div class="post-info-wrapper">
          <p class="post-meta">{{ post.date | date: date_format }}</p>
          <a class="post-link" href="{{ post.url | relative_url }}">
          <h3>
              {{ post.title | escape | markdownify | remove: '<p>' | remove: '</p>' | remove: '<em>' | remove: '</em>'}}
          </h3>
          <h4>
              {{ post.book_author | escape | markdownify | remove: '<p>' | remove: '</p>'}}
          </h4>
          </a>
        </div>
        {%- if site.show_excerpts -%}
        {{ post.excerpt }}
        {%- endif -%}
      </li>
    {%- endfor -%}
  </ul>
{%- endif -%}
