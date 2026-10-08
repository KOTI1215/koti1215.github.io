// Interactive Developer Terminal Script for BKR.dev
document.addEventListener("DOMContentLoaded", () => {
  const terminalInput = document.getElementById("terminal-input");
  const terminalBody = document.getElementById("terminal-body");

  if (!terminalInput || !terminalBody) return;

  terminalInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = terminalInput.value.trim().toLowerCase();
      
      // Echo user command
      const commandLine = document.createElement("div");
      commandLine.innerHTML = `<span style="color: #9ca3af;">guest@bkr:~$</span> ${escapeHtml(terminalInput.value)}`;
      terminalBody.insertBefore(commandLine, terminalInput.parentElement);

      // Process command
      const responseLine = document.createElement("div");
      responseLine.style.marginBottom = "0.8rem";
      responseLine.style.lineHeight = "1.5";

      switch (command) {
        case "help":
          responseLine.innerHTML = `
            <span style="color: #f59e0b;">Available Commands:</span><br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">bio</span>       - Display professional student summary<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">education</span> - View degree & student ID info<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">skills</span>    - List core technical stack & tools<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">stack</span>     - Detailed breakdown of languages & tools<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">projects</span>  - Show highlighted AI/ML & web apps<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">certs</span>     - View Cisco Networking & academic labs<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">whoami</span>    - Check current visitor session info<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">contact</span>   - Get direct connection links<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">socials</span>   - View LinkedIn & GitHub profile links<br>
            &nbsp;&nbsp;<span style="color: #38bdf8;">clear</span>     - Clear terminal window
          `;
          break;

        case "bio":
          responseLine.innerHTML = `<span style="color: #10b981;">Boori Koteswara Rao</span> | B.E. CSE (AI/ML) Student (ID: i26043120). Passionate about artificial intelligence, data structures & algorithms, and robust full-stack deployment.`;
          break;

        case "education":
          responseLine.innerHTML = `
            <span style="color: #f59e0b;">Academic Profile:</span><br>
            • Degree: B.E. Computer Science & Engineering (AI/ML)<br>
            • Student ID: <span style="color: #38bdf8;">i26043120</span><br>
            • Focus: Artificial Intelligence, Machine Learning, & Secure System Design
          `;
          break;

        case "skills":
          responseLine.innerHTML = `<span style="color: #f59e0b;">Core Stack:</span> Python, Flask, JavaScript, HTML/CSS, SQL, PowerShell, Machine Learning, Data Structures & Algorithms, and Cisco Network Security Labs.`;
          break;

        case "stack":
          responseLine.innerHTML = `
            <span style="color: #f59e0b;">Technical Breakdown:</span><br>
            • Languages: Python, JavaScript, HTML5, CSS3, PowerShell, SQL<br>
            • Frameworks: Flask, Visual Studio Code, Git, GitHub Pages<br>
            • Domains: AI/ML Models, REST APIs, Database Masking & Security
          `;
          break;

        case "projects":
          responseLine.innerHTML = `
            <span style="color: #f59e0b;">Featured Works:</span><br>
            1. Sentiment Analysis Web App (Python • Flask • ML)<br>
            2. Movie Search & Info App (JavaScript • REST API)<br>
            3. SecureData CDP (Python • Database Security)
          `;
          break;

        case "certs":
          responseLine.innerHTML = `
            <span style="color: #f59e0b;">Certifications & Labs:</span><br>
            • Cisco Networking Academy: Network security labs & PowerShell automation<br>
            • AI/ML Pathway: Neural network fundamentals & predictive modeling
          `;
          break;

        case "whoami":
          responseLine.innerHTML = `guest-visitor@bkr-portfolio-node-2026 (Authorized Session)`;
          break;

        case "contact":
          responseLine.innerHTML = `Reach out via GitHub (<a href="https://github.com/koti1215" target="_blank" style="color: #38bdf8; text-decoration: underline;">github.com/koti1215</a>) or check the website contact panel!`;
          break;

        case "socials":
          responseLine.innerHTML = `
            • GitHub: <a href="https://github.com/koti1215" target="_blank" style="color: #38bdf8; text-decoration: underline;">koti1215</a><br>
            • Live Site: <a href="https://koti1215.github.io" target="_blank" style="color: #38bdf8; text-decoration: underline;">koti1215.github.io</a>
          `;
          break;

        case "clear":
          const lines = terminalBody.querySelectorAll("div");
