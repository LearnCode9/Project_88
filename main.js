var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    /*Uncomment the correct line*/
    canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
    //canvas.getEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Create an event listener for "mousemove"
    and call function my_mousemove
    */

    addEventListener("mousemove")
    function my_mousemove(e)
    {
        /*Uncomment the correct line*/
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        //current_position_of_mouse_x = e.clientX - canvas.offsetRight;
        //current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

        /*
        create current_position_of_mouse_y and
        assign it e.clientY - canvas.offsetTop;
        */
        if (mouseEvent == "mouseDown") {
        console.log("current_position_of_mouse_y = e.clientY - canvas.offsetTop");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    /*Create an event listener for "mouseup"
    and call function my_mouseup*/
addEventListener("mouseup")
/*Create a function named my_mouseup with
    event e as parameter.*/

    function my_mouseup(e)
{
    /*Assign "mouseUP" to mouseEvent
    within the function
    */
    mouseEvent = "mouseUP"
}
    /*Create an event listener for "mouseleave"
    and call function my_mouseleave*/
addEventListener("mouseleave")
    /*Create a function named my_mouseleave with
    event e as parameter.*/

     function my_mouseleave(e)
    
    /*Assign "mouseleave" to mouseEvent
    within the function
    */
mouseEvent = "mouseleave"
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
