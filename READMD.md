# oauth

## Social Media Login

## Installation
`npm i @mozeyinedu/oauth`

## Usage

### Google
Set up your consent screen and client_id and client_secret on [google development console](https://console.cloud.google.com/)

##### Front End
```
    // open consent screen and get code
    const googleLogin = () => {
        oauth.google.open_consent_screen({
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID
            redirect_uri: process.env.NEXT_PUBLIC_CLIENT_ID
        })
    }
    // call this function googleLogin on a click of a button (Login with google)
    // From the consent screen, you will be redirected to a page that you added on google
    // get the code from url query string
    // send the code to the back
```

##### Back End
```
    // retrieve the body sent from the client
    // use the code and get accesstoken

    // get accesstoken
    const accesstoken = await oauth.google.get_accesstoken({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
        redirect_uri: process.env.FRONT_END_REDIRECT_URI // this must have been added on google development console as described above
    })

    if (!accesstoken) {
        return res.status(403).json({ status: false, msg: "Authentication failure" })
    }

    // get user data using the accesstoken
    const data = await oauth.google.get_user({ accesstoken })
    console.log({ data })
    return res.send({ data })
```


### Github
Set up your consent screen and client_id and client_secret on [google development console](https://console.cloud.google.com/)

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
    // AT THE BACKEND
    // retrieve the body sent from the client
    // use the code and get accesstoken

    // get accesstoken
    const accesstoken = await oauth.github.get_accesstoken({
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    })

    if (!accesstoken) {
        return res.status(403).json({ status: false, msg: "Authentication failure" })
    }

    // get user data using the accesstoken
    const data = await oauth.github.get_user({ accesstoken })
    console.log({ data })
    return res.send({ data })
```


### Facebook