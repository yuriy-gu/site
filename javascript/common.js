/*window.onload = function (){
	var byId = document.getElementById('outer');
	console.log(byId);
};*/
//==============================================
/*var byId = document.getElementById('outer');
console.log(byId.childNodes);//выводит кол-во узлов
console.log(byId.childNodes[0].nodeType);//возврращает номер (TextNode - №3, ElementNode - №1)
console.log(byId.childNodes[1].nodeType);
console.log(byId.childNodes[2].nodeType);
console.log(byId.childNodes[1].firstChild.nodeValue);//выводит значение 1го spana - one
			byId.childNodes[3].firstChild.nodeValue = 'new value';
console.log(byId.childNodes[3].firstChild.nodeValue);//заменили значение two на new value
console.log(byId.childNodes[0].nextSibling);//переходим к следующему элементу
console.log(byId.childNodes[5].previousSibling);//переходим к предыдущему элементу*/
//==============================================
/*var byId = document.getElementById('outer');
var newP = document.createElement('p'); //created a new paragraf after span in <p>
var tn = document.createTextNode('my new p');//created a new text in p
newP.innerHTML = '<ul><li>my</li><li>inner</li><list</li></ul>';
newP.appendChild(tn);
byId.appendChild(newP);
var inner = byId.innerHTML;
console.log(typeof inner);
console.log(inner);*/
//==============================================
/*var obj = {
	number: 10,
	valueOf: function() {
		return this.number;
	},
	toString: function() {
		return 'Number is '+this.number;
	}
}
document.write(obj+1);//11
document.write(obj);//10*/
//==============================================
/*var a1 = {
  valueOf: function() {
    return '5';
  }
}
var a2 = {
  valueOf: function() {
    return '10';
  }
}
console.log(a1+a2);//сложило как строку 105
console.log(a1-a2);//вычло как числа -5
console.log(a1);//будет [object][object]*/
//==============================================

//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================