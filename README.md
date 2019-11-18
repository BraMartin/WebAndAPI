# WebAndAPI
This is the SPA i made for the PG6301 exam.

When you start the application you get the homepage, which has a static "news feed", which has hard coded text.
You have the option to go to two separated pages, profile and settings. In the settings page its just some plain text,
but in the profile page you can type your name to have it be your profile.
This changes the state from an empty string, to a string of your choice. 
The rest of the text is hardcoded.

The reason some of the jsx files is made with const instead of a class, is because I had some errors
when building the bundle.js, and to fix it I tried to make those files a const, and that worked.
"if it ain't broken, don't fix it".

To start the application:
cd to the folder and type the following in the terminal

$ yarn install    
$ yarn build   
$ yarn start

to test the application:
cd to the folder and type the following in the terminal
