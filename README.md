# Bend

## Docker compose + Updated WP + Custom theme dev

### Docker part
Docker compose recipe with following containers
- [ ] NGINX
- [ ] PHP-FPM
- [ ] MYSQL
- [ ] REDIS

**To build:**
```
docker-compose up --build
```
**To start:**
```
docker-compose up -d
```

To clear docker containers:
```
docker rm -f $(docker ps -a -q)
```

To clear images:
```
docker rmi -f $(docker images -a -q)
```

To clear volumes:
```
docker volume rm $(docker volume ls -q)
```

To clear networks:
```
docker network rm $(docker network ls | tail -n+2 | awk '{if($2 !~ /bridge|none|host/){ print $1 }}')
```

**Attention:**
_MySQL image stores data in data/ folder inside root project.
It's highly recommended to add data/ to .gitignore._


### WP part
Dependecies
- [ ] ACF plugin ( included in theme )
- [ ] WMPL Sitepress plugin
- [ ] WPML String translation plugin
- [ ] Redis Object Cache plugin ( optional )
