import {Response, Request} from "express";
import {DetaildUserService} from '../../services/user/detailUserService';

class DetailUserController{
    async handle(req: Request, res: Response){ 

        const user_id = req.user_id;
        const detailUserService = new DetaildUserService();
        const user = await detailUserService.execute(user_id);

        return res.json(user);
    }
}

export {DetailUserController}