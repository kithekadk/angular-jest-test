import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: any

  beforeEach(() => {
    httpClientSpy = {
      post: jest.fn(),
      get:jest.fn()

    }

    service = new ApiService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test login service', ()=>{
    const details = {
      'email': 'tets@yopmail.com',
      'password': '12345678'
    }

    const res = 'Logged in'

    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res))

    service.LoginService(details)

    expect(httpClientSpy.post).toBeCalledTimes(1)
  })
});
