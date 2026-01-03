---
title: Github Pages에 astro 블로그 만들기
description: 설명
draft: false
tags:
  - "#옵시디언"
sidebar:
  order: 2
---

## 깃허브 저장소 만들기

https://docs.github.com/ko/pages/quickstart  
위 링크의 **웹 사이트 만들기** 부분만 참조  
만들어지거나 수정 후 적용하는데 최대 10분 걸릴 수 있습니다.

## astro 프로젝트 만들기

https://docs.astro.build/ko/install-and-setup/  
저는 starlight 템플릿을 사용해 만들었습니다.

## astro Github Pages에 배포

https://docs.astro.build/ko/guides/deploy/github/  
YAML 파일 수정 아무것도 안 했습니다.  
base 추가 할 필요 없어서 안 했습니다.  
push 하면 알아서 적용 됩니다.(굿!!)

## 옵시디언 폴더와 블로그 폴더 심볼릭 링크 설정

윈도우즈 사용법만 적습니다.  
pwsh을 관리자 권한으로 실행해서 아래 명령어 실행  
마크다운 폴더와 첨부파일 폴더를 따로 링크 해줬습니다.(하나만 설정 해도 되긴 함)  
마크다운 폴더: src/content/docs  
첨부파일 폴더: src/assets

```bash
New-Item -ItemType SymbolicLink -Path "\링크폴더" -Target "\원본폴더"
```

## 템플릿

https://starlight.astro.build/ko/reference/frontmatter/  
위 링크를 참조해서 템플릿에 적당히 추가 했습니다

```markdown
---
title: <% tp.file.title %> # 필수
description: 설명 # 검색 엔진에서 사용
lastUpdated: false # true 설정 시 최종 수정일을 깃허브 수정 이력으로 하단에 표시
draft: true # true면 프로덕션 빌드에서 제외
tags: # astro에는 필요 없는데 내가 개인적으로 사용
sidebar:
  order: 1 # 글 제목. 앞에 공백은 탭 대신 띄어쓰기를 사용해야 오류 발생 안 함
---
```

## index.mdx

title은 필수입니다.  
필요하면 더 추가

```markdown
---
title: home
template: doc #splash로 하면 sidebar 안 보임
---
```

## astro.config.mjs

site 속성을 추가하고 값에 URL을 추가합니다.  
title은 필수 속성입니다.  
description은 검색 엔진에서 사용합니다.  
tableOfContents의 기본값은 minHeadingLevel: 2, maxHeadingLevel:3 인데 저는 제목을 많이 써서 5로 해줬습니다.  
sidebar는 수동으로 해도 되고 autogenerate를 사용해도 됩니다.  
sidebar 관련 자세한 건 [링크](https://starlight.astro.build/ko/reference/configuration/#sidebar) 참조

```typescript
// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "Github Pages의 URL로 변경",
  integrations: [
    starlight({
      title: "블로그 이름",
      description: "",
      tableOfContents: { maxHeadingLevel: 5 },
      sidebar: [
        {
          label: "옵시디언",
          autogenerate: { directory: "옵시디언" },
        },
      ],
    }),
  ],
});
```
