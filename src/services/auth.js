import request from '@/utils/request';
import { stringify } from 'qs';

export async function queryRoles() {
  return request(`/admin/auth/get-roles`);
}

export async function postRoles(params) {
  return request(`/admin/auth/post-roles`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function getPermissions() {
  return request(`/admin/auth/get-permissions`);
}

export async function postPermissions(params) {
  return request(`/admin/auth/post-permissions`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function getStuffs() {
  return request(`/admin/auth/get-stuffs`);
}

export async function postStuffs(params) {
  return request(`/admin/auth/post-stuffs`,
    {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    }
  );
}

export async function getRolesViaStuff(params) {
  return request(`/admin/auth/get-roles-via-stuff?${stringify(params)}`);
}

