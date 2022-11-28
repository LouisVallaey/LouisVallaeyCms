module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '731fcc2b2ed4bc22497c6cef94d80474'),
  },
});
