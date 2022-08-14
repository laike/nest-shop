import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log(
            `${method} ${url} ${Date.now() - now} ms `,
            context.getClass().name,
          ),
        ),
      );
  }
}
