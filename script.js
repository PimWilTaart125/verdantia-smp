// Het server IP
const SERVER_IP = "play.verdantiasmp.nl"; // Vul hier jouw IP in

// 1. IP kopiëren met een RPG effect
function copyIP() {
    navigator.clipboard.writeText(SERVER_IP).then(() => {
        const ipTextElement = document.getElementById("ipText");
        
        // Verander tekst tijdelijk voor feedback
        ipTextElement.innerText = "IP GEKOPIEERD!";
        
        setTimeout(() => {
            ipTextElement.innerText = SERVER_IP;
        }, 3000);
    });
}


async function fetchPlayerCount() {
    const playerCountElement = document.getElementById("playerCount");
    
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/demo.mcstatus.io`);
        const data = await response.json();

        if (data.online) {
            playerCountElement.textContent = data.players.online;
        } else {
            playerCountElement.textContent = "0";
        }
    } catch (error) {
        console.error("Kon serverstatus niet ophalen:", error);
        playerCountElement.textContent = "?";
    }
}

// Spelers ophalen bij het inladen
fetchPlayerCount();
setInterval(fetchPlayerCount, 60000);
