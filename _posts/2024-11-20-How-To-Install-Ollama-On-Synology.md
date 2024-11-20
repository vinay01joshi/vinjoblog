---
layout: post
title:  "How to install Ollama on Synology NAS"
date:   2024-11-20 03:18:36 +0530
categories: Synology

---




```
version: "3.9"
services:
  api:
    image: ghcr.io/getumbrel/llama-gpt-api:latest
    container_name: LlamaGPT-api
    hostname: llamagpt-api
    mem_limit: 8g
    cpu_shares: 768
    security_opt:
      - no-new-privileges:true
    environment:
      MODEL: /models/llama-2-7b-chat.bin
      MODEL_DOWNLOAD_URL: https://huggingface.co/TheBloke/Nous-Hermes-Llama-2-7B-GGML/resolve/main/nous-hermes-llama-2-7b.ggmlv3.q4_0.bin
      USE_MLOCK: 1
    cap_add:
      - IPC_LOCK
    restart: on-failure:5

  front:
    image: ghcr.io/getumbrel/llama-gpt-ui:latest
    container_name: LlamaGPT
    hostname: llamagpt
    mem_limit: 1g
    cpu_shares: 768
    security_opt:
      - no-new-privileges:true
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:3000
    ports:
      - 3136:3000
    environment:
     - 'OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXX'
     - 'OPENAI_API_HOST=http://llamagpt-api:8000'
     - 'DEFAULT_MODEL=/models/llama-2-7b-chat.bin'
     - 'WAIT_HOSTS=llamagpt-api:8000'
     - 'WAIT_TIMEOUT=600'
    restart: on-failure:5
    
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NzI2NDgxOTddfQ==
-->