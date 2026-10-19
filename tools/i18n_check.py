# -*- coding: utf-8 -*-
"""中国語・フランス語・韓国語の辞書（i18n-extra.js）に入っていない英語の文言を一覧する

使い方（代表LPフォルダで）:
    python tools/i18n_check.py

data.js / app.js の英語(en)を書き換えたり追加したりすると、その文言は中・仏・韓で英語のまま出ます。
ここに出た文言を翻訳して i18n-extra.js に足してください（キーは英語の文言そのもの）。
"""
import io, re, sys, json, os
sys.stdout.reconfigure(encoding='utf-8')
BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

STR = re.compile(r'"(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'|`(?:[^`\\]|\\.)*`', re.S)

def js_str(tok):
    q, body = tok[0], tok[1:-1]
    if q == '"':
        return json.loads('"' + body + '"')
    body = body.replace("\\'", "'") if q == "'" else body.replace('\\`', '`')
    body = body.replace('\\"', '"').replace('"', '\\"').replace('\n', '\\n').replace('\r', '').replace('\t', '\\t')
    return json.loads('"' + body + '"')

def english_strings():
    seen, order = set(), []
    for f in ['data.js', 'app.js']:
        s = io.open(os.path.join(BASE, f), encoding='utf-8').read()
        s = re.sub(r'/\*.*?\*/', '', s, flags=re.S)
        for m in re.finditer(r'\ben:\s*', s):
            p = m.end()
            toks = []
            if s[p] == '[':
                p += 1
                while True:
                    while s[p] in ' \t\r\n,':
                        p += 1
                    t = STR.match(s, p) if s[p] != ']' else None
                    if not t:
                        break
                    toks.append(t.group(0)); p = t.end()
            else:
                t = STR.match(s, p)
                if t:
                    toks.append(t.group(0))
            for t in toks:
                x = js_str(t)
                if x.strip() and x not in seen:
                    seen.add(x); order.append(x)
    return order

def dictionary():
    s = io.open(os.path.join(BASE, 'i18n-extra.js'), encoding='utf-8').read()
    return json.loads(s[s.index('{', s.index('I18N_EXTRA')):s.rindex('}') + 1])

if __name__ == '__main__':
    en, d = english_strings(), dictionary()
    todo = [x for x in en if x not in d]
    print('英語の文言 %d 件 ／ 辞書 %d 件 ／ 未翻訳 %d 件' % (len(en), len(d), len(todo)))
    for x in todo:
        print(' -', ' '.join(x.split())[:120])
