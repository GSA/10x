# 10x website 

Live: [10x.gsa.gov](https://10x.gsa.gov)

Demo: [demo.10x.gsa.gov](https://demo.10x.gsa.gov/)

## Problem Statement and Goals

### Macro

**Opportunity:** The U.S. government employs many capable public servants who observe problems with government technology and are ideally positioned to pursue solutions to these problems.

**Problem:** Unfortunately, many of these talented folks are unable to pursue solutions to these problems due to a lack of funding, support, or necessary skills.

### Micro

**Opportunity:** The 10x team can offer funding and guidance to creative civil servants who want to solve problems facing the government in technology  spaces.

**Problem:** Most civil servants who might benefit from 10x funding, guidance, or investment model do not know we exist.

### About 10x

10x is an incremental investment pipeline that lives in GSA’s Technology Transformation Services’ (TTS) Office of Products and Programs (OPP). We fund products and services that possess groundbreaking ideas or technology with the potential for significant return on investment. We base our approach on modern venture capital practices. Our methods require spending fewer taxpayer dollars to ensure that only the best ideas get funded.

### Website goal

The 10x website will provide civil servants across government the information they need to apply for funding and guidance to explore their ideas to solve government problems. It will also provide information and resources to civil servants who want to model something similar within their own agencies, as well as up-to-date financial information for GSA leadership and oversight bodies.

### User groups and metrics
1. We believe that creative civil servants across government have ideas for how to solve government problems and need funding and guidance to pursue those ideas. We believe that by providing information about how to pitch ideas to 10x: 
    - More people will submit pitches for Phase 1 funding overall. 
    - We’ll receive more ideas for Phase 1 funding that list civil servants outside of GSA as subject-matter experts (through a TTS sponsor). 
    - We’ll receive pitches for Phase 1 funding that represent a greater number of agencies as subject-matter experts. 
2. GSA leadership and oversight bodies
    - [TBD]
3. We believe that there are civil servants who manage technology or innovation funds who are unhappy about how they are investing those dollars. We believe that if we provide tools and resources for managing those funds following the 10x model: 
    - We’ll receive inquiries from civil servants about how to set up a 10x program.
    - Civil servants will hire 10x to consult with them on setting up or running their own program. 


### Metrics 
Metric        | Q1 FY 2018 (Fall 2017, baseline)
:------------- |-------------:
Number of pitches for Phase 1 funding | 85 
Number of civil servants outside of GSA listed subject-matter experts (through a TTS sponsor) | 6
Number of different agencies listed as subject-matter experts on Phase 1 pitches | 3
Number of inquiries from other agencies to set up a similar funding model | 1
Number of consulting engagements to set up a similar funding model | 


## Road map
_as of Feb. 13, 2018_

![10x-website-story-map](https://user-images.githubusercontent.com/10144074/36212763-d6998344-1172-11e8-94da-d61461650831.png)

## Website development
The 10x website is built with Jekyll and uses a gulp workflow for development. The following are instruction for MacOS and a terminal application.

### Install Jekyll
You only need to do this once. Once Jekyll is installed, just follow the Start Jekyll instructions below

1. Clone the repo from Github and head to the project root in the terminal
2. Get ruby version manager and upgrade to ruby 2.4.2 ([link](https://stackoverflow.com/questions/38194032/how-to-update-ruby-version-2-0-0-to-the-latest-version-in-mac-osx-yosemite))
```
> \curl -sSL https://get.rvm.io | bash -s stable --auto-dotfiles
> rvm install ruby-2.4.2
> rvm use ruby-2.4.2 --default
```

3. Install the latest gem bundler
```
> gem install bundler
```

4. From the project root, install the necessary files
```
> bundle install
```

### Start the Jekyll server

1. Head to the project root in the terminal — this is usally something like `code/10x`
2. Start the jekyll server
```
> bundle exec jekyll serve --livereload --incremental
```

3. Head to your browser and go to the server address you see in the terminal. This usually looks like `Server address: http://127.0.0.1:4000/`— and youd point to `http://127.0.0.1:4000/` in your web browser.

### USWDS and gulp
10x is testing a pre-alpha version of the U.S. Web Design System based on a new set of variables and utility classes. The USWDS source files are in `_vendor/uswds`. _Don't modify these source files._ Make project customizations in three places:

- `_sass/_uswds-project-init.scss`: Use this file to set the whitespace grid multiplier and the base font size.
- `_sass/_uswds-project-settings.scss`: Use this file to set project-specific variables, like colors and fonts.
- `_sass/_uswds-project-custom.scss`: Use this file to add custom CSS.

##### Gulp
This is a :warning: work in progress :warning: right now, but if you want to compile new stylesheets for 10x, use these commands:

- `gulp watch`: this will watch `_uswds-project-custom.scss` and compile new styles
- `gulp build-production-utilities`: will rebuild the production utilities. Run this manually when you make a change to project `settings` or `init`
- `gulp build-prototyping-utilities`: will rebuild the prototyping utilities. Run this manually when you make a change to project `settings` or `init`
