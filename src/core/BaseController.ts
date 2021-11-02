import * as express from 'express'
import { HttpStatusCodes } from '../utils'

abstract class BaseController {

    protected req: express.Request;
    protected res: express.Response;
  
    protected abstract executeImpl (): Promise<void | any>;
  
    public execute (req: express.Request, res: express.Response): void {

      this.req = req;
      this.res = res;
  
      this.executeImpl();
    }

    public static jsonResponse(res: express.Response, status: number, message: string) {
        return res.status(status).json(message);
    }

    public ok<T>(dto?: T) {

        const has_dto = !!dto;

        if(has_dto) return this.res.status(HttpStatusCodes.OK).json(dto)

        return this.res.status(HttpStatusCodes.OK);

    }

    public created() {
        return this.res.status(HttpStatusCodes.CREATED)
    }

    public unauthorized(message: string) {
        return BaseController.jsonResponse(this.res, HttpStatusCodes.UNAUTHORIZED, message ? message : "Unauthorized")
    }

    public badRequest(error: Error | string) {
        return this.res.status(HttpStatusCodes.BADREQUEST).json({
            message: error.toString()
        })
    }

}

export {
    BaseController
}