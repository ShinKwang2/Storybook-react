# Vite + React 기반의 Storybook 프로젝트

### 10장: CounterApp, 11장: TodoApp, 12장: BlogApp

이 프로젝트는 **"현장에서 바로 써먹는 리액트 with 타입스크립트"** 책의 10장, 11장, 12장 내용을 기반으로 제작되었습니다.

- 기존의 Webpack 기반의 React에서 Vite 기반의 React로 변경하였습니다.
- Storybook이 현재 8.x인 만큼 해당 버전에 맞게 수정하였습니다.

### 📖 참고 도서

[📚 바로 써먹는 리액트 책 구매하기](https://www.yes24.com/Product/Goods/119695609)

![현장에서 바로 써먹는 리액트 with 타입스크립트](./book-images/book-image.jpeg)

---

### 프로젝트 구조

#### 🗂 디렉토리 구조

```plaintext
📦 [ cdd-counter | cdd-todo | cdd-blog ] / src
 📂 components
 ┣ 📂 atoms         # 원자 컴포넌트
 ┣ 📂 molecules     # 분자 컴포넌트
 ┣ 📂 organisms     # 유기체 컴포넌트
 ┗ 📂 templates     # 템플릿 컴포넌트
 📂 pages           # 페이지 컴포넌트
 📂 contexts        # 컨텍스트 관리
```

---

### 10장: CounterApp

- **핵심 내용**: CDD 기반 상태 관리의 기본 이해.
- **주요 학습 내용**:
  - `useState`를 활용한 상태 값 증가/감소 기능 구현.
  - Storybook으로 Counter 컴포넌트 문서화.

### 11장: TodoApp

- **핵심 내용**: CDD 기반 상태 관리 심화.
- **주요 학습 내용**:
  - `useReducer`와 `ContextApi`를 활용한 Todo 리스트 추가/삭제.
  - 컴포넌트 구조 설계 및 재사용성 고려.
  - Storybook으로 Todo 컴포넌트 문서화.

### 12장: BlogApp

- **핵심 내용**: CDD 기반 Fetch를 활용한 Storybook 활용.
- **주요 학습 내용**:
  - Fetch 관련 Storybook 작성 (진행중..)
  - Storybook으로 Blog 컴포넌트와 페이지 문서화.

---

## 설치 및 실행 방법

### 1️⃣ 설치

```bash
git clone https://github.com/your-repo/storybook-project.git
cd [cdd-counter | cdd-todo | cdd-blog]
```

### 2️⃣ 10장 Storybook 실행 및 Vite 개발 서버 실행(yarn)

```bash
cd cdd-counter
yarn
yarn storybook
yarn dev
```

### 3️⃣ 11장 Storybook 실행 및 Vite 개발 서버 실행(pnpm)

```bash
cd cdd-todo
pnpm
pnpm storybook
pnpm dev
```

### 4️⃣ 12장 Storybook 실행 및 Vite 개발 서버 실행(pnpm)

```bash
cd cdd-blog
pnpm
pnpm storybook
pnpm dev
```

---

## 사용 기술 스택

- **React**: 18.x
- **Vite**: 5.x | 6.0.1
- **Storybook**: 8.x

---
