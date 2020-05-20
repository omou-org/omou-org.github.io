import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const FeaturesData = [
  {
    name: "stureg",
    title: "Standardized Registration and Payments",
    description:
      "Omou provides an easy way for admins to browse all available tutoring courses with detailed descriptions and register students quickly.",
    content: () => (
      <>
          <Grid item xs={12} md={6}>
              <Card
                style={{
                    backgroundColor: "#53A9D0",
                    color:"white",
                    padding:"36px"
                }}
              >
                  <span
                      style={{
                          fontWeight: "bold",
                          fontSize: "20px",
                          fontFamily: "Roboto, sans-serif",
                          textAlign: "left"
                      }}
                  >
                    Tutoring Course Information All On One Surface
                  </span>
                  <ul style={{ textAlign: "left", lineHeight: "inherit" }}>
                      <li>Course enrollment status</li>
                      <li>Time and date of the course</li>
                      <li>Course teacher</li>
                      <li>Total cost</li>
                  </ul>
              </Card>
          </Grid>
          <Grid item xs={12} md={6}>
              <Card
                  style={{
                      backgroundColor: "#53A9D0",
                      color:"white",
                      padding:"36px"
                  }}
              >
                  <span
                      style={{
                          fontWeight: "bold",
                          fontSize: "20px",
                          fontFamily: "Roboto, sans-serif",
                      }}
                  >
                    Find Courses Quickly for Easy Registration
                  </span>
                  <ul style={{ textAlign: "left", lineHeight: "inherit" }}>
                      <li>
                          Filter classes by instructor(s), subject(s), academic grade level(s)
                      </li>
                      <li>Register by tutoring subject</li>
                      <li>Register by parent</li>
                  </ul>
              </Card>
          </Grid>
      </>
    ),
    image: "stureg.png",
    styling: {marginTop: "50px"},
      underline_color: "#53A9D0"
  },
    {
        name: "schedule",
        title: "Simple Scheduling",
        description:
            "Scheduling personal tutoring classes with specific tutors can be tricky. Omou lets you quickly see which tutors are available at what time.",
        content: () => (
            <ul
                style={{
                    textAlign: "left",
                    fontSize: "inherit",
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: "inherit",
                }}
            >
                <li>Filter by the instructor or course</li>
                <li>Session color-coding by an instructor</li>
                <li>View previous and future schedules</li>
            </ul>
        ),
        image: "schedular.png",
        styling: {marginTop: "200px"},
        underline_color: "#599349"
    },
    {
        name: "paytuition",
        title: "Control Payments and Tuition",
        description:
            "Never worry about mix-ups with payment confirmation! Omou can be your single source of truth with automated invoice tracking and much more.",
        content: () => (
            <div>
                <ul
                    style={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: "inherit",
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: "inherit",
                    }}
                >
                    <li>
                        Create Tuition Rules and Discounts
                    </li>
                    <li>View Payments by Enrollment</li>
                    <li>View Updated Payment Status of a Tutoring Session</li>
                    <li>Print Invoices</li>
                </ul>
            </div>
        ),
        image: "register.png",
        styling: {marginTop: "200px"},
        underline_color: "#F1974A"
    },
    {
        name: "useracct",
        title: "Centralized User Accounts",
        description:
            "Omou allows you to create user profiles for admins, students, and parents.",
        content: () => (
            <div>
                <ul
                    style={{
                        textAlign: "left",
                        fontSize: "inherit",
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: "inherit",
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
        styling: {marginTop: "200px"},
        underline_color: "#CE6764"
    },
];

export default FeaturesData;
