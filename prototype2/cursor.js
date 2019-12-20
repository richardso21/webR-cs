window.onload = function() {
    cursorfunction();
};
function cursorfunction() {
    let cursor = document.querySelector("#cursor");

    // console.log(cursor)

    document.addEventListener('mousemove', e => {
        
        cursor.setAttribute("style", "top: " + (e.pageY - 10)+"px; left: "+ (e.pageX - 10)+"px;")
    })

}
