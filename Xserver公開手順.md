# エックスサーバーへ公開する手順（GitHub → SSH/rsync 自動転送）

GitHub の `main` に push すると、GitHub Actions がエックスサーバーへ SSH でつなぎ、
`rsync` で差分だけを転送します。**設定は 1 回だけ**。あとは今までどおり更新するだけで公開されます。

作業するのはこの 2 か所です。

1. エックスサーバーのサーバーパネル（SSH を使えるようにする）
2. GitHub のリポジトリ設定（接続情報を Secrets に登録する）

---

## 0. 先に確認すること

| 項目 | 確認 |
|---|---|
| 公開したいドメイン | エックスサーバーの「ドメイン設定」に追加済みであること |
| 公開先フォルダ | `/home/サーバーID/ドメイン名/public_html` |
| そのフォルダの中身 | **すでに別のサイトが入っていないか**（入っている場合は上書きされます） |
| サーバーID | サーバーパネルの右上に表示されている英数字（例：`xsample`） |

---

## 1. エックスサーバーで SSH を有効にする

サーバーパネル → **「SSH設定」** → 「ON」にして設定する。

- 接続ポートは **10022**（エックスサーバー共通）
- 認証は **公開鍵認証のみ**。パスワードでは入れません

## 2. 公開鍵を登録する

デプロイ専用の鍵ペアはこの PC に作成済みです。

- 秘密鍵：`C:\Users\vtj-t\.ssh\xserver_deploy` … **GitHub に登録する側。他人に渡さない**
- 公開鍵：`C:\Users\vtj-t\.ssh\xserver_deploy.pub` … **エックスサーバーに登録する側**

サーバーパネル → 「SSH設定」 → **「公開鍵登録・設定」** タブを開き、次の 1 行をそのまま貼り付けて登録します。

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFUDAO1XJNxik7hfdwC9BF07gGN9rsCxXbBAWJFXHyUN github-actions-deploy-lp
```

> サーバーパネル側で鍵を自動生成する方法もありますが、その場合は秘密鍵をダウンロードして
> GitHub に登録し直す必要があります。上の「自分で作った鍵を登録」のほうが手間がありません。

## 3. つながるか試す（この PC から）

Git Bash で次を実行します。`サーバーID` は自分のものに置き換えてください。

```bash
ssh -i ~/.ssh/xserver_deploy -p 10022 サーバーID@サーバーID.xsrv.jp
```

初回は `Are you sure you want to continue connecting?` と聞かれるので `yes`。
ログインできたら、公開先フォルダを確認して `exit` で抜けます。

```bash
ls -d /home/サーバーID/*/public_html
```

## 4. GitHub に接続情報を登録する

[リポジトリの Secrets 設定ページ](https://github.com/vtj-tokuoka-cmyk/lp-8tkvwrsm1z/settings/secrets/actions) を開き、
**New repository secret** で次を登録します。

| 名前 | 値の例 | 中身 |
|---|---|---|
| `XSERVER_HOST` | `xsample.xsrv.jp` | サーバーID.xsrv.jp（または sv****.xserver.jp） |
| `XSERVER_USER` | `xsample` | サーバーID |
| `XSERVER_PATH` | `/home/xsample/example.com/public_html` | 手順3で確認した公開先 |
| `XSERVER_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----` から最終行まで | 秘密鍵ファイルの中身を全部 |
| `XSERVER_PORT` | `10022` | 省略可（既定で 10022） |

秘密鍵の中身をクリップボードにコピーするコマンド（Git Bash）：

```bash
cat ~/.ssh/xserver_deploy | clip
```

> Secrets は公開リポジトリでも他人から見えません。ただし**秘密鍵ファイル自体は絶対にコミットしない**でください（`.gitignore` で除外済み）。

## 5. お試し転送 → 本番転送

1. GitHub の **Actions** タブ → 左の **Deploy to Xserver** → **Run workflow**
2. 「お試し」に **チェックを入れたまま** 実行 → 転送されるファイル一覧だけが表示されます
3. 一覧に問題がなければ、もう一度 **Run workflow**。今度は「お試し」の**チェックを外して**実行
4. ブラウザでドメインを開いて表示を確認

これ以降は、`main` に push するたびに自動で転送されます。

---

## 覚えておくこと

**サーバー側の古いファイルは消えません。** 通常の転送は上書き・追加だけです。
ファイル名を変えた・ページを削除したときに古いものを消したい場合は、
手動実行で「サーバー側の余分なファイルを削除する」にチェックを入れてください。
`XSERVER_PATH` の中の、リポジトリに無いファイルがすべて消えます。実行前に転送先を必ず確認してください。

**転送しないファイル**は `.deployignore` に書いてあります（README、社長確認事項、フォーム受信.gs など）。

**検索避けは維持されます。** `robots.txt` と各ページの `noindex` はそのまま転送されるので、
独自ドメインでも検索結果には出ません。検索に載せたくなったら、
`robots.txt` と各 HTML の `<meta name="robots">` を外してください。

**GitHub Pages はそのまま残ります。** 今までの URL も引き続き見られます。不要になったら
リポジトリの Settings → Pages で停止できます。

**お問い合わせフォーム**は、独自ドメインで公開するなら Apps Script の受信設定（`FORM_ENDPOINT`）を
先に済ませておくとメールソフト任せにならず確実です。詳細は README を参照。

---

## うまくいかないとき

| 症状 | 見るところ |
|---|---|
| `Permission denied (publickey)` | 公開鍵の登録内容、`XSERVER_USER` がサーバーIDか、SSH設定が ON か |
| `Connection refused` / タイムアウト | ポートが 10022 か、`XSERVER_HOST` のつづり |
| `XSERVER_PATH に public_html が含まれていません` | 転送先の指定ミス。事故防止で止めています |
| Actions が「スキップしました」で終わる | Secrets が 1 つ以上未登録。実行ログに未設定の名前が出ます |
| 転送は成功するがページが変わらない | ブラウザのキャッシュ。Ctrl+F5 で再読込 |

## PC から直接送りたいとき（予備手段）

この PC には rsync が入っていないため、`scp` を使います。

```bash
cd "C:/Users/vtj-t/Desktop/Claude勉強/代表LP"
scp -i ~/.ssh/xserver_deploy -P 10022 -r ./*.html ./*.js ./style.css ./robots.txt ./img サーバーID@サーバーID.xsrv.jp:/home/サーバーID/ドメイン名/public_html/
```
