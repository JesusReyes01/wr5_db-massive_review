module.exports = {
    getAllUsers: (req, res) => {
        // need access to to database
        const db = req.app.get('db');

        // get the users from the db
        db.users.get_all_users()
            .then(dbRes => {
                // send all the users as a response
                res.status(200).send(dbRes)
            })
            .catch(err => {
                // send an error response if error
                console.log(err)
                res.status(500).send({message: 'Something went wrong with the database'})
            });

    },
    addUser: (req, res) => {
        // need access to db
        const db = req.app.get('db');

        // get info to work with
        const { name, paid } = req.body;

        // add a user to the db and return just that user
        db.users.add_user({ name, paid })
            .then(dbRes => {
                // send the user as a response
                res.status(200).send(dbRes)
            })
            .catch(err => {
                // send an error response if error
                console.log(err)
                res.status(500).send({message: 'Something went wrong with the database'})
            });
    }
}