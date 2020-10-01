module.exports = {
    getAllUsers: (req, res) => {
        // need access to to database
        const db = req.app.get('db');

        // get the users from the db
        db.users.get_all_users()
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))

        // send all the users as a response
    },
    addUser: (req, res) => {
        // need access to db
        const db = req.app.get('db');

        // get info to work with
        const { name, paid } = req.body;

        // add a user to the db and return just that user
        db.users.add_user({ name, paid })
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
        // send the user as a response
    }
}