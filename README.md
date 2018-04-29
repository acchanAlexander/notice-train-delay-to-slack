# 概要
複数の路線についての情報を、それぞれ通知したい slack のルームに通知できるようにしています。  
遅延情報のデータには　<https://rti-giken.jp/fhc/api/train_tetsudo/>　様で提供していただいている情報を使っています。  
Node.jsで書いているので、実行にはNode.jsをインストールする必要があります。

# 使い方
1. Node.js と npm をインストールする（インストール方法については、下記の「Node.js, npmのインストールについて」を参考にしてください）
2. このレポジトリをclone
3. このレポジトリのトップレベルで `npm install` とコマンドを打ってください
4. targetTrainInfo.json に、通知したい路線についての情報を記述します。（記述する情報については下記の「targetTrainInfo.jsonに記載する項目について」を参考にしてください）
## targetTrainInfo.jsonに記載する項目について
### `name`
路線の名前。  
ここで設定しないといけないのは　<https://rti-giken.jp/fhc/api/train_tetsudo/> の路線名に合致する命名でなければなりません。
### `link`
詳細情報が載っているリンクを設定します。通知されるメッセージ内に詳細リンクを貼るために設定します。  
<https://www.tetsudo.com/traffic/> にあるリンク先を設定するなどして使ったらいいかと思ってます。  
ここの値はなくてもかまわないので、その場合は空文字列''などを入れてください。
### `roomId`
通知先の slack のroomIdを設定します。  
roomIdについては、ブラウザでルームを開きURL末尾の messages/XXXXXXXXX/ となっている XXXXXXXXX の部分です。  


## 実行方法
環境変数に slack bot のAPIキーを登録してください  
キー名は `SLACK_TOKEN` にしてください  

実行は、このレポジトリのトップレベルで
`npm start`  
とコマンドを打ちます。実行時に遅延している路線があれば、 slack に通知が飛びます。  
実行を cron で設定し、例えば家を出る1時間前や会社を出る1時間に通知を飛ばすような使い方を想定しています。  
現在、nodeのバージョンは v8.2.1 で正常に動いていることを確認しています。

# Node.js, npmのインストールについて
こちらの記事が参考になります  
http://qiita.com/akippiko/items/3708016fc43da088021c
