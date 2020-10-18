FROM node:14.14.0-alpine3.12

# ===== common area =====
RUN apk add --no-cache fish git openssh curl wget
COPY .config/fish/config.fish /root/.config/fish/config.fish
# =======================

# === Vue.js ===
RUN npm install -g vue@3.0.1 @vue/cli@4.5.7
# ==============