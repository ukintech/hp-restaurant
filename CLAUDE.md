# CLAUDE.md

## プロジェクト概要

飲食店向けHP制作のサンプルサイト。hp-template をベースに、和食ダイニングのデモとして構築。
ポートフォリオ用のデモサイトとしても使用する。

## 技術スタック

- Astro 4.x（静的サイト生成）
- Tailwind CSS 3.x
- TypeScript
- フォント: Noto Serif JP（明朝体）

## ディレクトリ構成

- `src/data/site.ts` — サイトデータ（テキスト・店舗情報・メニュー等）
- `src/components/` — コンポーネント（Header / Hero / Features / Menu / Gallery / About / Access / CTA / Footer）
- `src/layouts/Base.astro` — 共通HTMLレイアウト
- `src/pages/` — ページ（index / about / contact）
- `tailwind.config.mjs` — カラーパレット（暖色系）

## コマンド

- `npm run dev` — ローカル開発サーバー（http://localhost:4321）
- `npm run build` — 本番ビルド
- `npm run preview` — ビルド結果のプレビュー

## 設計方針

- コンポーネントは props でデータを受け取る。ハードコードしない
- 全データは `src/data/site.ts` に集約する
- デザインは Tailwind のユーティリティクラスで完結させる
- お問い合わせフォームは Formspree 連携（バックエンド不要）

## ベースリポジトリ

- hp-template（https://github.com/ukintech/hp-template）

## 注意事項

- Node.js v20 で動作確認済み（Astro 4.x）
- 最新の Astro 5.x は Node.js v22 が必要なので注意
