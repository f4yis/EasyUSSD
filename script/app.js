
try {
  var b = localStorage.getItem("opera");
  if (b!=null){
    document.getElementById('operator').value = b;

  }

} catch (e) {

} finally {

}
function setsel(){
  try {
    var sel = document.getElementById('operator').value;
    localStorage.setItem("opera", sel);
  } catch (e) {

  } finally {

  }
}


var text = '{"operators":[' +
'{"Balance":"*111*2#","Data":"*111*6*2#","help":"198","dnd":"1909","Customer":"111"},' +
'{"Balance":"*121#","Data":"*125#","help":"198","dnd":"1909","Customer":"12345"},' +
'{"Balance":"*123#","Data":"*123*11#","help":"198","dnd":"1909","Customer":"198"},' +
'{"Balance":"*123#","Data":"*124*2#","help":"198","dnd":"1909","Customer":"123"},' +
'{"Balance":"*222*2#","Data":"*111*1#","help":"198","dnd":"1909","Customer":"121"},' +
'{"Balance":"*111#","Data":"*111*1#","help":"198","dnd":"1909","Customer":"121"},' +
'{"Balance":"*125#","Data":"*125#","help":"198","dnd":"1909","Customer":"121"},' +
'{"Balance":"*222#","Data":"*111*1*3#","help":"198","dnd":"1909","Customer":"198"},' +
'{"Balance":"*123*1#","Data":"*111*2#","help":"198","dnd":"1909","Customer":"121"}]}';




function chkbal(a){
  if(a==0){
    alert("Please select an operator !");
  }else{
    obj = JSON.parse(text);
    var number = obj.operators[a-1].Balance;
    var call = new MozActivity({
      name : 'dial',
      data: {
        number : number
      }
    });
  }

}

function data(a){
  if(a==0){
    alert("Please select an operator !");
  }else{
    obj = JSON.parse(text);
    var number = obj.operators[a-1].Data;
    var call = new MozActivity({
      name : 'dial',
      data: {
        number : number
      }
    });
  }

}
function help(a){
  if(a==0){
    alert("Please select an operator !");
  }else{
    obj = JSON.parse(text);
    var number = obj.operators[a-1].help;
    var call = new MozActivity({
      name : 'dial',
      data: {
        number : number
      }
    });
  }

}
function dnd(a){
  if(a==0){
    alert("Please select an operator !");
  }else{
    obj = JSON.parse(text);

    var number = obj.operators[a-1].dnd;

    var call = new MozActivity({
      name : 'dial',
      data: {
        number : number
      }
    });
  }

}
function customer(a){
  if(a==0){
    alert("Please select an operator !");
  }else{
    obj = JSON.parse(text);
    var number = obj.operators[a-1].Customer;
    var call = new MozActivity({
      name : 'dial',
      data: {
        number : number
      }
    });
  }

}
