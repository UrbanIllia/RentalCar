RentalCar
Project Overview
RentalCar is a car rental web application developed from scratch as part of an educational project. The goal was to create a complete user interface for a company offering vehicle rental services. The project is built using React with a modern tech stack and integrated with a real backend API.
Features
The application allows users to:

Browse available cars in the catalog.
Filter vehicles by brand, price, and mileage.
Add cars to a "Favorites" list with persistence across page reloads.
View detailed information about a selected car.
Book a car by submitting a rental form with validation and success notification.

The application uses an external API to fetch car listings, supporting server-side filtering and pagination for a fast and realistic catalog experience.
Main Pages

Home — features a banner and a call-to-action button to explore the catalog.
Catalog — displays car cards, filtering options, and a "Load More" button for pagination.
Car Details — shows detailed car information and a rental booking form.

Technologies Used

⚛️ React + Vite — for fast and modular development.
📦 Redux Toolkit — for centralized state management.
🌐 React Router — for client-side routing.
🔗 Axios — for handling API requests.
🎨 CSS Modules — for structured and scalable styling.
📅 React Datepicker — for date selection in the booking form.
✅ Formik + Yup — for form management and validation.

Key Implementation Details

✅ Filtering is performed on the server, not on the client side.
📥 Pagination is implemented via a "Load More" button that fetches data from the backend.
⭐ The "Favorites" list is stored in localStorage and restored on page reload.
📝 The booking form includes field validation and success notifications.
🚗 Mileage values are auto-formatted with spaces (e.g., 5 000 km).

Installation and Setup

Clone the repository:git clone <repository-url>

Install dependencies:npm install

Run the project:npm run dev

Open the application in your browser: http://localhost:5173.

Usage

Navigate to the homepage (/) and click "View Catalog" to access the catalog.
On the catalog page (/catalog), use the filters to search for cars by brand, price, or mileage.
Click the "Read more" button on a car card to view its details.
On the details page, fill out the booking form to rent a car and receive a success notification.

Author

Name: [Your Name]
Email: [Your Email]
GitHub: [Your GitHub Profile]
