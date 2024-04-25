// ==UserScript==
// @name         YouTube Video Control Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script adds a custom control button to the YouTube video player bar.
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

/**
 * Function to add a custom control button to the YouTube video player bar.
 * @function
 * @name addCustomButton
 */
(function addCustomButton() {
    'use strict';

    // Wait for the video player to be loaded
    var waitForPlayer = setInterval(function () {
        var videoPlayer = document.querySelector('.html5-video-player');
        if (videoPlayer) {
            clearInterval(waitForPlayer);

            // Create a button element with SVG icon
            var customButton = document.createElement('button');
            customButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                </svg>
            `;
            customButton.style.color = '#c3c3c3';
            customButton.style.backgroundColor = 'transparent';
            customButton.style.padding = '5px 10px';
            customButton.style.border = 'none';
            customButton.style.cursor = 'pointer';
            customButton.style.marginTop = '4.5px';
            customButton.style.marginRight = '6.5px';

            // Create a dropdown menu
            var dropdownMenu = document.createElement('div');
            dropdownMenu.style.display = 'none'; // Initially hide the dropdown menu
            dropdownMenu.style.position = 'absolute';
            dropdownMenu.style.bottom = '62px'; // Position the dropdown menu below the button
            dropdownMenu.style.backgroundColor = '#f9f9f9';
            dropdownMenu.style.minWidth = '100px';
            dropdownMenu.style.border = 'none';
            dropdownMenu.style.zIndex = '1';
            dropdownMenu.style.backgroundColor = '#f9f9f9'; // Background color
            dropdownMenu.style.color = '#333'; // Text color
            dropdownMenu.style.border = '1px solid #ccc'; // Border
            dropdownMenu.style.borderRadius = '5px'; // Rounded corners
            dropdownMenu.style.padding = '10px'; // Padding
            dropdownMenu.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Box shadow

            // Add options to the dropdown menu
            var options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
            options.forEach(function (option) {
                var menuItem = document.createElement('div');
                menuItem.innerHTML = option;
                menuItem.style.height = '40px';
                menuItem.style.cursor = 'pointer';
                menuItem.addEventListener('click', function () {
                    // Handle click on menu item
                    alert(option + ' clicked!');
                });
                dropdownMenu.appendChild(menuItem);
            });

            // Append dropdown menu to custom button
            customButton.appendChild(dropdownMenu);

            // Toggle dropdown menu visibility on custom button click
            customButton.addEventListener('click', function () {
                dropdownMenu.style.display = (dropdownMenu.style.display === 'none') ? 'block' : 'none';
            });

            // Find the control bar element
            var controlBars = videoPlayer.getElementsByClassName('ytp-chrome-controls');
            if (controlBars.length > 0) {
                var controlBar = controlBars[0];
                // Find the last button in the control bar
                var lastButton = controlBar.querySelector('.ytp-right-controls');
                // Insert the custom button before the last button
                controlBar.insertBefore(customButton, lastButton);
            }
        }
    }, 1000);
})();