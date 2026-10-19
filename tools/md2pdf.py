# -*- coding: utf-8 -*-
"""Markdown（見出し・表・箇条書き・太字）を A4 のPDFにする。Chrome のヘッドレス印刷を使う

使い方（代表LPフォルダで）:
    python tools/md2pdf.py 社長確認事項.md            → 社長確認事項.pdf
    python tools/md2pdf.py 社長確認事項.md 出力.pdf
"""
import io, re, html, subprocess, pathlib, sys, tempfile, shutil
sys.stdout.reconfigure(encoding='utf-8')
CHROME = r'C:\Users\vtj-t\AppData\Local\Google\Chrome\Application\chrome.exe'

def inline(t):
    t = html.escape(t)
    t = re.sub(r'`([^`]+)`', r'<code>\1</code>', t)
    return re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', t)

def cells(line):
    return [c.strip() for c in line.strip().strip('|').split('|')]

def md_to_html(src):
    lines = io.open(src, encoding='utf-8').read().splitlines()
    out, i = [], 0
    while i < len(lines):
        s = lines[i].strip()
        if s.startswith('|') and i + 1 < len(lines) and set(lines[i + 1].replace('|', '').strip()) <= set('-: '):
            head = cells(s); i += 2; body = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                body.append(cells(lines[i])); i += 1
            out.append('<table><thead><tr>%s</tr></thead><tbody>%s</tbody></table>' % (
                ''.join('<th>%s</th>' % inline(c) for c in head),
                ''.join('<tr>%s</tr>' % ''.join('<td>%s</td>' % inline(c) for c in r) for r in body)))
            continue
        if s.startswith('### '):   out.append('<h3>%s</h3>' % inline(s[4:]))
        elif s.startswith('## '):  out.append('<h2>%s</h2>' % inline(s[3:]))
        elif s.startswith('# '):   out.append('<h1>%s</h1>' % inline(s[2:]))
        elif s == '---':           out.append('<hr>')
        elif s.startswith('- '):
            items = []
            while i < len(lines) and lines[i].strip().startswith('- '):
                items.append('<li>%s</li>' % inline(lines[i].strip()[2:])); i += 1
            out.append('<ul>%s</ul>' % ''.join(items)); continue
        elif s:                    out.append('<p>%s</p>' % inline(s))
        i += 1
    return '\n'.join(out)

CSS = """
@page { size: A4; margin: 15mm 13mm 16mm; }
* { box-sizing: border-box; }
body { font-family: "Segoe UI", "Yu Gothic", "Meiryo", sans-serif; font-size: 9.5pt; line-height: 1.7; color: #1b1b1f; margin: 0; }
h1 { font-size: 17pt; margin: 0 0 6pt; color: #B3132B; border-bottom: 2.2pt solid #B3132B; padding-bottom: 6pt; }
h2 { font-size: 12.4pt; margin: 18pt 0 7pt; color: #B3132B; border-left: 4pt solid #B3132B; padding-left: 8pt; break-after: avoid; }
h3 { font-size: 10.6pt; margin: 13pt 0 5pt; break-after: avoid; }
p { margin: 5pt 0; } hr { border: 0; border-top: .6pt solid #ddd; margin: 13pt 0; }
ul { margin: 5pt 0; padding-left: 17pt; } li { margin: 2.5pt 0; }
code { font-family: Consolas, monospace; font-size: 8.6pt; background: #f4f4f6; padding: .5pt 3pt; border-radius: 2pt; }
table { width: 100%; border-collapse: collapse; margin: 6pt 0 4pt; }
th, td { border: .5pt solid #cfcfd4; padding: 4.5pt 6pt; text-align: left; vertical-align: top; word-break: break-word; }
th { background: #F7E9EC; font-weight: 600; font-size: 8.8pt; color: #7d1020; }
tr { break-inside: avoid; } tbody tr:nth-child(even) { background: #fafafa; }
td:first-child { white-space: nowrap; font-weight: 600; color: #B3132B; }
"""

if __name__ == '__main__':
    src = pathlib.Path(sys.argv[1]).resolve()
    out = pathlib.Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else src.with_suffix('.pdf')
    tmpd = pathlib.Path(tempfile.mkdtemp())
    page = tmpd / 'doc.html'
    io.open(page, 'w', encoding='utf-8').write('<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><title>%s</title><style>%s</style></head><body>%s</body></html>'
                                               % (html.escape(src.stem), CSS, md_to_html(src)))
    pdf = tmpd / 'doc.pdf'
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
                    '--user-data-dir=%s' % (tmpd / 'prof'), '--no-pdf-header-footer', '--virtual-time-budget=8000',
                    '--print-to-pdf=%s' % pdf, page.as_uri()], capture_output=True, timeout=240)
    shutil.copyfile(pdf, out)
    try:
        import fitz
        print('PDF:', out.name, fitz.open(out).page_count, 'ページ')
    except ImportError:
        print('PDF:', out.name)
    shutil.rmtree(tmpd, ignore_errors=True)
