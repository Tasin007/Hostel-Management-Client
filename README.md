# Hostel Management System

## Assignment Category: assignment12_category_0013

Welcome to the Hostel Management System! This project is part of the assignment category `assignment12_category_0013`.

### Live Link

Check out the live version of the project [here](https://hostel-management-client-site.vercel.app).


1.Responsive Design:
The site is designed to be responsive, ensuring a seamless user experience across various devices, including mobiles, tablets, and desktops.

2.User Authentication:
Users can register, log in, and log out. Social login options are also available for convenience.

3.Dynamic Homepage:
The homepage features a dynamic banner/slider with a search functionality, providing an engaging and interactive interface.

4.Meal Categories and Tabs:
Meals are categorized into Breakfast, Lunch, and Dinner, with a tab system for easy navigation. An "All Meals" tab allows users to view meals from all categories.

5.Meal Cards:
Each meal category displays meal cards with essential details such as title, image, rating, price, and a details button for more information.

6.Meal Details Page:
Clicking on a meal card redirects users to a detailed page with information about the meal, including image, distributor details, description, ingredients, post time, rating, like button, and meal request button.

7.Meal Request System:
Users, after logging in, can request meals. The request status is initially set to pending. Only users with premium packages can request meals.

8.User Dashboard:
Users have a personalized dashboard with sections for My Profile, Requested Meals, and My Reviews.

9.Review System:
Users can give reviews for meals, including a like reaction. All users can view reviews, and the review count for a meal increases when a successful review is submitted.

10.Infinite Scrolling:
The Meals page implements infinite scrolling, loading more meal cards as the user scrolls down the page.

11.Upcoming Meals Section:
Users can view upcoming meals added by the admin. Users can give likes to each meal, with a limit of one like per meal.

12.Checkout Page with Stripe Integration:
A private route allows users to purchase premium packages. Stripe integration is implemented for secure and seamless payments.

13.Admin Dashboard:
Admins have a dedicated dashboard with routes for Admin Profile, Manage Users, Add Meal, All Meals, All Reviews, Serve Meals, and Upcoming Meals.

14.Manage Users:
Admins can view and manage users, including making a user an admin. Server-side search functionality is implemented.

15.Serve Meals and Upcoming Meals Management:
Admins can view and manage meal requests, change the status from pending to delivered, and view upcoming meals. There's a publish/production button for adding meals to the all-meals collection.
