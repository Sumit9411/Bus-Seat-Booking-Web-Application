// Constants
const TICKET_PRICE = 20;

// DOM Elements
const container = document.querySelector('.seat-layout');
// We select seats only inside the container to avoid counting the legend
const seats = container.querySelectorAll('.seat:not(.booked)');
const countDisplay = document.getElementById('count');
const totalDisplay = document.getElementById('total');
const seatsDisplay = document.getElementById('selected-seats-display');
const bookBtn = document.getElementById('book-btn');

// Function to update total count and price
function updateSelectedCount() {
    // FIX 1: Use 'container.querySelectorAll' instead of 'document.querySelectorAll'
    // This ensures we only count seats inside the bus grid, not the legend.
    const selectedSeats = container.querySelectorAll('.seat.selected');
    
    const selectedSeatIds = [...selectedSeats].map(seat => seat.getAttribute('data-id'));
    const selectedSeatsCount = selectedSeats.length;

    countDisplay.innerText = selectedSeatsCount;
    totalDisplay.innerText = selectedSeatsCount * TICKET_PRICE;
    
    if (selectedSeatsCount > 0) {
        seatsDisplay.innerText = selectedSeatIds.join(', ');
    } else {
        seatsDisplay.innerText = 'None';
    }
}

// Event Listener: Seat Click
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Event Listener: Submit Button
bookBtn.addEventListener('click', () => {
    // FIX 2: Again, search only inside the container
    const selectedSeats = container.querySelectorAll('.seat.selected');
    
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
    } else {
        const cost = totalDisplay.innerText;
        alert(`Booking Confirmed!\nTotal Cost: $${cost}`);
        
        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
            seat.classList.add('booked');
        });
        
        updateSelectedCount();
    }
});