# AI-Powered Academic Assistant using Gemini API

![AI-Powered](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge&logo=ai) ![Flask](https://img.shields.io/badge/Flask-2.3.3-green?style=for-the-badge&logo=flask) ![Gemini](https://img.shields.io/badge/Gemini-API-orange?style=for-the-badge&logo=google) ![Markdown](https://img.shields.io/badge/Markdown-Rendering-lightgrey?style=for-the-badge&logo=markdown)

AI-Powered Academic Assistant is an intelligent web application designed to help students, researchers, and academics generate, summarize, categorize, and explain academic content using Google's Gemini AI API with beautiful Markdown rendering.

## 🚀 Features

- **🤖 AI-Powered Generation**: Generate comprehensive academic content on any topic
- **📊 Smart Summarization**: Extract key points and main arguments from lengthy academic texts
- **🏷️ Intelligent Categorization**: Identify fields, themes, and subjects in academic materials
- **💡 Detailed Explanations**: Get thorough explanations with examples and applications
- **📝 Markdown Rendering**: Beautifully formatted output with proper Markdown rendering
- **🎨 Modern UI**: Clean, responsive interface with gradient designs and smooth animations
- **⚡ Real-time Processing**: Fast AI responses with loading indicators and error handling

## 🛠️ Technology Stack

- **Backend**: Flask (Python)
- **AI Processing**: Google Gemini API
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Markdown Rendering**: Python-Markdown with extensions
- **Styling**: Custom CSS with modern gradients and animations

## 🛠️ How to Use

Follow these steps to set up and run the AI Academic Assistant:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/academic-assistant.git
   cd academic-assistant
   ```

2. **Get Gemini API Key**

   - Visit [Google AI Studio](https://aistudio.google.com/)
   - Sign in with your Google account
   - Generate an API key
   - Copy your API key for the next step

3. **Create a Virtual Environment (venv)**

   - **For Windows:**
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - **For Mac/Linux:**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

4. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

5. **Set Up Environment Variables**

   - Create a `.env` file in the project root
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_actual_gemini_api_key_here
     ```

6. **Run the Application**

   ```bash
   python app.py
   ```

7. **Open Browser** : Navigate to http://127.0.0.1:5000/
8. Start using the AI Academic Assistant for your academic tasks!

## 🎯 How It Works

1. **Select Task Type**: Choose between Generate, Summarize, Categorize, or Explain
2. **Input Content**: Enter your academic topic, text, or concept
3. **AI Processing**: Gemini AI processes your request with specialized prompts
4. **Markdown Rendering**: Raw Markdown output is converted to beautiful HTML
5. **Results Display**: Formatted content appears in the output section with proper styling

## 🔮 Usage Examples

### Generate Academic Content
**Input**: "Machine Learning algorithms"
**Output**: Comprehensive article with sections on supervised learning, unsupervised learning, neural networks, etc.

### Summarize Research Paper
**Input**: Paste research paper abstract or content
**Output**: Concise summary with key findings, methodology, and conclusions

### Categorize Academic Text
**Input**: Academic paper or article content
**Output**: Identified fields, themes, subjects with structured categorization

### Explain Complex Concepts
**Input**: "Quantum entanglement"
**Output**: Detailed explanation with examples, applications, and simple analogies

## 📁 Project Structure

```
academic-assistant/
│
├── app.py                 # Main Flask application
├── config.py              # Configuration settings
├── requirements.txt       # Python dependencies
├── .env                  # Environment variables (create this)
├── static/
│   ├── css/
│   │   └── style.css     # Modern styling with gradients
│   └── js/
│       └── script.js     # Frontend functionality
└── templates/
    └── index.html        # Main webpage interface
```

## 🌟 Advanced Features

- **Smart Prompt Engineering**: Enhanced prompts for each task type to get optimal results
- **Real-time Markdown Processing**: Instant conversion from Markdown to formatted HTML
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Keyboard Shortcuts**: Ctrl+Enter for quick processing
- **Loading States**: Beautiful loading animations during AI processing

## 🎨 UI/UX Features

- **Modern Gradient Design**: Beautiful color schemes and smooth animations
- **Interactive Task Buttons**: Visual feedback for selected task types
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Transitions**: Elegant hover effects and state transitions
- **Accessible Design**: Clear visual hierarchy and readable typography

## 👨‍💻 Developer

**ShivaPrasad149** - AI, Web Development, and Python Enthusiast

## 🔧 API Configuration

The application uses Google's Gemini Pro model with the following configuration:
- Model: `gemini-2.5-flash-lite`
- Enhanced prompts for each academic task
- Markdown formatting in AI responses
- Proper error handling and rate limiting

## 🙏 Acknowledgments

- Google Gemini AI team for the powerful API
- Flask community for the excellent web framework
- Python-Markdown library for seamless Markdown rendering
- The open-source community for various libraries and tools

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you find this project helpful, please consider starring the repository to show your support!

## 🔗 Quick Start Commands

```bash
# After cloning and setting up venv
pip install -r requirements.txt

# Add your API key to .env file
echo "GEMINI_API_KEY=your_key_here" > .env

# Run the application
python app.py

# Visit http://localhost:5000 in your browser
```

The application will be ready to assist you with all your academic content needs! 🎓✨