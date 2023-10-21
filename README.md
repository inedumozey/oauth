# oauth

## Social Media Login

## Installation
`npm i @mozeyinedu/oauth`

## Usage
```
    const Oauth = require('@mozeyinedu/oauth).default;
    const oauth = new Oauth()

    // OR

    import Oauth from '@mozeyinedu/oauth';
    const oauth = new Oauth()
````

### Google
Set up your consent screen and client_id and client_secret on [google development console](https://console.cloud.google.com/)

##### Front End
```
    // open consent screen and get code
    const googleLogin = () => {
        oauth.google.open_consent_screen({
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI
        })
    }
    // call this function googleLogin on a click of a button (Login with google)
    // From the consent screen, you will be redirected to a page that you added on google
    // get the code from url query string
    // send the code to the back
```

##### Back End
```
    // retrieve the code sent from the client
    // use the code and get accesstoken

    // get accesstoken
    const accesstoken = await oauth.google.get_accesstoken({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
        redirect_uri: process.env.FRONT_END_REDIRECT_URI // this must have been added on google development console as described above
    })

    // get user data using the accesstoken
    const data = await oauth.google.get_user({ accesstoken })
    console.log( data )

    // get user data straight up
    const userData = await oauth.google.get_user2({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
        redirect_uri: process.env.FRONT_END_REDIRECT_URI // this must have been added on google development console as described above
    }) 
    console.log(data)
```


### Github
Set up your consent screen and client_id and client_secret on [github developer settings](https://github.com/settings/developers)

##### Front End
```
    // open consent screen and get code
    const githubLogin = () => {
        oauth.github.open_consent_screen({
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        })
    }
    // call this function githubLogin on a click of a button (Login with github)
    // From the consent screen, you will be redirected to a page that you added on github
    // get the code from url query string
    // send the code to the back
```

##### Back End
```
    // retrieve the code sent from the client
    // use the code and get accesstoken

    // get accesstoken
    const accesstoken = await oauth.github.get_accesstoken({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    })

    // get user data using the accesstoken
    const data = await oauth.github.get_user({ accesstoken })
    console.log( data );

    // get user data straight up
    const userData = await oauth.github.get_user2({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
        redirect_uri: process.env.FRONT_END_REDIRECT_URI // this must have been added on github developer settings as described above
    }) 
    console.log(data)
```


### Facebook

Set up your consent screen and client_id and client_secret on [meta for developers](https://developers.facebook.com/apps/)

##### Front End
```
    // open consent screen and get code
    const facebookLogin = () => {
        oauth.facebook.open_consent_screen({
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        })
    }
    // call this function facebookLogin on a click of a button (Login with facebook)
    // From the consent screen, you will be redirected to a page that you added on facebook
    // get the code from url query string
    // send the code to the back
```

##### Back End
```
    // retrieve the code sent from the client
    // use the code and get accesstoken

    // get accesstoken
    const accesstoken = await oauth.facebook.get_accesstoken({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    })

    // get user data using the accesstoken
    const data = await oauth.facebook.get_user({ accesstoken })
    console.log( data );

    // get user data straight up
    const userData = await oauth.facebook.get_user2({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
        redirect_uri: process.env.FRONT_END_REDIRECT_URI // this must have been added on meta for developers as described above
    }) 
    console.log(data)
```

### Twitter
Set up your consent screen and client_id and client_secret on [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)

##### Front End
```
    // open consent screen and get code
    const twitterLogin = () => {
        oauth.twitter.open_consent_screen({
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        })
    }
    // call this function twitterLogin on a click of a button (Login with Twitter)
    // From the consent screen, you will be redirected to a page that you added on Twitter
    // get the code from url query string
    // send the code to the back
```

##### Back End
```
    // retrieve the code sent from the client
    // use the code and get accesstoken

    // get accesstoken
    const accesstoken = await oauth.twitter.get_accesstoken({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    })

    // get user data using the accesstoken
    const data = await oauth.twitter.get_user({ accesstoken })
    console.log( data );

    // get user data straight up
    const userData = await oauth.twitter.get_user2({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
        redirect_uri: process.env.FRONT_END_REDIRECT_URI // this must have been added on Twitter Developer Portal as described above
    }) 
    console.log(data)
```

### Instagram

### Apple

### Tiktok

### Microsoft