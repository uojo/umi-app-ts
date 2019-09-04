const fs = require('fs');

const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8');
const commitPattern = /^(feat|fix|docs|style|refactor|chore)(\(\S+\))?:\s(.+)(?:\n|$)/;
const mergePattern = /^Merge branch/;

if (!commitPattern.test(commitMsg) && !mergePattern.test(commitMsg)) {
  console.error('\x1b[91m', ` 💅  ERROR: wrong git commit message > ${  commitMsg}`);
  console.error('\x1b[91m', ' 👉  How to Write a Git Commit Message ? <https://wiki.dxy.net/pages/viewpage.action?pageId=158084389>');
  console.error('\x1b[91m', ' 👉  Please see under example: ');
  console.error('\x1b[91m', ' eg. feat(pages): 新增用户管理页面');
  console.error('\x1b[91m', ' eg. chore(config): 修改 eslint 配置');
  process.exit(1);
}

process.exit(0);
