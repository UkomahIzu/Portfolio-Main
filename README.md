# Finox Personal Portfolio — Hero Section

A ultra-minimalist, high-end editorial portfolio hero section built with **HTML5, Vanilla CSS3, and JavaScript**, based directly on the design reference image [`Assets/Finox Website Page Template for Webflow.jpeg`](file:///c:/Users/user/Documents/Programming/Programming/React%20js/Portfolio/Assets/Finox%20Website%20Page%20Template%20for%20Webflow.jpeg).

---

## 🎨 Features & Visual Highlights
- **Editorial High-Contrast Theme**: Clean light background (`#f7f7f8`), dark geometric typography (`#0f0f10`), razor-thin borders, and crisp spacing.
- **Side Vertical Indicator**: Rotated vertical labels (`Product designer` & `2026`) aligned along a left axis line.
- **Dynamic Counter Statistics**: Animated numerical counting for `+200 Project completed` and `+50 Startup raised`.
- **Headline & Tagline**: Massive headline display typography ("Hello") and role description (`— It's D.Nova a design wizerd`).
- **Scroll Down Accent**: Subtle down arrow indicator with smooth CSS bounce animation.
- **Interactive "Book A Call ↗" Modal**: Pop-up scheduling modal with form fields.

---

## 📸 How to Add Your Own Picture

Per your instructions, the person's picture is currently set to a **clean placeholder frame**. You have two easy ways to set your picture:

### Option 1: Live Interactive Browser Preview (Instant)
1. Open `index.html` in your web browser.
2. Hover over the right-hand placeholder card and click **"Choose Image File"** (or simply **drag and drop** any picture file from your desktop directly onto the container).
3. Your picture will instantly display in the hero section!

### Option 2: Permanent Code Setup
1. Save your portrait image inside the project directory (e.g., `Assets/my-photo.jpg` or `Assets/person.png`).
2. Open [`index.html`](file:///c:/Users/user/Documents/Programming/Programming/React%20js/Portfolio/index.html) in your editor.
3. Replace line 97:
   ```html
   <img id="user-portrait-img" src="Assets/my-photo.jpg" alt="User Portrait" class="user-portrait-img">
   ```
   And add class `hidden` to `<div class="portrait-placeholder" id="portrait-placeholder">`.

---

## 🚀 How to Run Locally
Simply double-click [`index.html`](file:///c:/Users/user/Documents/Programming/Programming/React%20js/Portfolio/index.html) to view in any modern web browser, or start a local dev server (`npx serve .` or Live Server extension).
