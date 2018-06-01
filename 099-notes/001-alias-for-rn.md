# alias for rn:
> Alias for react native.


## install babel plugin:
```shell
npm install --save babel babel-plugin-module-alias
```

## config it(.babelrc)
```json
{
  "presets": [
    "react-native"
  ],
  "plugins": [
    [
      "module-alias",
      [
        { "src": "./src", "expose": "src" },
        { "src": "./src/components", "expose": "components" }
      ]
    ]
  ]
}
```


## clean & restart:
```shell
npm start -- --reset-cache
```