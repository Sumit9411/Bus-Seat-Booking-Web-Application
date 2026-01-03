# Online Bus Seat Booking Application

A responsive, interactive frontend web application for booking bus seats. This project allows users to view a visual layout of a bus, select seats, and calculate total fares in real-time.

## 🚀 Features

- **Interactive Seat Map:** Visual representation of bus seats using CSS Grid, including a realistic aisle layout.
- **Real-Time Fare Calculation:** Automatically updates the total price and seat count as users select seats.
- **Seat Status Indicators:**
  - **Gray:** Available
  - **Cyan:** Selected (Ready to book)
  - **Red:** Booked (Occupied)
- **Validation:** Prevents selection of already booked seats and ensures a seat is chosen before confirmation.
- **Responsive Design:** Optimized layout for both desktop and mobile screens.

## 📂 Project Structure

The project is organized into three separate files to maintain clean code separation (Structure, Style, and Logic).

```text
/ (Root Directory)
│
├── index.html      # Main HTML structure (DOM elements)
├── style.css       # CSS styling (Grid layout, colors, responsiveness)
├── script.js       # JavaScript logic (Event listeners, fare calculation)
└── README.md       # Project documentation

```

## 🛠️ Technologies Used

* **HTML5:** Semantic markup.
* **CSS3:** CSS Grid (for seat layout), Flexbox, and Media Queries.
* **JavaScript (ES6):** DOM manipulation and event handling.

## ⚙️ How to Run

Since this is a static web application, no backend server or installation is required.

1. **Clone or Download** this repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the **same folder**.
3. **Double-click** `index.html` to open it in your default web browser.

## 🧩 Key Logic Highlights

### The Aisle Layout

The aisle in the middle of the bus is created using pure CSS Grid logic without empty HTML elements. Every 3rd seat in a row is forced to skip a column:

```css
/* style.css */
.seat-layout div:nth-of-type(4n-1) {
    grid-column: 4; 
}

```

### Local Booking Simulation

When you click **"Confirm Booking"**, the JavaScript simulates a backend update by converting `selected` seats to `booked` locally:

```javascript
/* script.js */
selectedSeats.forEach(seat => {
    seat.classList.remove('selected');
    seat.classList.add('booked');
});

```

## 🔮 Future Improvements

* Add a backend (Node.js/Python) to save bookings permanently.
* Add a "Movie Style" ticket receipt modal after booking.
* Allow users to select different bus types (Sleeper vs. Seater).

## 📄 License

This project is open source and available for educational purposes.

```

---

### How to organize your folder
Based on your request, ensure your folder looks exactly like this for the code to work:

1.  Create a folder named `BusBookingProject`.
2.  Inside that folder, you should have these 4 files:
    * `index.html`
    * `style.css`
    * `script.js`
    * `README.md`

Would you like to know how to host this on **GitHub Pages** so you can share a live link with others?

```
