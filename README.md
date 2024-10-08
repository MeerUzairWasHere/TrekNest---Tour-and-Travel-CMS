<p align="center">
  <a href="https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS">
    <img src="client/src/assets/images/favicon.svg" alt="Logo" width="80" height="80">
  </a>



  <h3 align="center">TrekNest Travels</h3>

  <p align="center">
    Guiding your adventures, one destination at a time.
    <br/>
    <br/>
    <a href="https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS">View Demo</a>
    .
    <a href="https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS/issues">Report Bug</a>
    .
    <a href="https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS/total) ![Contributors](https://img.shields.io/github/contributors/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS?color=dark-green) ![Stargazers](https://img.shields.io/github/stars/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS?style=social) ![Issues](https://img.shields.io/github/issues/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS) ![License](https://img.shields.io/github/license/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
 

## About The Project

<img src="client/src/assets/images/mobile (1).png" alt="Logo" >






 

**Project Name: TrekNest Travels**

TrekNest Travels is a full-stack web application hosted on GitHub, offering a comprehensive travel management system for users and admins alike. Users can sign up or sign in to access a plethora of travel packages, track their bookings, and update personal details including password changes. The admin dashboard empowers administrators to manage users, bookings, and packages efficiently.

Key Features:
- User Authentication: Secure sign-up and sign-in functionality for users.
- Booking Management: Users can browse and book their favorite travel packages.
- Package Tracking: Users can monitor the status of their booked packages.
- User Profile Management: Users can update their personal information and change passwords.
- Admin Dashboard: Administrators can oversee user accounts, bookings, and package details.

TrekNest Travels simplifies the travel booking process for users while providing administrators with robust tools to manage the platform effectively. Join us on GitHub to contribute to the future of travel management technology.

## Built With

The TrekNest Travels project utilizes the following major frameworks and libraries:

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js, used for building robust APIs and handling HTTP requests.
- **MongoDB**: A NoSQL database used for storing user data, bookings, and package details.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing schema-based solutions.
- **bcryptjs**: A library used for hashing passwords securely.
- **cloudinary**: A cloud-based media management solution for storing and managing images.
- **concurrently**: A utility to run multiple processes concurrently.
- **cookie-parser**: A middleware for parsing cookies in Express.js applications.
- **datauri**: A library for converting data to base64-encoded data URI strings.
- **dayjs**: A minimalist JavaScript library for handling dates and times.
- **dotenv**: A zero-dependency module for loading environment variables from a .env file.
- **express-async-errors**: Middleware for handling asynchronous errors in Express.js applications.
- **express-mongo-sanitize**: Middleware to sanitize user-supplied data to prevent MongoDB operator injection.
- **express-rate-limit**: Middleware for rate limiting HTTP requests in Express.js applications.
- **express-validator**: An express.js middleware for data validation.
- **helmet**: A middleware for securing Express.js apps by setting various HTTP headers.
- **http-status-codes**: A library for standard HTTP status codes.
- **jsonwebtoken**: A library for generating and verifying JSON Web Tokens (JWT).
- **morgan**: A HTTP request logger middleware for Node.js.
- **multer**: A middleware for handling multipart/form-data, primarily used for file uploads.
- **nodemailer**: A module for sending emails from Node.js applications.
- **nodemon**: A utility that monitors changes in your Node.js application and automatically restarts the server.

These frameworks and libraries collectively form the foundation of the TrekNest Travels project, enabling efficient development and robust functionality for both users and administrators.

## Getting Started

To set up TrekNest Travels locally, follow these simple steps:

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd TrekNest---Tour-and-Travel-CMS
   ```

3. **Install Dependencies**:
   ```bash
   npm run setup-project
   ```

4. **Set Environment Variables**:
   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```
   NODE_ENV=development
   PORT=3000
   MONGO_URL=mongodb://localhost:27017/treknest
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=7d
   COOKIE_SECRET=your_cookie_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_cloud_api_key
   CLOUD_API_SECRET=your_cloudinary_cloud_api_secret
   ```

   Ensure you replace `your_jwt_secret`, `your_cookie_secret`, `your_cloud_name`, `your_cloud_api_key`, and `your_cloud_api_secret` with your own values.

## NOTE:-

<h4>If you are giving some specific PORT number like `PORT = 3000`, you have to change the port in proxy under `client folder` in `vite.config.js` file. </h4>

<h4>First User who signup will get automatically, admin role.</h4>

6. **Access the Application**:
 

--- 
  Open your web browser and navigate to `http://localhost:5173/` to access the TrekNest Travels application locally.
With these steps completed, you should now have a local instance of TrekNest Travels up and running on your machine. Happy exploring!

## Usage

TrekNest Travels is a versatile platform designed to facilitate seamless travel booking and management for both users and administrators. Below are some examples demonstrating how the project can be utilized:

### User Experience:
1. **Sign Up and Sign In**:
   - Users can easily create an account by signing up with their email and password.
   - Existing users can sign in to their accounts securely.

2. **Browse and Book Packages**:
   - Users can explore a wide range of travel packages available on the platform.
   - Each package is accompanied by detailed information, including destination, itinerary, and pricing.
   - Users can select their preferred package and book it with just a few clicks.

3. **Track Bookings**:
   - After booking a package, users can conveniently track the status of their bookings.
   - Updates regarding booking confirmations, itinerary changes, and payment details are readily accessible.

4. **Update Profile and Password**:
   - Users have the flexibility to update their profile information, including contact details and preferences.
   - Passwords can be changed securely through the user settings.

### Admin Experience:
1. **Admin Dashboard**:
   - Administrators have access to a powerful dashboard to manage all aspects of the platform.
   - From user accounts to booking details and package listings, everything can be efficiently managed from one central location.

2. **User Management**:
   - Admins can view and manage user accounts, including user information and authentication details.
   - User privileges and access levels can be adjusted as needed.

3. **Booking Management**:
   - Admins can oversee all bookings made through the platform.
   - They have the ability to update booking statuses, handle cancellations, and communicate with users regarding their bookings.

4. **Package Management**:
   - The admin dashboard allows administrators to add, edit, or remove travel packages.
   - Package details such as destinations, itineraries, pricing, and availability can be easily updated.

For more detailed instructions and information, please refer to the [Documentation](https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS).

TrekNest Travels offers a comprehensive solution for travelers and travel administrators alike, streamlining the booking process and enhancing the overall travel experience.

## Roadmap

See the [open issues](https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS/blob/main/LICENSE.md) for more information.

## Authors

[Mir Uzair](https://meeruzairwashere-portfolio.onrender.com)
