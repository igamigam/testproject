# albumproject

### OS
- Windows 10

### ローカル環境
- docker 20.10.16
- docker-compose 2.6.0
- git 2.36.1

### 作成する環境
- React 18.3.0
- Python 3.10.4
- Django 3.2.13
- MySQL 8.0.0
- nginx 1.21.6-alpine

### サービスの構築
```
$ docker-compose build -d
```

### コンテナの作成と立ち上げ
```
$ docker-compose up -d
```

### アプリのコンテナに接続
```
$ docker-compose exec app bash
```

### Djangoのプロジェクトの作成
```
$ docker-compose exec app django-admin.py startproject app .
```

### Reactのプロジェクトの作成
```
$ docker-compose run --rm web-front sh -c "npx create-react-app ."
```

### Reactの必要なモジュールのインストール
```
$ docker-compose run --rm web-front sh -c "yarn add next axios"
$ docker-compose run --rm web-front sh -c "yarn add --dev typescript @types/react"
```
