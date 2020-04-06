---
title: Introduction
---

The content prototype is a sandbox where content intended to be published to the GOV.UK CMS can be previewed and shared with users for research.

### Contents
{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

The _live_ version of the prototype can be viewed at https://remote-learning-prototype.london.cloudapps.digital/, the username is `remote` and the password is `learning`.

## Editing content using the CMS

The prototype comes with [Netlify CMS](https://www.netlifycms.org/) built in, it's available my adding
`/admin` to the end of the URL.

```
https://remote-learning-prototype.london.cloudapps.digital/admin/
```

You will a GitHub account and access to the [content prototype](https://github.com/DFE-Digital/content-prototype)
repository to make changes. Please ask on `#remote-learning-prototype` for help with this.

### Overview

Netlify CMS comes with a user interface that's familiar to people who have
maintained web content.

Once you've loaded the CMS you'll see the contents page.

![contents page](/guide/contents-page.png)

#### Pages

Pages (on the right) are individual documents. Each contains a title and some content written in
GovSpeak. Clicking on a page will open the editor. Clicking the 'New' button in the top right of
the screen will create a new document in the currently-selected collection.

#### Collections

Collections (in the left column) are groups of related pages. They act like
folders you'd use to organise work on your computer. In the screenshot above
there are two, `teachers` and `/`. `/`, also known as root is the top level -pages
in here will be visible at `https://url/page-name`.

### Creating and editing pages

To create a new page first select the collection in which you want to create it, then click 'New'
in the top right of the screen. Alternatively, you can use the 'Quick add' button in the top bar.

This will open the editing screen.

![editor page](/guide/editor-page.png)

The box on the left contains the raw GovSpeak, the box on the right will provide a _live_ preview
of how it will be rendered on the page.

Clicking 'Save' will open a GitHub pull request containing all of your changes. This allows other
people in the team to see and review your changes. Actual previews of the site will be automatically
createf for every pull request.

To edit a page simply click it in the collection list. The editor page will open and it works
similarly to the 'new' page.

### The publishing process

There are three statuses for unpublished documents:

* **Draft**
* **In Review**
* **Ready**

![workflow page](/guide/workflow-page.png)

Newly-saved documents are set to 'Draft'. They can be moved to the next state by clicking the 
dropdown in the top bar.

![progress-button](/guide/progress-button.png)

Finally, click 'Publish' to deploy your changes. *This will soon be automatic but there is currently
a final manual step*.

### Deleting a page

Click 'Delete' to remove a document. If there are associated pull requests open
they will automatically be closed.

## Editing content on your own machine

### Getting started

On Mac or Linux machines you'll need [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/) installed.

### Requesting help

If at any point something doesn't make sense or doesn't work, please request assistance from `#remote-learning-prototype` on Slack.

### Clone the repo and bundle the requirements

The repository is currenty set to **private**. Users belonging to the DfE organisation on GitHub should have access already. You can find it at https://github.com/DFE-Digital/content-prototype

Now click 'Fork' to create your own version of the repo. Name your fork after the team or workstream that you're on. Ensure it's set to private.

![github fork button](/guide/fork-button.png)

    $ git clone git@github.com:DFE-Digital/[your-fork-name].git

Change to the newly-forked repo's directory and we can install the required packages.

    $ bundle install

### Build the site

The site is built using [Nanoc](https://www.nanoc.ws) and building it can be done with a single command

    $ bundle exec nanoc

If successful you should see output like this:

    $ bundle exec nanoc

      Loading site… done
      Compiling site…
          create  [0.00s]  output/assets/fonts/bold-b542beb274-v2.woff2
          create  [0.00s]  output/assets/fonts/light-94a07e06a1-v2.woff2
          create  [0.37s]  output/sample/index.html
          create  [0.00s]  output/assets/fonts/bold-affa96571d-v2.woff
          create  [0.18s]  output/teachers/index.html
          create  [0.00s]  output/css/application.css
          create  [0.10s]  output/teachers/scheduling-the-school-day-during-coronavirus/index.html
          create  [0.00s]  output/teachers/teaching-approaches-during-coronavirus/index.html
          create  [0.00s]  output/teachers/whats-expected-of-teachers-during-coronavirus/index.html
          create  [0.08s]  output/teachers/remote-teaching-during-coronavirus/index.html
          create  [0.00s]  output/js/applicaiton.js
          create  [0.00s]  output/admin/config.yml
          create  [0.00s]  output/admin/index.html
          create  [0.00s]  output/assets/fonts/light-f591b13f7d-v2.woff
          create  [0.14s]  output/css/govuk_publishing_components/component_support.css
          create  [0.00s]  output/css/component_guide/application.css
          create  [0.00s]  output/css/govuk_publishing_components/govuk_frontend_support.css
          create  [0.00s]  output/parents/index.html
          create  [0.00s]  output/index.html

        Site compiled in 1.42s.

Congratulations, it's built. Now we can view it.

    $ bundle exec nanoc view

Now navigate to http://localhost:3000 in a web browser. If you can see a GOV.UK website, congratulations!

If it didn't work, we're happy to help!

### Adding and amending content

All content should be placed in the `content` directory.

Any files with the extension `.gs` will be rendered using [GovSpeak](https://github.com/alphagov/govspeak) and will be based on the layout `layouts/govspeak.slim`. GovSpeak is a superset of [Markdown](https://commonmark.org/) so set your editor to Markdown mode for syntax highlighting.

The URL will match your file name and directory structure. `hello.gs` will be visible at `http://localhost:3000/hello` and `hello/world.gs` will be visible at `http://localhost:3000/hello/world`.

The main site index is located in `content/index.slim`, you can copy and paste one of the existing links and customise to link to your new page.

To run the site in _live_ mode, where every change is automatically shown instantly in the browser, run

    $ bundle exec nanoc live
