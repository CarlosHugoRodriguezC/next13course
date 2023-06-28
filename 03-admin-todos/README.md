# TODOS ADMIN

## Run project

1. copy the *.env.template* and paste as *.env* after that you need to fill the variables with the correct values.

2. run `docker compose up -d` for setting up the database.

3. run `npm install` or `yarn` for install node_modules.

4. you are ready to start develop you only need to run `npm run dev` or `yarn dev`.

5. for get the starting dummy data you need to excute a get request to *api/seed* endpoint.



### Prisma commands: 
```
npx prisma init
npx prisma migrate dev // dev is the name of migration
npx prisma generate
```
