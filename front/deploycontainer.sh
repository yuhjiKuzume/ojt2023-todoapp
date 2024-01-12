DOCKER_BUILDKIT=1 docker build -t webserver .
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 609404061022.dkr.ecr.ap-northeast-1.amazonaws.com
docker tag webserver:latest 609404061022.dkr.ecr.ap-northeast-1.amazonaws.com/todoapp-web:latest
docker push 609404061022.dkr.ecr.ap-northeast-1.amazonaws.com/todoapp-web:latest