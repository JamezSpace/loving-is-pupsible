function close_nav_bar() {
    document.getElementById("navigation-bar").close()
}

function show_nav_bar() {
    document.getElementById("navigation-bar").showModal()
}

document.getElementById("open-nav-bar").addEventListener("click", () => {
    show_nav_bar()
})

document.getElementById("close-nav-bar").addEventListener("click", () => {
    close_nav_bar()
})