import React from "react";

const FeaturesData = [
  {
    name: "stureg",
    title: "Standardized Registration and Payments",
    description:
      "Omou provides an easy way for admins to browse all available tutoring courses with detailed descriptions and register students quickly.",
    content: () => (
      <div>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Tutoring Course Information All On One Surface
        </span>
        <ul style={{ textAlign: "left", lineHeight: "30px" }}>
          <li>Course enrollment status</li>
          <li>Time and date of the course</li>
          <li>Course teacher</li>
          <li>Total cost</li>
        </ul>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Find Courses Quickly for Easy Registration
        </span>
        <ul style={{ textAlign: "left", lineHeight: "30px" }}>
          <li>
            Filter classes by instructor(s), subject(s), academic grade level(s)
          </li>
          <li>Register by tutoring subject</li>
          <li>Register by parent</li>
        </ul>
      </div>
    ),
    image: "stureg.png",
    styling: {marginTop: "50px"}
  },
  {
    name: "paytrack",
    title: "Payment Tracking",
    description:
      "Never worry about mix-ups with payment confirmation! Omou can be your single source of truth with automated invoice tracking and much more.",
    content: () => (
      <div>
        <ul
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "37px",
          }}
        >
          <li>
            Filter classes by instructor(s), subject(s), academic grade level(s)
          </li>
          <li>Register by tutoring subject</li>
          <li>Register by parent</li>
        </ul>
      </div>
    ),
    image: "register.png",
    styling: {marginTop: "200px"}
  },
  {
    name: "schedule",
    title: "Simple Monthly Scheduling",
    description:
      "Scheduling personal tutoring classes with specific tutors can be tricky. Omou lets you quickly see which tutors are available at what time.",
    content: () => (
      <div>
        <ul
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "37px",
          }}
        >
          <li>Filter by the instructor or course</li>
          <li>Session color-coding by an instructor</li>
          <li>View previous and future schedules</li>
        </ul>
      </div>
    ),
    image: "schedular.png",
    styling: {marginTop: "200px"}
  },
  {
    name: "useracct",
    title: "Centralized user accounts",
    description:
      "Omou allows you to create user profiles for admins, students, and parents.",
    content: () => (
      <div>
        <ul
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "37px",
          }}
        >
          <li>View accounts by type</li>
          <li>Edit account information</li>
          <li>View accounts on mobile phone</li>
          <li>Instructors can confirm/deny a course</li>
          <li>Students linked to a parent account and vise versa</li>
        </ul>
      </div>
    ),
    image: "useracct.png",
    styling: {marginTop: "200px"}
  },
  // {
  //     name: "tracking",
  //     title: "Universal ticketing",
  //     description: "Make this yours. Add images, text and links, or connect data from your collection.",
  //     content: () => (<div>
  //         <ul style={{textAlign: "left", fontWeight: "bold", fontSize: "18px", fontFamily:"Roboto, sans-serif"}}>
  //         <li>Add/edit/view categories</li>
  //
  //         <li>Add/edit/view tuition rules</li>
  //
  //         <li>Activate/Disable/Delete discounts</li>
  //     >
  //         <li>Add other administrators and receptionists</li>
  //         </ul>
  //     </div>),
  //     image: ""
  // }
];

export default FeaturesData;
