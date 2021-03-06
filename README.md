# G3BI-Test

A quick example repo for [`gatsby-background-image`](https://github.com/timhagn/gatsby-background-image) 
to demonstrate what it can do and it's similarities & differences to `gatsby-plugin-image`.

Start it up and head to [localhost:8000/gpi](http://localhost:8000/gpi) 

**WORK IN PROGRESS**

## Creation

`gbitest` is based on [`gatsby-starter-default`](https://github.com/gatsbyjs/gatsby-starter-default)
sprinkled with [`styled-components`](https://www.styled-components.com/) and the 
small but practical [`styled-media-query`](https://github.com/morajabi/styled-media-query).  
And last but not least, of course `gatsby-background-image` is part of the crew ; ).

## Getting Started

Simple clone this repo and run `yarn` or `npm install` to install.
`yarn develop` or `npm run develop` gives you a working [localhost server](http://localhost:8000/).

On the left side you see content wrapped by `<BackgroundImage />` from `gatsby-background-image`,
on the right (for comparison) a pure `gatsby-image`. 

Under /image-stack/ you see an example with Multiple Stacked Background Images.

Browsing to /art-direction/ shows an example with a `media` prop for 
Art Directed Background Images.

Feel free to play around with the `BackgroundSection` in [src/components/BackgroundSection.js](src/components/BackgroundSection.js).

There are also included examples on how to target the pseudo-elements in 
the mentioned file as well as at the end of the CSS-file [src/components/layout.css](src/components/layout.css).

## Contributing to `gatsby-background-image` with this repository

To read a little more about Contributing to `gatsby-background-image`, see
the [CONTRIBUTING](https://github.com/timhagn/gatsby-background-image/blob/main/CONTRIBUTING.md) 
file over there : )!
If that's TL;DR, just at least read though the passage on [Debugging](https://github.com/timhagn/gatsby-background-image/blob/main/CONTRIBUTING.md#debugging)!

## Scripts

All runnable as `yarn <SCRIPT_NAME>` or `npm run <SCRIPT_NAME>`.

|  Name   |  Function                                                                                                        |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| build   | Generates a production build.                                                                                    |
| clean   | Removes `.cache` & `public` folders (should you have problems). `develop` script has to be restarted afterwards! |
| develop | Generates a development build and starts its server (not meant for production!).                                 |
| format  | Cleans up the code and formats it with [`prettier`](https://prettier.io/).                                       |
| serve   | Serves the production build generated by `build` at port `9001`.                                                 |
| start   | Alias for `develop`.                                                                                             |

There would be `test` as well - but alas, right now we don't have any for this 
repo. Feel free to open a PR ; ).

## Troubleshooting npm "screaming" about package vulnerabilities

As I'm quite eager to see to it that no vulnerabilities **ever** get published 
with `gatsby-background-image` & `gatsby-background-image-es5`, but sometimes
npm still "screamed" at me about other packages having some when I bumped 
dependency versions of `gbitest`, I usually could fix them with a simple:

```bash
npm audit --fix
```

So have no fears ; ).

## Versioning

As of `gbi(-es5)` `v0.9.7` this package will follow the versioning of `gbi(-es5)` 
(last version before was `0.5.2`).

#### Hav Phun : )!
