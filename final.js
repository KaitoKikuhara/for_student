console.log("hello");
function draw(){
 var kokeshi = document.getElementById('canvas');
  if(kokeshi.getContext){
    var ctx = kokeshi.getContext('2d');
     ctx.beginPath();
     ctx.fillRect(80,110,10,10)
     ctx.fillRect(110,110,10,10)
     ctx.fillRect(30,90,30,50)
     ctx.fillRect(140,90,30,50)
     ctx.arc(100,90,70,0,Math.PI,true)
     ctx.fill();
     ctx.beginPath();
     ctx.arc(100,90,70,0,Math.PI*2,false)
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(90,140)
     ctx.lineTo(110,140)
     ctx.stroke();
    }
 }

function getSum(){
 var yea =parseInt(document.getElementById('num1').value);
 var mont=parseInt(document.getElementById('num2').value);
 var da  =parseInt(document.getElementById('num3').value);
console.log(yea)
console.log(mont)
console.log(da)
//文字列にしてから分割
 var array1 = String(yea).split('')
 var array2 = String(mont).split('')
 var array3 = String(da).split('')

//連結
 var arra = array1.concat(array2);
 var array= arra.concat(array3);
array=array.map(
  function (element) {
     return Number(element);
   }
 );

console.log(array)
//全部足す
var total = 0;
if (Object.prototype.toString.call(array) !== '[object Array]') return;
for (i = 0, len = array.length; i < len; i++){
  total += array[i]
};
console.log(total);
//ゾロ目→終了 ゾロ目じゃなかったらもう一回足す
   if (total%11 == 0 && total <= 44){
     alert("あなたの運命数はゾロ目です！ \n 11 オレンジ 強運の持ち主 \n 22 緑 リーダー性 \n 33 青 カリスマ性 \n 44 ブラウン かなり珍しいですよ");
   }else{
     //もう１回文字列にして分解して足す
    next10 = parseInt(total/10);
    next1 = parseInt(total-next10*10);
    sum2 = next10+next1;
    alert("あなたの運命数は" + sum2 +"です!");
   }
}
//診断結果はこちらボタン→押す→一覧表を画像で表示する
function member(){
  var x ="";
  x = x+"診断結果"+"</br>"+"<img src='Dresult.jpg'>"+"</br>";
  document.getElementById('list').innerHTML=x;
}
