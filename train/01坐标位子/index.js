// 原理是鼠标的位子减去元素距离左上的位子
let C = {};
// 鼠标在元素上的坐标
C.getOffset = function (el) {
 let mouse = {x: 0, y: 0}
 el.addEventListener('mousemove', (e) => {
  //  console.log(e)
   let {x, y} = C.eventWrapper(e)
   mouse.x = x 
   mouse.y = y
   mouse.e = e
  //  console.log(111)
 })
 
 return mouse
}
C.eventWrapper = (ev) => {
  let {pageX, pageY, target} = ev;
  let {left, top} = target.getBoundingClientRect()
  return {x: pageX - left, y: pageY - top}
}

// 角度转弧度
C.toRad = (angle) => {
  return angle * Math.PI / 180
}

// 弧度转角度
C.toAngle = (rad) => {
  return rad * 180 / Math.PI
}