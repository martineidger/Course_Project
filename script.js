const btn = document.querySelector('.btn');
btn.addEventListener('click', reset);
function reset()
{
    document.getElementById("myForm-n").value = "";
    document.getElementById("myForm-t").value = "";
    document.getElementById("myForm-e").value = "";
    document.getElementById("myForm-m").value = "";
}
