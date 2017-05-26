<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Cute Bunny Edit List
===

For this assignment, your going to expand your Image Gallery app by handling editing of images, 
and provide a way for users to add a new image and to delete images. 

## Add and Delete Images

* Create a component that allows the user to add new images to the list.
* Add a button to each image display to allow the user to delete the image from the list.


You'll want to add id's to your images. Feel free to use a [npm package](https://www.google.com/search?q=npm+generate+id&rlz=1C5CHFA_enUS702US702&oq=npm+generate+id&aqs=chrome..69i57j69i64.3376j0j7&sourceid=chrome&ie=UTF-8)

Make sure to create a component around adding a new image.

Delete button will be in each type of display

Handling the adds and deletes should happen in component that owns the data.

Don't forget to `.slice()` your data in your API service class when returning on `get()`


## Bonus

Allow the user to select (up to you how, an edit button, or click on image, etc) an existing image
and then edit it. You can either add an edit form component, resuse the add component, or offer inline editing.

If you use a form, offer the user the option to cancel and don't update the list until the user clicks
Save or some similar action.

## Testing

Make sure you have snapshot tests for all your components

## Rubric *10pts*
- Add Image *3pt*
- Delete Image *3pt*
- Tests *4pts*