---
layout: default
title: Practice Questions
nav_order: 4
description: "AZ-900 practice questions covering all exam domains — cloud concepts, core services, and security."
---

# Practice questions
{: .mt-0 }

Test your exam readiness with these practice questions. Select an answer to see the explanation.

{: .callout .callout-note }
> These questions are representative of the AZ-900 exam style but are **not** official Microsoft questions. The real exam uses scenario-based questions with 40–60 items.

---

## Domain 1: Cloud concepts (25–30%)

<div class="knowledge-check">

  <div class="kc-question">
    <p>1. A company wants to migrate to the cloud but must keep customer data within their country's borders for regulatory reasons. Which cloud model should they consider?</p>
    <label class="kc-option"><input type="radio" name="p1" onclick="checkAnswer(this,'wrong','p1')"> Public cloud only</label>
    <label class="kc-option"><input type="radio" name="p1" onclick="checkAnswer(this,'correct','p1')"> Private or hybrid cloud</label>
    <label class="kc-option"><input type="radio" name="p1" onclick="checkAnswer(this,'wrong','p1')"> SaaS only</label>
    <div id="p1-correct" class="kc-feedback correct">Correct! Private and hybrid clouds allow organisations to keep sensitive data on-premises or in a specific geography while still benefiting from cloud services.</div>
    <div id="p1-wrong"   class="kc-feedback wrong">Incorrect. Public cloud alone doesn't guarantee data residency within a specific country. Private or hybrid cloud provides this control.</div>
  </div>

  <div class="kc-question">
    <p>2. Which cloud benefit ensures that a service continues operating even if one component fails?</p>
    <label class="kc-option"><input type="radio" name="p2" onclick="checkAnswer(this,'correct','p2')"> High availability</label>
    <label class="kc-option"><input type="radio" name="p2" onclick="checkAnswer(this,'wrong','p2')"> Scalability</label>
    <label class="kc-option"><input type="radio" name="p2" onclick="checkAnswer(this,'wrong','p2')"> Agility</label>
    <div id="p2-correct" class="kc-feedback correct">Correct! High availability means a service remains available despite failures, typically expressed as a percentage uptime SLA (e.g. 99.9%).</div>
    <div id="p2-wrong"   class="kc-feedback wrong">Incorrect. Scalability is about handling increasing workloads. Agility is about rapidly deploying resources. High availability is about fault tolerance.</div>
  </div>

  <div class="kc-question">
    <p>3. A development team needs resources immediately and only for two weeks. Which cloud benefit best describes this scenario?</p>
    <label class="kc-option"><input type="radio" name="p3" onclick="checkAnswer(this,'wrong','p3')"> High availability</label>
    <label class="kc-option"><input type="radio" name="p3" onclick="checkAnswer(this,'wrong','p3')"> Geo-distribution</label>
    <label class="kc-option"><input type="radio" name="p3" onclick="checkAnswer(this,'correct','p3')"> Agility</label>
    <div id="p3-correct" class="kc-feedback correct">Correct! Agility is the ability to quickly provision and deprovision cloud resources as needed — perfect for short-lived development environments.</div>
    <div id="p3-wrong"   class="kc-feedback wrong">Incorrect. This scenario describes agility — the ability to rapidly deploy and remove resources on demand without long procurement cycles.</div>
  </div>

</div>

---

## Domain 2: Azure core services (35–40%)

<div class="knowledge-check">

  <div class="kc-question">
    <p>4. Which Azure service allows you to run containers without managing the underlying infrastructure?</p>
    <label class="kc-option"><input type="radio" name="p4" onclick="checkAnswer(this,'wrong','p4')"> Azure Virtual Machines</label>
    <label class="kc-option"><input type="radio" name="p4" onclick="checkAnswer(this,'correct','p4')"> Azure Container Instances</label>
    <label class="kc-option"><input type="radio" name="p4" onclick="checkAnswer(this,'wrong','p4')"> Azure Disk Storage</label>
    <div id="p4-correct" class="kc-feedback correct">Correct! Azure Container Instances (ACI) is a PaaS offering that lets you run containers on-demand without managing any VM infrastructure.</div>
    <div id="p4-wrong"   class="kc-feedback wrong">Incorrect. VMs require OS management (IaaS). Disk Storage is just storage. Azure Container Instances is a serverless container service.</div>
  </div>

  <div class="kc-question">
    <p>5. Your application stores user profile images. Millions of images are accessed frequently, but older images are rarely accessed. Which Azure Blob Storage access tier should you use for the older images?</p>
    <label class="kc-option"><input type="radio" name="p5" onclick="checkAnswer(this,'wrong','p5')"> Hot</label>
    <label class="kc-option"><input type="radio" name="p5" onclick="checkAnswer(this,'correct','p5')"> Cool or Archive</label>
    <label class="kc-option"><input type="radio" name="p5" onclick="checkAnswer(this,'wrong','p5')"> Premium</label>
    <div id="p5-correct" class="kc-feedback correct">Correct! Cool tier is for infrequently accessed data stored for at least 30 days. Archive is for rarely accessed data stored for 180+ days. Both cost less than Hot for storage but more to access.</div>
    <div id="p5-wrong"   class="kc-feedback wrong">Incorrect. Hot tier is for frequently accessed data. Cool and Archive tiers reduce storage costs for rarely accessed blobs.</div>
  </div>

  <div class="kc-question">
    <p>6. Which Azure feature would you use to ensure that a VM remains available if an entire Azure datacenter fails?</p>
    <label class="kc-option"><input type="radio" name="p6" onclick="checkAnswer(this,'wrong','p6')"> Availability sets</label>
    <label class="kc-option"><input type="radio" name="p6" onclick="checkAnswer(this,'correct','p6')"> Availability zones</label>
    <label class="kc-option"><input type="radio" name="p6" onclick="checkAnswer(this,'wrong','p6')"> VM Scale Sets</label>
    <div id="p6-correct" class="kc-feedback correct">Correct! Availability zones are physically separate datacenters within a region. Deploying VMs across zones protects against a full datacenter failure.</div>
    <div id="p6-wrong"   class="kc-feedback wrong">Incorrect. Availability sets protect against rack/server failures within a datacenter. Availability zones protect against entire datacenter failures.</div>
  </div>

</div>

---

## Domain 3: Security and compliance (30–35%)

<div class="knowledge-check">

  <div class="kc-question">
    <p>7. A user should be able to read Azure resources but not create or modify them. Which built-in RBAC role is appropriate?</p>
    <label class="kc-option"><input type="radio" name="p7" onclick="checkAnswer(this,'wrong','p7')"> Contributor</label>
    <label class="kc-option"><input type="radio" name="p7" onclick="checkAnswer(this,'wrong','p7')"> Owner</label>
    <label class="kc-option"><input type="radio" name="p7" onclick="checkAnswer(this,'correct','p7')"> Reader</label>
    <div id="p7-correct" class="kc-feedback correct">Correct! The Reader role allows users to view all resources but not make any changes. It is the principle of least privilege applied to read-only access.</div>
    <div id="p7-wrong"   class="kc-feedback wrong">Incorrect. Contributor can create and manage resources. Owner can also manage access. Reader provides view-only access.</div>
  </div>

  <div class="kc-question">
    <p>8. Which Microsoft service provides a centralised view of your security posture across Azure, on-premises, and multi-cloud environments?</p>
    <label class="kc-option"><input type="radio" name="p8" onclick="checkAnswer(this,'correct','p8')"> Microsoft Defender for Cloud</label>
    <label class="kc-option"><input type="radio" name="p8" onclick="checkAnswer(this,'wrong','p8')"> Azure Key Vault</label>
    <label class="kc-option"><input type="radio" name="p8" onclick="checkAnswer(this,'wrong','p8')"> Azure Firewall</label>
    <div id="p8-correct" class="kc-feedback correct">Correct! Microsoft Defender for Cloud provides a unified security posture management view with a Secure Score and actionable recommendations across Azure, AWS, GCP, and on-premises.</div>
    <div id="p8-wrong"   class="kc-feedback wrong">Incorrect. Key Vault stores secrets/keys. Azure Firewall protects network traffic. Defender for Cloud is the posture management and threat protection platform.</div>
  </div>

  <div class="kc-question">
    <p>9. An organisation needs to enforce that all Azure resources must have a specific tag. Which Azure feature should they use?</p>
    <label class="kc-option"><input type="radio" name="p9" onclick="checkAnswer(this,'wrong','p9')"> Azure RBAC</label>
    <label class="kc-option"><input type="radio" name="p9" onclick="checkAnswer(this,'correct','p9')"> Azure Policy</label>
    <label class="kc-option"><input type="radio" name="p9" onclick="checkAnswer(this,'wrong','p9')"> Microsoft Entra ID</label>
    <div id="p9-correct" class="kc-feedback correct">Correct! Azure Policy enforces rules on resource properties, such as requiring a specific tag. It can audit or deny non-compliant resource creation.</div>
    <div id="p9-wrong"   class="kc-feedback wrong">Incorrect. RBAC controls who can take actions. Entra ID manages identities. Azure Policy enforces what properties resources must have.</div>
  </div>

  <div class="kc-question">
    <p>10. Which Azure service is specifically designed to protect against DDoS attacks?</p>
    <label class="kc-option"><input type="radio" name="p10" onclick="checkAnswer(this,'wrong','p10')"> Network Security Groups</label>
    <label class="kc-option"><input type="radio" name="p10" onclick="checkAnswer(this,'correct','p10')"> Azure DDoS Protection</label>
    <label class="kc-option"><input type="radio" name="p10" onclick="checkAnswer(this,'wrong','p10')"> Azure Firewall</label>
    <div id="p10-correct" class="kc-feedback correct">Correct! Azure DDoS Protection is specifically designed to absorb and mitigate volumetric DDoS attacks. The Standard tier includes real-time metrics, attack analytics, and an SLA guarantee.</div>
    <div id="p10-wrong"   class="kc-feedback wrong">Incorrect. NSGs filter specific ports/protocols. Azure Firewall handles Layer 3-7 filtering. DDoS Protection is purpose-built for volumetric flood attacks.</div>
  </div>

</div>

---

## Score tracker

<div class="summary-card">
  <h3>Your results</h3>
  <div id="score-display" style="font-size:1.5rem;font-weight:600;margin:8px 0;color:#107c10;">Answer questions above to see your score</div>
  <p style="font-size:13px;color:#616161;">Aim for 70%+ before booking the exam. A passing score of 700/1000 is required.</p>
</div>

<script>
const answers = {};
function checkAnswer(el, result, qid) {
  const parent = el.closest('.kc-question');
  parent.querySelectorAll('.kc-option').forEach(o => o.style.pointerEvents = 'none');
  document.getElementById(qid + '-correct').classList.remove('correct');
  document.getElementById(qid + '-wrong').classList.remove('wrong');
  if (result === 'correct') {
    el.closest('.kc-option').style.background = '#dff6dd';
    el.closest('.kc-option').style.borderColor = '#107c10';
    document.getElementById(qid + '-correct').classList.add('correct');
    answers[qid] = true;
  } else {
    el.closest('.kc-option').style.background = '#fde7e9';
    el.closest('.kc-option').style.borderColor = '#a80000';
    document.getElementById(qid + '-wrong').classList.add('wrong');
    answers[qid] = false;
  }
  const total = Object.keys(answers).length;
  const correct = Object.values(answers).filter(Boolean).length;
  const pct = Math.round((correct / 10) * 100);
  document.getElementById('score-display').textContent =
    correct + ' / ' + total + ' answered correctly (' + pct + '% of total)';
  document.getElementById('score-display').style.color = pct >= 70 ? '#107c10' : '#a80000';
}
</script>
