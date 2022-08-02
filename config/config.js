require('dotenv').config();


const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || '207.244.227.96',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'conoce_costarica',
        password: process.env.DB_PASSWORD || 'k6k8bVO42g@',
        database: process.env.DB_DATABASE || 'conoce_costarica'
    }
}

module.exports = config;