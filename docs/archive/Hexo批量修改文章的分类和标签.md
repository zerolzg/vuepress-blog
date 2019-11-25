---
title: Hexo批量修改文章的分类和标签
date: 2018-08-11
sidebar: false
categories: 
  - 归档
---

>Hexo批量修改文章的分类和标签

<!-- more -->

hexo貌似没有提供批量修改标签或者分类的功能，这对于那些博客数量较多的人来说可能比较麻烦。不过对任何一个学过编程的人来说，解决起来也很简单，就是通过写脚本的方式来进行修改。现在流行的高级语言基本上都提供了完善的文件流操作方法，如果用那些编程语言来写的话第一就是有点大材小用了，第二就是可能还需要安装对应的运行环境，从某种程度上来说，呵呵，太麻烦了。

我的解决办法就是通过shell脚本来写，其实最核心的就是一个sed命令，如果用sed命令的话很容易就解决好，关于sed，它全名是stream editor，用程序的方式来编辑文本，基本上就是通过正则表达式来匹配进行替换删除之类的操作。至于sed命令的使用和介绍，可以参考 [sed简明教程](https://coolshell.cn/articles/9104.html)，使用hexo来编写md文档都有一个共同点，就是标签都是以`tags:`开头的，分类都是以`categories:`开头的等等，而且所有要提交的文档都放在了`source/_posts`目录下。

共同点找到，因此程序解决思路就很清晰了。通过遍历固定目录下的文件，对每一个文件进行关键字查找匹配，至此大功告成。程序只是将功能实现，至于那些shell风格之类的完全没考虑，也不知道应该是什么风格。只写了个批量更改标签的，其它功能应该类似。当然这个方法有个问题就是，如果正文中也出现类似格式的话，也将会被更改，粘贴代码如下：

```shell
#!/bin/sh
FILEPATH=/home/github/Hexo/source/_posts/

function replace()
{
    echo "input the tag you want change:"
    read str
    echo "input the new tag:"
    read replace_str

    for file in `ls $FILEPATH`;
    do
        if [ -f ${FILEPATH}${file} ]
        then
            pathname=${FILEPATH}${file}
            sed -i "/tags: /s/${str}/${replace_str}/g" ${pathname}
            continue
        fi
    done
}

while(true)
do
    echo "**************************"
    echo ***********MENU***********
    echo 1.修改标签名称
    echo 2.退出
    echo "input the number:"
    read num
    case $num in
        1) replace
        ;;
        2) exit 0
        ;;
        *) echo "the number you input is invalid!"
        ;;
    esac
done
```
