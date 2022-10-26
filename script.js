function change() {
    const inf=document.getElementById('donate');
    const text=inf.value.trim();
    const donate_window=document.getElementById('thanks');
    const thanks_window=document.getElementById('thanks-img');

    if (text.match('^[0-9]+$')) {
        inf.classList.remove('red');
        donate_window.style.visibility='hidden';
        inf.value='';
        
        setTimeout(() => {  thanks_window.style.visibility='visible'; }, 300);
        setTimeout(() => {  thanks_window.style.visibility='hidden'; }, 2000);
        setTimeout(() => {  donate_window.style.visibility='visible'; }, 2300);
    }


    else inf.classList.add('red');

}
