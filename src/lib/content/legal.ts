/**
 * Legal page content — Privacy Policy and Terms of Service.
 *
 * Both pages share one block vocabulary so they render through the same
 * component (`LegalContent`). Edit the facts here, never in the page
 * components. Anything still unknown is left as a bracketed placeholder
 * (`[Company Name]`, `[Effective Date]`, …) so it stays greppable before launch.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "rows"; rows: { left: string; right: string }[] }
  | { type: "address" };

export type LegalSection = {
  /** Anchor target — also the TOC link and the deep-link fragment. */
  id: string;
  /** Two-digit ordinal shown above the title and in the TOC. */
  number: string;
  title: string;
  blocks: LegalBlock[];
};

export const companyDetails = {
  legalName: "[Company Name]",
  tradingAs: "Talently",
  addressLines: ["[Address Line 1]", "[Address Line 2]", "[City, Postcode]"],
  jurisdiction: "[Registered In]",
  companyNumber: "[Company Number]",
  registrationReference: "pending",
  email: "[Contact Email]",
};

/* ------------------------------------------------------------------ */
/* Privacy Policy                                                      */
/* ------------------------------------------------------------------ */

export const privacyHero = {
  title: "Privacy Policy",
  effectiveDate: "[Effective Date]",
  intro:
    "How Talently collects, uses, and protects your personal information, and the rights you have over it.",
};

export const privacySections: LegalSection[] = [
  {
    id: "who-we-are",
    number: "01",
    title: "Who We Are",
    blocks: [
      {
        type: "p",
        text: "Talently (“Talently”, “we”, “our” or “us”) is a trading name of [Company Name]. We help growing businesses hire vetted full-time talent from South Africa. This policy explains what personal information we collect through this website and our hiring service, how we use it, and the rights you have over it.",
      },
      {
        type: "p",
        text: "We act as the data controller for the personal information described in this policy, under [Applicable Data Protection Law].",
      },
      { type: "address" },
    ],
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    blocks: [
      {
        type: "p",
        text: "We only collect what we need to book your consultation, run it, and place a candidate with you.",
      },
      {
        type: "list",
        items: [
          "Booking details — the name, email address, time zone, chosen slot, and any notes you enter when you book a consultation through the scheduling tool embedded on our contact page.",
          "Meeting details — the calendar invitation, the video call link, and any notes we take during the consultation.",
          "Candidate information — if you apply to work through Talently, the CV, work history, references, and assessment results you submit to us.",
          "Correspondence — emails, call notes, and messages exchanged with our team.",
          "Technical information — IP address, browser type, device type, and the pages you visited, collected automatically by our hosting and analytics providers.",
        ],
      },
      {
        type: "p",
        text: "We do not knowingly collect information from anyone under 16, and we do not ask for special category data (such as health or ethnicity) unless [Company Name] is legally required to.",
      },
    ],
  },
  {
    id: "how-and-why",
    number: "03",
    title: "How and Why We Use It",
    blocks: [
      {
        type: "p",
        text: "Every use of your information has a lawful basis behind it. In plain terms:",
      },
      {
        type: "rows",
        rows: [
          {
            left: "Booking, preparing for, and running your consultation",
            right: "Legitimate interests",
          },
          { left: "Shortlisting and placing candidates with you", right: "Contract" },
          { left: "Invoicing, accounting, and tax records", right: "Legal obligation" },
          {
            left: "Improving the website and measuring what works",
            right: "Legitimate interests",
          },
          { left: "Sending you occasional service updates", right: "Consent" },
        ],
      },
      {
        type: "p",
        text: "We do not sell your information, and we do not use it for automated decision-making that produces legal effects.",
      },
    ],
  },
  {
    id: "who-we-share-it-with",
    number: "04",
    title: "Who We Share It With",
    blocks: [
      {
        type: "p",
        text: "We share information only with the suppliers who help us run the service, and only as far as they need it to do their job.",
      },
      {
        type: "list",
        items: [
          "[Hosting Provider] — hosting this website and delivering its pages.",
          "[Email Provider] — handling the messages you send us and our replies.",
          "Cal.com — the scheduling tool embedded on our contact page, which takes your booking, holds the slot, and sends the confirmation.",
          "[Video Call Provider] — hosting the consultation call and issuing the meeting link.",
          "[CRM Provider] — storing enquiries and placement records.",
          "[Analytics Provider] — aggregate website usage statistics.",
          "Clients — where you are a candidate, we share your profile with the hiring company only once you agree to be put forward.",
          "Professional advisers and authorities — where the law requires it.",
        ],
      },
    ],
  },
  {
    id: "international-transfers",
    number: "05",
    title: "International Transfers",
    blocks: [
      {
        type: "p",
        text: "Talently works across borders by design: our clients, our team, and our candidates are not all in the same country, so your information may be transferred outside [Home Jurisdiction].",
      },
      {
        type: "p",
        text: "Where that happens, we rely on an adequacy decision or on standard contractual clauses with the receiving party, so your information keeps the same level of protection it has at home.",
      },
    ],
  },
  {
    id: "how-long-we-keep-it",
    number: "06",
    title: "How Long We Keep It",
    blocks: [
      {
        type: "p",
        text: "We keep information for as long as it is useful for the purpose it was collected, then delete it.",
      },
      {
        type: "rows",
        rows: [
          { left: "Enquiries that did not become clients", right: "[12 months]" },
          { left: "Client records and placement history", right: "[6 years]" },
          { left: "Candidate profiles not placed", right: "[24 months]" },
          { left: "Invoices and accounting records", right: "[6 years]" },
          { left: "Website analytics", right: "[14 months]" },
        ],
      },
    ],
  },
  {
    id: "security",
    number: "07",
    title: "Security",
    blocks: [
      {
        type: "p",
        text: "This site is served over HTTPS, access to our systems is limited to the people who need it, and accounts are protected with multi-factor authentication wherever the provider supports it.",
      },
      {
        type: "p",
        text: "No transfer of information over the internet is ever completely secure. If a breach affects your rights, we will tell you and [Supervisory Authority] within the timeframe the law sets.",
      },
    ],
  },
  {
    id: "cookies-and-tracking",
    number: "08",
    title: "Cookies and Tracking",
    blocks: [
      {
        type: "p",
        text: "We keep cookies to a minimum — there are no advertising or cross-site tracking cookies on this website. The booking tool on our contact page is loaded from Cal.com inside a frame and sets its own strictly necessary cookies, which hold your booking while you complete it.",
      },
      {
        type: "rows",
        rows: [
          { left: "Strictly necessary — page delivery and security", right: "Always on" },
          {
            left: "Booking tool — holding your consultation booking",
            right: "Always on",
          },
          { left: "Analytics — aggregate visit counts", right: "[Consent required]" },
          { left: "Advertising and cross-site tracking", right: "Not used" },
        ],
      },
      {
        type: "p",
        text: "You can clear or block cookies in your browser settings at any time. Blocking the strictly necessary ones may stop parts of the site working.",
      },
    ],
  },
  {
    id: "your-rights",
    number: "09",
    title: "Your Rights",
    blocks: [
      { type: "p", text: "You have the right to:" },
      {
        type: "list",
        items: [
          "Ask for a copy of the personal information we hold about you.",
          "Have inaccurate information corrected.",
          "Ask us to delete information we no longer need.",
          "Object to, or ask us to restrict, how we use it.",
          "Ask us to send your information to another provider.",
          "Withdraw consent at any time, where consent is what we relied on.",
        ],
      },
      {
        type: "p",
        text: "Write to [Contact Email] and we will respond within [30 days]. There is no charge for a reasonable request.",
      },
    ],
  },
  {
    id: "contact-and-complaints",
    number: "10",
    title: "Contact and Complaints",
    blocks: [
      {
        type: "p",
        text: "If something about this policy is unclear, or you think we have handled your information badly, tell us first — most things are quicker to fix directly.",
      },
      {
        type: "p",
        text: "You also have the right to complain to [Supervisory Authority] at [Supervisory Authority Contact].",
      },
      {
        type: "p",
        text: "We review this policy whenever our service or our suppliers change. The effective date at the top of the page tells you which version you are reading.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Terms of Service                                                    */
/* ------------------------------------------------------------------ */

export const termsHero = {
  title: "Terms of Service",
  effectiveDate: "[Effective Date]",
  intro:
    "The agreement between you and Talently when you use this website or hire through our service.",
};

export const termsSections: LegalSection[] = [
  {
    id: "these-terms",
    number: "01",
    title: "These Terms",
    blocks: [
      {
        type: "p",
        text: "These terms govern your use of this website and any hiring service you buy from Talently, a trading name of [Company Name]. By using the site, booking a consultation, or signing an engagement with us, you accept them.",
      },
      {
        type: "p",
        text: "Where we have signed a separate written agreement with you, that agreement takes priority over these terms wherever the two conflict.",
      },
      { type: "address" },
    ],
  },
  {
    id: "the-service",
    number: "02",
    title: "The Service We Provide",
    blocks: [
      {
        type: "p",
        text: "Talently sources, vets, and shortlists full-time candidates, then supports you through interviewing and onboarding. What we do and do not take on:",
      },
      {
        type: "list",
        items: [
          "We find and screen candidates against the role brief you give us.",
          "We hold a free consultation, booked through the scheduling tool on our contact page, to take your role brief.",
          "We present a shortlist and arrange interviews at your convenience.",
          "We support the offer, contracting, and onboarding steps.",
          "We are not the employer of record unless [Company Name] has agreed to that in writing.",
          "The hiring decision, and the working relationship that follows, is yours.",
        ],
      },
    ],
  },
  {
    id: "eligibility-and-details",
    number: "03",
    title: "Eligibility and Your Details",
    blocks: [
      {
        type: "p",
        text: "You must be at least 18 and able to enter a contract on behalf of the business you name. The details you give us when you book a consultation, and afterwards — company name, role brief, budget, contact information — must be accurate and kept up to date.",
      },
      {
        type: "p",
        text: "You are responsible for anything done through your contact details, and for telling us promptly if they change or are compromised.",
      },
    ],
  },
  {
    id: "fees-and-payment",
    number: "04",
    title: "Fees and Payment",
    blocks: [
      {
        type: "p",
        text: "Booking a consultation costs nothing, and neither does the consultation or the shortlist that follows it. A fee becomes due only once you hire someone we introduced.",
      },
      {
        type: "rows",
        rows: [
          { left: "Consultation and shortlist", right: "No charge" },
          { left: "Placement fee", right: "[Fee Amount / Percentage]" },
          { left: "Payment terms", right: "[Payment Terms]" },
          { left: "Late payment interest", right: "[Interest Rate]" },
          { left: "Currency and taxes", right: "[Currency], [Tax Treatment]" },
        ],
      },
      {
        type: "p",
        text: "Consultations are held at the slot you book. You can reschedule or cancel from the link in your confirmation email at any point up to [Cancellation Notice] before the call; repeated no-shows may mean we stop offering slots.",
      },
      {
        type: "p",
        text: "Hiring a candidate we introduced within [Introduction Period] of the introduction — whether for the advertised role or another one, and whether directly or through a third party — triggers the placement fee.",
      },
    ],
  },
  {
    id: "guarantee-and-refunds",
    number: "05",
    title: "Guarantee and Refunds",
    blocks: [
      {
        type: "p",
        text: "If a placement ends within [Guarantee Period] of the start date, we will replace the candidate at no additional placement fee, provided the fee was paid in full and on time.",
      },
      {
        type: "list",
        items: [
          "The guarantee covers one replacement per placement.",
          "It does not apply where the role was made redundant, materially changed, or the candidate was not paid as agreed.",
          "Where a replacement is not possible, we will refund [Refund Terms].",
        ],
      },
    ],
  },
  {
    id: "your-responsibilities",
    number: "06",
    title: "Your Responsibilities",
    blocks: [
      {
        type: "p",
        text: "To keep the process fair to candidates and workable for us, you agree to:",
      },
      {
        type: "list",
        items: [
          "Give an honest description of the role, the pay, and the working hours.",
          "Treat candidate information as confidential and use it only to assess that candidate for your role.",
          "Not pass candidate details to another business without our written consent.",
          "Comply with the employment, equality, and data protection laws that apply to you.",
          "Tell us within [Notification Period] when you make an offer to anyone we introduced.",
        ],
      },
    ],
  },
  {
    id: "acceptable-use",
    number: "07",
    title: "Acceptable Use of the Website",
    blocks: [
      { type: "p", text: "When using this website, you must not:" },
      {
        type: "list",
        items: [
          "Scrape, crawl, or bulk-download its content without written permission.",
          "Attempt to gain unauthorised access to any part of the site or its systems.",
          "Upload anything malicious, unlawful, or that infringes the rights of others.",
          "Use the booking tool to send unsolicited marketing, or to hold slots you do not intend to attend.",
          "Interfere with the third-party booking tool embedded on our contact page, or use it other than to book a genuine consultation.",
        ],
      },
      {
        type: "p",
        text: "We may suspend or withdraw access to the site, without notice, where we reasonably believe these rules have been broken.",
      },
    ],
  },
  {
    id: "intellectual-property",
    number: "08",
    title: "Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "The Talently name, logo, site design, copy, and any materials we produce for you remain the property of [Company Name] or its licensors. Nothing in these terms transfers ownership to you.",
      },
      {
        type: "p",
        text: "You may use materials we send you for the purpose we sent them — assessing and hiring a candidate — and for nothing else.",
      },
    ],
  },
  {
    id: "liability",
    number: "09",
    title: "Liability",
    blocks: [
      {
        type: "p",
        text: "We take reasonable care in screening candidates, but we do not guarantee that any candidate will perform to a particular standard or stay for a particular length of time. The decision to hire, manage, and pay a candidate is yours.",
      },
      {
        type: "list",
        items: [
          "We are not liable for indirect or consequential loss, lost profits, or lost business opportunity.",
          "Our total liability arising out of any placement is limited to [Liability Cap].",
          "Nothing here limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.",
        ],
      },
    ],
  },
  {
    id: "termination",
    number: "10",
    title: "Termination",
    blocks: [
      {
        type: "p",
        text: "Either of us may end the engagement by giving [Notice Period] written notice. Fees already due for placements made before termination remain payable.",
      },
      {
        type: "p",
        text: "We may end it immediately where you breach these terms materially, fail to pay after [Payment Reminder Period], or become insolvent.",
      },
    ],
  },
  {
    id: "changes-and-law",
    number: "11",
    title: "Changes, Law, and Contact",
    blocks: [
      {
        type: "p",
        text: "We may update these terms as our service changes. The effective date at the top of the page tells you which version applies; changes are not retrospective for engagements already underway.",
      },
      {
        type: "p",
        text: "These terms are governed by the laws of [Governing Law], and the courts of [Jurisdiction] have exclusive jurisdiction over any dispute.",
      },
      {
        type: "p",
        text: "Questions about these terms go to [Contact Email].",
      },
    ],
  },
];
