/* ==========================================================================
   BKR.dev - Interactive Terminal Script & Dynamic Enhancements
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');

  if (terminalInput && terminalBody) {
    terminalInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        
        // Echo user command
        const commandEcho = document.createElement('div');
        commandEcho.innerHTML = `<span style="color: #9ca3af;">guest@bkr:~$</span> ${escapeHtml(terminalInput.value)}`;
        terminalBody.insertBefore(commandEcho, terminalInput.parentNode);

        // Process command
        processCommand(command, terminalBody);

        // Reset input
        terminalInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    });
  }

  // Smooth scrolling for sidebar navigation
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Update active class
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
});

function processCommand(cmd, terminalBody) {
  const responseDiv = document.createElement('div');
  responseDiv.style.margin = '0.5rem 0 1rem 0';
  responseDiv.style.lineHeight = '1.5';

  switch (cmd) {
    case 'help':
      responseDiv.innerHTML = `
        <span style="color: #f59e0b;">Available Commands:</span><br>
        &nbsp;&nbsp;<strong>bio</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Learn more about Boori Koteswara Rao<br>
        &nbsp;&nbsp;<strong>skills</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- View technical stack (Python, AI/ML, Flask, etc.)<br>
        &nbsp;&nbsp;<strong>projects</strong>&nbsp;&nbsp;&nbsp;- Explore featured projects (Movie App, SecureData CDP)<br>
        &nbsp;&nbsp;<strong>contact</strong>&nbsp;&nbsp;&nbsp;&nbsp;- Get direct reach-out options<br>
        &nbsp;&nbsp;<strong>clear</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear the console screen
      `;
      break;

    case 'bio':
      responseDiv.innerHTML = `
        <strong>Boori Koteswara Rao</strong> is a B.E. Computer Science and Engineering student specializing in 
        <strong>Artificial Intelligence & Machine Learning (AI/ML)</strong>. Passionate about building full-stack applications, 
        intelligent systems, and clean web architecture.
      `;
      break;

    case 'skills':
      responseDiv.innerHTML = `
        <span style="color: #f59e0b;">Core Competencies:</span><br>
        • Programming: Python, JavaScript, HTML/CSS, PowerShell<br>
        • Frameworks: Flask, Visual Studio Code, Git/GitHub<br>
        • Specializations: AI/ML, Data Structures & Algorithms (DSA), Network Security
      `;
      break;

    case 'projects':
      responseDiv.innerHTML = `
        <span style="color: #f59e0b;">Featured Portfolio Projects:</span><br>
        1. <strong>Movie Search & Information App</strong>: API-integrated metadata explorer.<br>
        2. <strong>SecureData CDP</strong>: Database design and batch processing verification system.<br>
        3. <strong>Cyber-Neon Portfolio</strong>: Interactive developer console & responsive web layout.
      `;
      break;

    case 'contact':
      responseDiv.innerHTML = `
        Get in touch for AI/ML research discussions or software engineering collaborations:<br>
        • GitHub: <a href="https://github.com/koti1215" target="_blank" style="color: #f59e0b;">koti1215</a><br>
        • Live Domain: <a href="https://koti1215.github.io" target="_blank" style="color: #f59e0b;">koti1215.github.io</a>
      `;
      break;

    case 'clear':
      // Clear all child elements except the input line container
      const inputLine = terminalBody.querySelector('.terminal-input-line');
      terminalBody.innerHTML = '';
      terminalBody.appendChild(inputLine);
      return;

    case '':
      responseDiv.innerHTML = '';
      break;

    default:
      responseDiv.innerHTML = `<span style="color: #ef4444;">Command not recognized: "${escapeHtml(cmd)}". Type 'help' for valid options.</span>`;
  }

  terminalBody.insertBefore(responseDiv, terminalBody.querySelector('.terminal-input-line'));
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
