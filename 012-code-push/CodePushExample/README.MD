# code-push-example
## npm install:
```bash
$ npm install --save react-native-code-push@latest
$ npm install -g code-push-cli
$ code-push register
```

## my token:Â
- https://codepush-management.azurewebsites.net/accesskey
- sny5rJUeWb4q2xehe9kuPo20v57wNyazhS8K-

## use 'Code-Push'
+ code-push app add CodePushExample
+ code-push deployment ls CodePushExample --displayKeys
+ 查出Staging的值，在info.plist文件中添加CodePushDeploymentKey并且把Staging的值填入。(http://blog.csdn.net/u011151353/article/details/50688681)


## update:
```bash
$ react-native bundle --platform ios --entry-file index.ios.js --bundle-output codepush.js --dev false
$ code-push release CodePushExample codepush.js 1.0.2
```

发布更新 (JavaScript-only)
当你修改js文件的时候，并且想立刻发布。则仅仅需要以下的操作：
将你修改的js文件（当前文件是index.ios.js）打包为二进制文件，放入指定的地方（当前位置为根目录）。

react-native bundle --platform ios --entry-file index.ios.js --bundle-output codepush.js --dev false    
将二进制文件push到staging 环境中

code-push release <appName> <updateContents> <targetBinaryVersion>
[--deploymentName <deploymentName>]
[--description <description>]
[--mandatory]

code-push release AwesomeProject2  codepush.js 1.0.0
发布更新 (JavaScript + images)

–assets-dest 就是你放图片的位置（当前仅仅是做测试，实际上最好建个文件夹专门存入相关图片）

react-native bundle --platform ios --entry-file index.ios.js --bundle-output ./main.jsbundle --assets-dest ./
将二进制文件push到staging 环境中

code-push release AwesomeProject2  codepush.js 1.0.0
然后在你手机上退出App 再次进入就会发现界面改变啦！！

## resource:
+ https://github.com/Microsoft/react-native-code-push
+ http://blog.csdn.net/u011151353/article/details/50688681
+ http://bbs.reactnative.cn/topic/725/code-push-%E7%83%AD%E6%9B%B4%E6%96%B0%E4%BD%BF%E7%94%A8%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E%E5%92%8C%E6%95%99%E7%A8%8B
