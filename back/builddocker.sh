docker build \
    --build-arg secret_key=$SECRET_KEY \
    --build-arg db_name=$DB_NAME \
    --build-arg db_user=$DB_USER \
    --build-arg db_password=$DB_PASSWORD \
    -t apiserver .
