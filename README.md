## Installation
<ol>
    <li>Clone this repo to your local machine.</li>
    <li>Change in the newly created directory.</li>
    <li>Run the command "npm install" in your terminal.</li>
    <li>To start the server, run the command: "npm run start"</li>
    <li>Open a web browser at localhost:3000</li>
</ol>

## Organization
<h5>index.js</h5>
<p>index.js contains the main code for the server and sets up the
templating engine and connects the static files to the server.</p>

<h5>routes/</h5>
<p>The routes directory contains all the routers for the project. Given that the
site is only going to have a few static pages, there is only one router right
now.</p>

<h5>static/</h5>
<p>The static directory contains all of the static content for the website.
This includes images, css, and javascript files. There are seperate sub-folders
for each.</p>

<h5>views/</h5>
<p>The views directory contains all the handlebars views for the project. The
layouts/ subdirectory contains the main handlebars template that is just the
base code for each html page. The partials/ subdirectory contains partial
templates (currently just a nav bar). The rest of the files are the actual views
that get rendered by indexRouter.js</p>