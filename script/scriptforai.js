function generateStudyPlan() {
    let subjectName = document.getElementById("subjectName").value;
    let studyHours = parseInt(document.getElementById("studyHours").value);
    let studyMethod = document.getElementById("studyMethod").value;
    let difficultyLevel = document.getElementById("difficultyLevel").value;

    // Validate inputs
    if (!subjectName || !studyHours || studyHours < 1 || studyHours > 10) {
        alert("Please enter a valid subject and study hours (1-10).");
        return;
    }

    // Generate Study Plan Header
    let studyPlan = `<h3>📚 Subject: ${subjectName}</h3>`;
    studyPlan += `<p>⏳ Study Time: ${studyHours} hours | 🎯 Method: ${studyMethod} | 📊 Difficulty: ${difficultyLevel}</p>`;
    studyPlan += `<h3>📆 Study Timetable:</h3>`;

    // Generate Schedule based on input
    let schedule = generateSchedule(studyHours, studyMethod, difficultyLevel);
    studyPlan += schedule;

    // Display Study Plan
    document.getElementById("aiStudyOutput").innerHTML = studyPlan;

    // Generate AI Insights based on method and difficulty
    let aiInsights = generateAIInsights(studyMethod, difficultyLevel);
    document.getElementById("aiInsightsOutput").innerHTML = aiInsights;
}

// Generate Study Schedule based on Method and Difficulty
function generateSchedule(hours, method, difficulty) {
    let schedule = "";
    let startHour = 9; // Study starts at 9 AM

    for (let i = 0; i < hours; i++) {
        let sessionTime = startHour + i;
        let formattedTime = sessionTime >= 12 ? `${sessionTime - 12} PM` : `${sessionTime} AM`;

        schedule += `<div class="session"><b>⏰ ${formattedTime}</b> - `;

        // Different schedule activities based on method
        if (method === "pomodoro") {
            schedule += `Study 25 min, Break 5 min`;
        } else if (method === "feynman") {
            schedule += `Explain Concepts Aloud`;
        } else if (method === "activeRecall") {
            schedule += `Use Flashcards & Self-Testing`;
        } else if (method === "spacing") {
            schedule += `Review Old & New Topics`;
        }

        schedule += `</div>`;
    }

    return schedule;
}

// Generate Dynamic AI Insights based on Study Method and Difficulty
function generateAIInsights(method, difficulty) {
    let insights = `<h3>🔍 AI Study Tips:</h3>`;

    // Customize insights based on study method
    if (method === "pomodoro") {
        insights += `<p>🍅 <b>Pomodoro Technique:</b> Focus for 25 minutes, then take a 5-minute break to keep your brain refreshed!</p>`;
    } else if (method === "feynman") {
        insights += `<p>🧠 <b>Feynman Technique:</b> Teaching what you learn helps reinforce concepts! Speak out loud as if you’re explaining to someone.</p>`;
    } else if (method === "activeRecall") {
        insights += `<p>🔄 <b>Active Recall:</b> Use flashcards and quiz yourself regularly to improve memory retention.</p>`;
    } else if (method === "spacing") {
        insights += `<p>📆 <b>Spaced Repetition:</b> Reviewing concepts periodically boosts long-term memory retention. Plan your study sessions accordingly.</p>`;
    }

    // Customize insights based on difficulty level
    if (difficulty === "Easy") {
        insights += `<p>🟢 <b>Easy Study:</b> Focus on understanding concepts at a fundamental level. Keep study sessions short and frequent.</p>`;
    } else if (difficulty === "Medium") {
        insights += `<p>🟠 <b>Medium Study:</b> Challenge yourself, but ensure you review material regularly to reinforce your learning.</p>`;
    } else if (difficulty === "Hard") {
        insights += `<p>🔴 <b>Hard Study:</b> Be prepared for longer sessions and deep learning. Use active recall and spaced repetition for maximum retention.</p>`;
    }

    // Common tips for all difficulty levels
    insights += `<p>💡 <b>Time Optimization:</b> Avoid distractions, focus on deep work!<br>🚀 <b>Exam Strategy:</b> Test yourself daily using quick quizzes.<br>🏆 <b>Retention Boost:</b> Use mind maps and spaced repetition for better memory!</p>`;

    return insights;
}
