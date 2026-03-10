import { CanActivateFn } from '@angular/router';
import { User } from '../services/user';
import { inject } from '@angular/core';
import { Role } from '../services/role';

export const welcomeGuard: CanActivateFn = (route, state) => {
  let us: User = inject(User)
  let rs: Role = inject(Role)
  if(us.getName()=="Guest")
      return false;
  else if(route.data[0]==rs.getRole() || route.data[1]==rs.getRole())
      return true;
  else
      return false
};
