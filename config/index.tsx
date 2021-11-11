const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'https://bookkeeping-portal.herokuapp.com/' : 'https://bookkeeping-portal.herokuapp.com/';
