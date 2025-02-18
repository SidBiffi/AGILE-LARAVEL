export function $niceField(field){
  var string = '-';
  if(field){
    string = field;
  }
  return string;
}
export function $niceBoolean(field){
  var string = 'No';
  if(field){
    string = 'Sì';
  }
  return string;
}
export function $niceDate(field){
  var string = '-';
  if(field){
    var date_obj = new Date(field);
    string = ('0' + date_obj.getDate()).slice(-2) + '.' + ('0' + (date_obj.getMonth()+1)).slice(-2) + '.' + date_obj.getFullYear();
  }
  return string;
}
export function $niceInputDate(field){
  var string = '-';
  if(field){
    var date_obj = new Date(field);
    string = date_obj.getFullYear() + '-' + ('0' + (date_obj.getMonth()+1)).slice(-2) + '-' + ('0' + date_obj.getDate()).slice(-2);
  }
  return string;
}
export function $niceDateTime(field){
  var string = '-';
  if(field){
    var date_obj = new Date(field);
    string = ('0' + date_obj.getDate()).slice(-2) + '.' + ('0' + (date_obj.getMonth()+1)).slice(-2) + '.' + date_obj.getFullYear() + ' ' + ('0' + (date_obj.getHours())).slice(-2) + ':' + ('0' + (date_obj.getMinutes())).slice(-2);
  }
  return string;
}
export function $niceTime(field){
  var string = '-';
  if(field){
    var date_obj = new Date(field);
    string = ('0' + (date_obj.getHours())).slice(-2) + ':' + ('0' + (date_obj.getMinutes())).slice(-2);
  }
  return string;
}
export function $niceNumber(field){
  if(field===null || field===undefined){
    field = 0;
  }
  var string = '-';
  string = parseFloat(field).toLocaleString('it-IT', {minimumFractionDigits: 0, maximumFractionDigits: 2});
  return string;
}
export function $niceObjField(obj, key){
  var string = '-';
  if(obj && key && obj[key]){
    string = obj[key];
  }
  return string;
}
export function $niceFullName(obj){
  var string = '-';
  if(obj && obj.first_name && obj.last_name){
    string = obj.first_name+' '+obj.last_name;
  }
  return string;
}
export function $toggleObjKeyVale(obj, key){
  obj[key] = !obj[key];
}
