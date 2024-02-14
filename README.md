‼️‼️ **현재 scaffold repository 코드는 직접적으로 반영되지 않습니다. 코드 수정사항이 발생한다면, 문민수 팀원에게 문의해주시면 감사하겠습니다.**

_Use of this software is subject to important terms and conditions as set forth in the License file_

# React App Scaffold

Run this command. You can download this project in your local environment

```
npx create-zendesk-react-app my-app
```

## Description

zendesk에서 지원하는 scaffold를 업그레이드 한 `react-template` 입니다.

기존 scaffold는 `class component`로 되어있으며, 특정 라이브러리 버전들이 낮거나 지원을 하고 있지 않습니다.

[apps for Zendesk products](https://developer.zendesk.com/apps/docs/apps-v2/getting_started).

## Changed

- 폴더 구조
- 클래스 컴포넌트 -> 함수형 컴포넌트
- babel, react 버전 업그레이드

## Getting Started

### Dependencies

- [Node.js](https://nodejs.org/en/) >= 18.12.1
- [Ruby](https://www.ruby-lang.org/) = 2.6.x

### Setup

1. Clone or fork this repo
2. Run `yarn`

To run your app locally in Zendesk, you need the latest [Zendesk CLI](https://github.com/zendesk/zcli).

### Running locally

`?zcli_apps=true`로 Zendesk 인스턴스에 앱을 제공하려면 새 터미널을 열고 다음을 실행합니다.

```
yarn watch
```

그런 다음 현재 프로젝트 경로에서 새 터미널을 열고 다음을 실행합니다.

```
yarn start
```

## Edit application info

`react-template`을 clone 한 뒤에, 조건에 맞게 zendesk에서 나타낼 정보를 수정해야합니다.

```
<!-- manifest.json -->
{
"name": "[application name]",
  "author": {
    "name": "[name]",
    "email": "[email]",
    "url": "[url(optional)]"
  },

   "location": {
    "support": {
      }
    }
  },
```

## Src folder structure

```bash
├── src
│   ├── images
│   └── javascript
│       ├── api
│       ├── components
│       ├── hooks
│       ├── lib
│       ├── pages
│       ├── stores
│       └── utils
├── App.js
├── index.js
├── zafClient.js
├── templates
├── translations
├── index.css
└── manifest.json
```

## Testing

현재 [Jest](https://jestjs.io/)로 테스트하도록 설정되어 있습니다. spec을 실행하려면 새 터미널을 열고 다음을 실행하십시오.

```
yarn test
```

Specs live under the `spec` directory.

## Deploying

### setup

Installing and updating [ZCLI](https://developer.zendesk.com/documentation/apps/getting-started/using-zcli/)

```
yarn add @zendesk/zcli -g
```

### deploy

앱이 서버 측 유효성 검사를 통과하는지 확인하려면 다음을 실행하세요.

```
yarn validate
```

or

```
zcli apps:validate dist
```

확인에 성공하면 다음을 실행하여 Zendesk 계정에 새로운 앱을 업로드할 수 있어요.

```
yarn upload
```

or

```
zcli apps:create dist
```

계정에서 생성된 후 앱을 업데이트하려면 다음을 실행하세요.

```
yarn update
```

or

```
zcli apps:update dist
```

수동 업로드를 위한 zip 아카이브를 생성하려면 다음을 실행하세요.

```
yarn package
```

or

```
zcli apps:package dist
```

## Total folder structure

The folder and file structure of the App Scaffold is as follows:

| Name                                    | Description                                                                                  |
| :-------------------------------------- | :------------------------------------------------------------------------------------------- |
| [`.github/`](#.github)                  | The folder to store PULL_REQUEST_TEMPLATE.md, ISSUE_TEMPLATE.md and CONTRIBUTING.md, etc     |
| [`dist/`](#dist)                        | The folder in which webpack packages the built version of your app                           |
| [`spec/`](#spec)                        | The folder in which all of your test files live                                              |
| [`src/`](#src)                          | The folder in which all of your source JavaScript, CSS, templates and translation files live |
| [`webpack/`](#src)                      | translations-loader and translations-plugin to support i18n in the application               |
| [`.babelrc`](#packagejson)              | Configuration file for Babel.js                                                              |
| [`.browserslistrc`](#packagejson)       | Configuration file for browserslist                                                          |
| [`jest.config.js`](#packagejson)        | Configuration file for Jest                                                                  |
| [`package.json`](#packagejson)          | Configuration file for Project metadata, dependencies and build scripts                      |
| [`postcss.config.js`](#packagejson)     | Configuration file for PostCSS                                                               |
| [`webpack.config.js`](#webpackconfigjs) | Configuration file that webpack uses to build your app                                       |

#### dist

The dist directory is created when you run the app building scripts. You will need to package this folder when submitting your app to the Zendesk Apps Marketplace, It is also the folder you will have to serve when using [ZCLI](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/). It includes your app's manifest.json file, an assets folder with all your compiled JavaScript and CSS as well as HTML and images.

#### spec

The spec directory is where all your tests and test helpers live. Tests are not required to submit/upload your app to Zendesk and your test files are not included in your app's package, however it is good practice to write tests to document functionality and prevent bugs.

#### src

The src directory is where your raw source code lives. The App Scaffold includes different directories for JavaScript, stylesheets, templates, images and translations. Most of your additions will be in here (and spec, of course!).

#### webpack

This directory contains custom tooling to process translations at build time:

- translations-loader.js is used by Webpack to convert .json translation files to JavaScript objects, for the app itself.
- translations-plugin.js is used to extract compulsory translation strings from the en.json file that are used to display metadata about your app on the Zendesk Apps Marketplace.

#### .babelrc

[.babelrc](https://babeljs.io/docs/en/babelrc.html) is the configuration file for babel compiler.

#### .browserslistrc

.browserslistrc is a configuration file to specify browsers supported by your application, some develop/build tools read info from this file if it exists in your project root. At present, our scaffolding doesn't reply on this file, [default browserslist query](https://github.com/browserslist/browserslist#queries) is used by [Babel](https://babeljs.io/docs/en/babel-preset-env/) and [PostCSS](https://github.com/csstools/postcss-preset-env#browsers)

#### jest.config.js

[jest.config.js](https://jestjs.io/docs/en/configuration.html) is the configuration file for Jest

#### package.json

package.json is the configuration file for [Yarn](https://yarnpkg.com/), which is a package manager for JavaScript. This file includes information about your project and its dependencies. For more information on how to configure this file, see [Yarn package.json](https://yarnpkg.com/en/docs/package-json).

#### postcss.config.js

postcss.config.js is the configuration file for [PostCSS](https://postcss.org/)

#### webpack.config.js

webpack.config.js is a configuration file for [webpack](https://webpack.github.io/). Webpack is a JavaScript module bundler. For more information about webpack and how to configure it, see [What is webpack](http://webpack.github.io/docs/what-is-webpack.html).

## Helpers

The App Scaffold provides some helper functions in `/src/javascripts/lib/helpers.js` to help building apps.

### I18n

The I18n (internationalization) module in `/src/javascripts/lib/i18n.js` provides a `t` method to look up translations based on a key. For more information, see [Using the I18n module](https://github.com/zendesk/app_scaffolds/blob/master/packages/react/doc/i18n.md).

For more information on the Zendesk CLI please see the [documentation](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/).

## External Dependencies

External dependencies are defined in [webpack.config.js](https://github.com/zendesk/app_scaffolds/blob/master/packages/react/webpack.config.js). This ensures these dependencies are included in your app's `index.html`.

## Contribute

- Put up a PR into the master branch.
- CC and get a +1 from @zendesk/vegemite.

## Bugs

Submit Issues via [GitHub](https://github.com/zendesk/app_scaffolds/issues/new) or email support@zendesk.com.

## Useful Links

Links to maintaining team, confluence pages, Datadog dashboard, Kibana logs, etc

- https://developer.zendesk.com/
- https://github.com/zendesk/zendesk_apps_tools
- https://webpack.github.io
- https://developer.zendesk.com/documentation/apps/build-an-app/using-react-in-a-support-app/

## Copyright and license

Copyright 2018 Zendesk

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
