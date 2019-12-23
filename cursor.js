window.onload = function() {
    cursorfunction();
};
function cursorfunction() {
    let cursor = document.querySelector("#cursor");

    // console.log(cursor)

    document.addEventListener('mousemove', e => {
        
        cursor.setAttribute("style", "top: " + (e.clientY - 10)+"px; left: "+ (e.clientX - 10)+"px;")
    })

}
