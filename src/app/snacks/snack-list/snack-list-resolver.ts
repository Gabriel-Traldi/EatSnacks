import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { SnackService } from '../snack/snack.service';
import { Snack } from '../snack/snack';


@Injectable({ providedIn: 'root' })
export class SnackListResolver implements Resolve<Observable<Snack[]>> {

  constructor(private service: SnackService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Snack[]> {
    return this.service.listSnacks();
  }

}
