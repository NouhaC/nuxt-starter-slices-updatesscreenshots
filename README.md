# Nuxt wireframes for Prismic

This is a demo project with built with [Nuxt](https://nuxtjs.org/) & [Slice Machine](https://www.slicemachine.dev/) where you can easily try how to integrate [Prismic](https://prismic.io/) with Nuxt via Slice Machine.

[Demo](https://nuxt-wireframes.vercel.app/) page. Each Slice could be individually checked out in the menu.

## 1. Get started exploring locally

To use this project, click the green "Use this template" button in the top right of this page. Then give your new repo a name and clone it locally.

Once cloned you do a `npm install` in the root folder to install all the dependencies. To get a local copy of the [sample page](https://nuxt-wireframes.vercel.app/) up and running you just run `npm run dev`, and then go to `http://localhost:3000`

To run Slice Machine to start playing with the Slices, and maybe try to customize them you just run `npm run slicemachine`.

## 2. Go further by connecting your own Prismic repository

If you want to take this a step further you could connect you own Prismic repo to this project to start building custom pages with it.

To do this you change line 2 in `./sm.json` to include your own repo URL. If you do this you will no longer have the demo page at `http://localhost:3000`, since your now connected to an empty Prismic repo. To start building your own page you need to push the Custom Types & Slices from Slice Machine to Prismic to get them into your repo.
