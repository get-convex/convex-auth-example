# Convex Auth Example

This project showcases [Convex Auth](https://labs.convex.dev/auth).

It shows off several permutations of authentication methods. You can
choose one of these to kick start your project.

## Get started

```sh
npm install
npm run dev
```

### Special hints for Keycloak

If you consider using Keycloak please add these ENV variables:

```sh
npx convex env set KEYCLOAK_ISSUER https://keycloak.example.com/realms/master
npx convex env set KEYCLOAK_CLIENT_SECRET super_save_keycloak_secret
npx convex env set KEYCLOAK_CLIENT_ID client.id
```
