# MCBS Data Static Site

## Installation

Run `npm install` to install eleventy, sass, and other relevant packages.

## Running local development server

`npm start` runs a local development server via Browsersync at `http://localhost:8080` and compiles code to a `public` folder. Changes to `src` files will recompile and auto-refresh in the browser.

NOTE: The Content Security Policy must either include `'unsafe-inline'` in the `script-src` or temporarily commented out for Browsersync to auto-refresh the development server. 

## Development

### SRC vs PUBLIC

All development should take place in the `src` folder. When executing eleventy, a local `public` folder will be created, but **none of the files in `public` should be edited as part of the dev process.**

Ultimately, the `public` folder is what will be the static site as it lives online.

### Developing with Eleventy

The site is built with markdown (`.md`) files representing each of the pages. Markdown files may include html code, as well as templated data from YAML front matter. Each markdown file, or page, is linked to a Nunjucks (`.njk`) layout file. Layout files live in the `_includes` folder.

Both layouts and markdown files may contain YAML front matter, which is a section of code that is at the top of the file. It can contain relevant text and information which may then be templated into the page. Front matter looks like this:

```
---
title: YAML front matter
description: A simple way to add data to a page.
---
```

Layouts may be chained, or extended using [Nunjucks template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance). For example, `base.njk` has the overall architecture for every site page, and the other layouts are connected to it to get the head, navbar, footer, etc.

Eleventy takes these markdown files, front matter, and layouts and builds the entire static site in the `public` folder.

The Eleventy config file is `/.eleventy.js`. [Click here for more on Eleventy.](https://www.11ty.dev/docs/)

### Images

Images should be put in the `src/img` folder, and they will be copied to public during the build process. Subfolders inside `img` are OK.

### Collections

Some groups of pages are gathered into what Eleventy calls "collections." Collections are a group of markdown files that use the same layout, and collections are iterable using Nunjucks.

For example, all of the pages for the Covid-19 data tool are gathered together in the `covid-data` folder inside `src`. The layout information and name of the collection is contained in a `.json` file with the same name as the folder. When compiled, this collection of pages will be located inside `public/covid-data/`.

Collections are default sorted by "date," because I guess Eleventy assumes they would be used for a blog? A custom sort was added to `/.eleventy.js` to sort the collections by the `order` listed in each page's frontmatter.

[More on Eleventy collections.](https://www.11ty.dev/docs/collections/)

### Javascript

Javascript files live in the `./src/js` folder. `base.js` is the JS required on every page (navbar dropdowns, etc.). Other pages that require specific scripting should split out their JS into separate files/functions and include them in a block scripts tag at the bottom of the layout template.

The Content Security Policy does not allow for inline script tags. Any additional scripts loaded in from external CDNs will need to be added to the Content Security Policy.

### Styles

Styles for the project are built using Sass and scss. These styles live in the `src/sass` folder. `style.scss` is the base file where site-level variables (like colors) should be declared and all other partials (like `_navbar.scss` and `_footer.scss`) should be imported.

Any additional styles/fonts loaded in from external CDNs or elsewhere will need to be added to the Content Security Policy.

## Building for deployment

The contents of the `public` folder will be the static site as it lives online.

`npm build` builds the contents of the `public` folder without running the development server.
