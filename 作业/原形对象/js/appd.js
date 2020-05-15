/**
 * 
 * @param {HTMLElment} parent 父元素 
 * @param {String} eleName 待添加标签的名字 
 * @param {String} value 标签中的内容 
 * @param {Object} attr 这个子标签的属性对象 
 */
let _append = (parent, eleName, value = "", attr) => {
    //如果父元素输入的实参是String类型
    if (Object.prototype.toString.call(parent) === "[object String]") {
      parent = document.getElementById(parent)
    }
    //1 生产一个li标签
    let newEle = document.createElement(eleName)
    for (let key in attr) {
      newEle.setAttribute(key, attr[key])
    }
    //2. 生产一个文本节点
    // let newTxt = document.createTextNode(value);
    newEle.innerHTML = value
    //3. 拼接
    parent.appendChild(newEle)
    // newEle.appendChild(newTxt)
    return newEle
  }