*Use of this software is subject to important terms and conditions as set forth in the License file*

# React App Scaffold

## Description

이 리포지토리에는 개발자가 Zendesk 제품용 앱을 개발하는 데 도움이 되는 다양한 app scaffolds가 포함되어 있습니다. [apps for Zendesk products](https://developer.zendesk.com/apps/docs/apps-v2/getting_started).

## Getting Started

### Dependencies

- [Node.js](https://nodejs.org/en/) >= 18.12.1
- [Ruby](https://www.ruby-lang.org/) = 2.6.x

### Setup

### Setup
1. 이 리포지토리를 clone 또는 fork합니다.
2. `app_scaffolds/packages/react` 디렉터리로 이동 (`cd`)합니다.
3. `pnpm install` 명령을 실행합니다.

Zendesk에서 앱을 로컬로 실행하려면 최신 [Zendesk Command Line Interface (ZCLI)](https://github.com/zendesk/zcli)가 필요합니다.

### Running locally
Zendesk 인스턴스에서 `?zcli_apps=true`로 앱을 제공하려면 환경에 따라 아래 단계를 따르세요:

#### Development Environment

1. 새 터미널을 열고 다음 명령을 실행합니다:

```
pnpm run dev
```

2. `app_scaffolds/packages/react` 디렉터리에서 또 다른 터미널을 열고 다음 명령을 실행합니다:

```
pnpm run start
```

> **Note:** 참고: `pnpm run dev` 명령은 Hot Module Replacement (HMR)를 활성화하여 페이지를 수동으로 새로고침하지 않고도 코드 변경 사항을 즉시 확인할 수 있습니다. 이는 개발 경험을 크게 향상시킵니다.

#### Production Environment

1.새 터미널을 열고 다음 명령을 실행합니다:

```
pnpm run build
```

2. `app_scaffolds/packages/react` 디렉터리에서 또 다른 터미널을 열고 다음 명령을 실행합니다:

```
pnpm run start:prod
```

## But why?

이 스캐폴드는 앱을 유지보수하고 확장하는 데 유용한 다양한 기능을 제공합니다. 주요 기능들은 다음과 같습니다:

- [ECMAScript](https://esbuild.github.io/content-types/#javascript) (ES2022)

  Vite는 최신 ECMAScript 표준을 지원하며, ESBuild를 통해 빠른 트랜스파일링과 최적화된 모듈 번들링을 제공합니다.

- [Zendesk Garden](https://garden.zendesk.com/) React UI components

  Zendesk 제품에 최적화된 React 컴포넌트 모음으로, 다양한 입력 장치를 지원하고 사용자 경험을 향상시키는 섬세한 애니메이션이 포함되어 있습니다.

- [Vite](https://vitejs.dev/) with Rollup under the hood

  빠른 개발 속도와 효율적인 모듈 번들링을 제공하며, 핫 모듈 교체(HMR)를 통해 개발 경험을 향상시킵니다.

- [PostCSS](https://postcss.org/) stylesheets

  JavaScript 플러그인을 사용하여 스타일시트를 변환하며, CSS 리팅, 변수, 믹스인, 미래 문법 변환 등을 지원합니다.

- [Optimized Build](https://vitejs.dev/guide/build.html)

  Vite provides optimized production builds with features like code splitting, tree shaking, and pre-bundling, ensuring fast and efficient deployment of your application.

- [Vitest](https://github.com/vitejs/vitest) JavaScript testing framework

  Vite와 통합된 테스트 프레임워크로, 유닛 및 통합 테스트를 효율적으로 실행할 수 있습니다.

## Folder structure

폴더 및 파일 구조는 다음과 같습니다:

| Name                           | Description                                                                                  |
| :----------------------------- | :------------------------------------------------------------------------------------------- |
| [`.github/`](#.github)         | PULL_REQUEST_TEMPLATE.md, ISSUE_TEMPLATE.md 및 CONTRIBUTING.md 파일이 포함된 폴더     |
| [`dist/`](#dist)               | Vite가 빌드된 앱을 패키징하는 폴더                              |
| [`spec/`](#spec)               | 모든 테스트 파일이 위치한 폴더                                              |
| [`src/`](#src)                 | 소스 JavaScript, CSS, 템플릿 및 번역 파일이 포함된 폴더 |
| [`rollup/`](#src)              | static-copy-plugin and translations-loader-plugin to support i18n in the application         |
| [`vite.config.js`](#vite)      | Vite의 설정 파일                                                                  |
| [`package.json`](#packagejson) | 프로젝트 메타데이터, 종속성 및 빌드 스크립트가 포함된 파일                      |

#### dist

dist 디렉토리는 앱 빌드 스크립트를 실행할 때 생성됩니다. 앱을 Zendesk 앱 마켓플레이스에 제출할 때 이 폴더를 패키지화해야 합니다. 또한 [ZCLI](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/)를 사용할 때 제공해야 하는 폴더이기도 합니다. 여기에는 앱의 manifest.json 파일, 모든 컴파일된 Javascript와 CSS는 물론 HTML과 이미지가 포함된 assets 폴더가 포함됩니다

#### spec

spec 디렉토리는 모든 테스트 및 테스트 도우미가 있는 곳입니다. 테스트는 Zendesk에 앱을 제출/업로드할 필요가 없으며 테스트 파일은 앱 패키지에 포함되어 있지 않지만, 기능을 문서화하고 버그를 방지하기 위해 테스트를 작성하는 것이 좋습니다.

#### src

raw 소스 코드가 있는 곳은 src 디렉토리입니다. app scaffold에는 Javascript, stylesheets, 템플릿, 이미지 및 번역을 위한 다양한 디렉토리가 포함되어 있습니다. 추가되는 대부분의 디렉토리는 여기에 있습니다(물론 spec도 마찬가지입니다!).

#### vite.config.js

'vite.config.js'는 [Vite](https://vitejs.dev/)의 구성 파일입니다. Vite는 변환을 위해 ESBuild를 활용하고 번들링을 위해 롤업을 활용하는 빠른 빌드 도구입니다. 이 파일에는 빌드, 테스트 및 기타 사용자 지정을 위한 구성이 포함되어 있습니다.

- 이 파일 내에서 직접 ESBuild 설정을 수정하여 번역 옵션을 조정할 수 있습니다. 자세한 내용은 [ESBuild의 Vite 설명서](https://vitejs.dev/config/#esbuild)를 참조하세요.

- **정적 복사 플러그인**: 이 플러그인은 빌드 프로세스 중에 정적 자산을 'dist' 디렉토리에 복사하는 데 사용됩니다.
- **번역 로더 플러그인**: 이 플러그인은 빌드 시 번역 파일을 처리하여 '.json' 번역 파일을 앱용 자바스크립트 개체로 변환합니다.

#### package.json

package.json은 [pnpm](https://pnpm.io/), 의 구성 파일로, 자바스크립트의 패키지 관리자입니다. 이 파일에는 프로젝트와 프로젝트 종속성에 대한 정보가 포함되어 있습니다. 이 파일을 구성하는 방법에 대한 자세한 내용은 [pnpm package.json](https://pnpm.io/package_json)을 참조하세요.

### I18n

'/src/lib/i18n.js'의 I18n(국제화) 모듈은 키를 기준으로 번역을 검색하는 't' 방법을 제공합니다. 자세한 내용은 [I18n 모듈 사용](https://github.com/zendesk/app_scaffolds/blob/master/packages/react/doc/i18n.md) 를 참조하세요.

## Parameters and Settings

'dist/manifest.json'의 'parameter' 섹션으로 앱을 테스트해야 하는 경우, 다음과 같은 메시지를 표시될 수 있습니다:

> Would have prompted for a value interactively, but zcli is not listening to keyboard input. (프롬프트로 값을 요청했지만 zcli가 키보드 입력을 듣지 않습니다.)

이 문제를 해결하려면 매개 변수의 기본값을 설정하거나 앱 스캐폴드 기반 프로젝트의 루트 디렉토리에 `settings.yml` 파일을 생성한 다음 매개 변수 이름과 테스트 값을 채웁니다. 예를 들어, 다음과 같은 매개 변수 섹션을 사용합니다:

```json
{
  "parameters": [
    {
      "name": "myParameter"
    }
  ]
}
```

다음을 포함하는 `settings.yml` 파일을 만듭니다:

```yaml
myParameter: 'some value!'
```

## Testing

App Scaffold는 현재 [Vitetest](https://vitest.dev/)로 테스트할 수 있도록 설정되어 있습니다. 사양을 실행하려면 새 터미널을 열고 실행합니다

```
pnpm run test
```

Specs은 'spec' 디렉토리 아래에 있습니다.

## Deploying

앱이 서버 측 검증 검사를 통과하는지 확인하려면 아래와 같이 입력합니다.

```
pnpm run validate
```

검증에 성공하면 아래와 같이 입력하여 Zendesk 계정에 앱을 업로드할 수 있습니다

```
pnpm run create
```

계정에 앱이 생성된 후 업데이트하려면 아래와 같이 입력합니다.

```
pnpm run update
```

또는 수동 업로드를 위한 Zip 아카이브를 만들려면 아래와 같이 입력합니다.

```
pnpm run package
```

로그인된 ZCLI 사용자를 바꾸려면 아래와 같이 입력합니다.

```
pnpm run user {userEmail}
```


Zendesk CLI에 대한 자세한 내용은 [document](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/) 를 참조하세요.

## Useful Links

유지 보수 팀, Confluence 페이지, Datadog 대시보드, Kibana 로그 등에 대한 링크

- https://developer.zendesk.com/
- https://github.com/zendesk/zendesk_apps_tools
- https://esbuild.github.io/
- https://vitejs.dev/
- https://developer.zendesk.com/documentation/apps/build-an-app/using-react-in-a-support-app/

## Copyright and license

Copyright 2018 Zendesk

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
