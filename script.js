let min = 1;
let max = 30;
let nums = [];
const reps = false;
$(document).ready(function () {
    $("#slots_a .wrapper").append("<div class='slot'>" + generateNumber(false, 1, 10, nums) + "</div>"); //Not to add whole 25 numbers
});

document.getElementById("generate").onclick = () => {
    if (document.getElementById("generate").getAttribute("data-usable") == "true") {
        min = parseInt(document.getElementById("min").value);
        max = parseInt(document.getElementById("max").value);

        min = isNaN(min) ? 1 : min;
        max = isNaN(max) ? 10 : max;

        addSlots($("#slots_a .wrapper"));
        moveSlots($("#slots_a .wrapper"));
        // $("#slots_a .wrapper").empty();
    }
}

function addSlots(jqo) {
    for (var i = 0; i < 20; i++) { // 20 is a maximum visible number with time 5500
        var ctr = generateNumber(reps, min, max, nums);
        jqo.append("<div class='slot'>" + ctr + "</div>");
    }
}

function moveSlots(jqo) {
    var time = 5000;
    // time += Math.round(Math.random() * 500);
    jqo.stop(true, true);
    var marginTop = parseInt(jqo.css("margin-top"), 10)
    marginTop -= (20 * 100)
    jqo.animate({
        "margin-top": marginTop + "px"
    }, {
        'duration': time,
        'easing': "swing",
        //Disables button during animation
        'start': () => { document.getElementById("generate").setAttribute("data-usable", "false") },
        //Deletes unnecessary divs
        'done': () => {
            $("#slots_a .wrapper").children().slice(0, -1).remove();
            jqo.css("margin-top", "10");
            document.getElementById("generate").setAttribute("data-usable", "true");
        },
    });
}
function generateNumber(no_reps, min, max, nums) {
    if (no_reps) {
        let temp = parseInt((Math.random() * (max - min + 1)), 10) + min;
        if (!nums.includes(temp)) {
            nums.push(temp);
            return parseInt(temp);
        }
        else if (nums.length == max - min + 1) {
            return null;
        }
        else {
            while (nums.includes(temp)) {
                if (temp != max)
                    temp++;
                else
                    temp = min;
            }
            nums.push(temp);
            return parseInt(temp);
        }
    }
    return parseInt((Math.random() * (max - min + 1)), 10) + min;
}