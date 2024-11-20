---
layout: post
title:  "How to install Ollama on Synology NAS"
date:   2024-11-20 03:18:36 +0530
categories: Synology

---

## Introduction
This blogs is showing how you can install ollama web and server on your Synology nas with in docker container, I am using [Portainer](https://www.portainer.io/)
to create stack copy and paste this on your portainer stack editor and deploy new stack as ollama.

## PreRequisite
Create 3 folder with in the docker folder 
- data
- entirypoint
- webui

create `entrypoint.sh` file to bootstrap `ollama` server with in docker hence save this file on `/volume1/docker/ollama/enttrypoint` folder.
```
#!/bin/bash

# Starting server
echo "Starting server"
ollama serve &
sleep 1

# Splitting the models by comma and pulling each
IFS=',' read -ra MODELS <<< "$model"
for m in "${MODELS[@]}"; do
    echo "Pulling $m"
    ollama pull "$m"
    sleep 5
    # echo "Running $m"
    # ollama run "$m"
    # No need to sleep here unless you want to give some delay between each pull for some reason
done

# Keep the script running to prevent the container from exiting
wait
```
    

## Stack File
```
services:
  webui:
    container_name: OLLAMA-WEBUI
    image: ghcr.io/open-webui/open-webui:0.3
    volumes:
      - /volume1/docker/ollama/webui:/app/backend/data:rw
    environment:
      OLLAMA_BASE_URL: http://ollama:11434
    healthcheck:
      test: timeout 10s bash -c ':> /dev/tcp/127.0.0.1/8080' || exit 1
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 90s
    ports:
      - 8271:8080
    restart: on-failure
    depends_on:
      ollama:
        condition: service_healthy

  ollama:
    container_name: OLLAMA
    image: ollama/ollama:latest #For a NAS with an AMD CPU, use the following image ollama/ollama:rocm instead of ollama/ollama:latest
    entrypoint: ["/usr/bin/bash", "/entrypoint.sh"]
    volumes:
      - /volume1/docker/ollama/data:/root/.ollama:rw
      - /volume1/docker/ollama/entrypoint/entrypoint.sh:/entrypoint.sh
    environment:
      MODELS: llama3.2 #Check all the models at the following link https://ollama.com/library - You can separate models by commas like llama3.2,gemma2,mistral
      OLLAMA_INSTALL_MODELS: llama3.2 #Check all the models at the following link https://ollama.com/library - You can separate models by commas like llama3.2,gemma2,mistral
      OLLAMA_HOSTNAME: ollama.yourname.synology.me  # optionaly you can give yourdrive.local:<port>
    ports:
      - 11434:11434
    healthcheck:
      test: ["CMD", "ollama", "--version"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 30s
    restart: on-failure:5

```



<!--stackedit_data:
eyJoaXN0b3J5IjpbNzIyNzczNjQ5LC02MjEwMTgwOTBdfQ==
-->