
async function analyze() {
    const convo = document.getElementById("conversation").value;
    const resultDiv = document.getElementById("result");
    const clusterDiv = document.getElementById("cluster");
    const recommendationDiv = document.getElementById("recommendation");

    const response = await fetch("https://clusterverse-backend.onrender.com/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ conversation: convo })
    });

    const data = await response.json();

    clusterDiv.innerHTML = "<strong>نمط الشخصية:</strong> " + (data.cluster || "غير معروف");
    recommendationDiv.innerHTML = "<strong>التوصية:</strong> " + (data.recommendation || "لم يتم التحليل");

    resultDiv.classList.remove("hidden");
}
