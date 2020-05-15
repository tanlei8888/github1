/**使用json创建表格
 * @param{Sting}table 传入id
 * @param{Array}data,json数据
 * 
 */
//创建表格
 let oneTable = (tableId,data) => {
     debugger
     //获取到父元素 ul
    let eTable = document.querySelector(`#${tableId}`);
    heradTable(eTable);
    //遍历json,把每个对象属性element传给rowTable 也就是"li"
    data.forEach(element => {
        //element当前元素的自身
        rowTable(eTable,element)
    });
}
/**
 * @param {element} parent 给表头提供一个父元素,也就是table
 */
//创建表头  
 let heradTable = (parent) => {
   parent.innerHTML = `
   <li class="table-row table_title">
        <div><input type="checkbox" id="allSelect"></div>
        <div>姓名</div>
        <div>工资</div>
        <div>年龄</div>
        <div>操作</div>
    </li>`
 }
 /**
  * @param {string} parent 提供一个父元素 也就是table
  * @param {Array} data json每条数据驱动表格行 elment
  */
//创建表格行
 let rowTable = (parent,data) => {
   //得到接受appendEle的返回值 新li 并
    let newLi = appendEle(parent,"li","",{"class":"table-row"})
    cellTable(newLi,data)
    
 }

 /**
  * 
  * @param {String} parent 提供一个父元素也就是 newli
  * @param {jsonobj} obj   从ul传下来的json对象 data
  */
 //创建表格单元格
let cellTable = (parent,obj) => {
    //得到接受appenEle的返回值 新div 并添加给父元素parent"li"
    let inputDiv = appendEle(parent,"div");
    //把新div当做父元素添加一个按钮
    appendEle(inputDiv,"input","",{"type":"checkbox"})
    //遍历每一个json对象的属性,赋予给appenEle新增的单元格并添加给父元素parent"li"
    for (let key in obj) {
      appendEle(parent,"div",obj[key]);
    }
    //得到接受appenEle的返回值 新div1并添加给父元素""li"
    let inputDiv1 = appendEle(parent,"div");
    //把新div当做父元素添加两个按钮 一行最后的两个按钮
    appendEle(inputDiv1,"input","",{"type":"button","value":"修改 "});
    appendEle(inputDiv1,"input","",{"type":"button","value":"删除"})
 }
/**
 * 
 * @param {String} parent 父元素
 * @param {element} element 生成的标签
 * @param {*} value 
 * @param {object} obj 对象
 */
 //用于创建新元素的封装函数
 let appendEle = (parent,element,value = "",obj) => {
     let newEle = document.createElement(element);
     let eleTxt = document.createTextNode(value);
     //遍历传入实参obj的每一条属性,再通过setAttribute添加给新增的元素
     //key代表属性名,obj[key]代表的是key的属性值
      //setAttribute(属性名.属性值)
     for (let key in obj) {
      newEle.setAttribute(key,obj[key]);
     }
     newEle.appendChild(eleTxt);
     parent.appendChild(newEle);
     return newEle
 }
 //删除文本
 let deleteA = () =>{
   
 }