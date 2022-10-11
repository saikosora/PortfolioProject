var postset = 1;
function postFunction() {
    var topic = document.getElementById("topic1");
    var commentone = document.getElementById("comment1");
    var commenttwo = document.getElementById("comment2");
    var text = document.getElementById("text1").value

    if (postset == 1) {
        topic.innerHTML = text;
        postset++;
    }

    else if (postset == 2) {
        commentone.innerHTML = text;
        postset++;
    }

    else if (postset == 3) {
        commenttwo.innerHTML = text;
        postset++;
    }
}

function clearFunction() {
    var topic = document.getElementById("topic1");
    var commentone = document.getElementById("comment1");
    var commenttwo = document.getElementById("comment2");
    var text = document.getElementById("text1");
    topic.innerHTML = null;
    commentone.innerHTML = null;
    commenttwo.innerHTML = null;
    text.value = null;
    postset = 1;
}