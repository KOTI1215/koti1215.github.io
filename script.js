document.addEventListener("DOMContentLoaded", () => {
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");

    const commandsHelp = `
    Available commands:
    - <span class="cmd-highlight">bio</span>      : Display professional summary
    - <span class="cmd-highlight">skills</span>   : List core technical competencies
    - <span class="cmd-highlight">projects</span> : Show key development work
    - <span class="cmd-highlight">id</span>       : View academic student ID info
    - <span class="cmd-highlight">clear</span>    : Clear terminal screen
    - <span class="cmd-highlight">contact</span>  : Get contact information
    `;

    terminalInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = terminalInput.value.trim().toLowerCase();
            
            // Print user command
            const userLine = document.createElement("p");
            userLine.innerHTML = `<span style="color: #10b981;">guest@bkr:~$</span> ${terminalInput.value}`;
            terminalOutput.appendChild(userLine);

            // Process command
            const responseLine = document.createElement("p");
            
            switch(command) {
                case "help":
                    responseLine.innerHTML = commandsHelp;
                    break;
                case "bio":
                    responseLine.innerHTML = "BOORI KOTESWARA RAO: B.E. CSE (AI/ML) student specializing in Full-Stack Development, Machine Learning algorithms, and Data Structures & Algorithms (DSA).";
                    break;
                case "skills":
                    responseLine.innerHTML = "Core: Python, Data Structures & Algorithms (DSA), JavaScript, HTML/CSS | ML & Full-Stack: Machine Learning, Flask, REST APIs, Git/GitHub, VS Code.";
                    break;
                case "projects":
                    responseLine.innerHTML = "1. Agri AI Project (Machine Learning & Smart Agriculture)<br>2. Sentiment Analysis Web App (Python/Flask/ML)<br>3. Dynamic Movie Information Hub (JavaScript/REST API)";
                    break;
                case "id":
                    responseLine.innerHTML = "Student ID: i26043120 | Degree: B.E. CSE (AI/ML)";
                    break;
                case "contact":
                    responseLine.innerHTML = "Reach out via GitHub: github.com/i26043120 or drop an email!";
                    break;
                case "clear":
                    terminalOutput.innerHTML = "";
                    terminalInput.value = "";
                    return;
                case "":
                    responseLine.innerHTML = "";
                    break;
                default:
                    responseLine.innerHTML = `Command not recognized: '${command}'. Type 'help' for available commands.`;
            }

Divider:
            terminalOutput.appendChild(responseLine);
            terminalInput.value = "";
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });
});