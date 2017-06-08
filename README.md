# Pom Image Gallery
## Keeley Hammond

### Recreating the database
To recreate the pomeranian database used in this lab (and you should, because there are some excellent pictures in here), please do the following:

1. Run the "gomongo" command in a separate terminal window
2. Within the project's server directory, type the following into the node REPL:

```
node
const albums = require('./lib/data')
require('fs').writeFileSync('data.json', JSON.stringify(albums))
```
Exit node REPL (ctrl-C twice), then run:
```
mongoimport --db gallery --collection albums --file data.json --jsonArray
```

3. Add ids manually to your images. Go to Robomongo, open the gallery collection, and enter the following:
```
db.getCollection('albums').update({}, { $set: { images.0._id: ObjectId() } } { multi: true })
db.getCollection('albums').update({}, { $set: { images.1._id: ObjectId() } } { multi: true })
db.getCollection('albums').update({}, { $set: { images.2._id: ObjectId() } } { multi: true })
```

Do this for as many objects as you have in each album {index 0, 1, ...}. In this case, the above lines will cover you.

### Objectives: