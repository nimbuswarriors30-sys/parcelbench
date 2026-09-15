const $=id=>document.getElementById(id);
$('calculate').addEventListener('click',()=>{
  const l=+$('length').value,w=+$('width').value,h=+$('height').value,a=+$('actual').value,d=+$('divisor').value;
  if(!(l>0&&w>0&&h>0&&a>0)){alert('Please enter valid positive measurements and actual weight.');return;}
  const v=l*w*h/d, c=Math.max(v,a);
  $('vol').textContent=v.toFixed(2)+' kg';
  $('act').textContent=a.toFixed(2)+' kg';
  $('charge').textContent=c.toFixed(2)+' kg';
});