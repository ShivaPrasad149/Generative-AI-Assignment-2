class AcademicAssistant {
    constructor() {
        this.currentTask = 'generate';
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Task type buttons
        document.querySelectorAll('.task-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveTask(e.target.dataset.task);
            });
        });

        // Process button
        document.getElementById('processBtn').addEventListener('click', () => {
            this.processContent();
        });

        // Enter key shortcut for process button
        document.getElementById('contentInput').addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.processContent();
            }
        });
    }

    setActiveTask(task) {
        this.currentTask = task;
        
        // Update button states
        document.querySelectorAll('.task-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-task="${task}"]`).classList.add('active');

        // Update placeholder text
        const textarea = document.getElementById('contentInput');
        const placeholders = {
            generate: 'Enter a topic to generate academic content (e.g., "Machine Learning algorithms", "Renaissance Art History")...',
            summarize: 'Paste academic content to summarize (research papers, articles, notes)...',
            categorize: 'Enter academic content to categorize (identify field, themes, subjects)...',
            explain: 'Enter a concept to get detailed explanation with examples...'
        };
        textarea.placeholder = placeholders[task];
    }

    async processContent() {
        const content = document.getElementById('contentInput').value.trim();
        const processBtn = document.getElementById('processBtn');
        const loading = document.getElementById('loading');
        const output = document.getElementById('outputContent');

        if (!content) {
            alert('Please enter some content to process.');
            return;
        }

        // Show loading state
        processBtn.disabled = true;
        processBtn.textContent = 'Processing...';
        loading.style.display = 'block';
        output.innerHTML = '<em>Processing your request with Gemini AI...</em>';

        try {
            const response = await fetch('/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: content,
                    task_type: this.currentTask
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Set the HTML content directly (it's already converted from markdown)
                output.innerHTML = data.result;
            } else {
                output.innerHTML = `<div class="error">Error: ${data.error}</div>`;
            }
        } catch (error) {
            output.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        } finally {
            // Hide loading state
            processBtn.disabled = false;
            processBtn.textContent = 'Process Content';
            loading.style.display = 'none';
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AcademicAssistant();
});