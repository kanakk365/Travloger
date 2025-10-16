"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    content: `•Privacy Policy

• Last Updated: 22 Sep 2025

• This Privacy Policy describes how Destiny Travloger LLP (“Travloger,” “We,” “Us,” or “Our”) collects, uses, stores, and protects the personal information of users (“You,” “Your,” or “User”) when You access our website, mobile applications, or book travel services.

• By using our Platform or Services, You agree to the practices outlined in this Privacy Policy.

• 1. Information We Collect

• Personal Information: Name, email, phone number, address, age, gender, ID/passport details (for bookings).

• Booking Data: Travel preferences, package selections, dates, payment details, invoices. 

• Device/Technical Data: IP address, browser type, operating system, app usage logs, cookies.

• User Content: Reviews, testimonials, photos, or media submitted through the Platform.

• 2. How We Use Your Information

• To process and confirm bookings.

• To provide itineraries, invoices, updates, and customer support.

• To communicate trip details, reminders, and service modifications.

• To send marketing communications (offers, discounts, updates). You may opt out anytime via unsubscribe links.

• To improve our website, app, and services through analytics.

• 3. Data Sharing

• Photography is included in group/community trips only when 8 or more travelers are confirmed.

• Candid photos/videos captured during eligible trips may be used for Travloger’s marketing unless You opt out in writing before departure.

• 5. Cookies & Tracking

• Access & Correction: You may request a copy of your data or correction of inaccuracies.

• Deletion: You may request deletion of your personal data, subject to legal/contractual obligations.
• Opt-Out: You can unsubscribe from marketing communications at any time.

• Consent Withdrawal: You may withdraw previously given consents (e.g., photography use) by written notice.

9. Children’s Privacy
Our services are not directed toward individuals under 18 years of age. If we discover data collected from minors without guardian consent, we will delete it.

10. Changes to this Policy

Travloger may update this Privacy Policy from time to time. Changes will be posted on the Platform. Continued use signifies acceptance of the updated Policy.
11. Contact
Destiny Travloger LLPHyderabad, Telangana, IndiaEmail: Hello@travloger.inPhone: +91 6281392007`,
  },
  {
    id: "terms",
    title: "Terms and Conditions",
    content: `Terms and Conditions

By using Traveloger's services, you agree to be bound by these Terms and Conditions.

1. Service Description:
Traveloger provides travel booking and planning services including flights, accommodations, tours, and travel packages.

2. User Responsibilities:
- You agree to provide accurate and truthful information
- You are responsible for maintaining the confidentiality of your account
- You agree not to use the service for any illegal activities
- You will not attempt to gain unauthorized access to our systems

3. Booking and Payment:
- All bookings are subject to availability
- Payment must be made according to the terms specified during booking
- Prices are subject to change without notice
- Refunds will be processed according to our cancellation policy

4. Cancellation and Refund Policy:
- Cancellations made 30+ days before travel receive full refund
- Cancellations made 15-29 days before travel receive 50% refund
- Cancellations made less than 15 days before travel receive no refund
- Non-refundable bookings cannot be refunded

5. Limitation of Liability:
Traveloger is not liable for:
- Flight cancellations or delays by airlines
- Hotel overbookings or service failures
- Force majeure events
- Lost or damaged luggage

6. Dispute Resolution:
Any disputes will be resolved through arbitration in accordance with applicable laws.

7. Amendment Rights:
We reserve the right to modify these terms at any time. Changes will be posted on our website.`,
  },
  {
    id: "copyright",
    title: "Copyright & Content Policy",
    content: `Copyright & Content Policy

Intellectual Property Rights:
All content on Traveloger, including text, images, graphics, logos, and software, is the property of Traveloger or its content suppliers and is protected by international copyright laws.

Permitted Use:
- You may view and print content for personal, non-commercial use
- You may not reproduce, modify, distribute, or transmit any content without written permission
- You may not use our content for commercial purposes

User-Generated Content:
- When you submit content (photos, reviews, comments), you grant Traveloger a non-exclusive, worldwide license to use it
- You represent that you own or have permission to use the content you submit
- We reserve the right to remove any inappropriate content

Photo and Image Rights:
- Destination photos are sourced from licensed providers or with appropriate permissions
- If you believe copyright infringement has occurred, please contact us immediately
- Tourism photos are provided for informational purposes only

Attribution:
When sharing content from Traveloger, proper attribution must be provided. Contact us for guidelines.

Third-Party Content:
- Traveloger may include content from third parties
- We are not responsible for the accuracy or legality of third-party content
- Links to external websites do not constitute endorsement

DMCA Compliance:
We respect copyright law and handle infringement claims according to the Digital Millennium Copyright Act.

Enforcement:
Traveloger actively monitors for and enforces its intellectual property rights. Violations may result in account termination and legal action.

Contact for Copyright Issues:
For copyright concerns, email: copyright@traveloger.com`,
  },
];

function Policy() {
  const [openId, setOpenId] = useState<string | null>("privacy");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-4">
        {accordionItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden "
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full px-6 py-5 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between font-semibold text-gray-900"
            >
              <span className="text-lg">{item.title}</span>
            </button>

            {openId === item.id && (
              <div className="px-6 py-6 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed whitespace-pre-line animate-in fade-in duration-300">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Policy;
