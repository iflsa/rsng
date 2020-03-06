let min = 1;
let max = 30;
let excluded_nums = [];
let no_reps = true;
let time = 5000;
let secret_mode = true;
$(document).ready(function () {
    $("#slots_a .wrapper").append("<div class='slot'>" + generateNumber(1, 10) + "</div>"); //Not to add whole 25 numbers
});

document.getElementById("refresh").onclick = () => {
    excluded_nums = [];
}

//No repeat
document.getElementById("switch1").onclick = () => {
    no_reps = !no_reps;
}

//No animation
document.getElementById("switch2").onclick = () => {
    time = time === 5000 ? 0 : 5000;
}

document.getElementById("generate").onclick = () => {
    if (document.getElementById("generate").getAttribute("data-usable") == "true") {
        let first_num = parseInt(document.getElementById("min").value);
        let second_num = parseInt(document.getElementById("max").value)
        min = Math.min(first_num, second_num);
        max = Math.max(first_num, second_num);

        min = isNaN(min) ? 1 : min;
        max = isNaN(max) ? 10 : max;


        addSlots($("#slots_a .wrapper"));
        moveSlots($("#slots_a .wrapper"));
    }
}

function addSlots(jqo) {
    for (var i = 0; i < 20; i++) { // 20 is a maximum visible number with time 5500
        var ctr = generateNumber(min, max);
        jqo.append("<div class='slot'>" + ctr + "</div>");
        if (no_reps) {
            if (i === 19) {
                excluded_nums.push(ctr);
            }
        }
    }
}

function moveSlots(jqo) {
    jqo.stop(true, true);
    var marginTop = parseInt(jqo.css("margin-top"), 10);
    marginTop -= (20 * 100);
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

function generateNumber(min, max) {
    let nums = [];
    for (let i = min; i < max + 1; i++) {
        if (!excluded_nums.includes(i)) {
            nums.push(i);
        }
    }
    if (nums.length === 0) {
        nums.push("Nothing");
    }
    let temp = nums[Math.floor(Math.random() * nums.length)];
    return temp;
}
