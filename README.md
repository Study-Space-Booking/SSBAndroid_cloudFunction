# SSBAndroid_cloudFunction

### Firebase Cloud Function --- managing server-side code for SSB Android app

#### 1. use npm to install firebase tools
```javascript
npm install -g firebase-tools
```

#### 2. log in to firebase
```javascript
firebase login
```

#### 3. init project
```javascript
firebase init functions
```

#### 4. Edit the functions in index.js using javascript

#### 5. Files explained:
package.json: Dependency information and the project configuration details; 

node_modules: Modules configured and installed with the help of package.json

#### 6. Deloy the functions to firebase cloud function
```javascript
firebase deploy --only functions
```

#### Notes: I also made use of Google Cloud Platform(Cloud Scheduler) together with the cloud function.
