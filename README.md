# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Table of content

- [Project Overview: Stage 1](#Project-Overview-Stage-1)
- [Specification](#specification)
- [What do I do from here?](#What-do-I-do-from-here)
- [Leaflet.js and Mapbox](#Leafletjs-and-Mapbox)
- [Note about ES6](#Note-about-ES6)

## Project Overview: Stage 1

- For the **Restaurant Reviews** projects, we should convert a static webpage to a mobile-ready web application.

- In **Stage One**, we will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use.

- And then we add a service worker to begin the process of creating a seamless offline experience for users.

### Specification
- The starter code can be downloaded from:
      * The Mobile Web Specialist Restaurant Reviews App: Stage 1 on GitHub :<https://github.com/udacity/mws-restaurant-stage-1>

- The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device.

- It also doesn’t include any standard accessibility features, and it doesn’t work offline at all.

- We should update the code to resolve these issues while still maintaining the included functionality.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on the local computer. Python has some simple tools to do this, and we don't even need to know Python. For most of the devices, it's already installed.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, we can use `python3 -m http.server 8000`. If the device don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, we should enter `python -m http.server 8000`.
2. With the server running, visit the site: `http://localhost:8000`.
3. we should implement the required features in three areas: responsive design, accessibility and offline use.
4. We should complete the code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox

- This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).

- We need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

- Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code.
