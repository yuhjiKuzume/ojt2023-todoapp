aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 609404061022.dkr.ecr.ap-northeast-1.amazonaws.com
docker tag apiserver:latest 609404061022.dkr.ecr.ap-northeast-1.amazonaws.com/todoapp-api:latest
docker push 609404061022.dkr.ecr.ap-northeast-1.amazonaws.com/todoapp-api:latest