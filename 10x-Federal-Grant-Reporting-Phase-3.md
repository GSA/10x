# **Project Description**

Phase 3 has been approved.

- Client [agency/agencies]: TTS / 10x
- Phase 3 $650k Development
- Important documents: [GitHub Repo](https://github.com/18F/eligibility-rules-service), [Burn doc](https://docs.google.com/spreadsheets/d/1hp8xQ0i5pTl0cCTlozMCuDydKppxVzx0cCxRI6cjKfY/edit#gid=70840275)

## Description 

**In [Phase 1](https://drive.google.com/open?id=1ssPqa5yKfUIBSbVAu9zfEAKQh-LHUITydeL2z7qOd3M)**, it was hypothesized that a web service to determine eligibility for a human services program could improve inefficiencies, errors, and extensive oversight and was a worthy area for TTS to investigate. 

**In [Phase 2](https://drive.google.com/open?id=1P0bw0SktDvCNITRj_aUuxPrUqh1W9xA5jnXOTZtOFM8)**, we validated the problem, identified partners at the federal and state levels, selected WIC as the pilot program, and built a functional prototype of the eligibility rules service. This validated our technical hypotheses, showing that building such a service was advisable and that such a service could handle the policy variations that occur state to state. In short, we determined that building an eligibility rules service was possible, could address a real need, and that partners are interested in working with us to do so.

**In Phase 3** of the Eligibility Rules Service Project, we had a surprise right out of the gate. WIC would no longer be able to partner, so we needed to find a new partner. After a search, we will be partnering with D-SNAP, the "food stamps" program in disasters. We are now seeking to properly kick-off Phase 3.

Having validated the problem and confirmed the technical feasibility of the centralized service, we will be turning our attention to understanding the needs and challenges of integrating with state systems.

During this phase, we will need to learn and encode D-SNAP policy, iterate on the rules service product, and develop a business case around the product in anticipation of a pilot with a state. 

We will be optimizing for cost savings (time and effort for states, money spent for feds), consistency (policy being interpreted and implemented consistently across states), easier oversight (less effort for states, reduced focused for feds), reduced burden on states (easier implementation and management), and better beneficiary experience. (Note: these metrics were originally created based on WIC. We will need to reevaluate if these make sense.)

- Direct questions about this engagement to Lane Becker or Nico Papafil.

## Timeline

We'd like to start work between Oct 1 and Nov 1. We need to be conscious of the disaster season which typically runs through Oct. D-SNAP is willing to start Oct 1.

## **Team**

- [ ] **Strategist / researcher** - @edmullen
    - Hourly commitment: 24-32
    - Duration: ~20 weeks
    - Engagement lead
    - Policy interpretation
    - Help define business model
    - Navigate legal authorities and eventual ownership transition to D-SNAP
    

- [ ] **Product manager**
    - Hourly commitment: 32
    - Duration: ~20 weeks
    - Define product scope, focus, and needs
    - Help define business model
    - Organize the work
    - Has experience building a data product
    

- [ ] **Engineer 1**
    - Hourly commitment: 32
    - Duration: ~20 weeks
    - Technical discovery - investigating state systems
    - SQL, SQL, SQL (pretty hard-core)
    - Django-rest-framework, including basic hardening for security and performance (nothing extraordinary, though)
    - Cloud.gov deployment
    - JSON Schema
    

- Engineer 2
    - ON HOLD. TBD if it will be needed.
    - Similar skills as Engineer 1, but not necessarily as deep. 
    - Front-end dev skills nice, but not necessary
    

**Prior to closing this issue**

- [ ] Ping @abrouilette that the issue is ready to close, so he can update some things.
