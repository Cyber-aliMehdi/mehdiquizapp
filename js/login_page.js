function getUsername(event) {
    event.preventDefault(); 

    username = document.getElementById("username").value;

    if (username === "") {
        alert("Enter your Name");
        return;
    }
    if (/\d/.test(username)) {
        alert("Think about it... does your name have numbers??");
        return;
    }
    const dropdown = document.getElementById("dropdown").value;
    switch(dropdown){
        case 's1':
            alert("Come on Select a subject");
            break;
            case 's2':
                window.location.href = `quizApp.html?name=${encodeURIComponent(username)}`;
                break;
            case 's3':
                window.location.href = `Cs.html?name=${encodeURIComponent(username)}`;
                break;
            case 's4':
                window.location.href = `Physics.html?name=${encodeURIComponent(username)}`;
                break;
             case 's5':
                window.location.href = `Chemistry.html?name=${encodeURIComponent(username)}`;
                break;
            case 's6':
                window.location.href = `bio.html?name=${encodeURIComponent(username)}`;
                break;
            case 's7':
                window.location.href = `math.html?name=${encodeURIComponent(username)}`;
                break;
        }
}