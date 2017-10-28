var config = {
    PORT: 8081,
    accessTokenExpireTime: 60 * 60 * 24 * 30 * 12, // 1 year validation
    tokenSecret: 'ecomApp'
};

module.exports = {
    config: config
}