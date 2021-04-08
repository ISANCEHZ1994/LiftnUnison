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
        // we can get/see all users
       .get(getUsers)
         // can add a new user
       .post(addNewUser);

    app.route('/user/:UserId')
    
       .get(getUserWithId) // can find/see a specifc user
   
       .put(updateUser) // this NEEDS work!!!! - cannot update!
   
       .delete(deleteUser) // user can be deleted
}

export default routes;