// ==UserScript==
// @name         YouTube Subtitles Logger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Log YouTube video subtitles and their information to the console
// @author       Your Name
// @match        https://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to fetch subtitles and log them to the console
    function fetchAndLogSubtitles(videoId) {
        // YouTube Data API key
        const apiKey = 'AIzaSyB7ZjxI8IlxD59jE21EE2RvqiYj7-2AcCg';

        // URL for fetching subtitles
        const apiUrl = `https://www.googleapis.com/youtube/v3/i18nLanguages?part=snippet&videoId=${videoId}&key=${apiKey}`;

        // Fetch subtitles data
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('Subtitles for video:', data.items);
                // Log additional subtitle information as needed
            })
            .catch(error => console.error('Error fetching subtitles:', error));
    }

    // Function to get video ID from YouTube URL
    function getVideoIdFromUrl(url) {
        const videoIdRegex = /[?&]v=([^&#]+)/;
        const match = url.match(videoIdRegex);
        return match ? match[1] : null;
    }

    // Main function to run on YouTube video pages
    function main() {
        // Get YouTube video ID from URL
        const videoUrl = window.location.href;
        const videoId = getVideoIdFromUrl(videoUrl);

        if (videoId) {
            // Fetch and log subtitles
            fetchAndLogSubtitles(videoId);
        } else {
            console.error('Error: Unable to extract video ID from URL');
        }
    }

    // Run main function when the page is loaded
    window.addEventListener('load', main);
})();
