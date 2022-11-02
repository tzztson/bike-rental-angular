### Overnights project

## Set up dynamic environments on AWS
1. Create an EC2 instance on AWS.
2. Create an elastic IP on AWS.
3. Connect elastic IP to virtual machine.
4. Log in to the EC2 instance you created
5. Execute the following command to install docker:  
    `$ curl -sSL get.docker.com | sh`
6. Create folder `~/docker-compose`
7. Copy the contents of `pipeline/server_config/dynamic-env/` to the `~/docker-compose` folder on the server
8. In **both** the `pipeline/server_config/dynamic-env/nginx*.conf files` replace the domain name in the regex to the actual domain name you are using.
    1. If you do not do this step nginx will not redirect to the correct containers
9. Rename `nginx_no_ssl.conf` to `nginx.conf`
    1. We need this nginx conf to enable ssl later on.
10. Run the command `$ docker compose up -d`
11. Wait for the containers to start.
12. Set the `DYNAMIC_ENV_ADDRESS` variable in the gitlab-ci.yml file to the elastic IP from step 2.
13. Run the pipeline in a merge request.

### Enable SSL through AWS
1. To enable SSL install certbot following the **wildcard** instructions on `https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal`
2. In step 9 `Install correct DNS plugin` follow the following documentation to install the AWS plugin for certbot: `https://certbot-dns-route53.readthedocs.io/en/`stable/
    1. Note: If the permissions in the documentation are not working give the user full access to route53 in AWS permissions
3. When the certificates are generated execute the following steps:
    1. replace the `ssl_certificate` and `ssl_key` values with the location of the files
        1. Hint: you only need to replace the domain name part of the value
    2. Rename or remove the current `nginx.conf` file(there is still a backup in the repo)
    3. Rename the `nginx_ssl.conf` file to `nginx.conf`.
    4. Restart the nginx docker container or execute `docker exec -it nginx-server nginx -s reload`
    5. Refresh the dynamic environment and check wether you are redirected to https.