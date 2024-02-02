# react-timer

## 💬 설명

이 프로젝트는 타이머와 알람 및 스톱워치 기능을 갖춘 간단한 시간 관리 도구입니다. 사용자가 직접 시간을 설정하고 시간을 추적할 수 있는 기능을 제공합니다.

&nbsp;

## 🎯 목표

1. 간편한 사용자 인터페이스: 사용자가 쉽게 시간을 추가, 편집, 및 삭제할 수 있도록 직관적이고 간단한 사용자 인터페이스를 제공합니다.

2. 시간 관리: 사용자는 목록에서 시간을 확인하고 필요할 때 편집하거나 삭제할 수 있습니다.

5. 스타일링: Tailwind CSS를 사용하여 각 컴포넌트에 일관된 스타일을 적용하여 시각적으로 매력적인 UI를 제공합니다.

&nbsp;

## 💻 Tech Stacks

### Environment

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">

### Development

<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white"> <img src="https://img.shields.io/badge/svelte kit-FF3E00?style=for-the-badge&logo=svelte&logoColor=8D8D93">  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### Design

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

&nbsp;

## 🖥️ 화면 구성

| 메인 페이지 | 타이머 페이지 |
|:-----------:|:-------------:|
| ![image](https://github.com/kmseunh/react-memo/assets/105186724/3beb2967-b684-4499-9db1-347d1eb8ff5f)| ![image](https://github.com/kmseunh/react-memo/assets/105186724/6c3d1afe-d6b3-4009-80fb-f21ef17240d6)|
| **스톱워치 페이지** | **알람 페이지** |
| ![image](https://github.com/kmseunh/react-memo/assets/105186724/7b872fc6-555a-4381-8a00-c0defd925f6e)| ![image](https://github.com/kmseunh/react-memo/assets/105186724/7296192c-4231-4c27-8803-e6d13a745f43)|

&nbsp;

## ✨ 주요 기능

### 타이머

- 원하는 분, 초를 설정할 수 있습니다.
- 시작 버튼을 누르면 설정한 시간에서 1초씩 감소합니다.
- 일시정지 및 정지(초기화) 할 수 있습니다.

### 스톱워치

- 분, 초, 밀리초를 0부터 측정할 수 있습니다.
- 랩(LAP) 버튼으로 각 구간의 차이를 측정할 수 있습니다.
- 일시정지 및 정지(초기화) 할 수 있습니다.

### 알림

- 원하는 시간, 분을 설정하고 추가할 수 있습니다.
- 알람 기능을 on/off 할 수 있습니다.
- 여러 개의 알람을 추가할 수 있습니다.

&nbsp;

## 🏛️ Architecture

### 디렉토리 구조

```
sveltekit-timer
├─ README.md
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ src
│  ├─ app.css
│  ├─ app.d.ts
│  ├─ app.html
│  ├─ lib
│  │  ├─ components
│  │  │  └─ Button.svelte
│  │  └─ index.js
│  └─ routes
│     ├─ +layout.svelte
│     ├─ +page.svelte
│     ├─ alarm
│     │  └─ +page.svelte
│     ├─ stopwatch
│     │  └─ +page.svelte
│     └─ timer
│        └─ +page.svelte
├─ static
├─ svelte.config.js
├─ tailwind.config.js
└─ vite.config.js
```

&nbsp;

## 👥 Team

### 🧑🏻‍💻 김승현(Developer)

### 👩🏻‍💻 남유민(Designer)
