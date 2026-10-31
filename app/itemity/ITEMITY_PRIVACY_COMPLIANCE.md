# Itemity privacy and compliance handoff

Last reviewed: October 30, 2026

Read this file before changing Itemity privacy or terms pages, purchases, the free trial, barcode lookup, analytics, feedback forms, hosting, account/data deletion, or app-store privacy declarations.

This is an implementation and maintenance record, not a legal certification. Requirements depend on Itemity's actual behavior, audience, distribution, scale, and applicable jurisdictions. If behavior changes, update the public notices, this file, and the relevant Apple App Privacy and Google Play Data Safety declarations together.

## Approved public identity

- Product: Itemity
- Company/controller: 852 Technologies LLC
- Company location: Pennsylvania, United States
- Privacy/support contact: support@852technologies.com
- Current public-notice effective date: November 1, 2026
- Itemity Pro introductory free-access period: 10 days after first installation

## Public disclosure approach

Public notices describe providers by function rather than by brand name when the provider's identity is not necessary to explain the processing. This reduces avoidable maintenance but does not reduce the required disclosure of data categories, purposes, recipients, retention, rights, or international processing.

Approved public categories:

- `purchase-management provider` for RevenueCat
- `feedback-form provider` for Tally
- `privacy-oriented aggregate analytics provider` for GoatCounter
- `website hosting and infrastructure providers` for GitHub Pages and related delivery infrastructure

Apple and Google may be named as the marketplaces/payment processors users directly choose. Barcode data sources may be named for attribution, licensing, and source-verification clarity.

Do not remove a data-flow disclosure merely to avoid naming a vendor. App-store questionnaires must reflect SDK and provider behavior even where the public notice uses a provider category.

## Current data-flow register

### On-device inventory

- Inventory records are stored locally in the app database.
- User-selected photos remain ordinary files on the device and are not represented as being separately encrypted by Itemity.
- 852 Technologies LLC does not receive the user's inventory unless the user deliberately sends information in a support or feedback message.
- Device backups may copy app data according to the user's operating-system and backup-provider settings.

### Barcode lookup

- Current sources: Open Food Facts and related databases, and UPCitemdb.
- Sent: the barcode entered or scanned, plus ordinary network request metadata such as IP address.
- Received: product information returned by the independent service.
- Required warning: no lookup response, uptime, availability, or returned data is guaranteed. The service and its data are not 100% available or 100% accurate. Returned information may be incomplete, duplicated, outdated, or incorrect and must be checked against the current product label or an official source.
- Itemity must not imply that third-party barcode results are verified by 852 Technologies LLC.

### Itemity Pro and purchases

- Current provider: RevenueCat.
- Marketplace processors: Apple App Store and Google Play, as applicable.
- Current product model: one-time in-app purchase; no recurring Itemity subscription should be implied unless the product changes.
- Current introductory free access: 10 days after first installation.
- Provider data can include a random app-user/install identifier, purchase and restore events, product/store information, app version, platform, marketplace country, and ordinary technical request data. Item inventory is not intentionally sent.
- Payments and refunds are handled by the marketplace under its rules.
- Verify RevenueCat SDK behavior whenever the SDK or configuration changes.

### Website feedback

- Current provider: Tally.
- Feedback is optional.
- Data can include the submitted answers, optional name/email fields, and ordinary technical request data needed to deliver and protect the form.
- The embedded form may contact the provider when it loads, before a visitor submits a response.
- Review Tally retention and deletion behavior when form settings change.

### Website analytics

- Current provider: GoatCounter.
- Purpose: aggregate page-view measurement.
- Current configuration is intended to avoid cookies, local-storage identifiers, persistent visitor IDs, stored full IP addresses, and stored full user-agent strings.
- Do not add advertising analytics, fingerprinting, session replay, or cross-site tracking without a new privacy review and notice update.

### Hosting

- Current host: GitHub Pages/custom domain delivery for `852technologies.com`.
- Public wording may use the provider category, but ordinary hosting logs and network metadata must remain within the scope of the notice.

## Store-declaration checklist

- Apple App Privacy must accurately cover data collected by Itemity and third-party SDKs. Review purchase history and any identifiers/diagnostics used by the purchase-management SDK.
- Google Play Data Safety must include collection and sharing performed through third-party SDKs, even when the public privacy notice does not name the SDK vendor.
- Confirm the privacy-policy URL remains public, non-geofenced, and accessible outside the app.
- Re-check declarations before every material SDK, analytics, form, purchase, account, or cloud-storage change.
- Keep provider agreements and data-processing terms appropriate to actual use.

## Notice content that must remain

- Controller identity and Pennsylvania location
- Data categories, purposes, recipient categories, retention, security limits, and user rights
- Local-storage and device-backup explanation
- Barcode lookup data flow and explicit no-accuracy/no-availability guarantee
- 10-day Itemity Pro introductory free-access period
- Purchase and restoration data flow
- Website feedback and aggregate analytics data flow
- No sale or sharing for cross-context behavioral advertising, provided this remains accurate
- No third-party advertising, provided this remains accurate
- Children/general-audience statement
- International-processing statement
- Contact and deletion-request route

## Primary references

- Apple App Review Guidelines, section 5.1: https://developer.apple.com/app-store/review/guidelines/
- Google Play Data Safety guidance: https://support.google.com/googleplay/android-developer/answer/10787469
- GDPR Article 13, including recipients or categories of recipients: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679
- RevenueCat privacy policy: https://www.revenuecat.com/privacy-policy
- RevenueCat Apple App Privacy guidance: https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy
- Tally GDPR guidance: https://tally.so/help/gdpr
- GoatCounter privacy documentation: https://www.goatcounter.com/help/privacy

