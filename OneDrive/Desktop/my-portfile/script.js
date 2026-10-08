// Interactive Developer Terminal Script for BKR.dev
document.addEventListener("DOMContentLoaded", () => {
  const terminalInput = document.getElementById("terminal-input");
  const terminalBody = document.getElementById("terminal-body");

  if (!terminalInput || !terminalBody) return;

  terminalInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      processCommand(terminalInput.value.trim());
    }
  });
});

function runQuickCommand(cmd) {
  const terminalInput = document.getElementById("terminal-input");
  if (terminalInput) {
    terminalInput.value = cmd;
    processCommand(cmd);
  }
}

function processCommand(rawCommand) {
  const terminalInput = document.getElementById("terminal-input");
  const terminalBody = document.getElementById("terminal-body");
  const command = rawCommand.toLowerCase();

  // Echo user command
  const commandLine = document.createElement("div");
  commandLine.innerHTML = `<span style="color: #9ca3af;">bkr@portfolio:~$</span> ${escapeHtml(rawCommand)}`;
  terminalBody.insertBefore(commandLine, terminalInput.parentElement);

  const responseLine = document.createElement("div");
  responseLine.style.marginBottom = "0.8rem";
  responseLine.style.lineHeight = "1.5";

  switch (command) {
    case "help":
      responseLine.innerHTML = `
        <span style="color: #f59e0b;">Available Commands:</span><br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">bio</span>       - Display professional student record & ID<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">education</span> - View B.E. CSE (AI/ML) curriculum specs<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">skills</span>    - List core technical stack & tools<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">stack</span>     - Detailed backend & AI frameworks breakdown<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">projects</span>  - Show sentiment analysis & SecureData CDP apps<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">certs</span>     - View Cisco Networking labs & PowerShell logs<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">whoami</span>    - Check active session entity data<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">contact</span>   - Get direct connection links<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">socials</span>   - View GitHub & LinkedIn channels<br>
        &nbsp;&nbsp;<span style="color: #38bdf8;">clear</span>     - Clear terminal window
      `;
      break;

    case "bio":
      responseLine.innerHTML = `<span style="color: #10b981;">Boori Koteswara Rao</span> (ID: i26043120) | B.E. CSE (AI/ML) Student specializing in machine learning pipelines, full-stack web applications, and system security.`;
      break;

    case "education":
      responseLine.innerHTML = `
        <span style="color: #f59e0b;">Academic Credentials:</span><br>
        • Name: Boori Koteswara Rao<br>
        • Student ID: i26043120<br>
        • Major: B.E. Computer Science & Engineering (Artificial Intelligence & Machine Learning)
      `;
      break;

    case "skills":
      responseLine.innerHTML = `<span style="color: #f59e0b;">Core Stack:</span> Python, Flask, JavaScript, SQL, PowerShell, Visual Studio Code, Git, and Machine Learning Frameworks.`;
      break;

    case "stack":
      responseLine.innerHTML = `
        <span style="color: #f59e0b;">Detailed Technical Stack:</span><br>
        • Languages: Python, JavaScript, SQL, PowerShell<br>
        • Web & Backend: Flask, HTML5, CSS3, REST APIs<br>
        • Tools & Deployment: VS Code, Git, GitHub Pages, Terminal Automation
      `;
      break;

    case "projects":
      responseLine.innerHTML = `
        <span style="color: #f59e0b;">Deployed Projects:</span><br>
        1. Sentiment Analysis Web App (Python • Flask • ML)<br>
        2. SecureData CDP Database System (SQL • Masking Protocols)<br>
        3. Cisco Network Security & PowerShell Lab Suite
      `;
      break;

    case "certs":
      responseLine.innerHTML = `
        <span style="color: #f59e0b;">Labs & Certifications:</span><br>
        • Cisco Networking Academy: Network security & cmdlet automation<br>
        • Advanced AI/ML Academic Projects & Technical Reporting
      `;
      break;

    case "whoami":
      responseLine.innerHTML = `koti1215@github.io-authenticated-node (User ID: i26043120)`;
      break;

    case "contact":
      responseLine.innerHTML = `Reach out via GitHub (KOTI1215) or LinkedIn!`;
      break;

    case "socials":
      responseLine.innerHTML = `
        • GitHub: github.com/KOTI1215<br>
        • Live Domain: koti1215.github.io
      `;
      break;

    case "clear":
      const lines = terminalBody.querySelectorAll("div");
      lines.forEach((line, index) => {
        if (index > 2 && line !== terminalInput.parentElement) {
          line.remove();
        }
      });
      responseLine.innerHTML = "";
      break;

    case "":
      responseLine.innerHTML = "";
      break;

    default:
      responseLine.innerHTML = `<span style="color: #f43f5e;">Command not found: "${escapeHtml(rawCommand)}". Type 'help' for valid commands.</span>`;
      break;
  }

  if (command !== "clear" && command !== "") {
    terminalBody.insertBefore(responseLine, terminalInput.parentElement);
  }

  terminalInput.value = "";
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Modal Control Functions
function openModal(title, desc) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("project-modal").style.display = "flex";
}

function closeModal(event) {
  if (event.target.id === "project-modal") {
    document.getElementById("project-modal").style.display = "none";
  }
}

function closeModalForce() {
  document.getElementById("project-modal").style.display = "none";
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}