// ==UserScript==
// @name         YouTube Video Change Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically refreshes the video when it changes on YouTube without causing annoyance to the user.
// @author       Your Name
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

/**
 * @function observeVideoChanges
 * @description Initializes a MutationObserver to watch for changes in the video container.
 */
(function observeVideoChanges() {
    'use strict';

    // Find the video element
    const videoElement = document.querySelector('video');

    /**
     * @function reloadVideo
     * @description Reloads the video without causing a page reload.
     */
    function reloadVideo() {
        // Store the current video source
        const currentSource = videoElement.src;

        // Change the video source to force a reload
        videoElement.src = '';

        // Set a small timeout to avoid issues with reloading
        setTimeout(() => {
            // Restore the original video source
            videoElement.src = currentSource;
        }, 100);
    }

    // Initialize a MutationObserver to watch for changes in the video container
    const observer = new MutationObserver(mutations => {
        // Check each mutation for changes in the video player
        mutations.forEach(mutation => {
            // Check if the mutation target is the video player
            if (mutation.target && mutation.target.id === 'movie_player') {
                // Check if the video source has changed
                if (mutation.oldValue !== mutation.target.src) {
                    // Reload the video if the video source has changed
                    reloadVideo();
                }
            }
        });
    });

    // Define the configuration options for the MutationObserver
    const config = {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['src']
    };

    // Start observing mutations in the body element with the defined configuration
    observer.observe(document.body, config);
})();
