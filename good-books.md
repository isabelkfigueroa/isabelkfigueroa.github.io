---
layout: default
permalink: /good-books/
title: Good Books
---
<h1>GOOD BOOKS</h1>

<h2>Ages 10 - 12</h2>

{%- if site.posts.size > 0 -%}
<ul class="post-list">
    {%- for post in site.categories['10-12'] -%}
    <li id="post-{{ forloop.rindex }}">
        <a class="post-link" href="{{ post.url | relative_url }}">
        <img class="cover" width="100px" height="150px" src="{{ site.baseurl }}/assets/images/{{ post.image }}"/>
        </a>
    </li>
    {%- endfor -%}
</ul>
{%- endif -%}

<h2>Ages 13 - 15</h2>

{%- if site.posts.size > 0 -%}
<ul class="post-list">
    {%- for post in site.categories['13-15'] -%}
    <li id="post-{{ forloop.rindex }}">
        <a class="post-link" href="{{ post.url | relative_url }}">
        <img class="cover" width="100px" height="150px" src="{{ site.baseurl }}/assets/images/{{ post.image }}"/>
        </a>
    </li>
    {%- endfor -%}
</ul>
{%- endif -%}

<h2>Ages 16 - 18</h2>

{%- if site.posts.size > 0 -%}
<ul class="post-list">
    {%- for post in site.categories['16-18'] -%}
    <li id="post-{{ forloop.rindex }}">
        <a class="post-link" href="{{ post.url | relative_url }}">
        <img class="cover" width="100px" height="150px" src="{{ site.baseurl }}/assets/images/{{ post.image }}"/>
        </a>
    </li>
    {%- endfor -%}
</ul>
{%- endif -%}

<h2>Ages 18 and above</h2>

{%- if site.posts.size > 0 -%}
<ul class="post-list">
    {%- for post in site.categories['18+'] -%}
    <li id="post-{{ forloop.rindex }}">
        <a class="post-link" href="{{ post.url | relative_url }}">
        <img class="cover" width="100px" height="150px" src="{{ site.baseurl }}/assets/images/{{ post.image }}"/>
        </a>
    </li>
    {%- endfor -%}
</ul>
{%- endif -%}
