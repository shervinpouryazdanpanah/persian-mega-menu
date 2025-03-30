# Persian Mega Menu with 3-Level Navigation

A fully responsive, right-to-left mega menu with three levels of navigation, designed for Persian/Farsi e-commerce websites.

![Mega Menu Demo](demo.gif) _Replace with actual demo image_

## Features

- **15 Main Categories** with comprehensive product categorization
- **3-Level Navigation** (Category → Subcategory → Product Type)
- **Right-to-Left (RTL)** layout for Persian/Farsi language
- **Fully Responsive** design works on all devices
  - Desktop: Hover-based navigation
  - Mobile/Touch: Click-based navigation
- **Clean UI** with intuitive visual hierarchy
- **Performance Optimized** with smooth animations

## Categories Included

1. الکترونیک (Electronics)
2. مد و پوشاک (Fashion)
3. خانه و آشپزخانه (Home & Kitchen)
4. ورزش و سفر (Sports & Travel)
5. زیبایی و سلامت (Beauty & Health)
6. اسباب بازی و کودک (Toys & Kids)
7. خوراکی و سوپرمارکت (Food & Grocery)
8. کتاب و لوازم تحریر (Books & Stationery)
9. خودرو و موتور (Auto & Motorcycle)
10. صنعتی و ابزار (Tools & Industrial)
11. حیوانات خانگی (Pets)
12. باغ و حیاط (Garden & Yard)
13. اداری و دفتری (Office)
14. هنر و صنایع دستی (Art & Handicrafts)
15. موسیقی و ساز (Music & Instruments)
16. عکاسی (Photography)

## Installation

No dependencies required! Simply include the HTML, CSS, and JavaScript in your project.

1. Copy the entire HTML file to your project
2. Ensure the CSS is included in the `<head>` section
3. Make sure the JavaScript is included before the closing `</body>` tag

## Usage

### Basic Implementation

```html
<!-- Include this in your navigation section -->
<div class="nav-container">
  <!-- The complete menu structure from the HTML file -->
</div>
```

## Responsive Breakpoints

- **Desktop (≥992px):** 3-column subcategory layout
- **Tablet (768px-991px):** 2-column subcategory layout
- **Mobile (<768px):** 1-column stacked layout with collapsible menus

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari
- Chrome for Android

_Note: IE11 is not supported_

## JavaScript API

The menu includes basic JavaScript for functionality:

```javascript
// Initialize menu (automatically called on DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {
  // All menu functionality is initialized here
});

// Manually open a specific category
function openCategory(categoryId) {
  document.querySelector(`[data-target="${categoryId}"]`).click();
}
```

## License

MIT License - Free for personal and commercial use

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Credits

Developed by Shervin Pouryazdanpanah
Inspired by modern e-commerce mega menus
