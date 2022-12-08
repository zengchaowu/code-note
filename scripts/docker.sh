
sudo docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
sudo docker run --name code-note-nginx -v /home/ubuntu/websites/code-note:/usr/share/nginx/html:ro -e VIRTUAL_HOST=note.zengchaowu.com -d nginx