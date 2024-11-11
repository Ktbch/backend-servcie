
import {request, Router} from "express";
import {UserController} from "../controller/user-controller";
import {ValidateIncomingData} from "../../../middleware/validate-incoming-data";
import {zodUserSchema} from "../zod/user-zod-schema";
import {authGaurd} from "../../../middleware/authGaurd";

export const userRouter = Router()
const userController = new UserController()




userRouter.post('/create-account', ValidateIncomingData(zodUserSchema), userController.createUser)

userRouter.post('/login', ValidateIncomingData(zodUserSchema), userController.logginUser)

userRouter.get('/', authGaurd, (res, req) =>
{
    console.log('it worked')
})

// i am using dependendency injection pattern


// export class UserRouter
// {
//     router: Router
//     private controller: UserController

//     constructor ()
//     {
//         this.router = Router()
//         this.controller = new UserController()
//     }
//     post = () =>
//     {
//         this.router.post('/create-account', () => console.log('hello'))
//     }
// }