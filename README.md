# 🚁 Airship Supply Delivery Simulation

[![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://get.webgl.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Overview

An interactive 3D airship simulation developed for the Computer Graphics (CGRA) course. This project features a fully controllable dirigible that can navigate a terrain, drop supplies, and operate in autopilot mode.

## 🔧 Technologies

![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GLSL](https://img.shields.io/badge/GLSL-5586A4?style=for-the-badge&logo=opengl&logoColor=white)

## ✨ Features

- **Interactive Airship**: Fully controllable dirigible with realistic physics
- **Dynamic Components**: Moving parts including propellers, rudders, and gondola
- **Supply Dropping System**: Mechanism to deliver supplies to ground targets
- **Autopilot Mode**: Autonomous circular navigation around a point
- **Terrain Rendering**: Textured landscape with height mapping
- **Advanced Shading**: Custom GLSL shaders for effects like animated flag
- **Performance Tracking**: Billboard displaying supply delivery status
- **Camera Controls**: Adjustable viewing angles and zoom levels

## 🎮 Controls

- **W/S**: Accelerate forward/backward
- **A/D**: Turn left/right
- **P**: Toggle autopilot mode
- **L**: Drop supply (only works when over valid drop zone)
- **R**: Reset simulation
- **Mouse**: Camera control

## 🗂️ Project Structure

```
.
├── proj/                       # Main project files
│   ├── images/                # Texture images
│   ├── shaders/               # GLSL shader programs
│   │   ├── flag.vert         # Vertex shader for flag animation
│   │   ├── flag.frag         # Fragment shader for flag
│   │   └── ...               # Other shader files
│   ├── MyVehicle.js           # Airship implementation
│   ├── MyScene.js             # Main scene setup and rendering
│   ├── MySupply.js            # Supply drop mechanism
│   ├── MyTerrain.js           # Terrain implementation
│   ├── MyBillboard.js         # Progress display
│   └── ...                    # Other component files
│
├── lib/                        # External libraries
│   └── CGF/                   # Computer Graphics Framework
│
└── .vscode/                    # VS Code configuration
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser with WebGL support
- Local web server (for development)

### Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/airship-simulation.git
   cd airship-simulation
   ```

2. Serve the project using a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server
   
   # Or with Node.js
   npx serve
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000/proj/
   ```

## 📝 Implementation Details

### Airship Physics

The airship implements realistic physics including:
- Momentum-based movement
- Angular velocity for turning
- Propeller rotation proportional to speed
- Rudder deflection during turns

### Supply Delivery System

Supplies can be dropped when:
- The airship is flying over the valid drop zone
- There are remaining supplies available
- Sufficient time has passed since the last drop

### Shaders

Custom GLSL shaders are used for:
- Animated flag with wave effects that respond to airship speed
- Terrain height mapping and texturing

## 🎓 Academic Context

This project was developed as part of the Computer Graphics (CGRA) course, focusing on:
- 3D modeling and rendering
- WebGL programming
- Scene graph management
- Interactive graphics applications
- Shader programming

## 👥 Contributors

- Project Team Members

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 