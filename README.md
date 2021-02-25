# React・Next.jsで作った電卓アプリ

## 起動方法
リポジトリのクローンを行います。

```
git clone https://github.com/Yota-K/nextjs-calculator.git
```

`package.json`があるディレクトリで、以下のコマンドを実行します。

```
yarn install
```

ライブラリのインストールが完了後に、以下のコマンドを実行すると開発環境が立ち上がります。

```
yarn dev
```

## ビルド方法
`package.json`があるディレクトリで、以下のコマンドを実行します。

```
yarn build
```

## その他

### ディレクトリ・ファイル構成

```
.
├── README.md
├── components
│   ├── Buttons（ボタンに関連するコンポーネントを配置するディレクトリです）
│   │   ├── BaseButton.tsx
│   │   ├── NumButton.tsx
│   │   └── OperatorButton.tsx
│   ├── Display（計算結果などを表示するコンポーネントを配置するディレクトリです）
│   │   ├── CalculationProgress.tsx
│   │   ├── DisplayWrapper.tsx
│   │   ├── Result.tsx
│   │   └── index.tsx
│   └── Layout.tsx
├── next-env.d.ts
├── next.config.js
├── out（ビルドされたコードが出力されるディレクトリです）
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── _error.tsx
│   └── index.tsx
├── store（Redux関連のコードを配置するディレクトリです）
│   ├── action-types.ts
│   ├── calculator
│   │   ├── actions.ts
│   │   ├── reducer.ts
│   │   └── types.ts
│   └── index.ts
├── tsconfig.json
└── yarn.lock
```
