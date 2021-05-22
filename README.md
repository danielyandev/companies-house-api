## Get started

#### Clone the project:
```
git clone https://github.com/danielyandev/companies-house-api.git
```

#### Install dependencies
```
composer install
npm install
```

#### Copy .env.example to .env file
```
cp .env.example .env
```

#### Generate app key
```
php artisan key:generate
```

#### Run docker with sail
```
make up
```

#### Migrate database
```
make migrate
```

##### If you have error with the migration, try this
```
docker-compose down -v
make up
make migrate
```

#### Install passport
```
make install_passport
```

##### You'll get PASSWORD GRANT client id and secret, copy them to .env
```
PASSPORT_PASSWORD_GRANT_CLIENT_ID=id
PASSPORT_PASSWORD_GRANT_CLIENT_SECRET=secret
```

#### Put company house api type and key to .env
Note: 'type' can be either 'live' or 'sandbox'

```
COMPANIES_HOUSE_API_TYPE=
COMPANIES_HOUSE_API_KEY=
```

#### Go to http://localhost in the browser or setup your domain. Register and enjoy
