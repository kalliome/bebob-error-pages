```
# add one directive for each http status code
error_page 400 /ErrorPages/400.html;
error_page 401 /ErrorPages/401.html;
error_page 402 /ErrorPages/402.html;
error_page 403 /ErrorPages/403.html;
error_page 404 /ErrorPages/404.html;
error_page 500 /ErrorPages/500.html;
error_page 501 /ErrorPages/501.html;
error_page 502 /ErrorPages/502.html;
error_page 503 /ErrorPages/503.html;

# redirect the virtual ErrorPages path the real path
location /ErrorPages/ {
  alias /Work/Development/bebob-error-pages/build/;
  internal;
}
```
