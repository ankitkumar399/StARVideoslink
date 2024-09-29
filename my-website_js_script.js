document.getElementById("search-btn").addEventListener("click", function() {
    const searchBox = document.getElementById("search-box").value;
    const resultDiv = document.getElementById("result");

    // Simulating a search function
    if (searchBox === "123456") {
        resultDiv.innerHTML = `<p>Video found: <a href="https://drive.google.com/file/d/VIDEO_ID/view">Watch Video</a></p>`;
    } else {
        resultDiv.innerHTML = `<p>No video found for number ${searchBox}.</p>`;
    }
});