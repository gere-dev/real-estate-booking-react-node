export const END_POINTS = Object.freeze({
  auth: {
    login: '/login',
    register: '/register',
    logout: '/logout',
    refresh: '/refresh',
    private: '/private',
  },
  properties: {
    getAll: '/get-all',
    filter: '/filter',
    getById: '/get-by-id/:id',
  },
});
