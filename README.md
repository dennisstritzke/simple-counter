# Simple Counter
Host a simple counter that counts to a specified date.

## Quick Start
```
docker build -t simple-counter:latest .
docker run -d --name simple-counter -p 8080:8080 simple-counter:latest
```

Query the counter using the following URL scheme.
```
http://yourcounter.org?year=2018&month=9&day=14&hour=17&minute=0&second=0
``` 

## Customisation
- Add an icon within the upper right corner via the inline CSS in [web/index.html](web/index.html)