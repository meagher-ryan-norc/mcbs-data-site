# MCBS Data Static Site

## Requirements

For development you will need **Node.js** and **Node Package Manager (npm)** installed in your environment.

## Installation

Run `npm install` to install eleventy, sass, and other relevant packages.

## Running local development server

`npm start` runs a local development server via Browsersync at `http://localhost:8080` and compiles code to a `public` folder. Changes to `src` files will recompile and auto-refresh in the browser.

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

For example, all of the pages for the Covid-19 data tool are gathered together in the `covid-data` folder inside `src`. The layout information and name of the collection is contained in a `.json` file with the same name as the folder. When compiled, this collection of pages will be located at the path `public/covid-data/`.

Collections are default sorted by "date" or date of file creation. Custom sorts were added to `/.eleventy.js` to sort the collections by the `order` listed in each page's frontmatter.

[More on Eleventy collections.](https://www.11ty.dev/docs/collections/)

### Javascript

Javascript files live in the `./src/js` folder. `base.js` is the JS required on every page (navbar dropdowns, etc.). Other pages that require specific scripting should split out their JS into separate files/functions and include them in a block scripts tag at the bottom of the layout template.

The current Content Security Policy does not allow for inline script tags or loading in scripts from external CDNs.

### Styles

Styles for the project are built using Sass and scss. These styles live in the `src/sass` folder. `style.scss` is the base file where site-level variables (like colors) should be declared and all other partials (like `_navbar.scss` and `_footer.scss`) should be imported.

The current Content Security Policy does not allow for externally loaded styles or fonts. Local fonts are hosted in the `fonts` folder, and the font-face rules are in the main `style.scss` file.

## Development Examples

Some step-by-step instructions for updating the site's dashboards:

### Adding a dashboard to an existing group

1. **Create a new .md file inside the folder of the group you want to add to.** For example, if you want to add a dashboard to the Covid-19 Data Tool, create a new .md file inside the `covid-data` folder. The file should be named with whatever you want it to be called in the URL (`example.md` would create a url of */covid-data/example*). Filenames should be unique unto themselves.

2. **Populate the .md file with the proper frontmatter.** You can look at other .md files in the folder to get an idea of the information required. This is where all the information related to this dashboard is stored.

**layout:** Refers to a layout file in `_includes`, should match the others in the group.

**title:** What the dashboard is called, in the dropdown menus and carousel

**name:** Should match the filename

**description:** A description of the dashboard, used in the carousel

**imgAlt:** The alt text on the image inside the carousel

**order:** The order dashboards are displayed in the carousel and dropdown menu, in ascending order.

**keywords:** Keywords associated with the dashboard, used in search

**iframe:** URL of the iframe on the shiny server.

3. **Add an image for the dashboard to the `img/carousel` folder.** This image is used in the carousel. It should be a .jpg, and the filename should match the name of the .md file (*example.jpg* for *example.md*).

4. **Add the heights for the iframe into `_iframe.scss` file.** Mimic the format displayed in this file to add a height in pixels for the iframe in both mobile and display widths. The selector for the iframe will be `.rshinyframe--example`, where *example* is the name of the dashboard's .md file and the value in the "name" field of the frontmatter.

5. **Eleventy should handle the rest.** Everything else is handled by Eleventy collections. The dashboard will be inserted into its place in the carousel and search, and a page will be created in the dashboard group displaying an iframe with the URL given in the frontmatter.

### Removing a dashboard from an existing group

*Note: It's a good idea to keep copies of deleted files for posterity.*

1. **Delete the .md file from the group folder.**

2. **Delete the related .jpg file from `/img/carousel`.**

3. **Remove iframe heights from `_iframe.scss` file.** This step is not strictly necessary, but should be taken to avoid cruft.

4. **Check links in `_includes/components/navbar.njk` and `_includes/home.njk`.** Currently the link on the main image in the home page is set to "insurance" in the PUF Data Tool and the links in the navbar are set to "preventive" for the Covid-19 Data Tool and "insurance" for the PUF Data Tool. If either of these dashboards are the one being deleted, a new dashboard should be selected and updated in these links.

5. **Eleventy should handle the rest.** Everything else is handled by Eleventy collections. The dashboard will be removed from the carousel and search, and the page will not be created in the build process.

### Adding a new group of dashboards

This is a longer and more technical process, as much of the design is currently predicated on there being two groups of dashboards, the Covid-19 Data Tool and the PUF Data Tool. Thus instructions in this section are more generalized.

Essentially, the new group is a new Eleventy collection. The terms "group" and "collection" are used interchangably here.

1. Create a new folder for the group.

2. Populate folder with .md files for each of the new group's dashboards. Add supporting files/images/styles for each of the new dashboards.

3. Add a collection .json file to the group's folder. This file determines the layout and collection tag used for the group. It should have the same filename as the folder.

4. Create a layout .njk file for the group in the `_includes` folder. This file should have a dropdown menu that iterates through the collection. Current layout files for existing groups are `chart-covid.njk` and `chart-puf.njk`.

5. Add a new sort in `.eleventy.js` to handle the order attribute for the collection.

6. Update `searchData.liquid` to handle the search keywords and results for the new collection.

7. Update design on home page to make a new carousel that iterates through the collection.

8. Add a link to the group in the "data tools" portion of the navbar.

9. Update the extended navbar (nav element, class "chart-nav") in multiple areas, including other dashboard groups' layout files and the about layout files. Styles for the extended navbar are located in `_chart.scss`.

### Removing a group of dashboards

1. Delete the group/collection's folder, layout file, and related images.

2. Remove the collection's sort function in `.eleventy.js` and the search data in `searchData.liquid`.

3. Update design on the home page to delete the related carousel.

4. Remove link to the group in the "data tools" portion of the navbar.

5. Remove the group from the extended navbar (nav element, class "chart-nav") in multiple areas, including other dashboard groups' layout files and the about layout files.

## Building for deployment

The contents of the `public` folder will be the static site as it lives online.

`npm run build` builds the contents of the `public` folder without running the development server.

## Author

Questions? Contact Chad Yoder at cwyoder13@gmail.com and he may or may not get back to you.
