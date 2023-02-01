FOODIE! is an app all about keeping track of all those places you wanted to try but were left forgetten deep within your notes app.

Devlog:

0.6

Done:

-   Basic styling is basically all done, it'll eventually change, but I'm happy with where it is for now. Add item is now a popup instead of a modal and is styled, list is styled very simply, details view shares the same styling as add item right now
-   Detailed view contains clickable address and website, address will currently lead to the google maps page (would like to use device default eventually) and website will open browser to... the website

Todo:

-   Redux Persist
-   Delete logic and swipe gesture
-   Somehow figure out how to fetch an image from each restaraunt for the list and details view
-   Finalize what data I want to save within the app for future use
-   Some kind of visual confirmation after adding an item to your list
-   If there is time... make a "What should I eat?" button on the homescreen that will randomly pick something from your list and pop up the details for it

0.5:

Done:

-   Implemented Redux for state/data management
-   Changed the logic for adding a new item to the list from search to use redux
-   Added stack navigator to list tab
-   Added a restaurant details screen to list stack
-   Styled the new stack navigator to be in-line with the rest of the app

Todo:

-   Add persistence
-   Gestures for swipe to delete and other things
-   LOTS of styling for list view, details screen, search screen, confirm add screen, etc...
-   Some subtle animations to add some flair
-   apparently I can't spell the word restaurant and need to fix that typo throughout the app

0.4:

Done:

-   Successfuly captured data from Places API
-   Processed captured data and laid groundwork for adding to list... you can now add items, but they do not persist reload
-   Added confirmation modal that shows details and gives you a button to add to the list and a button to cancel... needs styling, purely functional right now.

Todo:

-   Need to add Redux for global state management... I can already tell it's going to get messy otherwise and it'll just make things simpler in the long run.
-   Add persistence.
-   Gestures for swipe to delete, swipe down to get rid of the modal...
-   possibly make search a modal instead of its own screen so I can easily make it go away after a successful search and add.
-   List items need styling bad. Consider something like Material UI. Also need to figure out how to create links that will open the browser.
-   how the HECKING HECK do I pull an image from the place details query?! I have the data but getting a usable URL is a whole different story...

0.3

Done:

-   Headers have been styled
-   Home screen has content... even if it's just this devlog
-   Rendered cards in the list now show an image that pulls from the RESTURANTS array
-   Slight styling to list cards has been done.

Todo:

-   Capture data from search and store it into the array with appropriate data.
-   Revamp list card component styling, I don't like like RNE's layout and want to define my own with the image on the left, title on the right, and maybe some chip style identifiers under that.
-   Add resturaunt details screen, this will also mean adding a stack navigator to the list screen.
-   Maybe remove search button and instead add a FAB in the center of the nav that calls search instead? Might look nicer and be more obvious that that's how you add to your list.
-   Make sure search is location-aware.
-   ...redux?

0.2

Done:

-   Navbar basic styling has been added
-   Add logo to home screen
-   Added list screen that generates list currently based on an external array but on-device.
-   Added search using Google Places API to autocomplete and fetch data

Todo:

-   More work on navigation... add stack navigators, make headers look better, consolidate
-   Figure out why I can't get the Foodie logo to work within an image component but I can within a Card...
-   Make search use current location to search nearby, this means figuring out how to use react-native-geolocation.
-   Figure out how to capture the appropriate data from a search, transform it into a usable object, and then stick it in the list array to be read.
-   Style the list component to actually look nice.
-   Redux? Possible need for future needs.
