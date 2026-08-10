$serviceOrder = @(
  'massages',
  'dieticians',
  'orthotist',
  'audiologist',
  'nurses',
  'physio',
  'psychologist',
  'biokineticist'
)

$services = @{
  massages = @{
    file = 'massages.html'
    title = 'Massages'
    navTitle = 'Massages'
    aria = 'Read about massage services'
    meta = 'Bring on-site massage therapy to your workplace with Corporate Healthy SA and help employees reduce stress, tension, and pain.'
    summary = 'On-site massage therapy to reduce tension, stress, and muscular discomfort.'
    imageClass = 'service-intro__image--massages'
    tagline = 'Reduce Tension, Restore Balance'
    paragraphs = @(
      'There are tremendous benefits to be achieved through regular massage therapy treatments. Whether your employees need a moment of relaxation, reduced muscle tension or relief from chronic pain, our massage therapy is designed to enhance overall emotional and physical well-being.',
      'All our massages are tailored to individual needs - people have different areas of concern and strain. Massage can be performed dry (through clothing) or with oil (direct skin contact). Massage therapy benefits people of all ages.'
    )
    listGroups = @(
      @{
        title = 'Benefits'
        items = @(
          'Reducing or eliminating pain',
          'Improving joint mobility',
          'Improving circulation',
          'Improving immune system functioning',
          'Increasing lymphatic drainage',
          'Reducing depression and anxiety',
          'Reducing muscle tension',
          'Increasing body awareness'
        )
      }
    )
    featureHeading = 'Why Massage Therapy Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'Pain Relief'; text = 'Targeted massage helps ease muscular discomfort, chronic tightness, and repetitive workplace strain.' },
      @{ icon = 'shield'; value = 'Stress Reduction'; text = 'Short on-site sessions create a practical reset point for employees managing high-pressure days.' },
      @{ icon = 'trend'; value = 'Improved Mobility'; text = 'Releasing tension and stiffness supports easier movement, posture, and physical comfort at work.' }
    )
    other = @('dieticians', 'nurses', 'psychologist', 'biokineticist')
    cta = 'Ready to bring massages to your workplace?'
  }
  dieticians = @{
    file = 'dieticians.html'
    title = 'Dieticians'
    navTitle = 'Dieticians'
    aria = 'Read about dietician services'
    meta = 'Support employee nutrition and long-term wellbeing with Corporate Healthy SA dietician services for the workplace.'
    summary = 'Personalised nutrition guidance for healthier employees and stronger teams.'
    imageClass = 'service-intro__image--dieticians'
    tagline = 'Personalised Nutrition for a Healthier Team'
    paragraphs = @(
      'Our dieticians are passionate about providing correct, balanced dietary advice uniquely tailored to your employees as individuals - through one-on-one sessions or group consultations.'
    )
    listGroups = @(
      @{
        title = 'Focus Areas'
        items = @(
          'Weight management (loss, gain and maintenance)',
          'Diabetes and high cholesterol',
          'HIV/AIDS nutrition',
          'High blood pressure / hypertension',
          'Heart disease',
          'Gastrointestinal disorders (IBS, Ulcerative Colitis, Celiac Disease)',
          'Sports nutrition and eating disorders',
          'Pregnancy and lactation',
          'Food allergies and post-operative nutrition',
          'Body composition analysis'
        )
      }
    )
    featureHeading = 'Why Nutrition Support Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'One-on-One Sessions'; text = 'Personal consultations give employees focused guidance that fits their own health goals and needs.' },
      @{ icon = 'shield'; value = 'Group Consultations'; text = 'Team sessions make healthy eating more practical, accessible, and relevant in the workplace.' },
      @{ icon = 'trend'; value = 'Chronic Condition Support'; text = 'Targeted advice helps employees better manage nutrition-related conditions over time.' }
    )
    other = @('massages', 'audiologist', 'nurses', 'biokineticist')
    cta = 'Ready to bring dieticians to your workplace?'
  }
  orthotist = @{
    file = 'orthotist.html'
    title = 'Orthotist / Prosthetist'
    navTitle = 'Orthotist / Prosthetist'
    aria = 'Read about orthotist services'
    meta = 'Support employee mobility, posture, and injury prevention with orthotist and prosthetist services from Corporate Healthy SA.'
    summary = 'Foot screening, orthotics, and mobility support for employees.'
    imageClass = 'service-intro__image--orthotist'
    tagline = 'Supporting Mobility from the Ground Up'
    paragraphs = @(
      'We conduct a series of screening tests that identify, prevent or correct injuries and disorders of the skeletal system - with a particular focus on the feet. Our field primarily addresses orthopaedic and vascular problems.',
      'Foot orthotics can help your whole body function better and relieve foot pain. Custom orthotic insoles improve foot function, reduce pain, and help prevent future injury. They may also be used alongside properly fitted orthopaedic footwear.'
    )
    listGroups = @()
    featureHeading = 'Why Orthotic Support Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'Foot Screening'; text = 'Early screening highlights alignment, pressure, and mobility issues before they grow worse.' },
      @{ icon = 'shield'; value = 'Custom Orthotics'; text = 'Tailored orthotic support improves comfort, balance, and everyday function for employees.' },
      @{ icon = 'trend'; value = 'Injury Prevention'; text = 'Corrective support helps reduce recurring pain and lowers the risk of future strain or injury.' }
    )
    other = @('physio', 'biokineticist', 'audiologist', 'nurses')
    cta = 'Ready to bring orthotist / prosthetist support to your workplace?'
  }
  audiologist = @{
    file = 'audiologist.html'
    title = 'Audiologist'
    navTitle = 'Audiologist'
    aria = 'Read about audiologist services'
    meta = 'Protect employee hearing and support workplace compliance with audiologist services from Corporate Healthy SA.'
    summary = 'Hearing screening and occupational noise exposure support for the workplace.'
    imageClass = 'service-intro__image--audiologist'
    tagline = 'Protecting Your Team''s Hearing Health'
    paragraphs = @(
      'Our audiologists conduct thorough hearing assessments and occupational noise exposure screenings. In many industries, employees are exposed to dangerous noise levels daily - often without realising the long-term impact on their hearing.',
      'Early detection of hearing loss is critical. Our screenings identify issues before they become permanent, helping companies comply with occupational health and safety regulations.'
    )
    listGroups = @(
      @{
        title = 'Key Services'
        items = @(
          'Audiometric testing (pure tone and speech)',
          'Occupational noise exposure assessments',
          'Hearing conservation programme support',
          'Regulatory compliance assistance',
          'Referral for hearing aids and further treatment'
        )
      }
    )
    featureHeading = 'Why Hearing Screening Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'Early Detection'; text = 'Identifying changes in hearing early helps prevent long-term loss and protect employee wellbeing.' },
      @{ icon = 'shield'; value = 'Compliance Support'; text = 'Professional screening helps companies strengthen occupational health and safety compliance.' },
      @{ icon = 'trend'; value = 'Noise Monitoring'; text = 'Assessing workplace exposure helps organisations take action before damage becomes permanent.' }
    )
    other = @('nurses', 'psychologist', 'orthotist', 'physio')
    cta = 'Ready to bring audiologist services to your workplace?'
  }
  nurses = @{
    file = 'nurses.html'
    title = 'Occupational Nurses'
    navTitle = 'Occupational Nurses'
    aria = 'Read about nursing services'
    meta = 'Bring experienced occupational nurses on site with Corporate Healthy SA for screening, VCT, and medical surveillance.'
    summary = 'On-site health risk assessments, VCT, and medical surveillance support.'
    imageClass = 'service-intro__image--nurses'
    tagline = 'Expert Nursing Care at Your Workplace'
    paragraphs = @(
      'Our in-house nurses are experienced in various aspects of occupational health and are able to deliver a comprehensive range of on-site services - bringing quality healthcare directly to your employees.'
    )
    listGroups = @(
      @{
        title = 'Included Services'
        items = @(
          'Health risk assessments (waist circumference, BMI, blood pressure, cholesterol, glucose)',
          'VCT - Voluntary Counselling and Testing',
          'Medical surveillance (eye tests, X-rays, lung function testing, audiometric testing)'
        )
      }
    )
    featureHeading = 'Why Occupational Nursing Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'Health Risk Assessments'; text = 'On-site screening gives employees a clear, practical view of their current health risks.' },
      @{ icon = 'shield'; value = 'VCT Services'; text = 'Professional counselling and testing help employees make informed health decisions.' },
      @{ icon = 'trend'; value = 'Medical Surveillance'; text = 'Ongoing monitoring supports workplace safety, prevention, and compliance.' }
    )
    other = @('audiologist', 'dieticians', 'psychologist', 'massages')
    cta = 'Ready to bring occupational nurses to your workplace?'
  }
  physio = @{
    file = 'physio.html'
    title = 'Physiotherapists'
    navTitle = 'Physiotherapists'
    aria = 'Read about physiotherapy services'
    meta = 'Restore movement and support healthier recovery with physiotherapy services from Corporate Healthy SA.'
    summary = 'Rehabilitation support for movement, pain, and recovery in the workplace.'
    imageClass = 'service-intro__image--physio'
    tagline = 'Restoring Movement, Improving Lives'
    paragraphs = @(
      'Our physiotherapists look beyond the local problem and strive to improve the overall lives of your employees. Our special interests include sports and orthopaedic rehabilitation, sport-specific taping, joint disorders (TMJ), care for pregnant women, headaches, sinusitis and respiratory conditions.',
      'We use advanced rehabilitation equipment for treating musculoskeletal, neurological and soft tissue disorders.'
    )
    listGroups = @()
    featureHeading = 'Why Physiotherapy Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'Sports Rehab'; text = 'Support active employees recovering from strain, injury, and physical overload.' },
      @{ icon = 'shield'; value = 'Orthopaedic Care'; text = 'Targeted treatment helps address joint, muscle, and soft-tissue conditions.' },
      @{ icon = 'trend'; value = 'Respiratory Conditions'; text = 'Therapy supports breathing efficiency and broader physical recovery.' }
    )
    other = @('orthotist', 'biokineticist', 'massages', 'nurses')
    cta = 'Ready to bring physiotherapists to your workplace?'
  }
  psychologist = @{
    file = 'psychologist.html'
    title = 'Psychologist'
    navTitle = 'Psychologist'
    aria = 'Read about psychologist services'
    meta = 'Support mental health at work with confidential psychology and EAP services from Corporate Healthy SA.'
    summary = 'Confidential counselling and employee assistance support for workplace wellbeing.'
    imageClass = 'service-intro__image--psychologist'
    tagline = 'Supporting Mental Health in the Workplace'
    paragraphs = @(
      'Corporate Healthy SA addresses employee assistance through our Employee Assistance Programme (EAP), delivered by qualified psychologists. We provide a confidential, supportive environment for employees to address personal and work-related challenges.'
    )
    listGroups = @(
      @{
        title = 'EAP Services'
        items = @(
          'Psycho-social support services',
          'Face-to-face counselling',
          'Trauma group counselling',
          'Telephone counselling'
        )
      },
      @{
        title = 'Issues We Help Address'
        items = @(
          'Substance abuse',
          'Emotional distress',
          'Major life events (death, birth, accidents)',
          'Healthcare concerns',
          'Family, personal, and work relationship issues'
        )
      }
    )
    featureHeading = 'Why Psychological Support Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'Confidential Support'; text = 'Employees get safe, private access to professional mental health guidance.' },
      @{ icon = 'shield'; value = 'Trauma Counselling'; text = 'Immediate support helps teams respond to difficult or disruptive events.' },
      @{ icon = 'trend'; value = 'EAP Programme'; text = 'Structured assistance improves resilience, wellbeing, and workplace performance.' }
    )
    other = @('massages', 'nurses', 'dieticians', 'biokineticist')
    cta = 'Ready to bring psychological support to your workplace?'
  }
  biokineticist = @{
    file = 'biokineticist.html'
    title = 'Biokineticist'
    navTitle = 'Biokineticist'
    aria = 'Read about biokineticist services'
    meta = 'Improve physical function and performance with biokineticist exercise therapy from Corporate Healthy SA.'
    summary = 'Exercise therapy that improves function, resilience, and physical performance.'
    imageClass = 'service-intro__image--biokineticist'
    tagline = 'Exercise Therapy for Peak Performance'
    paragraphs = @(
      'Our biokineticists play a key role in helping employees improve their quality of life and physical performance. Through individualised assessments and customised exercise health plans, they address the specific needs of each employee.'
    )
    listGroups = @(
      @{
        title = 'Benefits'
        items = @(
          'Improvement of function and quality of life',
          'Strengthened core musculature and stability',
          'Correct posture',
          'Improved balance',
          'Pain management'
        )
      }
    )
    featureHeading = 'Why Exercise Therapy Matters'
    featureCards = @(
      @{ icon = 'plus'; value = 'Personalised Plans'; text = 'Exercise interventions are tailored to each employee''s goals, function, and needs.' },
      @{ icon = 'shield'; value = 'Core Strengthening'; text = 'Improved stability and control support better posture and daily movement.' },
      @{ icon = 'trend'; value = 'Pain Management'; text = 'Guided therapy helps reduce discomfort while restoring function over time.' }
    )
    other = @('physio', 'dieticians', 'massages', 'orthotist')
    cta = 'Ready to bring biokineticist services to your workplace?'
  }
}

function Get-IconSvg([string]$name) {
  $icons = @{
    plus = '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    shield = '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l6.5 3v5c0 4.1-2.5 7.8-6.5 9.5C8 18.8 5.5 15.1 5.5 11V6L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9.4 12.1l1.7 1.7l3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    trend = '<svg viewBox="0 0 24 24" fill="none"><path d="M6 16l4-4l3 3l5-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9h3v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  }
  return $icons[$name]
}

function Get-ServiceLinks([string]$currentKey, [string]$className) {
  $links = foreach ($key in $serviceOrder) {
    $service = $services[$key]
    $classes = if ($key -eq $currentKey) { "$className active" } else { $className }
    $current = if ($key -eq $currentKey) { ' aria-current="page"' } else { '' }
    $href = $service.file
    "<a class=""$classes"" href=""$href""$current aria-label=""$($service.aria)"">$($service.navTitle)</a>"
  }
  return ($links -join "`n")
}

function Get-QuickLinks([string]$currentPage) {
@'
<li><a href="../index.html#hero" aria-label="Go to home section">Home</a></li>
<li><a href="../pages/about.html" aria-label="Read About Us page">About Us</a></li>
<li><a href="../pages/why-us.html" aria-label="Read Why Us page">Why Us</a></li>
<li><a href="../pages/sentiments.html" aria-label="Read Our Sentiments page">Our Sentiments</a></li>
<li><a href="../pages/employment.html" aria-label="Read Employment page">Employment</a></li>
<li><a href="../pages/contact.html" aria-label="Go to contact page">Contact</a></li>
'@
}

function Get-FooterServiceLinks([string]$currentKey) {
  $links = foreach ($key in $serviceOrder) {
    $service = $services[$key]
    $current = if ($key -eq $currentKey) { ' aria-current="page"' } else { '' }
    "<li><a href=""$($service.file)""$current aria-label=""$($service.aria)"">$($service.navTitle)</a></li>"
  }
  return ($links -join "`n")
}

function Get-ListGroups($groups) {
  if ($groups.Count -eq 0) {
    return ''
  }

  $html = foreach ($group in $groups) {
    $items = ($group.items | ForEach-Object { "<li>$_</li>" }) -join "`n"
@"
<div class="service-list-group">
  <h3 class="service-list-group__title">$($group.title)</h3>
  <ul class="service-benefits">
$items
  </ul>
</div>
"@
  }
  return ($html -join "`n")
}

function Get-FeatureCards($cards) {
  $delay = 0
  $html = foreach ($card in $cards) {
@"
<article class="service-feature-card" data-aos="fade-up" data-aos-delay="$delay">
  <div class="service-feature-card__icon" aria-hidden="true">$(Get-IconSvg $card.icon)</div>
  <span class="service-feature-card__value">$($card.value)</span>
  <p>$($card.text)</p>
</article>
"@
    $delay += 100
  }
  return ($html -join "`n")
}

function Get-OtherServiceCards($keys) {
  $delay = 0
  $html = foreach ($key in $keys) {
    $service = $services[$key]
@"
<article class="other-service-card" data-aos="fade-up" data-aos-delay="$delay">
  <h3>$($service.navTitle)</h3>
  <p>$($service.summary)</p>
  <a class="other-service-card__link" href="$($service.file)" aria-label="Learn more about $($service.navTitle)">Learn More <span aria-hidden="true">&rarr;</span></a>
</article>
"@
    $delay += 100
  }
  return ($html -join "`n")
}

function New-ServicePage($serviceKey) {
  $service = $services[$serviceKey]
  $paragraphs = ($service.paragraphs | ForEach-Object { "<p>$_</p>" }) -join "`n"
  $listGroups = Get-ListGroups $service.listGroups
  $featureCards = Get-FeatureCards $service.featureCards
  $otherCards = Get-OtherServiceCards $service.other
  $desktopLinks = Get-ServiceLinks $serviceKey 'dropdown-link'
  $mobileLinks = Get-ServiceLinks $serviceKey 'mobile-nav__sublink'
  $footerLinks = Get-FooterServiceLinks $serviceKey
@"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$($service.title) | Corporate Healthy SA</title>
  <meta name="description" content="$($service.meta)">
  <link rel="icon" href="../healthy 1 Logo.jpg.jpeg">
  <meta name="theme-color" content="#0b2f3a">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
  <link rel="stylesheet" href="../css/reset.css">
  <link rel="stylesheet" href="../css/variables.css">
  <link rel="stylesheet" href="../css/typography.css">
  <link rel="stylesheet" href="../css/layout.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/animations.css">
  <link rel="stylesheet" href="../css/responsive.css">
</head>
<body>
  <div class="page-transition" aria-hidden="true"></div>
  <a class="skip-link" href="#content">Skip to content</a>

  <header class="site-header">
    <nav class="navbar navbar--solid scrolled" aria-label="Primary navigation">
      <div class="container navbar__inner">
        <a class="navbar__logo" href="../index.html#hero" aria-label="Go to Corporate Healthy SA home">Corporate Healthy SA</a>
        <div class="navbar__desktop">
          <ul class="desktop-nav">
            <li class="desktop-nav__item"><a class="nav-link" href="../index.html#hero" aria-label="Go to home section">Home</a></li>
            <li class="desktop-nav__item has-dropdown">
              <button class="nav-link nav-link--button" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Open About Us menu">About Us<span class="nav-caret" aria-hidden="true"></span></button>
              <div class="dropdown-menu" aria-label="About Us submenu">
                <a class="dropdown-link" href="../pages/why-us.html" aria-label="Read Why Us page">Why Us</a>
                <a class="dropdown-link" href="../pages/about.html" aria-label="Read About Us page">About Us</a>
                <a class="dropdown-link" href="../pages/sentiments.html" aria-label="Read Our Sentiments page">Our Sentiments</a>
                <a class="dropdown-link" href="../pages/employment.html" aria-label="Read Employment page">Employment</a>
              </div>
            </li>
            <li class="desktop-nav__item has-dropdown">
              <button class="nav-link nav-link--button active" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Open Services menu">Services<span class="nav-caret" aria-hidden="true"></span></button>
              <div class="dropdown-menu" aria-label="Services submenu">
$desktopLinks
              </div>
            </li>
            <li class="desktop-nav__item"><a class="nav-link" href="../pages/contact.html" aria-label="Go to contact page">Contact</a></li>
          </ul>
        </div>
        <button class="navbar__toggle" type="button" aria-expanded="false" aria-controls="mobile-drawer" aria-label="Toggle mobile navigation">
          <span class="navbar__toggle-line"></span>
          <span class="navbar__toggle-line"></span>
          <span class="navbar__toggle-line"></span>
        </button>
      </div>
    </nav>

    <div class="navbar__overlay" aria-hidden="true"></div>

    <aside class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer__header">
        <a class="mobile-drawer__logo" href="../index.html#hero" aria-label="Go to Corporate Healthy SA home">Corporate Healthy SA</a>
      </div>
      <div class="mobile-drawer__body">
        <a class="mobile-nav__link" href="../index.html#hero" aria-label="Go to home section">Home</a>
        <div class="mobile-nav__item mobile-nav__item--accordion">
          <button class="mobile-nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-about-menu" aria-label="Toggle About Us mobile menu"><span>About Us</span><span class="mobile-nav__caret" aria-hidden="true"></span></button>
          <div class="mobile-nav__submenu" id="mobile-about-menu">
            <div class="mobile-nav__submenu-inner">
              <a class="mobile-nav__sublink" href="../pages/why-us.html" aria-label="Read Why Us page">Why Us</a>
              <a class="mobile-nav__sublink" href="../pages/about.html" aria-label="Read About Us page">About Us</a>
              <a class="mobile-nav__sublink" href="../pages/sentiments.html" aria-label="Read Our Sentiments page">Our Sentiments</a>
              <a class="mobile-nav__sublink" href="../pages/employment.html" aria-label="Read Employment page">Employment</a>
            </div>
          </div>
        </div>
        <div class="mobile-nav__item mobile-nav__item--accordion open">
          <button class="mobile-nav__toggle" type="button" aria-expanded="true" aria-controls="mobile-services-menu" aria-label="Toggle Services mobile menu"><span>Services</span><span class="mobile-nav__caret" aria-hidden="true"></span></button>
          <div class="mobile-nav__submenu" id="mobile-services-menu">
            <div class="mobile-nav__submenu-inner">
$mobileLinks
            </div>
          </div>
        </div>
        <a class="mobile-nav__link" href="../pages/contact.html" aria-label="Go to contact page">Contact</a>
      </div>
    </aside>
  </header>

  <section class="page-hero">
    <div class="container page-hero__inner">
      <nav class="breadcrumb" aria-label="Breadcrumb" data-animate="page-breadcrumb">
        <a href="../index.html#hero">Home</a>
        <span aria-hidden="true">/</span>
        <span>Services</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page">$($service.title)</span>
      </nav>
      <h1 data-animate="page-title">$($service.title)</h1>
    </div>
  </section>

  <main class="page-content page-content--flush" id="content">
    <section class="service-intro split-section split-section--reverse" id="service-intro">
      <div class="container">
        <div class="split-section__grid">
          <div class="split-section__media" data-aos="fade-left">
            <div class="split-section__image $($service.imageClass)" aria-hidden="true"></div>
          </div>
          <div class="split-section__body" data-aos="fade-right">
            <span class="split-section__eyebrow">Our Services</span>
            <h2>$($service.tagline)</h2>
            <div class="split-section__copy">
$paragraphs
            </div>
$listGroups
            <a class="button button--primary split-section__button" href="../pages/contact.html" aria-label="Book this service with Corporate Healthy SA">Book This Service<span class="button__icon" aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </section>

    <section class="service-feature-section section" id="service-highlights">
      <div class="container">
        <div class="section-header section-header--centered" data-aos="fade-up">
          <p class="section__eyebrow">Why It Matters</p>
          <h2>$($service.featureHeading)</h2>
        </div>
        <div class="service-feature-grid">
$featureCards
        </div>
      </div>
    </section>

    <section class="other-services section" id="other-services">
      <div class="container">
        <div class="section-header section-header--centered" data-aos="fade-up">
          <h2>Explore Our Other Services</h2>
        </div>
        <div class="other-services__grid">
$otherCards
        </div>
      </div>
    </section>

    <section class="cta-banner" id="service-cta">
      <div class="container">
        <div class="cta-banner__inner">
          <h2 data-aos="fade-up" data-aos-delay="0">$($service.cta)</h2>
          <div class="cta-banner__actions" data-aos="fade-up" data-aos-delay="100">
            <a class="button button--light" href="../pages/contact.html" aria-label="Go to the contact page to book $($service.navTitle)">Get In Touch<span class="button__icon" aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__grid">
        <div class="site-footer__column site-footer__column--brand">
          <a class="site-footer__logo" href="../index.html#hero" aria-label="Go to Corporate Healthy SA home">Corporate Healthy SA</a>
          <p class="site-footer__tagline">Corporate Wellness Partner</p>
          <p class="site-footer__summary">Leading in corporate health and wellness across South Africa.</p>
        </div>
        <div class="site-footer__column">
          <p class="site-footer__heading">Quick Links</p>
          <ul class="site-footer__list">
$(Get-QuickLinks $serviceKey)
          </ul>
        </div>
        <div class="site-footer__column">
          <p class="site-footer__heading">Services</p>
          <ul class="site-footer__list">
$footerLinks
          </ul>
        </div>
      </div>
      <div class="site-footer__bottom">
        <p>&copy; 2026 Corporate Healthy SA. All rights reserved.</p>
        <a href="https://wa.me/27794620820" target="_blank" rel="noreferrer" aria-label="Chat with Corporate Healthy SA on WhatsApp">WhatsApp Us</a>
      </div>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="../js/nav.js" defer></script>
  <script src="../js/animations.js" defer></script>
  <script src="../js/transitions.js" defer></script>
  <script src="../js/main.js" defer></script>
</body>
</html>
"@
}

$root = Split-Path -Parent $PSScriptRoot
$servicesDir = Join-Path $root 'services'

foreach ($key in $serviceOrder) {
  $page = New-ServicePage $key
  $path = Join-Path $servicesDir $services[$key].file
  Set-Content -Path $path -Value $page -Encoding UTF8
}

Copy-Item -Path (Join-Path $servicesDir 'physio.html') -Destination (Join-Path $servicesDir 'physiotherapists.html') -Force

$linkFiles = @(
  (Join-Path $root 'index.html')
) + (Get-ChildItem -Path (Join-Path $root 'pages') -Filter '*.html' | Select-Object -ExpandProperty FullName)

foreach ($file in $linkFiles) {
  $content = Get-Content -Path $file -Raw
  $content = $content -replace 'physiotherapists\.html', 'physio.html'
  if ($file -like '*index.html') {
    $content = $content -replace 'services/index\.html', 'services/massages.html'
  }
  Set-Content -Path $file -Value $content -Encoding UTF8
}


