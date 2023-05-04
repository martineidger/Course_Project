const requestURL = "pages.xml"; 

function Open(){
const xhr = new XMLHttpRequest(); 
 
xhr.open('GET',requestURL , false); 
xhr.send(); 
 
let xmlData = xhr; 
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml"); 

let hashA = window.location.hash.substring(1);
let korners = xmlData.getElementById(hashA); 

document.getElementById('name').textContent=korners.getElementsByTagName('name')[0].textContent;
let picture1 = document.querySelectorAll('[class^="logotype"]');
let newImage1 = korners.getElementsByTagName('logo')[0].textContent;
picture1[0].src = newImage1;
document.getElementById('p1').textContent=korners.getElementsByTagName('p1')[0].textContent;
document.getElementById('p2').textContent=korners.getElementsByTagName('p2')[0].textContent;
document.getElementById('link').href=korners.getElementsByTagName('link')[0].textContent;
document.getElementById('inst').textContent=korners.getElementsByTagName('inst')[0].textContent;
let picture2 = document.querySelectorAll('[class^="pic"]');
let newImage2 = korners.getElementsByTagName('pic')[0].textContent;
picture2[0].src = newImage2;

console.log(xmlData);
}
window.addEventListener('hashchange', Open);

Open();