var Datastore = require('nedb');
var db = new Datastore({filename: './db/contacts.db', autoload:true});

/*
structure for our contact records
var test = {
    first_name: 'First',
    last_name: 'Last',
    email: 'first_last@gmail.com',
    type: 'Investor'
  };
*/

//load db
var load = function() {
    return new Promise(function(resolve, reject) {
        db.loadDatabase(function(err) {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}


//console log to show db has been loaded
db.loadDatabase(function(err) {
    console.log('./db/contacts.db loaded');
})


//adds contact to db
var addContact = function(data) {
    return new Promise(function (resolve, reject) {
        db.insert(data, function(err, doc) {
            //console log for testing
            if (err) {
                reject(err);
            }
            console.log('Inserted', doc.last_name, 'with ID', doc._id)
            resolve();
        })
    });
}

var findContactByLastName = function(lname) {
    return new Promise(function (resolve, reject) {
        db.find({ last_name: lname}, function(err, docs) {
            if (err) {
                reject(err);
            }

            //console log for all matching users
            docs.forEach(function(contact) {
                console.log('User:', contact.first_name);
            });
            resolve();
        });
    });
}

module.exports = {
    "load": load,
    "findContact": findContactByLastName,
    "addContact": addContact
};