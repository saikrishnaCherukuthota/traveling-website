function spinner() {
    let l = 0;
    let intervel = setInterval(() => {
        if (l === 5) {
            document.getElementById("opening").classList.add("d-none");
            clearInterval(intervel);
        }
        l = l + 1;
    }, 500);
}
spinner();