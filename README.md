
# Will Portfolio

## About Me
DevOps Engineer || Electrical (Automation) Engineer || AI & Robotic Researcher 


- **Programming Languages**: Proficient in Python, JavaScript, HTML, and C#. My projects leverage these languages for backend development, frontend interfaces, and machine learning algorithms.
- **Containerization and Automation**: Experienced with Docker and Kubernetes for containerization, along with Terraform and Ansible for automation. These tools ensure efficient deployment and management of applications across various environments.
- **Cloud and DevOps**: Utilizing Azure and Azure DevOps for cloud computing and CI/CD pipelines, enhancing project delivery speed and reliability. Prometheus is used for monitoring and ensuring the performance of applications.
- **Machine Learning and AI**: Deep knowledge of TensorFlow, PyTorch, CNNs, Reinforcement Learning (RL), and Artificial Neural Networks (ANN). These frameworks and concepts form the backbone of my AI projects, enabling sophisticated data analysis and prediction models.
- **Robotics**: Hands-on experience with cameras, LiDARs, IMUs, GNSS, and ground truth systems such as motion capture and 3D scanning, critical for robotics navigation and environmental interaction.
- **Modeling and Visualization**: Skilled in using Sketchup, AutoCAD, SolidWorks for 3D modeling, alongside ThreeJS, Panda, and Plotly for data visualization, bringing clarity to complex data and concepts.
- **Certifications and Specializations**: I am certified in KNX for building automation and continue to enhance my expertise through ongoing education in fields such as DevOps Engineering and AI and Machine Learning.

## Table of Contents


# Table of Contents

- [WalaaWill Portfolio](#walaawill-portfolio)
  - [About Me](#about-me)
  - [Table of Contents](#table-of-contents)
- [Table of Contents](#table-of-contents-1)
  - [Work Experience Highlights](#work-experience-highlights)
    - [Enhancing Autonomous Robotics with Cognitive RL](#enhancing-autonomous-robotics-with-cognitive-rl)
    - [Aviation Control System Enhancement](#aviation-control-system-enhancement)
    - [Smart Cities and IoT](#smart-cities-and-iot)
  - [Key Projects and Achievements](#key-projects-and-achievements)
  - [Education](#education)
  - [Achievements](#achievements)
    - [UI Enhancements](#ui-enhancements)
      - [Parallax Component for Hero Section](#parallax-component-for-hero-section)
        - [Overview](#overview)
        - [Code Structure](#code-structure)
        - [Properties](#properties)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Installation](#installation)
      - [Running Without a Container](#running-without-a-container)
      - [Running With a Container](#running-with-a-container)
  - [React Application Docker Setup (Deeper Dive in Docker)](#react-application-docker-setup-deeper-dive-in-docker)
      - [Dockerfile Explanation](#dockerfile-explanation)
  - [Building the Docker Image](#building-the-docker-image)
  - [Running the Container for Development (Without SSH "not recomended" )](#running-the-container-for-development-without-ssh-not-recomended-)
  - [Streamline Your Workflow with Docker and SSH](#streamline-your-workflow-with-docker-and-ssh)
    - [Quick Setup Steps](#quick-setup-steps)
  - [Making Changes](#making-changes)
- [Project Deployment Guide](#project-deployment-guide)
  - [Setting Up SSH](#setting-up-ssh)
    - [Generating SSH Keys](#generating-ssh-keys)
    - [Adding SSH Key to GitHub](#adding-ssh-key-to-github)
  - [Configuring Git Identity](#configuring-git-identity)
    - [Setting Git Identity](#setting-git-identity)
  - [Deployment](#deployment)
  - [Deployment from the Container](#deployment-from-the-container)
  - [Docker Image Backup and Deployment](#docker-image-backup-and-deployment)
  - [Protecting Your Design](#protecting-your-design)
  - [License](#license)
  - [Contact Information](#contact-information)



## Work Experience Highlights

### Enhancing Autonomous Robotics with Cognitive RL

My PhD research focuses on enhancing the capabilities of autonomous robotics within multi-agent systems through the integration of cognitive learning and reinforcement learning. This work aims to improve localization, adaptability, and collaboration among robots, making them more effective in real-world tasks.

### Aviation Control System Enhancement

In collaboration with aviation experts, I've worked on optimizing control systems for aircraft. By applying linearized models and the Jacobian matrix, we've been able to enhance the stability and performance of flight systems, contributing to safer and more reliable air travel.

### Smart Cities and IoT

●	Innovative Solutions: Developed cutting-edge cloud systems to provide real-time feedback on the status of lighting, doors, and security. This was further augmented by comprehensive 3D software that replicated the entirety of the estate, facilitating intuitive management and control.
●	Client Engagement: Conducted detailed planning and consultation sessions with the client, a Prince, from the initial meeting through to the design, quoting, and 3D simulation phases, ensuring a fully bespoke smart home solution.


- **Appitunity (R&D Manager, 01/2018 – 01/2022)**: Led 30+ digital marketing projects, significantly increasing web traffic and conversion rates. Managed large teams and coordinated cross-functional efforts in complex technical environments.

## Key Projects and Achievements

- **Smart Home Automation Projects (12/2019)**: Directed 100+ luxury smart home projects, utilizing DALI, KNX, and C-Bus systems. Tripled sales through effective marketing strategies and high-quality YouTube content.
- **Azure DevOps Pipeline (11/2023)**: Demonstrated proficiency in containerization, Azure resource deployments, and CI/CD processes, significantly enhancing deployment efficiency.
- **Unicampus Gazebo Simulation with Jackal Robot (11/2023)**: Created a detailed simulation environment, emphasizing expertise in robotics, SLAM, and autonomous navigation.
- **SLAM and LiDAR Projects (06/2023)**: Focused on navigation and mapping, showcasing a strong foundation in autonomous systems and data analysis.
- **Advanced Mosaicking Image Processing Library (03/2022)**: Developed using OpenCV-Python, demonstrating skills in image processing and deployment via Docker.
- **System Dynamics and Stability Analysis Project (03/2022)**: Investigated RPV dynamics and analyzed stability, leveraging MATLAB for simulation and analysis.

## Education

- **PhD in Robotics, AI, and Autonomous Systems (City University of London, Expected 02/2025)**: Focusing on advanced mathematics and machine learning models.
- **MSc in Artificial Intelligence and Machine Learning (City University of London, 02/2022)**: Mastered generative AI, deep learning, CNNs, and reinforcement learning.
- **BSc Electronic Engineering (International Open University, 07/2013)**: Specialized in embedded systems design, automation, and control systems.

## Achievements

- **1st Place CitySpark Startup Competition (2022)**: For innovative concepts in AI education.
- **Pioneering Home Automation Projects**: Over 100 projects integrating advanced AI technologies.


### UI Enhancements

#### Parallax Component for Hero Section

**Introduction**

On 23rd March, the Hero Section, now referred to as `heroSection`, received an update aimed at enhancing the user interface. A Parallax component was introduced to manage the parallax effect more efficiently, providing a smoother and more visually engaging user experience.

**Implementation Details**

##### Overview
The Parallax component is implemented as a React functional component utilizing hooks (`useState` and `useEffect`) to dynamically adjust the Y-axis offset of its children based on the window's scroll position, thereby achieving a parallax effect.

##### Code Structure

```jsx
import React, { useEffect, useState } from 'react';

const Parallax = ({ children, speed, ...rest }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      setOffsetY(window.pageYOffset);
    });
  }

  useEffect(() => {
    const throttleScroll = (event) => {
      handleScroll();
    };

    window.addEventListener('scroll', throttleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

  return (
    <div {...rest} style={{ transform: `translateY(${offsetY * speed}px)` }}>
      {children}
    </div>
  );
};

export default Parallax;
```

##### Properties
- **children**: The content to be rendered within the Parallax component.
- **speed**: A prop to adjust the speed of the parallax effect, where higher values increase the effect's intensity.

**Usage**

To apply the Parallax effect, wrap the target content with the Parallax component and specify the desired speed of the effect through the `speed` property.


## Getting Started

To explore the projects and code samples included in this repository, follow the installation guide below to set up the environment on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- Git
- Python 3.x
- Node.js


## Installation

This portfolio can be run with or without a container. Below are the instructions for both methods, including a note on potential issues with Windows OS and the importance of using Node.js version 16.

#### Running Without a Container

1. **Clone the repository**:
   ```bash
   git clone git@github.com:wlaa41/Portfolio.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Portfolio
   ```

3. **Install the necessary dependencies** (Ensure Node.js version 16 is installed):
   ```bash
   npm install
   npm install --save-dev sass
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```
   This will launch the project in your default web browser.

*Note for Windows users*: Running the project directly on Windows may lead to potential issues. It is recommended to use a container or Windows Subsystem for Linux (WSL) for a smoother experience.

#### Running With a Container

Using Docker or any compatible container platform can streamline the setup process and mitigate environment-specific issues, especially on Windows.

1. **Build the container image** (Ensure Docker is installed and running):
   ```bash
   docker build -t portfolio .
   ```

2. **Run the container**:
   ```bash
   docker run -p 3000:3000 portfolio
   ```
   Access the portfolio by navigating to `http://localhost:3000` in your web browser.

*Important*: The container version uses Node.js version 16, aligning with the project's dependencies. Ensure that any additional dependencies or environment-specific configurations are accounted for in the Dockerfile or container setup.

---

Regardless of the method chosen, `npm install --save-dev sass` is crucial for proper styling compilation. Ensure this step is not overlooked during setup.


## React Application Docker Setup (Deeper Dive in Docker)

This guide outlines how to containerize a React application using Docker, emphasizing live reloading capabilities during development with hot reloading supported by React Hot Loader and ensuring file change detection with CHOKIDAR_USEPOLLING.

#### Dockerfile Explanation

The Dockerfile sets up an Ubuntu 22.04 environment, installs Node.js, Yarn, and other necessary packages. It uses an environment variable to improve file watching in Docker environments, particularly useful for development on platforms where file change events do not automatically propagate to Docker containers.

```Dockerfile
# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Avoid prompts from apt during installation
ARG DEBIAN_FRONTEND=noninteractive

# Install Node.js (including npm) and other necessary packages
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# Set the working directory in the container
WORKDIR /app

# Install application dependencies
RUN apt-get update && apt-get install -y git && \
    npm install react@16 react-dom@16 react-player && \
    npm install --save-dev sass

# Use polling for file system events for compatibility in Docker
ENV CHOKIDAR_USEPOLLING=true

# Copy the local application files to the container
COPY . /app

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
```

## Building the Docker Image

To build your Docker image, navigate to the directory containing your Dockerfile and run:

```bash
docker build -t <image-name> .
```

Replace `<image-name>` with your preferred name for the Docker image.

## Running the Container for Development (Without SSH "not recomended" )

To run your container and enable live reloading during development, use the following command:

```bash
docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 <image-name>
```

This command mounts your current working directory to `/app` in the container and creates an anonymous volume for `/app/node_modules`, ensuring that the container uses its own `node_modules` and not the host's. This setup is crucial for live reloading to work properly.

`ENV CHOKIDAR_USEPOLLING=true` ensures that file watching works correctly across all development environments, especially necessary for Docker on Windows and macOS.

## Streamline Your Workflow with Docker and SSH 

By sharing your existing SSH key with your Docker container, you can interact with GitHub repositories directly from within the container. This method saves you from generating a new SSH key each time you run an image, streamlining your development process.

### Quick Setup Steps

1. **Verify SSH Key on Windows**:
   ```powershell
   Test-Path C:/Users/<YourUsername>/.ssh
   ```
   Replace `<YourUsername>` with your Windows username.

2. **Run Docker Container with SSH Key**:
   ```powershell
   docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -v C:/Users/<YourUsername>/.ssh:/root/.ssh --name portfolio-ssh-container <your_docker_image_name>
   ```

3. **Access Container's Terminal**:
   ```bash
   docker exec -it portfolio-ssh-container /bin/bash
   ```

4. **Set Correct SSH Key Permissions** (if using `id_ed25519`):
   ```bash
   chmod 600 /root/.ssh/id_ed25519
   ```

5. **Test GitHub SSH Connectivity**:
   ```bash
   ssh -T git@github.com
   ```

This setup not only simplifies SSH key management but also enhances the efficiency of your Git operations within Docker.



## Making Changes

With the container running, any changes made to your files will trigger a reload in your React application, allowing you to see updates in real-time.

---

This setup provides a robust environment for developing React applications with Docker, leveraging the best practices for live reloading and efficient development workflows.

# Project Deployment Guide

This guide provides essential steps for setting up SSH and Git configurations required for deploying your project, especially when working within a Docker container.

## Setting Up SSH

SSH (Secure Shell) is vital for secure communication with repositories hosted on platforms like GitHub. It's particularly crucial when pushing changes or deploying projects from within Docker containers.

### Generating SSH Keys

1. **Open a terminal** in your Docker container or local environment where you need to generate SSH keys.
2. **Generate a new SSH key pair** with the following command:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   Replace `your_email@example.com` with your email address. Press Enter to accept default file locations and enter a passphrase if desired.

3. **Start the ssh-agent in the background**:
   ```bash
   eval "$(ssh-agent -s)"
   ```

4. **Add your SSH private key to the ssh-agent**:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

### Adding SSH Key to GitHub

1. **Copy the SSH public key to your clipboard**:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Then manually copy the displayed key.

2. **Go to GitHub** and navigate to **Settings > SSH and GPG keys > New SSH key**.

3. **Paste your key**, give it a title, and **Add SSH key**.

## Configuring Git Identity

Git requires user identity configuration to associate commits with an individual. This setup is necessary for operations that interact with a Git repository.

### Setting Git Identity

Run the following commands in your Docker container or local environment where you're setting up your project:

1. **Set your Git user name**:
   ```bash
   git config --global user.name "Your Name"
   ```

2. **Set your Git email address**:
   ```bash
   git config --global user.email "you@example.com"
   ```

Replace `"Your Name"` with your actual name and `"you@example.com"` with your email address. These should align with your GitHub account for consistency with GitHub commits.

## Deployment

With SSH and Git configurations set, you're ready to deploy your project. Follow your project-specific deployment instructions, ensuring any operations that require Git or SSH access are now properly authenticated.


## Deployment from the Container

To deploy your application from within the container, follow these steps. This procedure also applies to local deployment from your machine.

1. **Open a new terminal in the container or your local machine**:

You can find the name of the container by runing the command

```bash
docker ps
```
Note: the container name is not the image name.

Then run the command:

```bash
docker exec -it <container_name_or_id> /bin/bash
```

First, ensure you're in the project's root directory. If you're using a container, you might need to attach to your running container or use a terminal within your container management platform.

1. **Build your application**:

Run the following command to compile your application into a static build that can be deployed:

```bash
npm run build
```

This command compiles your application into a `build` directory, containing the static files necessary for deployment.

3. **Deploy your application**:

With your application built, use Yarn to deploy your application to your hosting service:

```bash
yarn deploy
```
![Running Deploy in Docker](media/deployFromDocker.png)


Ensure you have previously configured your hosting service (like GitHub Pages, Netlify, or Vercel) to pick up the static files from the `build` directory for deployment.

*Note*: Both `npm run build` and `yarn deploy` are standard commands for React applications. However, your specific deployment command (`yarn deploy`) may vary based on your hosting provider or deployment setup. Adjust this command based on your deployment process or scripts defined in your `package.json`.


## Docker Image Backup and Deployment

I have successfully backed up a fully operational Docker container that runs perfectly on Windows. This container is set up to deploy and build efficiently. Here's how I accomplished this:

1. **Local Container Execution**:

   I started by running the Docker container on my local Windows machine using Docker Desktop to ensure everything was functioning correctly.

   ![Running Docker Image Locally](media/ImageAndContainerDesktop.png)

2. **Pushing the Image to Docker Hub**:

   To back up the container, I tagged it with my Docker Hub username, `walaab`, and pushed it to the repository.

   ```bash
   docker tag portfolionodemon:latest walaab/portfolionodemon:latest
   docker push walaab/portfolionodemon:latest
   ```

   The push process was visualized in the PowerShell window, confirming that the layers were being uploaded sequentially.

   ![Pushing Docker Image to Docker Hub](media/dockerImagePushToHub.png)

3. **Confirmation on Docker Hub**:

   After pushing the image, I verified on Docker Hub that the image was now stored in the repository named `portfolionodemon`. This serves as a perfect backup and is ready for deployment whenever needed.

   ![Docker Hub Confirmation](media/dockerHubConfilrmSave.png)

You can find the Docker image and the respective backups in my Docker Hub repository at `https://hub.docker.com/r/walaab/portfolionodemon`.

The entire process is documented and verified, showing the effectiveness of using Docker Desktop on Windows to manage container images.

---

## Protecting Your Design

1. **License**: Clearly define the licensing for your project in your `LICENSE.md` file. While you can use a standard license (like MIT, GPL, etc.), you can also create a custom license that specifies the need for explicit permission for certain uses of your work.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details. This means you are free to use, modify, and distribute the projects contained herein, provided that you include the original copyright and permission notice in all copies or substantial portions of the software.

## Contact Information

**Email**: walaa.jamous@city.ac.uk

