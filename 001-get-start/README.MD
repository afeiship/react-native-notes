#get-start

##Step by step:
### initial env:
  ```bash
  ##install node & watchman
  brew install node
  brew install watchman

  ##install react-native
  npm install -g react-native-cli

  ##init example project:
  react-native init AwesomeProject
  ```

### change `AppDelegate.m` jsCodeLocation for debug model:
  + Old:
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  + New:
  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];

### run project:
  ```bash
  cd AwesomeProject
  react-native run-ios
  ```
### debug-ui
+ http://localhost:8081/debugger-ui

##resource:
+ https://facebook.github.io/react-native/docs/getting-started.html
