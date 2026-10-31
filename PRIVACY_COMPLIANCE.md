# Privacy and compliance handoff

**Last reviewed:** October 30, 2026<br>
**Public notice effective date:** November 1, 2026<br>
**Scope:** The main 852 Technologies corporate website

This document records the project's approved privacy decisions and operational follow-ups. It is an implementation handoff, not legal advice or a certification of compliance with every law.

## Company and website identity

- Legal entity: **852 Technologies LLC**
- Location: Pennsylvania, United States
- Canonical website: <https://852technologies.com/>
- Privacy Notice: <https://852technologies.com/privacy.html>
- Privacy and support email: <support@852technologies.com>
- The main website is primarily a corporate and product-listing website.
- Each application or product website may maintain its own privacy policy and terms. The corporate notice does not replace those product-specific documents.

## Approved public-notice approach

- Use the legal entity name `852 Technologies LLC` in the Scope and Contact sections.
- Use `852 Technologies LLC` in copyright and legal footer text. The logo and customer-facing brand name may remain `852 Technologies`.
- Use the custom domain, not the GitHub Pages URL, as the public and canonical address.
- Describe service providers by **function or category**, not by brand name.
- Do not name individual apps in the `External websites and applications` section. Use generic language so the notice does not need an edit for every product release.
- Keep individual vendor and product details in internal documentation even when the public notice uses categories.
- Keep the Privacy link conspicuous in the website footer.
- Do not claim that this notice makes the company universally compliant with all privacy regulations.

Approved provider categories for the public notice:

- Website hosting and infrastructure providers
- Aggregate website analytics providers
- Inquiry-form processing providers

## Current processing and internal vendor register

These names are intentionally maintained internally even though the visible Privacy Notice uses generic categories.

| Function | Current provider | Information involved | Public wording |
|---|---|---|---|
| Static website hosting and delivery | GitHub Pages | IP address and ordinary request, device, security, and delivery information processed as needed to serve the website | Website hosting and infrastructure providers |
| Aggregate page-view analytics | GoatCounter | Aggregate page views and limited technical context, such as referring page, browser type, operating system, approximate location, language, and screen size | Aggregate website analytics providers |
| Inquiry-form processing | OpnForm | Information voluntarily entered in the inquiry form, such as name, email address, organization, inquiry details, and message content | Inquiry-form processing providers |

The vendor names may still appear in source-code URLs, comments, configuration, or internal documentation where technically necessary. The decision to omit names applies to the visible public-notice copy.

## Current factual representations

The Privacy Notice currently represents that:

- The company does not sell personal information.
- The corporate website does not use cross-site behavioral advertising or tracking.
- Third parties are not permitted to collect visitors' personal information over time and across unrelated websites for behavioral advertising.
- The current analytics service does not use cookies, local storage, advertising identifiers, cross-site tracking, or tracker IDs and does not store visitors' IP addresses or full user-agent strings.
- Hosting and infrastructure providers may process ordinary technical request information to deliver and secure the website.
- Contact and inquiry information may be processed by a form-processing provider.
- Providers may process information outside Pennsylvania or the United States.
- Visitors may request access, correction, or deletion by emailing `support@852technologies.com`, subject to appropriate legal, security, and recordkeeping exceptions.
- The website is intended for a general business audience and is not directed to children under 13.
- Browser Do Not Track and Global Privacy Control signals do not change the site's operation because the site does not sell personal information or conduct tracking-based advertising.
- Material notice changes will be posted on the Privacy Notice page and identified with an updated effective date.

These statements must be changed if the implementation or business practice changes.

## Compliance posture and limits

The notice is designed as a strong baseline for the current low-data, US-focused corporate website. It includes categories of information, purposes, provider categories, retention criteria, privacy requests, security, children, browser signals, external links, changes, effective date, and contact information.

It is not a substitute for an applicability review:

- California's general website privacy requirements can apply even when broader CCPA/CPRA business thresholds are not met.
- CCPA/CPRA and other comprehensive US state privacy laws may require additional rights, notices, request methods, appeals, or opt-out mechanisms if their applicability thresholds or other triggers are met.
- GDPR or UK GDPR may require lawful bases, additional rights, regulatory complaint information, international-transfer disclosures, and possibly a representative if the company intentionally targets or monitors people in those jurisdictions. Mere worldwide website availability alone does not necessarily create that applicability.
- COPPA requirements can apply if a service is directed to children under 13 or the operator has actual knowledge that it is collecting personal information from a child under 13. A general-audience statement alone is not a safe harbor.
- A privacy notice alone is not operational compliance. Vendor contracts, access controls, security, retention/deletion procedures, request handling, and breach response must match the public statements.

Obtain qualified legal review if the company materially expands its audience, revenue, data volume, jurisdictions, advertising, profiling, sensitive-data processing, or services.

## Reference sources reviewed

These references informed the current handoff but are not an exhaustive legal review:

- [California Department of Justice: How to Read a Privacy Policy](https://oag.ca.gov/privacy/facts/online-privacy/privacy-policy)
- [California Department of Justice: California Consumer Privacy Act](https://oag.ca.gov/privacy/ccpa)
- [EU General Data Protection Regulation, including Article 13](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [European Data Protection Board: territorial scope of the GDPR](https://www.edpb.europa.eu/documents/guideline/guidelines-32018-on-the-territorial-scope-of-the-gdpr-article-3-version-adopted_en)
- [Federal Trade Commission: COPPA compliance guidance](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)
- [Federal Trade Commission: Privacy and Security guidance](https://www.ftc.gov/business-guidance/privacy-security)

## Required review before privacy-affecting changes

Before adding or changing analytics, forms, hosting, cookies, storage, advertising, user accounts, payments, location data, health data, insurance data, or other personal-information processing:

1. Identify exactly what data is collected, why, where it is sent, how long it is retained, and whether it is linked to a person or device.
2. Confirm whether cookies, local storage, device identifiers, profiling, cross-site tracking, sale, or sharing are introduced.
3. Review the provider contract and data-processing terms.
4. Update this internal vendor register.
5. Update `privacy.html` before or when the new processing begins.
6. Update the public effective date when the notice materially changes.
7. Ensure the Privacy Notice is available at or before the point where personal information is submitted.
8. Test the published page and relevant form flow on desktop and mobile.

## Open operational follow-up

- Add a visible link to `https://852technologies.com/privacy.html` within the external inquiry form or immediately beside the form's submit area. This must be configured in the form provider's editor; it cannot be completed solely through this static repository.
