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
              color: "white",
              padding: "36px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "Roboto, sans-serif",
                textAlign: "left",
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
              color: "white",
              padding: "36px",
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
                Filter classes by instructor(s), subject(s), academic grade
                level(s)
              </li>
              <li>Register by tutoring subject</li>
              <li>Register by parent</li>
            </ul>
          </Card>
        </Grid>
      </>
    ),
    images: [
      "0-0_registration_landing.png",
      "0-1_register-student.png",
      "1_register-by-parent.png",
      "1-1_registration-cart.png",
      "2_Tuition Rules.png",
      "3_scheduling_conflict.png",
    ],
    path: "assets/product-screenshots/standardized-registration-and-payments/",
    styling: { marginTop: "50px" },
    underline_color: "#53A9D0",
  },
  {
    name: "schedule",
    title: "Simple Scheduling",
    description:
      "Scheduling tutoring classes while managing personal schedules of your staff can be tricky. Omou lets you quickly see which tutors are available at what time.",
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
    images: [
      "1_scheduler_landing_month-new.png",
      "2_scheduler-landing-day.png",
      "3_scheduler-landing-list.png",
      "4_scheduler-session-view.png",
    ],
    path: "assets/product-screenshots/simple-scheduling/",
    styling: { marginTop: "200px" },
    underline_color: "#599349",
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
            fontSize: "inherit",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "inherit",
          }}
        >
          <li>Create Tuition Rules and Discounts</li>
          <li>View Payments by Enrollment</li>
          <li>View Updated Payment Status of a Tutoring Session</li>
          <li>Access previous receipts and Print Invoices </li>
        </ul>
      </div>
    ),
    images: [
      "1-0_admin-discount.png",
      "1-1_admin-tuition-rules.png",
      "1-2_invoice-receipt.png",
      "2_enrollment-view.png",
      "3_enrollment-payment-hist.png",
      "4_parent-pay-hist.png",
    ],
    path: "assets/product-screenshots/control-payment-and-tuition/",
    styling: { marginTop: "200px" },
    underline_color: "#F1974A",
  },
  {
    name: "useracct",
    title: "Centralized User Accounts",
    description:
      "Omou allows you to create user profiles for admins, students, and parents, meaning any team member or customer can easily access the information that matters to them.",
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
    images: [
      "1_account_landing.png",
      "2_instructor-bio.png",
      "2-2_instructor-courses.png",
      "3_parent-notes.png",
      "4_parent-children-association.png",
      "5_student-courselist.png",
    ],
    path: "assets/product-screenshots/centralized-user-accounts/",
    styling: { marginTop: "200px" },
    underline_color: "#CE6764",
  },
];

export default FeaturesData;
