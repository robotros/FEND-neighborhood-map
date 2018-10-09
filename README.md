# FEND - Neighboorhood Map

This is the final assessment project for Udacity's Front End Nano Degree(FEND) Program.
The project uses REACT and javascript APIs to create a single page application that is a map of a local neighboorhood.

The functionality of the application is as follows.
1. A full-screen map using the [Google Maps API](https://cloud.google.com/maps-platform/).
2. Markers identifing locations of interest.
3. A list view of the locations that can be filtered
4. Display additional information for location based on API [Socrata](https://dev.socrata.com/foundry/data.lacity.org/xyvg-dst2)

## QuickStart

* the following quick start can be used if you have nodeJS installed
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Dependencies

The following will be required to run this program

1. A compatible web browser
2. Python
3. Google API key
4. Socrata [API Key](https://data.lacity.org/login)
5. nodeJS 
6. the follwing packages
```javascript
    "ajv": "^6.5.4",
    "babel-eslint": "^10.0.0",
    "eslint": "^5.6.0",
    "eslint-config-google": "^0.10.0",
    "eslint-plugin-jsx-a11y": "^6.1.1",
    "eslint-plugin-react": "^7.11.1",
    "prop-types": "^15.6.2",
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-router-dom": "^4.3.1"
```
## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Footnotes

* Tested with Chrome
* Dependecies included using CDNS active internet connection required *
* For specific, detailed description, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/).
* built using [Google Maps API](https://cloud.google.com/maps-platform/)
* built using [Socrata API](https://dev.socrata.com/foundry/data.lacity.org/xyvg-dst2)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
