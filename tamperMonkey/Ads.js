// ==UserScript==
// @name         YouTube Ads Detector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Detects if an ad is played at the beginning of a YouTube video.
// @author       Your Name
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to check if an ad is played at the beginning of a video
    function checkAds() {
        // Check if the video player exists
        const videoPlayer = document.querySelector('video');
        if (!videoPlayer) return;

        // Check if the video player is showing a pre-roll ad
        const preRollAd = document.querySelector('.video-ads.ytp-ad-module');
        if (preRollAd) {
            console.log('The ad has been broadcast');
        } else {
            console.log('The ad has not been played');
        }
    }

    // Check for ads when the document is ready
    document.addEventListener('DOMContentLoaded', function() {
        checkAds();
    });

    // Listen for changes in the video player
    document.addEventListener('yt-navigate-finish', function() {
        checkAds();
    });
})();
