document.getElementById('btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light');
        document.getElementById("btnSwitch").classList.add("btn-dark");
        document.getElementById("btnSwitch").classList.remove("btn-light");
        document.getElementById("btnSwitch").innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark');
        document.getElementById("btnSwitch").classList.add("btn-light");
        document.getElementById("btnSwitch").classList.remove("btn-dark");
        document.getElementById("btnSwitch").innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
})