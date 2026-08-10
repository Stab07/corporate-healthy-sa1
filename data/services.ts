export interface WhatToExpectStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
  overview: string;
  benefits: string[];
  whatToExpect: WhatToExpectStep[];
  idealFor: string[];
  faqs: ServiceFaq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "audiologist",
    title: "Audiologist",
    shortDescription:
      "Hearing screening and noise-exposure support that protects your team and supports OHS compliance.",
    icon: "Ear",
    heroImage: "/images/Hearing & Audiology.jpg",
    overview:
      "Hearing loss from workplace noise is permanent, gradual, and easy to miss until it is too late. Our audiologists conduct professional audiometric and occupational noise-exposure screening that identifies early changes in hearing, supports compliance with occupational health and safety regulations, and protects the long-term wellbeing of your people. For industrial and manufacturing teams, regular hearing surveillance is non-negotiable - and we make it simple.",
    benefits: [
      "Early detection of hearing changes before they become permanent",
      "Support for Occupational Health and Safety Act (OHSA) compliance",
      "Audiometric testing including pure-tone and speech testing",
      "Noise-exposure assessments for hazardous work areas",
      "Hearing conservation programme support",
      "Clear, employee-friendly reporting and referral pathways",
    ],
    whatToExpect: [
      {
        title: "Pre-screening Briefing",
        description:
          "Employees are briefed on what to expect and asked to avoid loud noise for a period before testing.",
      },
      {
        title: "Audiometric Testing",
        description:
          "A qualified audiologist performs the hearing test in a controlled environment to ensure accurate results.",
      },
      {
        title: "Noise-exposure Review",
        description:
          "For high-risk environments, we review noise levels and exposure history to identify problem areas.",
      },
      {
        title: "Results & Reporting",
        description:
          "Employees receive their results and any referrals; employers receive a compliance-ready summary.",
      },
    ],
    idealFor: [
      "Manufacturing & heavy industry",
      "Mining, construction & engineering",
      "Transport & logistics",
      "Any workplace with noisy machinery",
    ],
    faqs: [
      {
        question: "Is hearing screening required by law?",
        answer:
          "For environments with significant noise exposure, occupational health regulations require medical surveillance that includes hearing tests. Our screenings help you meet that obligation and keep a clear record for inspections.",
      },
      {
        question: "What happens if an employee's screening shows hearing loss?",
        answer:
          "We refer employees for further assessment with an audiologist or ENT specialist and, where appropriate, hearing aids. The employer also receives guidance on hearing protection and noise control.",
      },
      {
        question: "Do you screen on site?",
        answer:
          "Yes. Our audiologists come to your premises with the equipment needed for professional screening, so employees do not lose half a day travelling.",
      },
    ],
    related: ["nurses", "psychologist", "orthotist", "physio-therapist"],
  },
  {
    slug: "dentist",
    title: "Dentist",
    shortDescription:
      "On-site oral health screening and dental education that catches problems early and keeps your team healthy.",
    icon: "Smile",
    heroImage: "/images/Dentist.jpg",
    overview:
      "Oral health is closely linked to overall health - untreated dental problems can affect the heart, diabetes management, nutrition, and day-to-day confidence, and they are a common cause of unplanned absence. Our dentists come on site to run quick, non-invasive oral screenings and education sessions, helping employees catch issues before they become painful or expensive. Where treatment is needed, employees receive a clear referral to a dental practice that suits them.",
    benefits: [
      "Early detection of dental issues before they cause pain or absence",
      "Oral health education linked to heart health, diabetes, and nutrition",
      "Reduced dental-related sick leave and emergency time off",
      "A high-engagement, accessible addition to wellness days",
      "Non-invasive, judgement-free screening for every employee",
      "Clear referral pathways to trusted dental practices",
    ],
    whatToExpect: [
      {
        title: "On-site Screening",
        description:
          "A dentist conducts a visual oral health screening for each employee in a private space.",
      },
      {
        title: "Personalised Advice",
        description:
          "Employees receive practical guidance on hygiene, diet, and habits that affect their oral health.",
      },
      {
        title: "Group Education",
        description:
          "Optional lunch-and-learn talks cover prevention, brushing technique, and diet-related dental health.",
      },
      {
        title: "Referral & Follow-up",
        description:
          "Where treatment is needed, employees get a formal referral and guidance on next steps.",
      },
    ],
    idealFor: [
      "Desk-based & office teams",
      "Manufacturing & shift workers",
      "Companies running wellness days",
      "Teams with high dental-related absence",
    ],
    faqs: [
      {
        question: "Do employees need to prepare before a screening?",
        answer:
          "No. Screening is quick and non-invasive - a visual examination of the teeth and gums. Employees just need to be comfortable; no preparation is required.",
      },
      {
        question: "Can treatment be done on site?",
        answer:
          "Routine treatment is delivered by our network of dental practices. On-site, we focus on screening, prevention advice, and education - and we make the referral process easy for employees.",
      },
      {
        question: "Is this useful if employees already have dental cover?",
        answer:
          "Yes. Many people put off check-ups even when they are covered. On-site screening removes the effort barrier and catches problems early.",
      },
    ],
    related: ["general-practitioner", "dietician", "nurses", "optometrist"],
  },
  {
    slug: "physio-therapist",
    title: "Physiotherapist",
    shortDescription:
      "Injury prevention, ergonomic advice, and treatment for workplace strain and movement disorders.",
    icon: "Activity",
    heroImage: "/images/Physiotherapy.jpg",
    overview:
      "Workplace strain injuries - from desk-bound necks and backs to repetitive strain in physical roles - are among the most common causes of sick leave. Our physiotherapists treat the root cause, not just the symptom, with a focus on sports and orthopaedic rehabilitation, ergonomic assessment, joint disorders, and respiratory conditions. Whether it is a one-day wellness clinic or an ongoing on-site service, we help employees move better, recover faster, and stay at work.",
    benefits: [
      "Treatment for workplace strain, back, and neck pain",
      "Ergonomic assessments and advice for desks and manual tasks",
      "Sports and orthopaedic rehabilitation",
      "Faster recovery and reduced sickness absence",
      "Manual handling and injury-prevention guidance",
      "Clear referral pathways for employees needing ongoing care",
    ],
    whatToExpect: [
      {
        title: "Assessment",
        description:
          "A physiotherapist assesses the employee's complaint, history, and movement patterns to identify the root cause.",
      },
      {
        title: "Treatment",
        description:
          "Hands-on treatment and a practical home-exercise plan address the cause of the problem.",
      },
      {
        title: "Ergonomic Review",
        description:
          "Where relevant, we advise on workstation setup or manual handling technique to prevent recurrence.",
      },
      {
        title: "Review & Referral",
        description:
          "Progress is monitored, with referral to specialists or occupational health where needed.",
      },
    ],
    idealFor: [
      "Desk-based & remote teams",
      "Manual handling roles",
      "Drivers & field workers",
      "Sports-active or physically demanding staff",
    ],
    faqs: [
      {
        question: "Can physiotherapy help before a problem becomes serious?",
        answer:
          "Yes. Many clients bring us in preventatively - for ergonomic reviews, manual handling training, and early treatment of niggles before they turn into claims or extended sick leave.",
      },
      {
        question: "Do employees need a doctor's referral?",
        answer:
          "No. Physiotherapists can assess and treat without a referral. Where we identify something that needs medical review, we will refer on.",
      },
      {
        question: "Is treatment done at the workplace?",
        answer:
          "Yes, our physiotherapists work on site. Employees can be seen at a wellness day or in scheduled blocks, with a private treatment area arranged in advance.",
      },
    ],
    related: ["orthotist", "biokineticist", "massages", "chiropractor"],
  },
  {
    slug: "dietician",
    title: "Dietician",
    shortDescription:
      "Practical, individualised nutrition guidance that helps employees manage weight, chronic conditions, and everyday energy.",
    icon: "Apple",
    heroImage: "/images/Dietetics & Nutrition.jpg",
    overview:
      "What we eat shapes our energy, focus, immune system, and long-term health. Our registered dieticians provide practical, evidence-based nutrition counselling tailored to each employee - not generic diet advice. From weight management and chronic conditions to sports nutrition and digestive health, employees leave every consultation with a clear, achievable plan they can actually follow.",
    benefits: [
      "Individualised nutrition plans rather than one-size-fits-all advice",
      "Better management of conditions such as diabetes, hypertension, and cholesterol",
      "Improved energy, focus, and workplace productivity",
      "Realistic support for weight management goals, with follow-up",
      "Group workshops and lunch-and-learn sessions for the whole team",
      "Reduces diet-related sick leave over time",
    ],
    whatToExpect: [
      {
        title: "Health & Lifestyle Review",
        description:
          "A dietician reviews each employee's health profile, eating habits, and goals in a private consultation.",
      },
      {
        title: "Personalised Guidance",
        description:
          "Employees receive tailored dietary advice and practical food plans aligned with their lifestyle and budget.",
      },
      {
        title: "Group Sessions",
        description:
          "Optional workshops cover label reading, meal planning, hydration, and building healthy habits at work.",
      },
      {
        title: "Follow-up & Monitoring",
        description:
          "Ongoing consultations help employees stay on track and adjust their plans as their goals change.",
      },
    ],
    idealFor: [
      "Sedentary & desk-based teams",
      "Staff managing chronic conditions",
      "Companies running wellness days",
      "Weight management initiatives",
    ],
    faqs: [
      {
        question: "Is the advice individualised or generic?",
        answer:
          "Each consultation is one-on-one and built around the employee's own health history, medications, and lifestyle. Our dieticians do not hand out generic meal plans - every recommendation is personalised and practical.",
      },
      {
        question: "What conditions can dieticians help with?",
        answer:
          "Common focus areas include weight management, diabetes, high blood pressure and cholesterol, digestive disorders such as IBS, coeliac disease and IBD, sports nutrition, and food allergies. Where a condition falls outside our scope, we refer appropriately.",
      },
      {
        question: "Can dieticians be part of a health screening day?",
        answer:
          "Yes. Dietician consultations are a natural follow-on from screening results - many clients add them to the same day so employees can act on their numbers while the results are fresh.",
      },
    ],
    related: ["massages", "audiologist", "nurses", "biokineticist"],
  },
  {
    slug: "orthotist",
    title: "Orthotist",
    shortDescription:
      "Assessment, orthotics, and mobility support for employees with foot, joint, and musculoskeletal needs.",
    icon: "Bone",
    heroImage: "/images/Orthotist.jpg",
    overview:
      "Musculoskeletal discomfort - particularly in the feet and lower limbs - silently drains employee comfort, productivity, and long-term mobility. Our orthotists conduct structured assessments that identify, prevent, and correct orthopaedic and vascular problems, with a particular focus on foot function. Where appropriate, custom orthotic insoles relieve pain, improve alignment, and help prevent future injury - supporting employees who stand, walk, or move for a living.",
    benefits: [
      "Screening that catches foot and alignment issues before they worsen",
      "Custom orthotic insoles that reduce pain and improve on-your-feet comfort",
      "Support for standing, walking, and physically demanding roles",
      "Post-injury and post-surgical mobility support",
      "Reduced risk of workplace strain and injury",
      "Practical advice on footwear and ongoing foot care",
    ],
    whatToExpect: [
      {
        title: "Initial Assessment",
        description:
          "A structured biomechanical and foot-function assessment identifies areas of concern and how they affect the employee.",
      },
      {
        title: "Diagnosis & Plan",
        description:
          "Findings are explained clearly, and a treatment or support plan is agreed with the employee.",
      },
      {
        title: "Custom Fitting",
        description:
          "Where indicated, custom orthotics are prescribed, measured, and fitted to the employee's own footwear.",
      },
      {
        title: "Review & Referral",
        description:
          "Progress is reviewed, with referrals to physiotherapy or other specialists where ongoing care is needed.",
      },
    ],
    idealFor: [
      "Manufacturing & industrial teams",
      "Retail, hospitality & on-your-feet roles",
      "Post-injury return-to-work support",
      "Logistics & transport staff",
    ],
    faqs: [
      {
        question: "Do employees need a referral to be assessed?",
        answer:
          "No. Employees can book directly through your wellness programme. We handle the assessment, and where treatment is outside our scope we will refer on to the appropriate specialist.",
      },
      {
        question: "What does a custom orthotic cost?",
        answer:
          "Costs vary with the prescription and materials used. Because we assess first, we only recommend orthotics where there is a genuine benefit - and we confirm pricing with you before fitting anything.",
      },
      {
        question: "How long does an assessment take?",
        answer:
          "A full assessment typically takes 20-30 minutes per employee. We schedule in blocks so there is minimal disruption to your operations.",
      },
    ],
    related: ["physio-therapist", "biokineticist", "audiologist", "podiatrist"],
  },
  {
    slug: "podiatrist",
    title: "Podiatrist",
    shortDescription:
      "Foot and lower limb health assessments for employees in standing, walking, and physically demanding roles.",
    icon: "Footprints",
    heroImage: "/images/Podiatrist.jpg",
    overview:
      "Foot problems are a hidden driver of discomfort, poor posture, and sick leave - especially in roles where people stand, walk, or lift for hours. Our podiatrists conduct on-site foot and lower limb assessments that identify the cause of pain, check gait and footwear, and provide practical advice to keep employees on their feet and at work. Where ongoing treatment or orthotic support is needed, we provide clear referrals.",
    benefits: [
      "Early identification of foot and lower limb problems",
      "Reduced foot-related pain and sick leave in on-your-feet roles",
      "Gait and posture assessment to prevent secondary injury",
      "Practical advice on footwear, foot care, and stretching",
      "Foot health support for employees with diabetes and other conditions",
      "Clear referral pathways to podiatry clinics and orthotics",
    ],
    whatToExpect: [
      {
        title: "Assessment",
        description:
          "A podiatrist reviews the employee's foot health, gait, footwear, and any pain or discomfort.",
      },
      {
        title: "Findings",
        description:
          "Issues are explained clearly, along with the factors - from footwear to work posture - that contribute to them.",
      },
      {
        title: "Advice & Care",
        description:
          "Employees receive practical guidance on care, suitable footwear, and simple exercises.",
      },
      {
        title: "Referral",
        description:
          "Where treatment is needed, employees are referred to podiatry clinics or orthotic services.",
      },
    ],
    idealFor: [
      "Retail, hospitality & on-your-feet roles",
      "Manufacturing & logistics teams",
      "Nurses, drivers & field staff",
      "Employees with diabetes or circulatory conditions",
    ],
    faqs: [
      {
        question: "Do employees need a referral to be assessed?",
        answer:
          "No. Employees can book directly through your wellness programme. We assess on site and refer on only where treatment is needed.",
      },
      {
        question: "How is a podiatrist different from an orthotist?",
        answer:
          "A podiatrist assesses and treats the foot and lower limb as a whole, while an orthotist specialises in braces and custom orthotic devices. Where both are needed, we coordinate a single, clear plan for the employee.",
      },
      {
        question: "How long does an assessment take?",
        answer:
          "A full assessment typically takes 15-20 minutes per employee. We schedule in blocks to keep disruption to your operations minimal.",
      },
    ],
    related: ["orthotist", "physio-therapist", "chiropractor", "nurses"],
  },
  {
    slug: "chiropractor",
    title: "Chiropractor",
    shortDescription:
      "Spinal and musculoskeletal assessment and care for strain from desk-based and manual labour roles.",
    icon: "PersonStanding",
    heroImage: "/images/Chiropractor.jpg",
    overview:
      "Back, neck, and joint strain is one of the most common reasons employees take time off - whether from long hours at a desk or physically demanding work. Our chiropractors assess the spine, posture, and movement patterns to identify where strain is coming from, provide gentle, targeted care where appropriate, and give employees practical advice to prevent recurrence. It is a natural complement to our physiotherapy, biokinetics, and massage services.",
    benefits: [
      "Assessment of spinal and joint strain from desk or manual work",
      "Relief of back, neck, and tension-headache complaints",
      "Posture and workstation advice to prevent recurrence",
      "Manual-handling guidance for physical roles",
      "Reduced musculoskeletal sick leave over time",
      "Clear coordination with physiotherapy and biokinetics where needed",
    ],
    whatToExpect: [
      {
        title: "Consultation",
        description:
          "A chiropractor reviews the employee's complaint, work patterns, and relevant history.",
      },
      {
        title: "Assessment",
        description:
          "Spinal, posture, and movement examinations identify the source of strain.",
      },
      {
        title: "Care & Advice",
        description:
          "Gentle, appropriate treatment is provided where indicated, alongside exercises and ergonomic advice.",
      },
      {
        title: "Referral & Follow-up",
        description:
          "Where ongoing or combined care is needed, we coordinate referrals and follow-up.",
      },
    ],
    idealFor: [
      "Desk-based & office teams",
      "Manufacturing & manual labour roles",
      "Drivers & field staff",
      "Employees with recurring back or neck strain",
    ],
    faqs: [
      {
        question: "Is chiropractic treatment safe?",
        answer:
          "Yes. Our chiropractors are registered practitioners who screen for contraindications before any treatment and use gentle, targeted techniques appropriate to each employee.",
      },
      {
        question: "Do employees need a referral?",
        answer:
          "No. Employees can book directly through the wellness programme. Where a condition falls outside our scope, we refer appropriately.",
      },
      {
        question: "How does chiropractic fit with physiotherapy or massage?",
        answer:
          "They complement each other well. We coordinate with our physiotherapists, biokineticists, and massage therapists so employees get one clear, consistent plan.",
      },
    ],
    related: ["physio-therapist", "biokineticist", "massages", "podiatrist"],
  },
  {
    slug: "optometrist",
    title: "Optometrist",
    shortDescription:
      "Vision screening and eye health assessments for screen-based, precision, and safety-critical roles.",
    icon: "Eye",
    heroImage: "/images/Optometrist.jpg",
    overview:
      "Undetected vision problems cause eye strain, headaches, and reduced focus - and they are a real safety concern in precision and safety-critical roles. Our optometrists run on-site vision screenings covering visual acuity and near-vision, alongside basic eye-health checks, so employees catch problems early and get a clear referral for a full examination where needed. It is an accessible way to protect both productivity and safety.",
    benefits: [
      "Early detection of vision problems affecting screen work",
      "Reduced eye strain and headaches in digital-heavy roles",
      "Support for precision and safety-critical positions",
      "Screening for common conditions that need further assessment",
      "Practical advice on screen ergonomics and eye care",
      "On-site access removes the effort barrier to eye check-ups",
    ],
    whatToExpect: [
      {
        title: "Pre-screening",
        description:
          "A short questionnaire captures any vision concerns or symptoms employees are experiencing.",
      },
      {
        title: "Vision Screening",
        description:
          "A qualified optometrist checks visual acuity, near vision, and basic eye health in a controlled setup.",
      },
      {
        title: "Feedback",
        description:
          "Results are explained in plain language, with advice where issues are identified.",
      },
      {
        title: "Referral",
        description:
          "Employees needing a full examination or prescription receive a clear referral.",
      },
    ],
    idealFor: [
      "Screen-based & remote teams",
      "Precision manufacturing & quality roles",
      "Drivers & safety-critical positions",
      "Employees who have never had an eye exam",
    ],
    faqs: [
      {
        question: "Can optometrists prescribe glasses on site?",
        answer:
          "On-site we conduct screening and refer. A full eye examination - where prescriptions are issued - is completed by an optometrist, and we make it easy for employees to book.",
      },
      {
        question: "How long does a screening take?",
        answer:
          "A vision screening typically takes 10-15 minutes per employee and can be scheduled in blocks with minimal disruption.",
      },
      {
        question: "Is it relevant for employees who already wear glasses?",
        answer:
          "Yes. Screenings catch out-of-date prescriptions and new conditions that regular check-ups may have missed.",
      },
    ],
    related: ["general-practitioner", "dentist", "nurses", "phlebotomist"],
  },
  {
    slug: "phlebotomist",
    title: "Phlebotomist",
    shortDescription:
      "On-site blood sample collection that supports health screening programmes and biometric testing.",
    icon: "Syringe",
    heroImage: "/images/Phlebotomist.jpg",
    overview:
      "Blood tests unlock some of the most valuable health data for employees - cholesterol, glucose, HbA1c, and liver and kidney panels - but the logistics of getting to a lab are a real barrier. Our phlebotomists come on site to collect samples quickly, comfortably, and hygienically, as part of a workplace health screening day or an ongoing biometric programme. Results flow through a reliable lab process and are handled with complete confidentiality.",
    benefits: [
      "Convenient on-site blood collection for biometric screening",
      "Reliable support for cholesterol, glucose, and HbA1c testing",
      "Trained, gentle phlebotomists who minimise discomfort",
      "Strict confidentiality and POPIA-compliant handling",
      "Established lab partnerships for reliable result turnaround",
      "Complements nurses' health risk assessments perfectly",
    ],
    whatToExpect: [
      {
        title: "Planning & Communication",
        description:
          "Employees receive clear guidance, including fasting instructions where tests require it.",
      },
      {
        title: "On-site Collection",
        description:
          "Samples are collected quickly and hygienically by a trained phlebotomist.",
      },
      {
        title: "Aftercare",
        description:
          "Employees receive aftercare guidance and support immediately after their sample is taken.",
      },
      {
        title: "Results & Follow-up",
        description:
          "Results are delivered through the reporting process, with referrals where employees need follow-up.",
      },
    ],
    idealFor: [
      "Annual health screening programmes",
      "Chronic disease monitoring initiatives",
      "Corporate wellness days",
      "Biometric and insurance-linked programmes",
    ],
    faqs: [
      {
        question: "Do employees need to fast before blood tests?",
        answer:
          "For accurate glucose and cholesterol results, a fast of 8-10 hours is usually recommended. We communicate clear instructions to employees in advance so they can plan around it.",
      },
      {
        question: "Is on-site blood collection safe and hygienic?",
        answer:
          "Yes. Our phlebotomists use single-use equipment and follow strict clinical protocols, so collection is safe, hygienic, and comfortable.",
      },
      {
        question: "Who receives the results?",
        answer:
          "The employee always receives their own results, with a referral where needed. Employers receive only de-identified summary reporting, fully POPIA-compliant.",
      },
    ],
    related: ["nurses", "general-practitioner", "dietician", "biokineticist"],
  },
  {
    slug: "general-practitioner",
    title: "General Practitioner",
    shortDescription:
      "Comprehensive on-site GP consultations and health assessments - a general entry point to the wellness programme.",
    icon: "UserRound",
    heroImage: "/images/General Practitioner.jpg",
    overview:
      "Sometimes employees need more than a screening - they need to speak to a doctor. Our general practitioners come on site to offer comprehensive health consultations covering medical history, vital signs, medication, and lifestyle, giving employees a full-picture review without losing half a day travelling to a clinic. It is the ideal entry point into the wider wellness programme and a valuable service for companies without an in-house medical team.",
    benefits: [
      "Professional on-site GP consultations for your team",
      "Comprehensive health assessments as an entry point to wellness",
      "Management advice for chronic conditions and medication reviews",
      "Fitness-for-work and pre-employment assessment options",
      "Reduced lost work time spent travelling to a doctor",
      "Clear referrals into screening, therapy, and specialist services",
    ],
    whatToExpect: [
      {
        title: "Consultation",
        description:
          "A GP reviews the employee's health history, current concerns, medications, and lifestyle.",
      },
      {
        title: "Examination",
        description:
          "Relevant physical checks such as blood pressure, weight, and heart and lung review are performed.",
      },
      {
        title: "Guidance",
        description:
          "Employees receive a clear treatment plan, prescription, or lifestyle advice as appropriate.",
      },
      {
        title: "Referral",
        description:
          "Where needed, employees are referred into the wider wellness programme or to specialist care.",
      },
    ],
    idealFor: [
      "SMEs without an in-house medical team",
      "Annual employee health check-ups",
      "Chronic disease management programmes",
      "Managers, shift workers & high-risk roles",
    ],
    faqs: [
      {
        question: "Can a GP prescribe medication on site?",
        answer:
          "Yes, where clinically indicated, prescriptions can be issued during the consultation, with appropriate follow-up and referral for ongoing care.",
      },
      {
        question: "What does a consultation cover?",
        answer:
          "A full review - medical history, vital signs, current medications, lifestyle, and any specific concerns - followed by a clear plan and referrals where needed.",
      },
      {
        question: "Is this a replacement for an employee's usual doctor?",
        answer:
          "No. It is a convenient workplace access point. Continuity of care remains with the employee's usual GP, and we coordinate with them where appropriate.",
      },
    ],
    related: ["nurses", "phlebotomist", "psychologist", "dietician"],
  },
  {
    slug: "biokineticist",
    title: "Biokineticist",
    shortDescription:
      "Exercise-based rehabilitation and personalised fitness programmes that improve function and performance.",
    icon: "Dumbbell",
    heroImage: "/images/Biokinetics.jpg",
    overview:
      "Movement is medicine - and it works best when it is personalised. Our biokineticists assess each employee's function, fitness, and goals, then design individualised exercise programmes that build core strength, improve posture and balance, and manage pain. From post-injury rehabilitation to return-to-work programmes and lifestyle fitness, we help employees feel stronger, move better, and perform at their best.",
    benefits: [
      "Individualised exercise assessments and health plans",
      "Improved core strength, posture, and balance",
      "Post-injury rehabilitation and return-to-work support",
      "Pain management through guided, progressive exercise",
      "Chronic disease management through physical activity",
      "Improved energy, confidence, and physical performance",
    ],
    whatToExpect: [
      {
        title: "Fitness & Functional Assessment",
        description:
          "Each employee's current function, fitness level, and limitations are assessed in a private session.",
      },
      {
        title: "Personalised Programme",
        description:
          "An individualised exercise plan is designed around the employee's goals and constraints.",
      },
      {
        title: "Guided Sessions",
        description:
          "Supervised sessions ensure exercises are performed correctly, safely, and progressively.",
      },
      {
        title: "Progress Reviews",
        description:
          "Plans are updated as employees improve, with clear outcomes and milestones tracked over time.",
      },
    ],
    idealFor: [
      "Post-injury return-to-work programmes",
      "Sedentary & desk-based teams",
      "Employees with chronic conditions",
      "Manual & physically demanding roles",
    ],
    faqs: [
      {
        question: "How is biokinetics different from physiotherapy or a gym membership?",
        answer:
          "Biokineticists specialise in exercise as therapy. Rather than generic gym programmes, we assess each employee and prescribe progressive, goal-specific exercise - typically bridging the gap between injury and normal function.",
      },
      {
        question: "Can biokineticists work with employees who have never exercised?",
        answer:
          "Absolutely. Programmes are built around each employee's current level. We are used to working with people who have not exercised in years and design sessions that are safe, achievable, and encouraging.",
      },
      {
        question: "Do employees need a referral?",
        answer:
          "No. Employees can be referred by their company or book directly through the wellness programme. If there is an underlying condition we should know about, we will manage or refer accordingly.",
      },
    ],
    related: ["physio-therapist", "dietician", "massages", "orthotist"],
  },
  {
    slug: "homeopath",
    title: "Homeopath",
    shortDescription:
      "Complementary wellness consultations for employees seeking holistic support for stress, sleep, and everyday health.",
    icon: "Leaf",
    heroImage: "/images/Homeopath.jpg",
    overview:
      "Not every employee wants the same kind of care, and offering a choice makes a wellness programme more inclusive. Our registered homeopaths provide holistic consultations that look at the whole person - symptoms, lifestyle, stress, sleep, and energy - and offer complementary remedies and practical advice alongside conventional care. It broadens the appeal of workplace wellness and gives employees a comfortable entry point into looking after their health.",
    benefits: [
      "Holistic consultations for employees seeking complementary care",
      "Complements conventional workplace health services safely",
      "Support for stress, sleep, energy, and minor ailments",
      "Personalised, non-invasive wellness advice",
      "Broadens the appeal of the wellness programme across your team",
      "Clear boundaries - we refer to GPs where medical care is needed",
    ],
    whatToExpect: [
      {
        title: "Consultation",
        description:
          "A homeopath takes a full health, lifestyle, and wellbeing history in a private session.",
      },
      {
        title: "Holistic Analysis",
        description:
          "Symptoms and patterns are assessed in the context of the employee's overall health and circumstances.",
      },
      {
        title: "Recommendations",
        description:
          "Employees receive complementary remedies and practical lifestyle advice tailored to their needs.",
      },
      {
        title: "Follow-up & Coordination",
        description:
          "Progress is reviewed, and care is coordinated with other services - or referred to a GP - where needed.",
      },
    ],
    idealFor: [
      "Employees seeking complementary or alternative care",
      "Stress, sleep, and energy concerns",
      "Wellness days and health awareness events",
      "Diverse teams wanting a choice of care",
    ],
    faqs: [
      {
        question: "Is homeopathy safe to combine with conventional treatment?",
        answer:
          "Yes, when the practitioner is fully aware of the employee's current medication and conditions. We always check this at the start of every consultation and coordinate with other care providers where needed.",
      },
      {
        question: "Are homeopaths registered practitioners?",
        answer:
          "Yes. Our homeopaths are registered with the relevant health council and operate within clear professional scope and referral boundaries.",
      },
      {
        question: "Does this replace a doctor or GP consultation?",
        answer:
          "No. It is a complementary service. Where medical care is indicated, we refer employees to a GP or specialist - homeopathy works alongside, not instead of, conventional care.",
      },
    ],
    related: ["general-practitioner", "psychologist", "massages", "chiropractor"],
  },
  {
    slug: "nurses",
    title: "Nurses",
    shortDescription:
      "On-site nursing, health risk assessments, and medical surveillance that keep your workforce healthy and compliant.",
    icon: "Stethoscope",
    heroImage: "/images/Blood Tests.jpg",
    overview:
      "Occupational health nurses are the backbone of a safe, healthy, legally compliant workplace. Our experienced in-house nursing team delivers a comprehensive range of on-site services - health risk assessments covering waist circumference, BMI, blood pressure, cholesterol and glucose; voluntary counselling and testing (VCT); and medical surveillance including eye tests, X-rays, lung function, and audiometric testing. We bring the expertise to you, aligned with the requirements of the Occupational Health and Safety Act.",
    benefits: [
      "Comprehensive health risk assessments delivered on your premises",
      "Medical surveillance that supports OHS Act compliance",
      "Voluntary counselling and testing (VCT) delivered with care and confidentiality",
      "Fitness-to-work and pre-employment screening options",
      "Chronic disease monitoring for high-risk employees",
      "Professional, employee-friendly care that protects your brand",
    ],
    whatToExpect: [
      {
        title: "Planning & Consent",
        description:
          "We agree on the screening scope, coordinate staff communication, and handle informed consent properly.",
      },
      {
        title: "On-site Screening",
        description:
          "Nurses run the assessment stations, following strict clinical and confidentiality protocols.",
      },
      {
        title: "Counselling & Referral",
        description:
          "Results are explained privately, with referrals where employees need follow-up care.",
      },
      {
        title: "Employer Reporting",
        description:
          "You receive de-identified summary reporting to support health planning and compliance.",
      },
    ],
    idealFor: [
      "Factories, mines & heavy industry",
      "Employers with OHS obligations",
      "Shift workers & high-risk roles",
      "Annual medical surveillance programmes",
    ],
    faqs: [
      {
        question: "Is medical surveillance a legal requirement?",
        answer:
          "For many workplaces, yes. Under the Occupational Health and Safety Act and associated regulations, employers must provide medical surveillance for workers exposed to specific hazards. We help you implement and document it correctly.",
      },
      {
        question: "Is employee health data confidential?",
        answer:
          "Absolutely. All results are confidential and handled in line with POPIA. Employers receive de-identified summaries for planning and compliance - never individual results without the employee's consent.",
      },
      {
        question: "Can you screen large teams in a single day?",
        answer:
          "Yes. We plan station capacity around your team size so we can screen everything from small sites to operations with 1,000+ employees, efficiently.",
      },
    ],
    related: ["audiologist", "dietician", "psychologist", "massages"],
  },
  // FLAG: Not on client's official 13-service list as of 2026-08-07 — confirm with client whether to keep, remove, or fold into another service before launch.
  {
    slug: "massages",
    title: "Massages",
    shortDescription:
      "On-site chair and desk massage programmes that relieve stress and musculoskeletal strain without disrupting the workday.",
    icon: "Flower2",
    heroImage: "/images/engin-akyurt-SMwCQZWayj0-unsplash.jpg",
    overview:
      "Regular massage therapy is one of the most effective ways to lower workplace stress and address the tension, poor posture, and repetitive strain that build up during long workdays. Corporate Healthy SA brings qualified massage therapists directly to your office, so your team can take a practical, restorative break without leaving the premises. Sessions are tailored to each employee's needs and delivered on your schedule - whether that is a one-day wellness event or an ongoing monthly programme.",
    benefits: [
      "Lower stress and improved mood, reducing burnout and presenteeism",
      "Relief from tension headaches, neck and shoulder tightness, and back discomfort",
      "Improved circulation and posture for desk-based teams",
      "A visible wellbeing perk that boosts morale and retention",
      "Minimal disruption - chair massages fit easily into short breaks",
      "Popular add-on to health screening days and wellness events",
    ],
    whatToExpect: [
      {
        title: "Initial Assessment",
        description:
          "We discuss your workforce, work patterns, and wellness goals to recommend session lengths and scheduling.",
      },
      {
        title: "On-site Setup",
        description:
          "We arrive with portable massage chairs and set up a discreet, comfortable space within your building.",
      },
      {
        title: "Delivery",
        description:
          "Each employee receives a tailored session, typically 10-30 minutes, fully clothed and without needing to leave work.",
      },
      {
        title: "Feedback & Follow-up",
        description:
          "We share participation and satisfaction feedback, then schedule repeat visits to keep the programme going.",
      },
    ],
    idealFor: [
      "Office & corporate environments",
      "High-stress sectors",
      "Desk-based & remote teams",
      "Wellness days & events",
    ],
    faqs: [
      {
        question: "Do employees need to undress or prepare in advance?",
        answer:
          "No. Corporate chair massage is performed fully clothed, so employees simply take a short break and relax while a qualified therapist works on the shoulders, neck, back, arms, and hands. Where oil-based table massage is preferred, we can arrange it with advance notice and suitable facilities.",
      },
      {
        question: "How long does each session take?",
        answer:
          "Sessions are typically 10, 15, or 20 minutes and are scheduled back to back. We can flex session length and the number of therapists on the day to suit your team size and available hours.",
      },
      {
        question: "Can massage be combined with a health screening day?",
        answer:
          "Absolutely. Massage is one of our most popular additions to wellness days and pairs well with screening stations, dietician consultations, and physiotherapy. Tell us your goals and we will design the day around them.",
      },
    ],
    related: ["dietician", "nurses", "psychologist", "biokineticist"],
  },
  // FLAG: Not on client's official 13-service list as of 2026-08-07 — confirm with client whether to keep, remove, or fold into another service before launch.
  {
    slug: "psychologist",
    title: "Psychologist",
    shortDescription:
      "Confidential mental health support, EAP-style counselling, and burnout management for your team.",
    icon: "Brain",
    heroImage: "/images/Psychology & Mental Health.jpg",
    overview:
      "Mental health is a workplace health issue. Stress, burnout, and personal difficulties affect focus, relationships, and attendance - and they rarely resolve on their own. Our Employee Assistance Programme, delivered by qualified psychologists, gives your people confidential, professional support for stress, burnout, trauma, and life events. Early, accessible support helps employees recover faster, stay at work, and bring their best to the team.",
    benefits: [
      "Confidential, professional counselling for employees and their families",
      "Support for stress, burnout, anxiety, and depression",
      "Trauma and critical-incident debriefing for your team",
      "Reduced absenteeism and improved workplace morale",
      "A clear, caring employee benefit that supports retention",
      "Guidance for managers on supporting their teams",
    ],
    whatToExpect: [
      {
        title: "Introduction & Access",
        description:
          "Employees are introduced to the programme and shown how to access it confidentially.",
      },
      {
        title: "Confidential Sessions",
        description:
          "Counselling sessions address the employee's specific challenges with a qualified psychologist.",
      },
      {
        title: "Follow-up & Support",
        description:
          "Ongoing sessions and structured follow-up support progress and recovery over time.",
      },
      {
        title: "Debriefing (as needed)",
        description:
          "Following difficult events, group or individual debriefing is arranged promptly.",
      },
    ],
    idealFor: [
      "High-pressure & deadline-driven teams",
      "Post-incident support",
      "Organisations building an EAP",
      "Managers & shift workers",
    ],
    faqs: [
      {
        question: "Is the counselling confidential?",
        answer:
          "Completely. We follow strict professional and ethical standards, and no details of who uses the service or what is discussed are shared with the employer. This is the cornerstone of an effective EAP.",
      },
      {
        question: "Is this a substitute for an employee assistance programme provider?",
        answer:
          "We operate as an EAP or complement an existing one. Many clients use us for on-site psycho-social support, trauma debriefing, and wellbeing days alongside a larger EAP.",
      },
      {
        question: "How quickly can an employee access a session?",
        answer:
          "We aim to schedule an initial session within days. For urgent or critical-incident situations, we prioritise availability and can respond quickly.",
      },
    ],
    related: ["massages", "nurses", "dietician", "biokineticist"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s))
    .slice(0, 3);
}
