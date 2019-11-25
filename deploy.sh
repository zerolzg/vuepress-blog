#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@git.dev.tencent.com:zerolu/blog.git master
git push -f git@github.com:zerolzg/vuepress-blog.git master:gh-pages

# 顺便源代码提交到git仓库
#cd ..
#git add -A
#git commit -m 'update'
#git push -f git@github.com:zerolzg/vuepress-blog.git master

# git push -f origin branch

cd -
