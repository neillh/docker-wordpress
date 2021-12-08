# docker-wordpress
yaml config to setup MySQL phpMyAdmin and WordPress

# To Install/Run
docker-compose up -d

# phpMyAdmin
http://localhost:3001/

- User: wordpress
- Pass: wordpress

# WordPress
- http://localhost:8000/
- Update wp-config
- WORDPRESS_DB_NAME: wordless
- WORDPRESS_DB_USER: wordpress
- WORDPRESS_DB_PASSWORD: wordpress
