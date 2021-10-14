---
title: "Medicare Currenty Beneficiary Survey"
layout: "base.njk"
---

## Covid data tool

<ul>
{% for chart in collections.covidData %}
<li><a href="{{ chart.url }}">{{ chart.data.title }}</a></li>
{% endfor %}
</ul>

## Survey file PUF data tool

<ul>
{% for chart in collections.pufData %}
<li><a href="{{ chart.url }}">{{ chart.data.title }}</a></li>
{% endfor %}
</ul>

## About

<ul>
{% for page in collections.about %}
<li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
{% endfor %}
</ul>

## Contact

<a href="/contact">Contact</a>
