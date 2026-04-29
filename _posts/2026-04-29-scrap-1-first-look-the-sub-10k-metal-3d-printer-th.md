---
layout: post
title: "Scrap 1 First Look: The Sub-$10k Metal 3D Printer That Might Actually Work"
description: "Scrap Labs just debuted a desktop metal LPBF printer for under $10k. It's rough around the edges, but the Scrap 1 might just change the benchtop manufacturing game."
tags: [3D Printing, Hardware, Scrap Labs, LPBF, Metal Printing, Engineering, Manufacturing]
image: "https://i.all3dp.com/workers/images/fit=scale-down,w=1920,h=1080,gravity=0.5x0.5,format=auto/wp-content/uploads/2026/04/24121539/Scrap-hero-scaled.jpg"
---

Metal 3D printing on a workbench usually involves a couple of zeroes too many on the price tag, or an FDM filament setup that shrinks unpredictably and forces you to outsource the actual sintering. So when I heard a startup was promising a legitimate Laser Powder Bed Fusion (LPBF) system for under $10,000, my "vaporware" alarm went off immediately.

But Scrap Labs isn’t running a Kickstarter campaign. At the Rocky Mountain RepRap Festival (RMRRF) in Loveland, Colorado last week, they showed up with real hardware: the **Scrap 1**. 

It looks a bit like an Easy-Bake Oven compared to industrial behemoths from EOS or NikonSLM, and admittedly, the platform isn’t fully baked yet. But getting real, 99%-dense metal parts out of a machine that costs less than a used Honda Civic is a massive deal.

![Scrap 1 Printer Hardware](https://www.scraplabs3d.com/_next/image?url=%2Fassets%2FScrap%201%20Product%20Photo-01.JPG&w=3840&q=75&dpl=dpl_2tkcjjKJBa51oH7iv3vxYxLqct8C)

### First Principles and Klipper in a Metal Printer

Scrap Labs is run by Matt Woods, an engineer who previously printed production rocket components at SpaceX. Instead of building a cheaper clone of an industrial machine, they approached the Scrap 1 from first principles to target makers, research labs, and small shops. 

> **“I've worked on metal printers from nearly every major manufacturer... Once you identify where innovation truly needs to happen, and you compound enough small engineering innovations that boost efficiency and cut waste, the numbers finally start to add up.”** 
> *— Matt Woods, Founder and CEO of Scrap Labs*

The most fascinating engineering decision? They ditched the ultra-expensive, highly complex galvo laser systems. Instead, the Scrap 1 uses a gantry-mounted fiber-coupled laser. Yes, this limits scan speed and increases the localized heat input—which can cause some warping or overbled walls—but it violently slashes the bill of materials. 

Even better, they aren't locking down the ecosystem. The Scrap 1 runs on **Klipper** firmware. It interfaces with familiar open-source slicers:

*   `PrusaSlicer`
*   `OrcaSlicer`
*   `ScrapSlicer` (their in-house fork)

### The Specs: What $9,600 Gets You

You won't be printing engine blocks with this, but for small brackets, custom toolheads, and lab components, the hardware is remarkably dialed in.

| Specification | Details |
| :--- | :--- |
| **Build Volume** | 100 × 100 × 100 mm (4 × 4 × 4 in) |
| **Laser** | Single 200W (915 nm), ~135 μm spot size |
| **Layer Thickness** | 20 to 100 μm |
| **Materials** | Stainless steel, tool steel, copper, nickel alloys, cobalt-chrome |
| **Power Requirements** | 100-240V AC, single phase (500W max, 250W avg) |
| **Gas / Filtration** | Argon or Nitrogen (5 SCFH) / HEPA filter |
| **Weight** | 30 kg (66 lbs) |

*Note how lightweight it is. At just 30 kg, it’s wildly light for an LPBF machine. I am slightly concerned about how environmental factors might affect its structural rigidity and print consistency over time, but the closed-loop XY positioning should mitigate some of the variance.*

### Is the Print Quality Actually Usable?

Scrap Labs brought some sample parts to RMRRF. Are they completely perfect, aerospace-grade prints straight off the bed? Not quite. The surface finish is a bit rougher than a six-figure Farsoon machine, but the parts are fully dense and highly functional.

![Scrap Lab Printed Metal Parts](https://i.all3dp.com/workers/images/fit=scale-down,w=1200,gravity=0.5x0.5,format=auto/wp-content/uploads/2026/04/24122218/scrap-lab-parts.jpg)

The fact that you can print tool steel and copper on a standard 120V wall outlet using a browser-based dashboard is borderline magic. They also properly integrated a gas purge system and liquid/air cooling, meaning you aren't sacrificing basic safety protocols just to save a buck. Handling ultra-fine metal powder is still a hazard you need to respect, but the hardware provides the right interfaces for it.

### Pricing and Availability 

Scrap Labs is currently in their Phase 02, onboarding alpha testers and continuing validation. They are taking pre-orders with an expected ship date of early 2027 (with some estimates pointing to June). 

If you're willing to assemble the machine yourself, early-bird kit pricing is **$9,600** through the end of April 2026. Wait until May, and that kit price jumps 48% to **$14,200**.

> **Pro-Tip:** If you don't want to spend three days calibrating a laser system and dealing with factory acceptance testing, buy the fully assembled unit for **$17,990**. It sounds steep next to the kit, but for a functional LPBF machine, it's an absolute steal.

If you run a small production space, a university lab, or an independent hardware shop, you need to keep your eyes on this machine. The Scrap 1 isn't aiming to replace industrial arrays, it's aiming to commoditize the process. 

Are you brave enough to pre-order a V1 desktop metal printer, or are you waiting for the reviews in 2027? Hit me up in the comments or on Twitter and let's argue about gantry vs. galvo lasers.