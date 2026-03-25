// 1. Find the button and the title in our HTML document
const button = document.getElementById('color-button');
const title = document.getElementById('main-title');

// 2. Create an array of hex color codes to choose from
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFE933'];

// 3. Add a "click" event listener to the button
button.addEventListener('click', function() {
    // Pick a random color from our array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the color of the text
    title.style.color = randomColor;
    
    // Change the text itself
    title.innerText = "You clicked the button!";
});
document.getElementById("analyze-btn").addEventListener("click", () => {
    if (!weatherData) return; 

    const maxTemps = weatherData.temperature_2m_max;
    
    // Find the highest number in the array
    const absoluteMax = Math.max(...maxTemps);
    
    // Find the index (position) of that highest temperature
    const hottestIndex = maxTemps.indexOf(absoluteMax);
    
    // Use that same index to find the corresponding date
    const hottestDate = weatherData.time[hottestIndex];

    document.getElementById("analysis-result").innerHTML = 
        `🔥 The hottest day this week will be ${hottestDate} with a high of ${absoluteMax}°F!`;
});
