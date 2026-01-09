# Portfolio (One-page website)

## Project Description

The goal of this project is to create a portfolio prototype that allows a
student to easily and effectively showcase their achievements, projects, and
skills to a future employer.

The project is implemented as a **one-page website** with responsive layout and
interactive elements. It includes sections about the student, projects, reviews,
and a cooperation form.

---

## Main Objectives

- Responsive layout for tablets and desktops.
- Semantic HTML5 compliance.
- Custom fonts integration.
- Optimization of raster and vector graphics.
- Retina display support.
- SVG icons integration via sprite.
- Favicon addition.
- Hover effects for interactive elements.
- Optional animations to improve UX.
- API integration: [Documentation](https://portfolio-js.b.goit.study/api-docs).

---

## Project Structure

- Header
- Hero
- About me
- Benefits
- Projects
- FAQ
- Covers
- Reviews
- Work together

---

## Sections Description

### Header

- Logo and project name.
- Site navigation with anchor links and smooth scroll.
- “Order the project” button links to the **Work together** section.
- For mobile devices, navigation is implemented via a burger menu with JS:
  - smooth full-screen opening,
  - scroll lock,
  - closes on item click or close button.
- Transparent background, positioned `absolute` over the Hero section.

### Hero

- Heading: "Hello. I’m Fullstack developer Lloyd Jefferson."
- List of social media links (`<ul>`) opening in a new tab.
- Contact email via `mailto:` link.
- Background image in PNG format.

### About me

- Hidden heading for SEO.
- Description and content image.
- Experience and education in a `<ul>` with an accordion.
- Skills implemented as a horizontal slider (Swiper).

### Benefits

- Heading: "Benefits of working with me".
- List of advantages in `<ul>`.
- “Order the project” button links to **Work together** section.

### Projects

- Heading: "Projects".
- Project list and descriptions in a horizontal slider (Swiper).
- "See project" links open the project on GitHub in a new tab.

### FAQ

- Heading: "FAQ".
- Popular questions in an accordion `<ul>`.
- All items are closed by default.

### Covers

- Hidden heading for SEO.
- Cover list via `<ul>` or animated rows triggered on viewport visibility.
- Background as PNG image or gradient.

### Reviews

- Heading: "Reviews".
- Reviews in a horizontal slider (Swiper).
- Data is loaded from the backend.
- In case of an error, a placeholder text "Not found" is shown.

### Work together

- Heading: "Let’s work together".
- Form with required `<input>` and `<textarea>` fields and a submit button.
- Email validation via `pattern`.
- POST request to the server on submit.
- On success, a modal opens and the form resets.
- On error, a notification is shown and the form is not reset.
- Contact phone number and email via links.
- Background PNG image.

### Modal window

- Heading: "Thank you for your interest in cooperation!"
- Description and close button.
- The modal closes on:
  - close button,
  - backdrop click,
  - Escape key.
- Scroll is locked when the menu is open.

---

## Technologies

- HTML5
- CSS3, Flexbox, Grid
- JavaScript (ES6+)
- SwiperJS for sliders
- Accordion implemented in Vanilla JS
- Axios for API requests

---

## Links

- [API Documentation](https://portfolio-js.b.goit.study/api-docs)
- [GitHub Page](https://akinaru72.github.io/portfolio-jefferson-app/)

---

## Purpose and Benefits

This project helps a student to:

- Create an effective online portfolio.
- Showcase skills and projects.
- Practice responsive layout, interactivity, and working with APIs.
