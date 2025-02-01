# woc_ci

Repo created to test using Jenkins for:
- Linting - ESLint
- Testing: Mocha
- Static Code Analysis: SonarQube 

## Building and running docker container

To build the docker container: 
```
sudo docker build -t 'image name' .     
```

To run the container
```
docker run -it -p 8080:8080 'image name'
```
