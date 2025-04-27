# 【Udemy講座】MUSICリストアプリ

## 概要

[Spotify API](https://developer.spotify.com/documentation/web-api) を使って最近流行りの曲の一覧表示と曲タイトルのキーワード検索機能を実装しました。  
※現在、SpotifyAPIの仕様変更により、曲の再生は不可となっております。
※本アプリはUdemy講座で作成したアプリです。

## 使用言語

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/tailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindCSS" />
</p>

## 開発サーバ

<p>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

## 使用API

[アクセストークン取得](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token)  
SpotifyAPIで情報取得する際にトークンIDが必要のため、最初にトークンIDを取得する。

[最近流行りの曲の一覧表示API](https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n)  
<https://api.spotify.com/v1/playlists/[playlistID]>  
playlistIDはSpotifyのプレイリストのURLの最後にあるIDを指定する。

## その他
