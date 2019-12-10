import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  
  import { ArtistService } from "../service/artist.service";
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private artistService: ArtistService) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.artistService.getToken();
      const authRequest = req.clone({
        headers: req.headers.set("Authorization" , authToken)
      });
      return next.handle(authRequest);
    }
  }