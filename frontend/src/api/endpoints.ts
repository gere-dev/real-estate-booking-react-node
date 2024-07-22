export const endpoints = Object.freeze({
  properties: {
    list: '/properties/get-all',
    getById: (id: number) => `/properties/get-by-id/${id}`,
    filter: '/properties/filter',
  },
  listings: {
    list: '/listings/get-all',
    create: '/listings/create',
    update: (listingId: number) => `/listings/update/${listingId}`,
    delete: (listingId: number) => `/listings/delete/${listingId}`,
    getById: (id: number) => `/listings/get-by-id/${id}`,
  },
  bookings: {
    list: '/bookings/get-all',
    create: '/bookings/create',
    delete: (bookingId: number) => `/bookings/delete/${bookingId}`,
  },
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
});
