<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Cute Bunny Albums and Routes
===

For this assignment, your going to expand your Image Gallery app by:
* Adding a Router to manage app state
* Add Albums of images
  * Provide a way for users to view, add, and remove albums
  
## Routes

Your app should have something close to the following routes

* `/` - a Home page with a link to `/albums`
* `/albums` - a list of all albums. Clicking on one of the albums takes you to `/albums/:albumId`
  * User can also add a new album, or delete an existing album
* `/albums/:albumId/`
  * Includes a redirect to the default view if none provided
  * View selector can be managed in one of two ways:
    1. Use a search (query) param like `?view=gallery`
    2. Create separate subroutes for each view type
      * `/albums/123/gallery`

You'll want to add id's to your albums. Feel free to use a [npm package](https://www.google.com/search?q=npm+generate+id&rlz=1C5CHFA_enUS702US702&oq=npm+generate+id&aqs=chrome..69i57j69i64.3376j0j7&sourceid=chrome&ie=UTF-8)

## Bonus

Begin creating your backend server!

## Testing

No additional testing requirements for routes at this time.

## Rubric *10pts*
- Router
    - Route/Switch *3pts*
    - Link *3pts*
    - Subroute/query *2pts*
- Album *2pt*