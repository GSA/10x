# 10x Website

## Content management
This site uses [Netlify CMS](https://www.netlifycms.org/) for managing content edits. You can access the content management editor by going to the site's domain, followed by "/admin". It's best to make significant changes on the Demo version of the site, which is at <https://demo.10x.gsa.gov>. Although the admin site is available in production, it is unwise to make changes to the live site.

### To edit the content on the site, log into the content manager at <https://demo.10x.gsa.gov/admin> using your GitHub credentials.

For detailed information about how to use the content manager, check out the content authoring guide at <https://docs.google.com/document/d/10VRGLNhSkWqjQdHAe10RXKaI9qdL79CLW3I4-WlPz7E/view>

To save your changes and see them on the demo site, click the "Publish" button at the top right of the editor. Each publish will start a new build in Federalist and should take up to 5 minutes to deploy. You will not receive a notification when it succeeds, but you can monitor build status [here](https://federalistapp.18f.gov/sites/399/builds).

### When you're satisfied with how the demo site looks and want to push your changes live, you should open a [Pull Request from the demo branch to Main](https://github.com/GSA/10x/compare/main...demo).

If possible, invite someone to review your changes. 

### When you're ready, approve and merge the request, but do not delete the "demo" branch. 

---

## Development 

### Installation & getting started
This site can be run locally using NodeJS. Using the command line, install the site and dependencies:

``` npm i```

Then add a .env file with the BASEURL variable equal to your localhost or the production domain (feel free to use .env.local and .env.production if you like):

```
BASEURL=https://10x.gsa.gov
PUBLIC_URL=$BASEURL
```


To serve the site locally:

```npm run start```

To build for production:

```npm run federalist```

### Technical information

This site is a small custom React app. Many of its [components](./src/components) are based on the [USWDS](https://designsystem.digital.gov/). The [data and contents](./cms) of the site are in JSON files, which is best authored and edited through the Netlify CMS admin; however, you can edit the JSON locally and re-start the `start` task to test changes to the data model or content.
