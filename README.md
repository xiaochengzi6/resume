## 简历制作

![基本页面布局](%E5%9F%BA%E6%9C%AC%E9%A1%B5%E9%9D%A2%E5%B8%83%E5%B1%80.png)

使用 create-react-app 来搭建页面后面在考虑使用我自己的脚手架。页面可以分为三个部分

`HeaderCommander` : 负责页面路由

` navDownload `  ：负责导航栏 ( 导出PDF 历史记录 上传 选择主题 文件) 这几个功能

`Main`：主要页面 负责显示左展示页面 右编辑页面
  `LeftView`: 展示页面
      `leftViewButton`: 展示页面的摁钮组件（同步 可视化 未知 一页纸 更换字体 ）这几个功能
          `SynScroll`: 同步组件 （这里的导出名有问题）
          `ViewCodeMore`: 可视化功能组件 
          ---这里出现的问题是 （未知 一页纸 更换字体）这几个功能没有抽离出来
      然后在这里就开始将 md --> html 文件展示出来 感觉需要抽离出来做一个单独的页面后面好添加更多的模板样式
  `RightWrith`：编辑页面 在这里就直接使用了code来编辑



可视化组件：
先找到目标 可视化 区域位置然后开始开始绑定事件 `mouseover` 和 `mouseleave` 分别对这两种事件进行处理，获得目标 dom 的 `clientWidth\height` 和 `offsetLeft\right` 然后将 前者设置为盒子的宽度和高度 将后者设置为盒子 `screenY\X` 值就能获得一个动态的显示效果

同步滚动：
获得在右侧的页面滚动然后保存在 redux 中 之后再右侧盒子区域通过 ref 获得 dom 元素然后在设置为 右侧滚动左侧也滚动

`height: 左侧盒子的高度` 

`top: 左侧盒子距离顶部的距离`

转换公式：
> `leftBox.scrollTop = top * (leftBoxHeight + 150) / height `
> 为什么要 +150 因为我的视图距离顶部有 150px 的像素

两者高度的比值和距离顶部的值之积就是左侧盒子要的距离顶部的高度

`top1/leftHeight = top2/rightHeight` 

求解 `top1` = `top2*leftHeight/rightHeight`

![基本页面布局](www.png)


