function  trimBlank(obj) {
  return obj.replace(/\s/g,'');
}
function  catchErrTip(err) {
  var arr=[];
  for(var name in err){
    arr.push(err[name])
  }
  return arr.join(',');
}




export default {trimBlank,catchErrTip}
