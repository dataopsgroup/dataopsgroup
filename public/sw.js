
// Service Worker - Main Entry Point with Bot Detection
// This is a facade that imports functionality from modular files

importScripts('./sw/config.js');
importScripts('./sw/bot-detection.js');
importScripts('./sw/cache-strategies.js');
importScripts('./sw/cache-utils.js');
importScripts('./sw/event-handlers.js');

