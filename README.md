# Selam 🌊🃏

**Selam** is an interactive web-based card game designed to spark meaningful conversations and deepen connections between people. Whether you're breaking the ice or diving into profound topics, Selam provides the perfect questions to guide your interaction.

## ✨ Key Features

* **🎴 Curated Conversation Cards:** A wide variety of thoughtful questions ranging from casual icebreakers to deep, introspective inquiries.
* **🌡️ Intensity Slider:** Control the depth of the conversation. Choose your level of vulnerability and openness.
* **🎨 Beautiful & Immersive UI:** Features stunning "Aurora" animated backgrounds and smooth card interactions powered by **Framer Motion**.
* **🗂️ Topic Selection:** Browse and select specific themes to tailor the conversation to your mood or setting.
* **📱 Responsive Design:** Fully optimized for mobile and desktop, enabling you to play anywhere.

## 🛠️ Tech Stack

Built with a modern web stack for high performance and smooth animations:

* **Frontend:** [React](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Package Manager:** [PNPM](https://pnpm.io/) (Monorepo structure)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

* Node.js (Latest LTS recommended)
* PNPM installed (`npm install -g pnpm`)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/username/selam.git](https://github.com/username/selam.git)
    cd selam
    ```

2.  **Install dependencies**
    Since this project is set up as a monorepo using PNPM workspaces:
    ```bash
    pnpm install
    ```

3.  **Run the Development Server**
    Navigate to the web package and start the server:
    ```bash
    cd packages/web
    pnpm dev
    ```
    *Alternatively, if a root script is configured, you can often run `pnpm dev` from the root.*

4.  **Open in Browser**
    Visit `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

This project follows a monorepo structure:


```

selam/
├── packages/
│   └── web/                # Main React Application
│       ├── src/
│       │   ├── components/ # UI Components (Cards, Backgrounds, Sliders)
│       │   ├── data/       # Question data (questions.json)
│       │   ├── pages/      # Route pages (Home, TopicSelection, Depths)
│       │   └── App.jsx
├── pnpm-workspace.yaml     # Workspace configuration
└── package.json

```

## 🤝 Contributing

We welcome contributions! Whether it's adding new questions, fixing bugs, or improving animations.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
