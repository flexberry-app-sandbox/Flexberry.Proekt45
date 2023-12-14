docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt_45-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proekt_45-java/app ../../..
