// display:none 与 visibility:hidden区别
 /**
  * 1:
  * display:none 是让元素在dom树中完全消失，渲染的时候不占据空间
  * visibility:hidden 是让元素在dom树中隐藏，渲染的时候占据空间只是不可见
  * 
  * 2:
  * display:none 的子孙节点消失是因为父元素在dom数中消失造成，不会继承该属性
  * visibility:hidden 子孙节点消失是继承了父元素的visibility:hidden属性
  * 
  * 3:
  * 修改常规流中元素的display会导致文档重排
  * 修改visibility属性会导致文档重绘
  */

// css标准盒子模型
 /**
  * css标准盒子模型分为两种，ie盒子模型与wsc盒子模型
  * 盒子模型从里到外分别是:content,padding,border,margin
  * ie盒子模型计算宽高的时候是content+padding+border
  * wsc盒子模型计算宽高的时候是content
  */

// css实现一个三角形
 /**
 * 将div的宽高都设成0，分别设置border中每一个的大小，最后除了留下的，其他的都设成透明
 * div{
 *  width:0;
 *  height:0;
 *  border-top:50px solid black;
 *  border-bottom:50px solid black transparent;
 *  border-left:50px solid black transparent;
 *  border-right:50px solid black transparent;
 * }
 */

// css水平居中的几种方式
/**
 * 1：行内元素居中 : text-align:center
 * 2: 块级元素居中 : margin 0px auto;
 * 3: 浮动元素居中 : 1 为元素设置宽度 2 为元素设置相对定位 3 浮动方向偏移量为50% 4 浮动方向上的margin设置为负的元素宽度一半
 * 4: 绝对定位元素居中 : 1 为元素设置宽度 2 偏移量设置50% 3 浮动方向上的margin设置为负的元素宽度一半
 * 5: flex布局，当主轴不变的情况下,父元素设置justify-content
 */

 // css垂直居中的几种方式
 /**
  * 1: 行内元素垂直居中:line-height=父元素height
  * 2: 通过position，margin，padding计算找
  * 3: flex布局，主轴不变，align-items:center
  * 4: verticle-align:middle display:inline-black
  * 5: 为元素设置display:inlne-black verticle-align:middle
  */

  // position值以及定位原点
  /**
   * relative,absolute,fixed,static,inherit,sticky
   * relative:生成相对定位的元素，根据在文档流原始位置定位，不会脱离文档流
   * absolute:生成绝对定位的元素，元素会被移出文档流，通过指定元素相对于最近的非static定位祖先元素的偏移，确定元素位置
   * fixed:生成相对于屏幕窗口定位的元素，通过指定窗口定位，固定在窗口，元素会被移出文档流
   * static: 元素正常的布局行为
   * inherit:规定从父元素继承position属性
   * sticky: 粘性定位，在跨越特定阈值前为相对定位，之后为固定定位
   */

   // 文档流
   /**
    * 文档流是让块级元素与内联元素在页面上显示的方式
    * 在文档流中，内联元素按照内联方式，一个接一个，就像文件写作模式下的句子方向
    * 块级元素则是从上到下一个接一个，就像段落方式
    */

   // 浮动与清除浮动
   /**
    * 浮动一开始是用于让文字环绕图片的，但是后来发现任何东西都可以使用浮动，会影响布局，就需要清除浮动
    * 在标准流中，父元素没有设置高度，但是子元素会撑起父元素
    * 若子元素设置了浮动，就不会撑起父元素
    * 清除浮动的方法
    * 1:谁浮动，在谁后面添加个空的div设置clear both
    * 2:给父元素这是overflowhidden，通过BFC的方式，实现清除浮动
    * 3:使用伪类，设置clear both
    * 4:给父元素设置高度
    * 5:父元素也一起浮动
    */

    // BFC 块格式化上下文
    /**
     * BFC就是一个容器，在容器内部有自己的一套渲染规则，不会影响到容器外的元素
     * 1:BFC就是父元素包裹子元素
     * 子元素产生浮动，bfc就是让子元素不跳出父元素的容器，不影响父元素以外的元素
     * 2: 兄弟元素不影响
     * 形成BFC，可以让兄弟元素直接不影响
     * 触发bfc的方法很多，比较好的是display:flow-root overflow auto,hidden等
     */