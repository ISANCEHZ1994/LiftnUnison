import { 
    addNewUser, 
    getUsers, 
    // getPlayerWithId,
    // updatePlayer,
    // deletePlayer
         } 
    from '../Controllers/UserController';


const routes = (app) => {
    app.route('/users')
    // GET endpoint
    .get(getUsers)
    // POST endpoint
    .post(addNewUser);

    app.route('/user/:UserId')
    // GET Specific Player
    // .get(getPlayerWithId)
    // // UPDATE Specifc Player
    // .put(updatePlayer)
    // // DELETE Specifc Player
    // .delete(deletePlayer)
}

export default routes;