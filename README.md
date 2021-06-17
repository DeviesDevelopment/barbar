# barbar

[![Netlify Status](https://api.netlify.com/api/v1/badges/0688444a-b1e9-40e7-b71d-28a051a259f4/deploy-status)](https://app.netlify.com/sites/barbar/deploys)

[Barbar](https://barbar.netlify.com)

## Deployment
Deplyed via Netlify.
To be able to deploy, environment variables `VUE_APP_DISCOGS_KEY` and `VUE_APP_DISCOGS_SECRET` must be present in Netlify > Build & deploy > Environment.
## Local setup

 - Open [Discogs developer settings](https://www.discogs.com/settings/developers)
 - Create application
 - Create file `.env.local` with the following environment variables:

```
VUE_APP_DISCOGS_KEY=YOUR_KEY
VUE_APP_DISCOGS_SECRET=YOUR_SECRET
```

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
