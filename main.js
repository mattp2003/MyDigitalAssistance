function timeUpdate() {
    const time_obj = document.querySelector('.time');
    const current_time = new Date(); // current time
  
    let hours = current_time.getHours();     // stores hours
    let minutes = current_time.getMinutes(); // stores minutes
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    if (hours === 0){   // hours is 12am or 12pm if it equals 0
        hours = 12;
    }

  
    // Add leading zeros to minutes
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
  
    const format = `${hours}:${minutes}${ampm}`;
  
    // Update value on HTML
    time_obj.textContent = format;
  }
  
  // Update the time
  timeUpdate();
  setInterval(timeUpdate, 60000);
  