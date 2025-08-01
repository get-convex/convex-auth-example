# Convex Auth Example

This project showcases [Convex Auth](https://labs.convex.dev/auth).

It shows off several permutations of authentication methods. You can
choose one of these to kick start your project.

## Get started

```sh
npm install
npm run dev
```


### Instructions for self-hosted environment


If this auth setup will be deployed to a self hosted instance it is important, that these two variables are set: `JWT_PRIVATE_KEY` and `JWKS`. This will be done automatically if you
run your app on convex cloud but on a self hosted this might not be the case.

You an generated thiese missing values with:

``sh
cd utils
npm i jose
node generateKeys.mjs
``

Then, you need to add it to your convex instance under `Settings` > `Environment Variables`. 