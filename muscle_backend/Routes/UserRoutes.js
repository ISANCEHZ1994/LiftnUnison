import { 
    addNewUser, 
    getUsers, 
    getUserWithId,
    updateUser,
    deleteUser
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
   .get(getUserWithId)
    // UPDATE Specifc Player
    .put(updateUser)
    // DELETE Specifc Player
    .delete(deleteUser)
}

export default routes;