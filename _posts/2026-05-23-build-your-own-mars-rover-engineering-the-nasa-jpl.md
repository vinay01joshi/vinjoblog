---
title: "Build Your Own Mars Rover: Engineering the NASA JPL Open Source Rover"
layout: post
category: Robotics
tags: [NASA, Open Source, Robotics, Raspberry Pi, ROS, Engineering, DIY]
image: "https://github.com/nasa-jpl/open-source-rover/raw/master/images/lit_up_shot.jpg"
description: "A complete breakdown of NASA JPL's Open Source Rover project. Learn how to build a 6-wheel, ROS-powered Mars rover replica for around $1600 using COTS parts."
---

Building a robot from scratch is hard enough, but engineering a functional Mars rover replica that doesn't immediately fail on rocky terrain? That takes serious hardware chops. Fortunately, NASA’s Jet Propulsion Laboratory (JPL) isn't gatekeeping their designs. They've handed us the blueprints.

The **JPL Open Source Rover (OSR)** is a build-it-yourself, scaled-down version of the actual 6-wheel rover architecture that JPL uses to explore the Martian surface. It’s an incredibly robust research and learning platform designed entirely out of Consumer Off-The-Shelf (COTS) parts. If you want to push your skills in mechanical engineering, software, and robotics, this is the ultimate weekend (or rather, multi-month) project.

![OSR Lit Up Shot](https://github.com/nasa-jpl/open-source-rover/raw/master/images/lit_up_shot.jpg)

![OSR Side Outside](https://github.com/nasa-jpl/open-source-rover/raw/master/images/osr-side-outside.jpg)

## Why Build the OSR? 

JPL’s motivation here is clear: inspire the next generation of roboticists. Prototyping rugged terrain vehicles is usually prohibitively expensive. The OSR brings that cost down significantly while retaining the core mechanical principles of a real space exploration vehicle. 

It’s been around since 2017, heavily iterated upon, and explicitly designed for modularity. You aren't just building a remote-controlled car—you are building a platform ready for expansions like robotic arms, sensor arrays, and head displays.

Check out the rover in action navigating rugged terrain:

<iframe width="560" height="315" src="https://www.youtube.com/embed/exHqc_Vuifw" frameborder="0" allowfullscreen></iframe>
*(Video Thumbnail Reference:)*  
[![Youtube Thumbnail](https://github.com/nasa-jpl/open-source-rover/raw/master/images/youtube-thumbnail.png)](https://youtu.be/exHqc_Vuifw)

## Under the Hood: Specs and Driving Mechanics

Unlike your standard 4-wheel hobby bot, the OSR mimics real Martian driving mechanics. 

![OSR Onshape Animation](https://github.com/nasa-jpl/open-source-rover/raw/master/images/osr-onshape.gif)

Here is a quick look at the base specifications before we dive into the engineering:

| Specification | Value |
| --- | --- |
| **Top Speed** | ~1.6m/s (A slow running pace; highly subject to motor selection) |
| **Total Motors** | 10 independent motors |
| **Structural Material** | Aluminum |
| **Total Build Cost** | ~$1600 (Roughly the cost of a TurtleBot 3 Waffle) |

![Rover CAD](https://github.com/nasa-jpl/open-source-rover/raw/master/images/rover.png)

### The Holy Trinity of Rover Mechanics

The magic of the OSR lies in three specific engineering principles that keep it stable and maneuverable over jagged rocks:

*   **Rocker-Bogie Suspension:** If you’ve ever watched a Mars rover crawl over a boulder, you’ve seen this. It ensures all 6 wheels maintain continuous contact with the ground, maximizing traction.
*   **Differential Pivot:** This mechanism allows the rover to mechanically offload weight from one side to the other while climbing, preventing tipping and loss of torque.
*   **6-Wheel Ackerman Steering:** A sophisticated steering mechanism governing the angle and speed of each wheel independently to execute precise turns without dragging tires.

To make the mechanical assembly painless, the OSR relies heavily on structural components from [GoBilda](https://www.gobilda.com/). 

## The Brains and Power Systems

At the core of this beast sits a **Raspberry Pi**. It handles the inverse kinematics, processes inputs, and pushes commands to the motor controllers. The beauty of using a Pi is extreme versatility—whether you want to interface via Bluetooth, WiFi, or fully autonomous ROS (Robot Operating System) navigation nodes, the infrastructure is there.

Power management is critical for a rig this heavy. Running a 7.2Ah LiPo battery yields about 3 hours of rough-terrain driving. 

![Power Usage Chart](https://github.com/nasa-jpl/open-source-rover/raw/master/images/power_usage_osr.png)

> **Pro-Tip on LiPo Batteries:** 
> When the voltage drops below 13-14V, the rover will automatically power down. **Never bypass this.** Discharging a LiPo battery too far will permanently damage the cells, drastically lowering its lifetime or making it an active fire hazard when recharging. If you need more uptime, wire a hot-swappable secondary battery.

## Skills and Tools Required

Don't let the "no prior skills required" disclaimer fool you into thinking this is a Lego set. Expect to commit **at least 100 person-hours** to the build. You’re going to get your hands dirty.

![OSR Onshape](https://github.com/nasa-jpl/open-source-rover/raw/master/images/osr_onshape.png)

### The Skill Stack
1. **Fabrication:** No heavy metal machining is strictly required for the base version, but you’ll want to be comfortable with a band saw/Dremel, a drill press, and basic filing.
2. **Electronics:** You are going to be building custom wire harnesses. Soldering, crimping, and reading a multimeter for electrical debugging are mandatory.
3. **Software:** Basic familiarity with Linux terminal environments, Git, Python, and ROS will save you massive headaches when compiling the `osr-rover-code` repo.

### The Tool Box
You’ll need metric hex keys, wire snips, strippers, a solid soldering iron, and a digital multimeter. 
*Optional but highly recommended:* A 3D printer for custom mounts, a laser cutter for body plates, and a benchtop power supply so you don't drain your LiPo during desk testing.

## The Build Roadmap

Ready to start? Here is your exact sequence of operations:

1. **Order Parts:** Grab the official parts list. *(Note: Educators can grab a 15% discount at GoBilda by submitting their educational forms).*
2. **Create the Wiring:** Cables run deep into the rocker-bogie and corner assemblies. Build your harnesses first.
3. **Make the Electronics:** Solder up the Printed Circuit Board (PCB) and test the peripheral connections.
4. **Mechanical Assembly:** Build the body, assemble the rocker-bogies, and mount the 10 motors. 
5. **Software Configuration:** Flash your Raspberry Pi, install ROS, and clone the codebase. 
6. **Deploy Upgrades:** This is where the real fun starts. Add sonar, IMUs for closed-loop driving, or computer vision tracking.

## Open Source Hardware Certified

The OSR isn't just a code dump; it's a thriving ecosystem. It holds an official Open-Source Hardware certification.

![OSHWA Mark](https://github.com/nasa-jpl/open-source-rover/raw/master/images/OSHWA_mark.png)

If you hit a wall during your build, there's an active Slack community of hundreds of builders debugging, modding, and helping each other out.

[![Slack Logo](https://github.com/nasa-jpl/open-source-rover/raw/master/images/slack_logo.png)](https://join.slack.com/t/opensourcerover/shared_invite/zt-mfe0viua-FhcYsNb3S9vUra99uF3IBw)

The project has garnered massive traction over the years, as seen in the repository's star history:

![Star History Chart](https://camo.githubusercontent.com/58b13547e4534b118b483bb4226d9bea87be062ac1bee9d4c4d6f85961800bae/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d6e6173612d6a706c2f6f70656e2d736f757263652d726f76657226747970653d44617465)

## Alternative Rover Projects

If the $1600 price tag or 100-hour build time is too steep for your current lab budget, the open-source community has spun off a few fantastic, cheaper (though arguably more fragile) alternatives:

*   **[Sawppy Rover](https://hackaday.io/project/158208-sawppy-the-rover):** A highly accessible build relying heavily on 3D printed components and standard hobby servos.
*   **[ESA ExoMy](https://github.com/0xD0M1M0/ExoMy):** The European Space Agency's take on an educational rover. It’s significantly smaller, entirely 3D printable, and very approachable for beginners.
*   **[Jakkra's Mars Rover](https://github.com/jakkra/Mars-Rover):** A driveable Curiosity/Perseverance inspired replica that leans heavily into 3D printing.

## Time to Start Building

NASA JPL has open-sourced an absolute masterclass in mechanical design and robotic mobility. Whether you are a university research team needing a rugged autonomous platform, or a dedicated maker looking to conquer the ultimate weekend project, the OSR delivers. 

Order your extrusions, heat up the soldering iron, and get to work. Mars is waiting.

![OSR on the beach](https://github.com/nasa-jpl/open-source-rover/raw/master/images/beach_osr.jpg)

*(Disclaimer: Reference to specific commercial products like GoBilda does not imply endorsement by the US Government or JPL. Licensed under Apache License 2.0.)*