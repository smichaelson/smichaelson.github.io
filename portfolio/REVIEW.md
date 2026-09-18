# Redesign review — September 18, 2026

This record covers the photographic, editorial redesign requested after the interactive version was rejected. Three review passes were completed against the revised content and rendered site. The previous version's review record was replaced.

## 1. Content, provenance, and technical communication

Compared the stories with the current résumé, the 89-page raw portfolio, the earlier illustrated portfolio, the Robocop report, the N1000W parts workbook, and the user's current status updates. The opportunities workbook informed emphasis but is excluded from the website and package.

The final stories distinguish personal work from team contributions, analysis from measurement, completed work from proposals, and failure observations from uncertain causes.

Key decisions and corrections:

- **Apollyon:** retained the 40-person team context, the M1939 vehicle, joint-testing rationale, 3.4 recorded revolutions, specific analysis conditions, late packaging failure, field avionics rebuild, 11,492-foot flight, and first-place result. The COMSOL load case is not presented as measured flight speed. The wet-dress failure's unknown cause remains unknown.
- **Hat Trick:** all six motor/apogee/outcome rows were checked against the flight account. The screw-versus-pin error, pressure leak, configuration error, excessive drogue pressure, and corresponding rebuilds remain distinct. Only the final two flights are described as completing both recovery stages. Complementary devices are not claimed as three independent recovery systems.
- **Atlas:** documented the STM32H743ZIT6 architecture, five sensor devices, four power rails, five deployment outputs, eight PWM outputs, GNSS timing, storage, USB, LoRa, BLE, and development interfaces. Included the bare-board decision, footprint and routing corrections, assembled-board tests, and unresolved LED MOSFET issue. The functional layout is the original annotated drawing, with no invented hotspots. Bench functionality is separate from future navigation software and flight qualification.
- **Gladius:** restored all ten motor rows and the complete set of impulse, altitude, speed, acceleration, duration, time-to-apogee, and stability values. The early mass-analog model is separate from the final 17,180-foot prediction. The 8-foot difference from the 17,172-foot flight is explicitly one flight's comparison. Structural studies include team attribution. Corrected the apparent O550X-PS designation typo to O5500X-PS using [AeroTech's product listing](https://aerotech-rocketry.com/products/product_4c93a519-31ea-f9ec-966f-3aa3f40c0efa); historical simulation inputs were retained.
- **Jolly Roger:** included mechanical design, buoyancy estimates, winch and encoder construction, sensing circuits, calibration, control behavior, and field results. Cable-payout calibration is not total underwater depth accuracy. The 10 cm controller setting is not represented as GPS accuracy. Separate temperature profiles and their uncertainty remain distinct. Large turbidity spikes and the cable-length noise issue are retained. Inconsistent divider arithmetic and ambiguous calibration coefficients were not presented as verified equations.
- **Drone Lab:** connected beam coverage, forward modeling, trajectory reconstruction, attitude, and setpoints to the 40-plus-flight campaign. The attitude panels are commands versus setpoints, not different flight modes. Original plots are used; no synthetic telemetry or invented performance metric is introduced.
- **Unknown Rider:** incorporated the switch from CTI N5800 to AeroTech N1000W. Dimensions, Mach/altitude estimates, analysis, manufacture, and the approximately $10,000 parts plan remain preliminary. The newer parts sheet's Atlas-derived Kronos computer and Swift tracker are distinguished from the older written recovery architecture; the unresolved configuration is not presented as assembled hardware. The aluminum-stock designation follows the newer workbook.
- **Robocop:** checked 84 switch positions, 168 pins, 108 prepared switches, batches of 36, switch materials, clearances, soldering work, verification, and the documented $189.50 cost. Sound and feel remain qualitative observations.

121 distinct project images appear in the finished website. Source duplicates were consolidated; the generic school emblem is not presented as a project image. Comparison with the earlier portfolio's images did not identify an additional distinct project image omitted from the current source set.

## 2. Visual design, narrative structure, and image treatment

References reviewed included [Teenage Engineering's OP–1 field](https://teenage.engineering/products/op-1), [Rimac's Nevera](https://www.rimac-automobili.com/nevera/), [Arun Venkatesan's charging-station project](https://arun.is/blog/diy-modular-charging-station/), and [the James Dyson Award ENSO entry](https://www.jamesdysonaward.org/2025/project/enso-built-to-return). The applicable principles were product-led imagery, readable typography, concrete project narratives, and a clear progression from problem through engineering and iteration. No reference artwork or code was copied.

Rendered reviews covered the homepage and all eight cases on desktop, with representative sections checked at phone sizes.

Changes made during this pass:

- Replaced the simulator and control-heavy opening with the actual Apollyon team and recovered vehicle.
- Used Newsreader display typography, Manrope body text, a near-white background, and forest-green accents.
- Established the project order as Apollyon, Hat Trick, Atlas, Gladius, Jolly Roger, Drone Lab, Unknown Rider, and Robocop.
- Integrated photographs, CAD, PCB layouts, manufacturing drawings, and test plots into the relevant chapters. Removed the separate archive system.
- Gave Hat Trick and Atlas portrait images space at their natural proportions. Kept technical drawings complete rather than forcing them into cropped cards.
- Restored the PDF's rotation on twelve Robocop photographs. Both inline and enlarged versions were checked.
- Limited enlargement of small source plots, preserved aspect ratios, and retained access to original-resolution images. Some original material is low-resolution; the site does not invent additional image detail.
- Reworked the mobile hero to show the complete image with a separate caption. The desktop hero fits the opening viewport more closely.
- Made the optional image viewer size to the photograph, removing excessive blank space.
- Corrected missing spaces where desktop line breaks disappear on mobile.

## 3. Responsive behavior, accessibility, and delivery

Browser review used 1440 × 960 desktop, 768 px tablet width, and 390 × 844 and 320 × 740 phone layouts. All homepage and project routes were measured at 320 and 768 px. The narrow Atlas metric row was corrected after it caused horizontal overflow. Wide data tables scroll within their own region; their row labels stay visible while reading later columns.

Verified behaviors:

- Mobile menu opening, navigation, Escape dismissal, and focus return.
- Chapter links and current-chapter indication.
- Image enlargement, correct photo orientation, proportional sizing, close control, Escape dismissal, forward/reverse keyboard focus cycling, and return to the original image link.
- Keyboard scrolling of the wide motor-trade table without document-level overflow.
- Visible focus treatment, including links on the dark footer; descriptive image alternatives, one H1 per page, semantic table headers, and a skip link.
- Reduced-motion styling reviewed in source. There is no automatic simulation, video, parallax, or decorative motion.
- No observed warnings or errors in the browser console during the final interaction checks.

The local build and validation passed for **10 HTML pages, 311 links, and 129 image placements**. Checks include local asset and fragment references, responsive image candidates, duplicate image-width descriptors, image alternative text, page language, viewport metadata, JavaScript syntax, and the six-flight source record. Thumbnail descriptors now use the actual image widths rather than assuming every thumbnail is 720 px wide. Project builds fail if a story is missing its contribution statement, cover caption, or source note.

The delivery contains the static website, editable sources, assets, font licenses, local server, and a manually triggered GitHub Pages workflow. The old simulator, vendor library, unused fonts, and obsolete project metadata were removed from the deliverable. Earlier versions remain in the local working backup.

This is a local browser and source review, not an independent accessibility certification or a physical-device/cross-browser certification. No public deployment was performed.
