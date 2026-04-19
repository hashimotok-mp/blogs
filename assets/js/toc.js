document.addEventListener("DOMContentLoaded", () => {
    const toc = document.getElementById("toc");
    const content = document.querySelector(".post-content");

    if (!toc || !content) return;

    const headings = content.querySelectorAll("h2, h3");

    headings.forEach((heading, index) => {
        const id = "heading-" + index;
        heading.id = id;

        const li = document.createElement("li");
        li.className = heading.tagName.toLowerCase();

        const a = document.createElement("a");
        a.href = "#" + id;
        a.textContent = heading.textContent;

        li.appendChild(a);
        toc.appendChild(li);
    });

    // 見出しが無い場合は非表示
    if (headings.length === 0) {
        document.getElementById("toc-container").style.display = "none";
    }
});