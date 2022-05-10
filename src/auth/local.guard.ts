import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // constructor() {
  //   super();
  // }
  // canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
  //   const req: Request = context.switchToHttp().getRequest();
  //   console.log('--------', req.url);
  //   return true;
  // }
}
