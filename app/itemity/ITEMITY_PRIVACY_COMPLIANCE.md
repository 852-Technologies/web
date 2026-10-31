# Itemity privacy and compliance handoff

Last reviewed: October 31, 2026

Read this file before changing Itemity privacy or terms pages, purchases, the free trial, barcode lookup, analytics, feedback forms, hosting, account/data deletion, liability or support wording, or app-store privacy declarations.

This is an implementation and maintenance record, not a legal certification. Requirements depend on Itemity's actual behavior, audience, distribution, scale, and applicable jurisdictions. If behavior changes, update the public notices, this file, and the relevant Apple App Privacy and Google Play Data Safety declarations together.

## Source of truth and how to edit the pages

- The in-app text is the source: `src/i18n/locales/legal/en.json` (controlling) and `zh-HK.json` in the Itemity app repository. Change the app text first, then mirror it into the web pages, then compare section by section.
- `terms.html` / `terms.zh-HK.html` mirror every app section, in the app's order.
- `privacy.html` / `privacy.zh-HK.html` mirror the privacy-related sections (barcode lookup, Itemity Pro and purchases, privacy and device data except its paragraph about the website, backups, security, who is responsible, sharing, retention, rights, children) and keep their own website-only sections: Website feedback form, Website visit counter, Website hosting and delivery, Changes to this notice, Contact.
- `delete-account.html` / `delete-account.zh-HK.html` are written by hand and are not part of the app text.
- `legal-refresh.js` builds the page layout only; it no longer rewrites text, so the HTML must already contain the final wording (company name `852 Technologies LLC`, "10 days", provider categories). It also inserts the barcode warning and the privacy supplement if it cannot find their marker attributes. Keep `data-barcode-guarantee` on the barcode "We do not guarantee ..." paragraph and `data-compliance-supplement` on the privacy supplement `<section>`, otherwise the text appears twice. Bump the `?v=` stamp on `legal-refresh.js` and `legal.css` after editing them.

## Approved public identity

- Product: Itemity
- Company/controller: 852 Technologies LLC
- Company location: Pennsylvania, United States
- Privacy/support contact: support@852technologies.com
- Current public-notice effective date: November 1, 2026
- Itemity Pro introductory free-access period: 10 days after first installation (the closed-test build profile uses 5; that is test-only and is not in the notices)
- Support: reasonable efforts only. No SLA, response time, or level of support is promised (Contact section). Privacy requests are answered within the time applicable law requires (generally 30 to 45 days). Deletion of the purchase-provider record is processed within the time applicable law requires; do not publish a fixed number of days.

## Public disclosure approach

Public notices describe providers by function rather than by brand name. This reduces avoidable maintenance but does not reduce the required disclosure of data categories, purposes, recipients, retention, rights, or international processing.

Approved public categories:

- `purchase-management provider` for RevenueCat
- `app-update and diagnostics provider` for Expo (EAS Update and EAS Observe)
- `feedback-form provider` for Tally
- `privacy-oriented aggregate analytics provider` for GoatCounter
- `website hosting and content-delivery providers` for GitHub Pages and Google Fonts
- `public hosting service for an open-source icon library` for the GitHub-hosted icon files

Named in public notices: Google Play and Apple App Store (the marketplaces and payment processors users choose), and Open Food Facts (with its sister databases) and UPCitemdb (source attribution and ODbL licensing).

Do not remove a data-flow disclosure merely to avoid naming a vendor. App-store questionnaires must reflect SDK and provider behavior even where the public notice uses a provider category.

## Market posture

- Itemity is sold worldwide through the app stores but is not marketed to, or aimed at, any specific market (no UK/EU campaigns or promotions).
- Rights wording is neutral ("depending on where you live"). Do not claim compliance with GDPR, UK GDPR, CCPA/CPRA or any other specific law.
- No EU/UK representative or data-protection officer has been appointed. Revisit if marketing starts to target those markets, if EU languages are added, or if pricing or content is tailored to them. Unticking EU/EEA/UK countries in the store consoles is the available lever.

## Liability and compensation posture (decision of October 31, 2026)

- Total liability for all claims together is capped at what the customer paid for the app through the app store in the 12 months before the event giving rise to the first claim, less refunds and taxes. If nothing was paid, liability is zero. It is never negative, and several claims do not raise the cap.
- The customer's sole remedy is to stop using and uninstall the app and, for paid features, to ask the store for a refund under the store's policy. 852 Technologies LLC gives no refunds, credits or compensation itself, except where mandatory law requires.
- Claims must be brought within one year where the law allows. Owners, affiliates, licensors and service providers may rely on the limits.
- Non-excludable items stay in the text (fraud, wilful misconduct, death or personal injury where the law prohibits exclusion, mandatory consumer rights); removing them risks invalidating the whole clause.
- No arbitration or class-action waiver. Governing law and venue: Pennsylvania (confirm with counsel).
- Do not weaken any of this without the owner's approval. Have counsel review the wording before relying on it.

## Current data-flow register

### On-device data

- The inventory database (items, purchases, usage, categories, locations, people, settings) is encrypted with a random key kept in the phone's secure storage (store builds; Expo Go uses a plain database).
- The optional login profile is stored on the device: display name, username, password and previous passwords as one-way hashes, an authenticator secret, a date of birth stored only as a hash (used only to recover the authenticator), an optional recovery email and an optional avatar.
- Photos and icons are ordinary files in the app's private storage and are not encrypted by the app.
- Home-screen widgets read a small summary (names of expiring items, shopping list, reorder suggestions) kept unencrypted in the app's private storage; it is visible on the home screen even when the app's login is on.
- An error log is kept on the device; a problem report is sent only if the user emails it.
- CSV exports are not encrypted. Backups are password-encrypted `.itemity` files and go wherever the user saves them.
- 852 Technologies LLC does not receive the user's inventory unless the user deliberately sends information in a support or feedback message.
- Open item: the notices say Android's automatic backup does not include the app's data. This has not been verified in a built app manifest; verify before relying on it.

### Barcode lookup and downloads

- Current sources: Open Food Facts and related databases, and UPCitemdb.
- Sent: the barcode entered or scanned, plus ordinary network request metadata such as IP address. The request identifies the app by its User-Agent.
- Received: product name, brand, size and a photo address. The app may download the photo from that address, which can be an Open Food Facts server or any HTTPS host listed by UPCitemdb; that host receives the IP address.
- Icons that are not built into the app are downloaded once from a public hosting service for an open-source icon library (GitHub); that host receives the IP address.
- Required warning: no lookup response, uptime, availability, or returned data is guaranteed. The service and its data are not 100% available or 100% accurate and must be checked against the current product label or an official source.
- Itemity must not imply that third-party barcode results are verified by 852 Technologies LLC.

### Itemity Pro and purchases

- Current provider: RevenueCat. Marketplace processors: Apple App Store and Google Play, as applicable.
- Current product model: one-time in-app purchases and a fixed Version 1 Bundle; no recurring subscription should be implied unless the product changes.
- Provider data can include a random app-user/install identifier, purchase and restore events, product/store information, app version, platform, marketplace country, and ordinary technical request data. Item inventory is not intentionally sent.
- Payments and refunds are handled by the marketplace under its rules.
- Verify RevenueCat SDK behavior whenever the SDK or configuration changes.

### App updates and diagnostics

- Current provider: Expo (EAS Update checks and EAS Observe).
- On start the app checks for updates (app version, platform, a random installation identifier). Anonymous performance and crash reports (start-up and screen-drawing times, device model and OS version, battery, temperature and network state, a summary of start-up network requests, error and crash details) are sent tagged with that installation identifier.
- No inventory, photos or login details are included. The identifier is not linked to the Support ID or to the user, so individual reports usually cannot be located for deletion; the provider's own retention schedule applies.

### Website feedback

- Current provider: Tally. Feedback is optional.
- Data can include the submitted answers, optional name/email fields (used only to tell people when an iPhone version is available), and ordinary technical request data. The embedded form may contact the provider when it loads, before a visitor submits.
- Review Tally retention and deletion behavior when form settings change.

### Website analytics

- Current provider: GoatCounter. Purpose: aggregate page-view measurement.
- Current configuration is intended to avoid cookies, local-storage identifiers, persistent visitor IDs, stored full IP addresses, and stored full user-agent strings.
- Do not add advertising analytics, fingerprinting, session replay, or cross-site tracking without a new privacy review and notice update.

### Hosting and fonts

- Current host: GitHub Pages/custom domain delivery for `852technologies.com`.
- The Itemity product page (`index.html`) currently loads the Poppins font from Google Fonts, so the visitor's IP address reaches Google. The notices cover this under "website hosting and content-delivery providers, including for the fonts it displays". If the font is self-hosted later, that phrase can be dropped.

## Store-declaration checklist

- Apple App Privacy and Google Play Data Safety must cover data collected by Itemity and its SDKs even though the notices use provider categories:
  - purchase history and a purchase-provider identifier (device or other IDs);
  - an update/diagnostics installation identifier (device or other IDs) and crash logs, diagnostics and performance data (app info and performance);
  - no location, contacts, advertising identifiers or user-account data collected by 852 Technologies LLC;
  - data is encrypted in transit; deletion requests go through support@852technologies.com and, for on-device data, the app (Reset Database, turning off login) or uninstalling.
- The account-deletion URL given to the stores is the delete-account page.
- Confirm the privacy-policy URL remains public, non-geofenced, and accessible outside the app.
- Re-check declarations before every material SDK, analytics, form, purchase, account, or cloud-storage change.
- Keep provider agreements and data-processing terms appropriate to actual use.

## Notice content that must remain

- Controller identity and Pennsylvania location
- Data categories, purposes, recipient categories, retention, security limits, and user rights
- Local-storage and device-backup explanation, including that widgets and CSV exports are not encrypted
- Barcode lookup data flow, photo and icon downloads, and the explicit no-accuracy/no-availability guarantee
- 10-day Itemity Pro introductory free-access period
- Purchase and restoration data flow, and no compensation beyond what mandatory law requires
- App update and diagnostics data flow
- Website feedback and aggregate analytics data flow
- No sale or sharing for cross-context behavioral advertising, provided this remains accurate
- No third-party advertising, provided this remains accurate
- Children/general-audience statement (not directed to children under 13; users must be at least 13)
- International-processing statement
- Support is reasonable-efforts with no response-time promise
- Liability cap, sole remedy and carve-outs as described above
- Contact and deletion-request route

## Open follow-ups

- Verify the Android automatic-backup statement in a built app.
- The barcode lookup User-Agent in the app (`src/utils/productLookup.ts`) contains a personal email address; switch it to support@852technologies.com.
- Consider self-hosting the Poppins font on `index.html`.
- Add a visible link to the Privacy Policy beside the Tally feedback form (configured in Tally's editor, not in this repository).
- Consider an open-source licences/attributions screen in the app (Open Food Facts ODbL, the icon set's licence, library notices).
- Have counsel review the liability and governing-law wording.

## Primary references

- Apple App Review Guidelines, section 5.1: https://developer.apple.com/app-store/review/guidelines/
- Google Play Data Safety guidance: https://support.google.com/googleplay/android-developer/answer/10787469
- GDPR Article 13, including recipients or categories of recipients: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679
- RevenueCat privacy policy: https://www.revenuecat.com/privacy-policy
- RevenueCat Apple App Privacy guidance: https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy
- Tally GDPR guidance: https://tally.so/help/gdpr
- GoatCounter privacy documentation: https://www.goatcounter.com/help/privacy
