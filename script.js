window.onload = function () {

    const tapScreen = document.getElementById("tapScreen");
    const content = document.getElementById("content");
    const title = document.getElementById("title");
    const messageEl = document.getElementById("message");
    const music = document.getElementById("bg-music");

    // Get name from URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "Yoon";

    title.innerText = "For " + name;

    const text = `I know there are times when you feel lost.

But you don’t have to carry everything alone.

When you feel arr ngal,
I’ll be your strength and your peace,
holding your hand

Always with you 💕`;

    // Tap to reveal + play music
    tapScreen.addEventListener("click", () => {
        tapScreen.style.display = "none";
        content.style.display = "block";

        // 🎵 PLAY MUSIC
        music.volume = 0.6;
        music.currentTime = 0;
        music.play().catch(err => {
    console.log("Audio blocked:", err);
});

        // ✨ Typing effect
        let i = 0;
        function typing() {
    if (i < text.length) {
        messageEl.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
        typing();
    });
};
