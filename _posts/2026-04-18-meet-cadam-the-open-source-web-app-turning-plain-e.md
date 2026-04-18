---
image: /assets/images/2026-04-18-meet-cadam-the-open-source-web-app-turning-plain-e-thumbnail.jpg
layout: _posts
title: "Meet CADAM: The Open-Source Web App Turning Plain English into Parametric 3D Models"
description: "Discover CADAM, a revolutionary open-source text-to-CAD application that leverages AI, WebAssembly, and OpenSCAD to generate interactive 3D models directly in your browser."
tags: [CADAM, Text-to-CAD, OpenSCAD, WebAssembly, 3D Modeling, Open Source, Three.js, AI Design]
---

For decades, creating parametric 3D models required mastering steep-learning-curve software, wrestling with complex GUIs, and meticulously inputting geometric constraints. But what if you could just *describe* what you want to build and let your browser handle the rest? 

Enter **CADAM**, an open-source, AI-powered text-to-CAD web application that is fundamentally shifting how we approach 3D design. By combining natural language processing with robust CAD engineering, CADAM transforms your plain English prompts (and even image references!) into fully functional, parametric 3D models.

> **Note:** CADAM is entirely open-source and maintained by the Adam-CAD team. You can try the live demo at [adam.new/cadam](https://adam.new/cadam) or contribute to the source code on [GitHub](https://github.com/Adam-CAD/CADAM).

---

## 🚀 What Makes CADAM a Game Changer?

Unlike traditional CAD platforms that require heavy desktop installations, CADAM operates entirely in your web browser. It uses a modern tech stack to read your prompts, write the necessary code, and instantly render a 3D preview. 

Here is a quick breakdown of CADAM's core capabilities:

| Feature | Description |
| :--- | :--- |
| **Natural Language Input** | Describe your desired 3D model in plain English, and the AI generates the corresponding geometry. |
| **Image References** | Upload an image to serve as a structural or visual guide during the model generation process. |
| **Parametric Controls** | Automatically extracts adjustable dimensions into interactive sliders for instant tweaking. |
| **Real-time Preview** | See your model update instantly directly in the browser via an integrated rendering engine. |
| **Format Flexibility** | Seamlessly export your generated 3D models into highly compatible `.STL` or `.SCAD` files. |

---

## ⚙️ The Magic Under the Hood: WebAssembly & OpenSCAD

If you're wondering how a web app can compile complex 3D geometry so quickly without a massive cloud backend, the secret lies in **WebAssembly (Wasm)**. 

CADAM acts as a highly intelligent bridge between large language models (which write the code) and `OpenSCAD` (which builds the geometry). 

1. **Text-to-Code:** You type a prompt. The AI generates raw `OpenSCAD` code based on your requirements.
2. **Browser Compilation:** Using an `OpenSCAD` WebAssembly port, the code is compiled *locally* in your browser.
3. **Rendering:** The output is immediately parsed and rendered in a rich, interactive 3D environment using *Three.js*.

> **Pro-Tip:** Because CADAM uses *Smart Updates*, moving the parameter sliders modifies the variables in the `OpenSCAD` code locally. This means you get instant geometry updates *without* having to ping the AI to regenerate the entire model!

### Supported CAD Libraries
To ensure users aren't limited to primitive shapes, CADAM supports several widely used OpenSCAD libraries out of the box. This allows the AI to pull from established, robust geometric functions. 

The currently supported libraries include:
*   **BOSL** (The Belfry OpenScad Library)
*   **BOSL2** (An advanced, heavily expanded version of BOSL)
*   **MCAD** (A library of mechanical components for grid-based designs)
*   **Built-in Fonts** (Includes Geist font support for rendering 3D text)

---

## 🛠️ Developer Quick Start

Want to run CADAM locally or contribute to the project? The repository is available under the GPL-3.0 license. Since it leverages Supabase and Anthropic (via webhooks), you'll need to set up a few local environment variables first.

Here is how you can spin up the development server on your own machine:

1. **Clone the repository:** 
   ```bash
   git clone https://github.com/Adam-CAD/CADAM.git
   cd CADAM
   ```
2. **Install dependencies:** 
   ```bash
   npm install
   ```
3. **Start your local backend (Supabase):** 
   ```bash
   npx supabase start
   npx supabase functions serve --no-verify-jwt
   ```
4. **Set up Ngrok (Required for Anthropic image references):**
   ```bash
   ngrok http 54321
   ```
5. **Launch the app:** 
   ```bash
   npm run dev
   ```

*Make sure you configure your `.env.local` and `supabase/functions/.env` files with your specific API keys before running the application!*

---

## 🎯 Conclusion: The Future is Parametric and Accessible

CADAM is more than just a neat parlor trick; it's a profound step toward the democratization of 3D design. Whether you're an experienced engineer looking to quickly scaffold a parametric base model, or a hobbyist who wants to 3D print a custom part but doesn't know how to navigate traditional CAD software, CADAM bridges the gap. By fusing plain English, `OpenSCAD`, and browser-based rendering, the barrier to entry for mechanical design has never been lower.

**Ready to start generating 3D models with your words?** 
Head over to the [live demo](https://adam.new/cadam) to experience it yourself, and don't forget to drop a ⭐ on the [Adam-CAD/CADAM GitHub repository](https://github.com/Adam-CAD/CADAM) to support open-source innovation!