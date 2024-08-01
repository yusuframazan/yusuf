document.addEventListener("DOMContentLoaded", function() {
    // İşçi sayısını ve aktif işçileri güncelleme
    document.getElementById("workerCount").innerText = "10";  // Örnek veri
    document.getElementById("activeWorkers").innerText = "8";  // Örnek veri

    // Harita için örnek veri
    document.getElementById("map").innerText = "Harita burada gösterilecek";  // Örnek veri

    // Sağlık durumu için örnek veri
    const healthStatus = [
        "İşçi 1: İyi",
        "İşçi 2: Tehlike",
        "İşçi 3: Orta"
    ];

    const healthStatusList = document.getElementById("healthStatus");
    healthStatus.forEach(status => {
        const listItem = document.createElement("li");
        listItem.innerText = status;
        healthStatusList.appendChild(listItem);
    });

    // İşçi listesi için örnek veri
    const workers = [
        {id: 1, name: "Ali", location: "Bölge A", health: "İyi", status: "Aktif"},
        {id: 2, name: "Ayşe", location: "Bölge B", health: "Tehlike", status: "Aktif"}
    ];

    const workerTable = document.getElementById("workerTable");
    workers.forEach(worker => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${worker.id}</td><td>${worker.name}</td><td>${worker.location}</td><td>${worker.health}</td><td>${worker.status}</td>`;
        workerTable.appendChild(row);
    });

    // Uyarılar için örnek veri
    const alerts = [
        "İşçi 2 acil durumda!",
        "İşçi 3 sıcaklık yüksek!"
    ];

    const alertList = document.getElementById("alertList");
    alerts.forEach(alert => {
        const listItem = document.createElement("li");
        listItem.innerText = alert;
        alertList.appendChild(listItem);
    });
});
