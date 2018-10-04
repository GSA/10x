# 10x FY18 Round 2 Selected Projects

*The following 44 projects were chosen for 10x’s initial “Investigation” phase to determine whether or not TTS should pursue additional work in these subject areas.*

**Accessibility for Deprecated Browsers** | *Will Slack, 18F*

OMB memo M-15-13 requires all publicly accessible Federal websites and web services to only provide service through a secure connection (HTTPS). Recently, some federal agencies also deprecated support for the HTTPS protocol TLS 1.0, effectively blocking any internet device using Android 4.3 or IE10 (used in ~2.6 million government website visits in the last 90 days) from accessing government services like hurricane warnings. TTS will investigate the user base that is being denied service (which is likely minimally equipped to petition the government) and provide detailed user personas and stats to agencies as they consider the impact of blocking access to legacy browsing devices.

**AI for Website Accessibility** | *Ben Peterson, 18F*

Explore what it would take to leverage artificial intelligence (AI) to scan government websites for accessibility issues, and automate the creation of copies of non-compliant sites with the issues either resolved or flagged for human intervention. For example, AI could identify a government website containing images without captions, then generate and insert missing captions.

**AI-Assisted Contracts** | *Ben Peterson, 18F*

Explore how artificial Intelligence might assist government agency staff in writing contracts by translating generalized ideas into formal language, inserting mandated language, and flagging when a document warrants expert human review.

**Analytics Dashboard Framework** | *Phil Ashlock, OPP*

To explore tools, methodologies, and governmentwide support for data analytics and visualization dashboards that measure improvement in government performance. Much like the U.S. Web Design Style Guide (standards.usa.gov) packages reusable components for front-end web design, this framework would package reusable frontend and backend components supporting performance analytics dashboards. This may include looking to generalize the use of the data visualization libraries and the data aggregation/integration approaches employed by existing analytics dashboard projects such as analytics.usa.gov, pulse.cio.gov, sdg.data.gov, labs.data.gov/dashboard, revenuedata.doi.gov, beta.usaspending.gov, etc.

**Antipattern Reporting** | *Will Slack, 18F*

Everyday, Americans regularly complain online about antipatterns on specific government websites [here](https://twitter.com/a_marshall_plan/status/1017405767442300930) and [here](https://twitter.com/Cauchon/status/1016079415967531008), but there is no way for federal leaders to track which sites’ technical and UX flaws are causing the most frustration for the public. Through user research, TTS will explore creating a simple form for the public to identify poor government web practices, along with a mechanism to escalate repeatedly submitted sites to agency CIOs and oversight staff.

**Applicant Tracking System** | *Bill Rooney, TTS Talent*

TTS will investigate opportunities to develop a way to capture, organize,and maintain the data and transactions related to talent acquisition in order to increase the efficiency and efficacy of talent operations. Talent acquisition within the federal government is highly regulated and filled with complexity, which is significantly amplified by the lack of sufficient tooling, ultimately impeding the organization's ability to identify and acquire that which will enable TTS to deliver on its mission. Research will help TTS understand if there is an opportunity to develop a new or leverage an existing solution that meets the nuanced requirements of federal regulations while still delivering the functionality and user experience that will decrease the time, effort and cost of hiring, increase the quality and diversity of talent within TTS and position us as a true competitor for talent across all markets.

**Automated Monitoring for Security Logs** | *Jacob Kaplan-Moss (Alum), 18F*

In theory, our compliance regime requires organizations to monitor security logs (authorization logs, etc). In practice, most groups do this rarely if at all. Industry-wide it's exceedingly rare to discover intrusions through manual log analysis: there's just too much noise. This is the perfect application for machine learning: analyzing reams of data and automatically detecting anomalies. There are several new security products claiming to do this, and there is open-source tooling as well; both would be well-worth exploring.

**Canonical Federal Identifiers** | *Phil Ashlock, OPP*

There are no canonical standards for how Federal programs and individual offices are identified and this makes combining multiple systems or datasets incredibly difficult. Between GSA, OMB, OPM, Treasury there are at least a half a dozen competing unique identifier schemes to reference a government office. These multiple efforts are not only potentially duplicative but they introduce even greater inefficiency by generating incompatible data. Data.gov has invested a great deal of research on this topic and has been in contact with others across GSA, OMB, OPM, NARA, and even GAO which recently published a report on this topic. Data.gov is also helping to shepherd tools and support around federated data management efforts as part of the U.S. Data Federation 10x project. This previous work provides a strong foundation to make progress in establishing canonical federal identifiers, but what is missing is a better governance and data stewardship among these partners to coordinate and maintain this data. This 10x project would pilot a workflow that would establish a repeatable process for partners to maintain this data as a canonical authoritative source over time. This work would also benefit other projects across TTS including the OPP CRM project, Code.gov, and USA.gov.

**Capturing Public Voices** | *Census xD*

The public has a great deal to say about government services, but many of these conversations are not captured in depth or complexity (or at all) by PRA & OMB-approved surveys. Also, reliably and meaningfully analyzing human conversation -- which is inherently noisy-- captured outside of structured questionnaires and surveys is notoriously difficult problem in natural language processing. The goal of this project is to devise a system of cross-channel analytics media including local talk radio, forums, news articles, social media, and Senate testimony, to help uncover actionable insights that are lost in high-level broad analysis, and to extract meaning from “local” conversations to help identify high-priority pain points in government services and opportunities for improvement.

**Certificate Transparency** | *Mat Caughron, Centers of Excellence*

The future of assurance for HTTPS certificates is certificate transparency, an initiative piloted and adopted by Mozilla, Apple, and all major browsers. The project is to monitor all certificates from all sources to check for validity of .gov domain certificates. Known logs are listed [here](https://www.certificate-transparency.org/known-logs) and certstream is an open source tool that is readily adopted to this purpose.

**Code2api** | *Gil Alterovitz, PIF*

There is a growing amount of code being generated across government. Yet, little code is actually API-based. This project will investigate potential toolkits, methodologies, and approaches for facilitating the automatic generation of API's from code (and sample simple apps) that allows for quick prototyping, deployment, and user feedback.

**CodeKit** | *Jeremy Zilar, OPP*

Starting a new, small website in government is hard work. Platforms like Federalist make it easier to host/manage your site, but don't currently offer teams the tools or workflow guidance needed to configure and compose your templates to fit your mission. Based off of research we've done through DigitalGov and the USWDS project, we believe there is an opportunity to build a "website composition kit" or layer that sits on top of Federalist and GitHub and the U.S. Web Design Standards and provides government teams with the means to easily create, edit and compose small, focused, government websites that are both compliant, maintainable in the open. If the U.S. Web Design Standards are Legos, then this is the kit you buy to building the Lego Star Destroyer.

**Combatting Bias in AI/ML Implementations** | *Liz Goodman, 18F*

Implementations of AI/ML often suffer from systematic bias created when algorithms are trained on insufficiently diverse datasets that don't match the variety of phenomena the system encounters in practice. This project will institutionalize corrective measures by critically reviewing the datasets used in *previously funded* projects for potential biasing mismatches.


**Commercial Tech Lab** | *Census xD*

The government and academia spend time and money working to transfer their research to the private sector. Simultaneously, the government itself could benefit tremendously from the research and work that is pre-commercial (or even open-source but not utilized) but could make significant contributions to agency and citizen-facing challenges, especially in the fields of Artificial Intelligence (Natural Language Processing, Machine Learning, Computer Vision) and other emerging fields (Algorithmic Fairness, for example). We propose that 10x investigate the opportunity to form a Lab that is run by the government, possibly within, or in collaboration with, an existing academic/research center, to translate top pre-commercial technologies and research into solutions benefitting the government and the people of the US.

**Compliance Gap Analysis** | *Claudio Belloli, OPP*

Cloud service vendors looking to do business with the government, frequently complain to OMB and Federal CIO that they must comply with a number of compliance programs, such as ISO and HIPPA, and then FedRAMP imposes another large set of unique requirements. The FedRAMP PMO believes the set of unique FedRAMP requirements is a small subset. The PMO is asking for 10x funding to validate (or invalidate) this and perform a gap analysis to identify any unique FedRAMP requirements that are beyond compliance frameworks such as ISO.

**Contract Performance Analysis Vehicle** | *Mark Headd, TTS Acquisitions*

Currently, the federal government uses two systems (CPARS and PPIRS) to document and analyze the past performance of firms that bid on government contracts. Many users of these systems find them cumbersome to use and less than helpful in awarding contracts, and vendors are sometimes unsatisfied by these systems as well. Meanwhile, online marketplaces like eBay, Etsy and Uber use simple, streamlined reputation and feedback systems to support millions of transactions. Could a similar reputational system help GSA and other federal agencies make smarter buying decisions that make contracting officials and vendors more satisfied? This 10x project will aim to find out.

**CX Contract Vehicle** | *Sheev Davé, GSA Office of Customer Experience*

The American public demands customer-centricity from federal agencies, but many agencies lack the expertise to reorient their current operations. GSA's Office of Customer Experience and Technology Transformation Service Office of Acquisitions will explore establishing a contract vehicle to assist federal agencies in procuring targeted customer experience (CX) services. This will allow agencies to quickly find the support they need to properly fulfill their obligations both to administrative directives and to their customers.


**Digital-Native Forms** | *Andrew Maier, 18F*

GSA's Standard and Optional Forms Management Program seeks to "achieve government-wide economies and efficiencies through the development, maintenance, and common use of conventional forms," yet these forms are only available as [PDFs](https://www.gsa.gov/reference/forms#standard_forms). How might digital-native versions of these forms — for example semantic/accessible web forms, or even API endpoints — yield operational efficiencies and improve the user experience of government?

**HTML Form Endpoint** | *Brian Hurst, 18F*

TTS will investigate the opportunity to provide a shared service for processing HTML forms on government websites, particularly on static websites (Jekyll, Hugo) that do not have access to underlying backend technologies (Federalist). As an organization we recommend the use of static websites but we do not currently provide a way of collecting feedback from the public without the use of Google Forms or providing a direct email address and relying on the user to have a properly configured email client. Allowing customized HTML forms will increase usability and improve the public’s experience with the government.

**IT Innovation Program for Federal Executives** | *Clara Tsao, PIF*

This is a proposal to investigate and measure the value of an immersive, “hands-on” innovation program for federal technology executives to explore opportunities to reduce IT costs and in the building and acquisition of redundant technology systems. Building off from and amplifying existing initiatives such as innovation.gov, The Digital Acquisition Accelerator, DHS Silicon Valley Innovation Program and code.gov, TTS will explore the value of experiential and culture-driven approaches toward innovation initiatives for executives, using proven methodologies from within all agencies and industry-leading techniques adopted by and currently applied within the private sector.

**IT Modernization Metrics** | *Justin Koufopoulos, PIF*

While GSA hopes to disrupt agency paradigms with practices like moving to the cloud, opening up data, and adopting user-centered design, there are few well designed metrics/milestones to understand where the agencies are at on this path to modernization. Some of this information exists buried in different government reports, and perhaps some of it hasn't been surfaced at all. The goal of this project would be to understand the state of metrics on IT modernization, what some of these metrics might be, and even whether creating a government wide service (like performance.gov, analytics.gov, etc) would be a good idea to begin with.

**Large File Management** | *Will Slack, 18F*

Agencies struggle to transfer and manage data files too large for email, especially when receiving large dataset uploads from non-federal partners. Some agencies courier thumb drives or hard drives to each other; others use SAFE (however, that has a 2 GB limit). We should evaluate the feasibility of a common, compliant, and resilient service for large file management and transfer.

**Machine Learning for Customer Insight** | *Jeremy Canfield, 18F*

Currently, help desks across the government take thousands of phone calls per day, in most of which a user is attempting to solve a problem. This represents a vast trove of information that could help guide agency decisions, both from technological and policy related perspectives. By applying automated transcription and allowing machine learning algorithms to monitor these data feeds, systems and processes could be developed. These systems and processes could help government workers better understand what these users are trying to do, and use that information as a transparent and core component of agency decision making.

**Metrics for Design Best Practice Adoption** | *Andrew Maier, 18F*

Best practices for product design can come from anywhere (e.g., 18F guilds, communities of practice, NIST, etc.) but government often focuses on the compliance or noncompliance of technology (e.g., scanning and documenting applications) rather than the degree to which it's empowering the people doing the work. What would it take to change this narrative — to measure and encourage best practice adoption across product teams?

**Municipal Data Products** | *Zach Goldfine, PIF*

Municipalities want to use Federal data to be more data-driven in their decision-making, and Federal agencies want to leverage their data for more impact. Despite various attempts to bridge the gap between local and federal data operations, both sides are still struggling to effectively connect. We will explore the common challenges facing municipalities, like identifying vacant properties and predicting and preventing potholes, and investigate how the Federal government can build infrastructural solutions.

**Open Source Visualizations** | *Micah Taylor, 18F*

The visual design group would like to explore what it will take to develop a limited set of open source visualizations (icons, patterns, or illustrations) that could be included with the U.S. Web Design Standards and Federalist, and used independently by any government project. We believe consistency and communication in government will be improved by providing reliable access to well-built, practical, easy-to-use visual assets.

**Program Analytics Dashboard** | *Tim Lowden, OPP*

The Digital Analytics Program has a desire to get the DAP data out of Google Analytics itself and into a data warehouse. We'd like to explore using a common tool as a place to house data for multiple OPP programs (DAP, Search.gov, Feedback Analytics, api.data.gov, data.gov, challenge.gov) in order to have a single location from which to create both internal and public facing products/dashboards (say, via Google Data Studio or Tableau). This could be a central location to store all OPP program data, and potentially front-face much of the analytics related to that data across OPP. Great way to show the value and volume of our programs from a single place!

**Reducing Duplication in Research Grants** | *National Science Foundation*

Over the last 65+ years, the National Science Foundation (NSF) has supported some of the leading scientific and technological breakthroughs that have advanced our society and enabled long-term American job growth, economic competitiveness, and national defense. For example, NSF-funded innovations have given rise to Google, MRI machines, Doppler weather radars, and much more. NSF would like to leverage advanced technologies to solve a persistent challenge in the grant-making community -- duplicative and overlapping research grants. To minimize duplication and overlap of the research grants, NSF will explore applying emerging technologies such as Blockchain to build a “Grants Community Blockchain” (GCB) network. The GCB network will provide instantaneous notification to participating organizations about NSF proposal information determined to be the most valuable for sharing across participating organizations. The GCB network will allow for continuous flow of updated information with respect to proposals, including a “proposal fingerprint”, associated metadata, and record of changes in status of the proposal/grant in the organization’s merit review systems.

**Research Recruitment BPA** | *Joanne McGovern, OPP*

One of the major blockers for projects being user centered is getting access to the users, especially when those users are members of the general public. We believe that we can establish a contracting vehicle (BPA) to pilot as a possible solution, while we explore if this could also be a service of government that any other agency of government could work with to help them identify, recruit and schedule users for usability tests and user interviews.

**Reusable Patterns for Data Visualization** | *Eddie Tejeda, 18F*

Many of 18F’s most successful projects (e.g., FBI Crime Explorer, Natural Resources Revenue Data, and College Scoreboard) rely on bespoke and sophisticated data visualization work. However, convincing agency partners to invest in this kind of work can be a challenge -- especially when the alternative, publishing reports as PDFs, is so easy. Inspired by the U.S. Web Design System, we want to create a library of common interaction patterns designed to make data visualization the cheaper, simpler, and more compelling choice.

**RPA (Robotic Process Automation) for ATOs** | *Jay Huie, OPP*

The government lacks a comprehensive view across agencies on which portions of the ATO process impose the most burden. Packages reviews (i.e. reading the documentation) can be time consuming but often security practitioners speak to the significant challenges with the tools involved (e.g. the requirements to copy/paste information across systems or manually enter data). A more comprehensive study could identify ways and means to streamline and accelerate the authorization processes at agencies and identify some standard practices to share.

**Scam Reporting Follow-Up** | *Jess Milcetich, OPP*

When people call the USAGov call center to report a scam, they are provided the phone number of the agency with which to file the actual complaint. Through our team's qualitative research into scams reporting, we learned that there's a drop off point and several people didn't make the second call to actually file the complaint. We'd like to explore how we could use technology to follow-up with people and remind them to make that second call or automate that process. This will help ensure the public is alerting the proper authorities. It will also help all the agencies that issue policy or enforce laws based on scams that are reported to them. As more scams are reported, those agencies will have more data with which to hold scammers accountable.

**Security Compliance Angel Investors** | *Aidan Feldman, 18F*

Security compliance is a massive obstacle for modern software-as-a-service (SaaS) companies (particularly small/medium ones) to sell to the federal government. There is a chicken-and-egg problem of it being risky for companies to complete compliance processes without promise of revenue from federal clients, and agencies not wanting to commit to payment until these services are "proven" trustworthy. I want to make funding available for these companies to go through FedRAMP, to make more of these tools available for a broader range of feds.

**Site Scanning** | *Eric Mill, TTS Front Office*
TTS drives the adoption of digital best practices and policy, from mobile-friendliness to online privacy and security - but we currently lack comprehensive, timely data to measure our success. This proposal builds on prior art to create a scanning service that discovers federal websites, then analyzes and presents actionable intelligence for more than 30,000 federal websites on the presence of web trackers and customer feedback tools, USWDS adoption, and security best practices. Data is collected at regular intervals and stored in the cloud, and accessible via a web-based interface that enables staff from any government agency to see information about their programs.

**Site Redirects** | *Will Slack, 18F*

According to an analysis of 200 random .gov domains, 18% are redirects to other sites (e.g. atcreform.gov redirects to www.atcreform.gov, which redirects to www.smarterskies.gov). Because of limitations for most DNS providers, many redirects must be hosted at static IP addresses on legacy off-cloud servers where managing HTTPS certificates is challenging and expensive. TTS will investigate the opportunity to provide a common self-service, cloud-based solution for .gov redirects at the DNS, HTTPS, and server layers.

**Standards for AI Implementation** | *Justin Koufopoulos, PIF*

While artificial intelligence is an exciting technology, concerns about transparency, privacy, and bias have sprung up recognizing that these systems are only as unbiased or transparent as we make them. The government is considering implementing AI in various pilots, and we should evaluate what standards these technologies should be held to before we acquire them. The proposed work would identify areas where AI is actively being implemented and better understand consumer concerns with respect to interacting with AI (algorithms which deliver judgements, chatbots which represent themselves as people) in order to better design standards and manage acquisitions.

**Sustainable APIs** | *Gil Alterovitz, PIF*

API's have changed how government (and industry) data as well as services are provided. While computer programs developed by government (or other single developer) can easily be back backward compatible as just the developer is involved, programs that use API's (particularly those by GSA and agencies that are typically used by third parties) often break, as new API versions are released (and the front end app and back-end misalign). This project will investigate creating a toolkit, mapping methodologies, and tools for facilitating the development of sustainable API's from both the developer *and* the third party side using developers' own updated apps as input.

**Talent Diversity Tooling** | *Jeanine Hunter, 18F*

Identifying, recruiting, and hiring top talent from underrepresented backgrounds should be a top priority for TTS. This project will explore practices, tools, and strategies that could help achieve that goal, which could include but are not limited to recruitment platforms that create candidate profiles based on identifiers (veteran status, gender, etc.) and skill assessing exercises for job applicants.

**Temporary Sub-domains** | *Clara Tsao, PIF*

Top level .gov domains are hard to obtain, especially with OMB efforts to tame the explosion of federal websites and domains managed by the GSA’s Office of Governmentwide Policy, which has limited the number of domains CIOs at Federal Agencies can sign off for stand-alone websites and infrastructure. However, teams across agencies often need temporary domains to host information or events, especially interagency task forces/groups (on terrorism or other topics) that cannot be linked to a subdomain of a major agency to maintain interagency trust. TTS should explore a temporary, self-service domain name and DNS provisioning system, enabling agencies to rapidly deploy new-sub domain for their efforts under a neutral first tier domain title.

**The Sunset Vault** | *Cordelia Yu, 18F*

With changes in funding or project needs, government websites often get shut down without a good digital archival plan. This may lead to program offices scrambling to figure out how to archive and shut down websites in ways that means the public loses easy access to data (eg the shutdown of guideline.gov). I want to explore ways 18F can work with the Library of Congress and National Archives to build a toolkit of guidelines and inexpensive tools for preserving government websites in a way that is transparent and publicly accessible after sites are sunsetted. And if possible also provide guidance on how to build and govern websites in a way that are more easy to archive and sunset so their information is still accessible to the public.

**Trusted Tooling for IT Compliance** | *Peter Burkholder, 18F*

I propose a research program to work with IT compliance officers and auditors on what constitutes trusted tooling, what they need to learn to use new tooling effectively, and how we might clear institutional or cultural hurdles to adopting automated compliance.

**USWDS Visualization Tool** | *Chris Goranson, 18F*

Non-uniform and poorly designed displays of data in tables, charts, graphs, maps and diagrams increases cognitive load and the likelihood of misinterpretation of important facts and information. The issue is compounded when users have difficulties correctly interpreting common statistics or graphics. This project will investigate the value of creating a simple-to-use standard that will increase comprehension for users and provide easy-to-follow guidelines for publishers of government figures when communicating with different audiences. It will also explore the feasibility for the creation of a simple WYSIWYG tool for creating visualizations that can easily be cut and pasted into government reports, web pages and other forms.

**Verifying Cross-sector Transactions** | *John Yuda, OPP*

The federal government collects and maintains a large amount of data about private citizens, much of which is useful and necessary for transactions both in the public sphere and the private sector (e.g. applying for a government benefit, a loan, or a new job). Using this data today requires transactions that are frequently onerous, expensive, and paper-based. Technology could simultaneously give citizens more control over their data while also making it easier to share and verify for transactions with both public-sector agencies and private-sector companies.

**Writing Lab: Beyond 18F** | *Anna Heller Sebok, 18F*

The 18F Writing Lab has proven to be a great resource to 18F. I conducted a time-limited research sprint to identify areas for iteration, improvement, and expansion of the lab, but with this research being non-billable, my capacity to continue research, make more high impact improvements, and develop this service for use by others within TTS and other federal agencies is limited. By investing in the Writing Lab, 10x would help us improve our services and empower us to expand our services far beyond 18F. Learn more about the writing lab [here](https://handbook.18f.gov/writing-lab/).
