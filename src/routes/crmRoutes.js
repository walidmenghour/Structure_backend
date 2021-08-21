import {
  AddNewUser,
  getUsers,

} from "../controllers/crmControler";

const routes = (app) => {
  app
    .route("/users")
    // get all the contacts 
    .get((req, res, next) => {
      console.log(`Method : ${req.method} \n`);
      next();
    }, getUsers)
    // add a new contact
    .post(AddNewUser);

}


export default routes;
