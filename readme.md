# 🕒 Chrono Fit

Chrono Fit is an AI-integrated fitness platform designed with a microservices architecture using **Spring Boot** and **React**. It helps users manage fitness activities, track progress, and receive personalized AI-generated recommendations.

## 🚀 Features

- 👤 **User Service**
    - Create and manage user profiles.
    - Integrated with **Keycloak** for user authentication and role-based access control.

- 🏋️ **Activity Service**
    - Create activities (e.g., cycling, running, weight training).
    - Retrieve activities by user or ID.
    - Store detailed metrics like duration, calories burned, and start time.

- 🧠 **Fitness Recommendation Service**
    - Analyzes past activity data.
    - Uses **Gemini Flash 1.5 API** to generate smart, AI-based workout suggestions tailored to each user.

- 🔗 **Eureka Server**
    - Handles service registration and discovery between microservices.

- 🛡️ **Gateway Service (Spring Cloud Gateway)**
    - Central entry point to all services.
    - Secures routes using JWT (issued by Keycloak).
    - Handles request forwarding and load balancing.

## 🧱 Tech Stack

| Technology            | Description                                       |
|-----------------------|---------------------------------------------------|
| **Backend**           | Java, Spring Boot, Spring Security                |
| **Frontend**          | React.js                                          |
| **API Gateway**       | Spring Cloud Gateway                              |
| **Service Discovery** | Netflix Eureka                                    |
| **Communication**     | REST APIs, JSON                                   |
| **Authentication**    | Keycloak (JWT, OAuth2, OpenID Connect)            |
| **AI Integration**    | Gemini Flash 1.5 API                              |
| **Build Tool**        | Maven                                             |
| **Database**          | PostgreSQL / MongoDB *(based on services)*        |

## ⚙️ Microservices Overview

### 1. User Service
- `POST api/users/register` - Register new users
- `GET api/users/{id}` - Get user profile by Id
- `GET api/users/{id}/validate` - Validate user by Id

### 2. Activity Service
- `POST api/activities` - Log new activity
- `GET api/activities` - Fetch all user activities (using autharization token in headers)
- `GET api/activities/{id}` - Fetch single activity

### 3. Fitness Recommendation Service
- `GET api/recommendations/user/{userId}` - Get all recommendations for user
- `GET api/recommendations/activity/{userId}` - Get recommendation by id


## 🛡️ Security

- Uses JWT tokens issued by **Keycloak** for securing microservice communication.

- Public endpoints: Login and Register

- All other routes require a valid token passed through the Gateway.



## 🧠 AI Recommendations

Chrono Fit’s AI module connects to Gemini Flash 1.5 to generate smart workout suggestions based on:

- ✅ User activity type

- ⏱️ Duration trends

- 🔥 Calories burned

- 🕰️ Time of day

The AI system then generates personalized recommendations using Gemini's powerful natural language and data analysis capabilities.


## Demo

Demo link - will be here soon ...



## Contributing to the Chrono-Fit 🤝

We welcome and appreciate contributions from the community to enhance and improve the Chrono-Fit . Whether you're a developer, designer, tester, or someone with valuable feedback, your input is valuable.
## Thank You!❤️

Thank you for considering contributing to the Chrono-Fit. Your efforts help make this project better for everyone. If you have any questions or need assistance, feel free to reach out through the issue tracker or discussions. Happy coding🤩!
