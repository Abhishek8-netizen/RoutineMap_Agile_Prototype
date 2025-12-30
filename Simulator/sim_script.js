function recommend() {
    const activities = {
        "REST": ["Meditation", " Light Yoga", "Breathing Exercises", "Just Sleep"],
        "LIGHT": ["Short Walk", "Yoga", "Light Stretching Exercises", "Mobility Exercises"],
        "MODERATE": ["Short Run", "Bodyweight Workout", "Cycling", "Recreational Sports"],
        "INTENSE": ["Running", "Heavyweight Workout", "Cycling", "Just Sleep"]
    };

    const age = document.getElementById("exampleInputAge").value;
    const sleepHours = document.getElementById("exampleInputSleepHours").value;
    const moodRating = document.getElementById("mood_rating").value;
    const energyLevel = document.getElementById("energy_level").value;
    const stressLevel = document.getElementById("stress_level").value;
    let recommendation = "MODERATE";

    if (age == 0 || sleepHours == 0) {
        window.alert("Please enter all required fields");
        return;
    }
    else if (sleepHours > 24) {
        window.alert("Sleep hours cannot be more than 24 hours");
        return;
    }
    else {

        if (sleepHours < 6 || stressLevel > 3) {
            recommendation = "REST";
        }

        if ((age >= 55 || energyLevel <= 2) && recommendation != "REST") {
            recommendation = "LIGHT";
        }

        if ((moodRating <= 3 && energyLevel == 3) && recommendation != "REST" && age <= 50) {
            recommendation = "MODERATE";
        }

        if ((moodRating >= 3 && energyLevel > 3) && recommendation != "REST" && age <= 50) {
            recommendation = "INTENSE"
        }
    }

    const activityCards = document.querySelectorAll(".activity_card");
    const activityNames = []

    activityCards.forEach((card) => {
        let name = card.querySelector("h4");
        activityNames.push(name)
    })

    const popupWindow = document.getElementById("activities");
    let intensity = popupWindow.querySelector("h1")
    const bodyGradient = document.getElementById("bodyGradient");

    activityNames.forEach((name, index) => {
        name.textContent = activities[recommendation][index];
    })

    intensity.innerHTML = recommendation;

    popupWindow.style.display = "flex"
    bodyGradient.classList.add("dull");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        popupWindow.classList.add("showPopup");
    })
}

function closePopup() {
    const popupWindow = document.getElementById("activities");
    popupWindow.classList.remove("showPopup");
    bodyGradient.classList.remove("dull");
    document.body.style.overflow = "auto";

    setTimeout(() => {
        popupWindow.style.display = "none";
    }, 500)
}

/****************************************************************************************************************************** */

function addTask() {

    let task_container = document.getElementById("task_container");

    taskInput = document.getElementById("taskInput").value;
    timeInput = document.getElementById("timeInput").value;

    if (taskInput == "") {
        window.alert("Please enter task");
    }

    else {
        let task_card = document.createElement("div")
        let task = document.createElement("h5");
        let time = document.createElement("h6");
        let delete_button = document.createElement("button");
        delete_button.innerHTML = "Delete"

        delete_button.onclick = () => {
            task_card.remove();
        };

        task.innerHTML = taskInput;
        time.innerHTML = timeInput;

        task_card.appendChild(task);
        task_card.appendChild(time);
        task_card.appendChild(delete_button);

        task_container.appendChild(task_card);

        document.getElementById("taskInput").value = "";
        document.getElementById("timeInput").value = "";
    }

}