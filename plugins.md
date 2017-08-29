# 插件列表

```bash
postcss-cssnext     //√ 支持最新 css 语法，如var() @apply等用法参见http://cssnext.io/
                    //（已包含autoprefixer模块）
postcss-import      //√ 支持 @import
postcss-nested      //√ 解包嵌套规则（如内层使用了@media,会正确解析）
postcss-nesting     //√ 支持规则嵌套 & 以及 @nest（支持解析 a,b{c,d{...规则}}类型的嵌套）
postcss-simple-vars //√ 简单定义 css 变量 $type: gray; $width: 100px; $prefix: vue-
postcss-functions   //√ 可自定义函数，参见colorPalette的使用
postcss-color-function        //√ 支持常用的颜色函数 lightness tint shade ...
postcss-at-rules-variables    //√ 定制属性 @['for', 'if', 'else', 'each', 'mixin', 'custom-media']
  postcss-custom-properties       // var支持(W3C规范，var()的使用是有限的属性值，无法用于媒体查询)
  postcss-each                    // @each
  postcss-for                     // @for
  postcss-conditionals            // @if @else
postcss-css-variables // var支持 @media, @support等
                      // postcss-custom-properties 的 var 变量声明限制在 :root
                      // postcss-css-variables 的 var 变量声明无限制
postcss-utilities   // 支持 @util
postcss-mixins      // 支持 @mixin 用法
postcss-extend      // 支持@extend 用法
postcss-position    //√ 指定定位的一行书写方式
postcss-size        //√ 支持 size，同时设置宽高
postcss-font-magician //√ 实现神奇的@font-face规则，更可控
stylelint             //√ 样式检测
postcss-write-svg     //√ 直接 css 中书写 svg
colorguard            //√ 颜色警卫，对颜色相似性做实时检测
lost                  //√ LostGrid css栅格布局系统 https://github.com/peterramsing/lost

postcss-color-short   // 缩写颜色代码 #23 => #232323
                      // rgba (0，0.5) => rgba (0，0，0，0.5)
postcss-inline-svg    // css中加载 svg，引用为data:image/svg+xml;charset=utf-8,格式
postcss-easing-gradients      // 创建平滑线性梯度近似缓解功能
postcss-will-change           // 通过添加backface-visibility属性，触发GPU处理器
postcss-discard-comments
postcss-media-minmax
postcss-transform-shortcut
postcss-alias     // 别名，支持自定义的简写属性
doiuse            // 属性支持检测
postcss-shape     // css绘制基本形状，rect、circle、triangle
postcss-circle    // 纯CSS来创建形状
postcss-triangle  |/
postcss-center    // 垂直或水平居中
postcss-clearfix  // 清除浮动
postcss-bem             // Bem Suit 命名风格
postcss-bem-linter      // 验证
postcss-pseudoelements  // 处理IE8伪类表示，仅支持一个冒号:，双冒号降级为单冒号
css-mqpacker      // 相同的媒体查询合并为一个
es-css-modules    // 输出 css modules
postcss-modules   // 使用 css modules（比es-css-modules使用者更多）
postcss-sprites   // 生成 icon 雪碧图
cq-prolyfill      // 内容的媒体查询
postcss-neat      // 一个语义化的流体网格系统
```

## 使用示例

```css

// postcss-simple-vars 简单定义 css 变量
$type: gray;
$width: 100px;
$prefix: vue-
$prefix { }
$(prefix)_button { }

// @each 循环
@each $icon in foo, bar, baz {
  .icon-$(icon) {
    background: url('icons/$(icon).png');
  }
}

// @for 循环
@for $i from 1 to 3 {
  .b-$i {
    width: $i px;
    @if $i == 2 {
      color: green;
    }
  }
}

// postcss-custom-properties 的 var 支持，被限定在 :root 中
:root {
  --color: red;
}

div {
  color: var(--color);
}


// postcss-css-variables 的 var 支持
.component {
  --text-color: blue;
}

.component .header {
  color: var(--text-color);
}

.component .text {
  --text-color: green;
  color: var(--text-color);
}

// @extend
%container {
  padding-left: 15px;
}
@media (--md-viewport) {
  %container {
    padding-left: 2em;
  }
}
.extendingClass {
  @extend %container;
}

// @util
.cfx {
    @util clearfix;
}

// post-nesting 混合嵌套以及 @nest 用法
a, b {
  color: red;

  // 解析为四种组合
  & c, & d {
    color: white;
  }
}

a {
  text-decoration: none;

  // 提升变为 h1 a 样式
  @nest h1 & {
    color: blue;

    &:not(:hover) {
      color: MediumVioletRed;
    }
  }
}

// postcss-nested 支持解析 @media
.phone {
  &_title {
    width: 500px;
    @media (max-width: 500px) {
      width: auto;
    }
    body.is_dark & {
      color: white;
    }
  }
  img {
    display: block;
  }
}

// 一行定位
.absolute {
  position: absolute 1rem 1rem 0 0;
}

// 同时设置宽高
.size_a {
  size: 1rem 2rem;
}
.size_b {
  size: 1rem;
}

// postcss-color-short 缩写颜色代码
// #23 => #232323
rgba (0，0.5) => rgba (0，0，0，0.5)

// postcss-write-svg
// input
@svg square {
  @rect {
    fill: black;
    width: 100%;
    height: 100%;
  }
}
.example {
  background: svg(square);
}

// output
.example {
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9ImJsYWNrIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+");
}

// cq-prolyfill 内容的媒体查询
// https://github.com/ausi/cq-prolyfill
// https://ausi.github.io/cq-prolyfill/demo/

.element:container(min-width: 100px) {
  // Styles for .element if its container is at least 100px wide
}
.element[data-cq~="min-width:100px"] {
  // Alternative syntax, same as the container query above
}
.element:container(text-align = right) {
  // Styles for .element if its container has a right text-align
}

```
