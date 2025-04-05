🍞 [English README](README.md)

# Tech Quotes API

![Image](https://github.com/user-attachments/assets/533c569c-7fc3-492b-8813-28e3494225b6)

> テック業界のリーダーや起業家からの心に響く名言を提供するシンプルな静的 API です。

## 概要

このプロジェクトは、イーロン・マスク、スティーブ・ジョブズ、マーク・ザッカーバーグ、リード・ホフマンなど、テック業界の著名人による 100 個の名言コレクションを提供します。

この API は完全に静的で、GitHub Pages や任意の静的ホスティングサービスでホストすることができます。

## API 使用方法

### エンドポイント

- `GET /api/quotes/{id}` - 指定した ID（1-100）の名言を返します

  例: `/api/quotes/42` は 42 番目の名言を返します

### レスポンス形式

```json
{
  "id": 3,
  "author": "Linus Torvalds",
  "quote": "Talk is cheap. Show me the code."
}
```

## 特徴

- ✅ 100%静的 - サーバーサイド処理不要
- ✅ CORS 対応 - どのウェブサイトからも利用可能
- ✅ シンプルな JSON レスポンス
- ✅ テックリーダーの厳選された本物の名言コレクション
- ✅ MIT ライセンスで自由に利用可能

## ローカル開発

1. リポジトリをクローン

   ```
   git clone https://github.com/yourusername/tech-quotes-api.git
   cd tech-quotes-api
   ```

2. 依存関係のインストール

   ```
   npm install
   ```

3. 開発サーバーの起動

   ```
   npm run dev
   ```

4. 本番用ビルド

   ```
   npm run build
   ```

5. GitHub Pages へのデプロイ
   ```
   npm run deploy
   ```

## コントリビューション

コントリビューションを歓迎します！さらに名言を追加したり API を改善したい場合は、以下の手順に従ってください：

1. リポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-quote`)
3. 変更をコミット (`git commit -m '素晴らしい名言を追加'`)
4. ブランチにプッシュ (`git push origin feature/amazing-quote`)
5. プルリクエストを作成

## 今後の改善点

- カテゴリフィルタリングの追加
- 著者フィルタリングの追加
- 一括取得のためのページネーション実装
- さらに多くの名言の追加

## ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています - 詳細は LICENSE ファイルをご覧ください。

## 謝辞

- 日々私たちにインスピレーションを与えてくれるテック業界のビジョナリーたちに感謝します
- Next.js と TypeScript で構築されています
