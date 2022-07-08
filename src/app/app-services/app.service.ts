import { Inject, Injectable, Optional } from '@angular/core';
import type { Request } from 'express';

import { REQUEST } from './app.tokens';
import { GoogleTagManagerService } from "angular-google-tag-manager";

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    @Inject(REQUEST) @Optional() private request: Request,
    private service: GoogleTagManagerService
  ) {}

  public init() {
    this.service.addGtmToDom();
  }
}
