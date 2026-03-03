document.addEventListener("DOMContentLoaded", function() {

  const nextBtn = document.getElementById("nextBtn");
  const secretPage = document.getElementById("secretPage");

  nextBtn.addEventListener("click", function() {

    secretPage.style.display = "none";

    const slide = document.createElement("div");
    slide.style.position = "absolute";
    slide.style.width = "100%";
    slide.style.height = "100%";
    slide.style.background = "black";
    slide.style.display = "flex";
    slide.style.justifyContent = "left";
    slide.style.alignItems = "center";
    slide.style.color = "white";
    slide.style.fontFamily = "monospace";
    slide.style.textAlign = "left";
    slide.style.padding = "60px";

    const textBox = document.createElement("div");
    textBox.style.maxWidth = "600px";
    textBox.style.whiteSpace = "pre-line";
    slide.appendChild(textBox);

    document.body.appendChild(slide);

    /* 🎵 BACKSOUND DELAY 3 DETIK */
    const bgm = new Audio("./audio/backsound.mp3");
    bgm.loop = true;
    bgm.volume = 0.6;
    setTimeout(() => { bgm.play().catch(()=>{}); }, 4000);

    const message =
`Voor,
Yts (yang tersayang)
Elsza yang ada di Matraman...


Hai, Selamat ulang tahun yang ke-20 ya :)


Gua ga tau doa apa yang paling tepat buat lu,
tapi semoga hal-hal baik selalu ada buat lu

Semoga punya duit banyak, biar bisa beli apa aja
semoga tersemogakan semuanya


Gua seneng kok bisa kenal sama lu,
walaupun udah gabisa ketemu lagi hehe.


Yaa, semoga kita bisa main bareng lagi
yang entah kapan ga tau...


Nanti kadonya gua kasih pas maen aja yaa^^


Makasih dah ngasih waktu buat baca sampe Abis wkwk.
ily<3


Van
Fathir, Jakarta 2026`;

    const paragraphs = message.split("\n\n");
    let paraIndex = 0;

    function playSound(file) {
      const audio = new Audio(file);
      audio.volume = 1;
      audio.play().catch(()=>{});
    }

    function playKeySound(char) {
      if (char === " ") { playSound("./audio/space.mp3"); return; }
      if (char === "\n") { playSound("./audio/enter.mp3"); return; }
      const random = Math.floor(Math.random() * 6) + 1;
      playSound("./audio/key" + random + ".mp3");
    }

    function typeParagraph(paragraph, callback) {
      let i = 0;
      function typeLetter() {
        if (i < paragraph.length) {
          const char = paragraph.charAt(i);
          textBox.textContent += char;
          playKeySound(char);
          i++;
          // ⏸ pause 2 detik di intro
          if (!introPaused && textBox.textContent.includes("Elsza yang ada di Matraman...")) {
            introPaused = true;
            setTimeout(typeLetter, 2000);
            return;
          }
          setTimeout(typeLetter, 60);
        } else {
          textBox.textContent += "\n\n"; // spacing paragraf
          setTimeout(callback, 1000); // jeda 1 detik antar paragraf
        }
      }
      typeLetter();
    }

    let introPaused = false;

    function startTyping() {
      if (paraIndex < paragraphs.length) {
        typeParagraph(paragraphs[paraIndex], () => {
          paraIndex++;
          startTyping();
        });
      }
    }

    startTyping();

  });

});