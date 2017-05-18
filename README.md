# Rimworld Stories (FRONT-END)

Thinkful (https://www.thinkful.com/) final portfolio project.

## Live version

https://www.rimworld-stories.com

## API repo

https://github.com/NicolasMachado/Rimworld-Stories-Api

## Technology

<img src="https://raw.githubusercontent.com/NicolasMachado/The-Brain/master/src/images/html5.png" height="40px" alt="HTML5" title="HTML5" style="display:inline-block;" /> <img src="https://raw.githubusercontent.com/NicolasMachado/The-Brain/master/src/images/css3.png" height="40px" alt="CSS3" title="CSS3" style="display:inline-block;" /> <img src="https://raw.githubusercontent.com/NicolasMachado/The-Brain/master/src/images/react.png" height="40px" alt="ReactJS" title="ReactJS" style="display:inline-block;" /> <img src="https://raw.githubusercontent.com/NicolasMachado/The-Brain/master/src/images/redux.png" height="40px" alt="Redux" title="Redux" style="display:inline-block;" />

## Description
Rimworld is a sci-fi colony sim driven by an intelligent AI storyteller. Each game you play is full of surprises, incredible interactions, hilarious events, dramatic misfortunes and heroic actions.

I love reading these stories and each one has its special grain of salt. You can find them all over the internet, but here is the thing: there is no central place for them to be gathered. This is why I have created Rimworld Stories, a website for all Rimworld players to post their stories on.

## User interface

This single-page app is designed to work on mobile, tablets and desktop. Its interface is meant to be simple and intuitive.

## Under the hood

* The frontend is entirely built using React and Redux.
* The website is fully responsive, adapting for mobile, table and desktop viewports.
* Asynchronous requests are fired using thunk.
* A draft system has been implemented for users to save automatically, or manually, their work.
* A new draft is created automatically if the user doesn't already have one in waiting.
* If the user already has a draft, or multiple drafts waiting, the latest one is automatically loaded.
* Loading a specific draft can be done through the profile section
* An image uploader for avatars and screenshots has been implemented. It uses a combination of the plugin DropZone, multer and Cloudinary for cloud serving/saving.
* An infinite scroller has been implemented on the main page, using a visibility sensor.
* A test suite has been implemented in the API for most endpoints.
* A React test suite has been implemented for all components, as well as the reducer and the actions.
* Login is made through the facebook authentication API, or through regular account creation, and is handled using Passport in the backend.

## To work on the project locally:

* Clone the repository and install all dependencies
* The API server must be running in the background for the website to work. Please refer to the API repo.
* Run npm start
* The website should be available at the following address: http://127.0.0.1:3000
