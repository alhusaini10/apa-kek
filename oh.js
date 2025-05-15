function sendMessage() {
    const inputField = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const userMessage = inputField.value.trim();

    if (userMessage === "") return;

    appendMessage("user", userMessage);
    inputField.value = "";

    showTypingIndicator();

    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        removeTypingIndicator();
        appendMessage("AI", botResponse);
    }, 1000 + Math.random() * 500); // Random delay
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById("chatBox");
    const msg = document.createElement("div");
    msg.className = `message ${sender}`;
    msg.textContent = message;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    const chatBox = document.getElementById("chatBox");
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.id = "typingIndicator";
    typing.textContent = "sedang mengetik...";
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    const typing = document.getElementById("typingIndicator");
    if (typing) typing.remove();
}

function getBotResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes("hai") || msg.includes("halo")) {
        return "Hai! Ada yang bisa saya bantu?";
    } else if (msg.includes("siapa kamu")) {
        return "Saya adalah Robochat yang dirancang  untuk membantu kamu 😄";
    } else if (msg.includes("apa kabar")) {
        return "Saya tidak bisa merasakan sakit atau sehat! Bagaimana kabarmu?";
    } else if (msg.includes("bantuin dong")) {
        return "Kamu bisa bertanya tentang apa saja. Coba saja!";
    } else if (msg.includes("aku baik")) {
        return "Wah itu kabar yang sangat bagus, bagai mana hari mu?";
    } else if (msg.includes("Aku lelah")) {
        return "Mungkin kamu perlu beristirahat sejenak agar merasa lebih baik";
    } else if (msg.includes("apa yang bisa kamu lakukan")) {
        return "aku bisa melakukan apa pun";
    } else {
        const defaultResponses = [
            "Hmm, bisa jelaskan lebih detail?",
            "Maaf, saya belum mempelajari hal itu.",
            "Bisa ulangi pertanyaan dengan lebih jelas lagi?"
        ];
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
