---
layout: module
title: "Module 1: Cloud Concepts"
module_number: 1
duration: "~2 hr 10 min"
description: "Understand what cloud computing is, explore the three deployment models, and compare IaaS, PaaS, and SaaS service categories."
nav_order: 1
parent: Modules
objectives:
  - Define cloud computing and describe its key characteristics
  - Compare public, private, and hybrid cloud deployment models
  - Differentiate between IaaS, PaaS, and SaaS service types
  - Explain the consumption-based pricing model
next_module: /modules/module-02-core-services
---

## What is cloud computing?
{: #what-is-cloud-computing }

Cloud computing is the **delivery of computing services over the internet**. These services include servers, storage, databases, networking, software, analytics, and intelligence. By moving to the cloud, organisations gain faster innovation, flexible resources, and economies of scale.

Instead of buying and maintaining physical data centres and servers, you rent access to anything — from applications to storage — from a cloud provider.

> **Key definition:** Cloud computing = delivery of IT services via the internet, on a pay-as-you-go basis.

### Key characteristics

Every cloud service shares five essential characteristics defined by NIST:

| Characteristic | Description |
|---|---|
| On-demand self-service | Provision resources automatically without human interaction |
| Broad network access | Available over the network from any device |
| Resource pooling | Provider resources are shared among multiple customers |
| Rapid elasticity | Scale resources up or down quickly to match demand |
| Measured service | Usage is monitored, controlled, and billed accurately |

### CapEx vs OpEx

A major benefit of cloud computing is the shift from **capital expenditure (CapEx)** to **operational expenditure (OpEx)**.

| | CapEx (On-premises) | OpEx (Cloud) |
|---|---|---|
| Payment | Large up-front investment | Pay as you use |
| Ownership | You own the hardware | Provider owns it |
| Risk | You bear the depreciation cost | Predictable monthly spend |
| Scaling | Slow — must purchase hardware | Instant |

{: .callout .callout-tip }
> **Exam tip:** The AZ-900 exam frequently tests your understanding of CapEx vs OpEx. Remember: **cloud = OpEx**, on-premises = CapEx.

### Consumption-based model

Azure uses a **pay-as-you-go** pricing model. You only pay for the cloud services you use. There are no upfront costs, and you can stop paying at any time by deallocating resources.

---

## Cloud deployment models
{: #cloud-deployment-models }

There are three main cloud deployment models. Each answers the question: **where does your data live and who controls the infrastructure?**

### Public cloud

The public cloud is owned and operated by a third-party cloud provider (such as Microsoft Azure, AWS, or Google Cloud). All hardware, software, and infrastructure is owned and managed by the provider.

**Advantages:**
- No CapEx — no hardware to buy
- Highly scalable and elastic
- Pay only for what you use
- Reliable and globally available

**Example use case:** A startup deploying a web application without buying any servers.

### Private cloud

A private cloud is computing resources used **exclusively by one organisation**. It can be physically located at the organisation's on-site data centre, or hosted by a third-party service provider.

**Advantages:**
- Full control over security and compliance
- Customisable infrastructure
- Meets strict regulatory requirements

**Disadvantages:**
- High CapEx to build and maintain
- Requires IT staff to manage

**Example use case:** A government agency storing sensitive citizen data on-premises.

### Hybrid cloud

A hybrid cloud **combines public and private clouds**, allowing data and applications to be shared between them. This gives organisations greater flexibility and more deployment options.

**Advantages:**
- Most flexible model
- Keep sensitive data on-premises, burst to cloud for scale
- Can comply with regulations while using cloud efficiency

<div class="img-placeholder">
  <span>📊</span>
  <span class="img-caption">Figure 1 — Cloud deployment model comparison diagram</span>
  <span class="img-caption">assets/images/cloud-models.png</span>
</div>

{: .callout .callout-note }
> **Multi-cloud:** Some organisations use more than one public cloud provider simultaneously (e.g. Azure + AWS). This is called **multi-cloud**. Azure Arc lets you manage resources across multi-cloud and on-premises environments from a single control plane.

---

## Service models (IaaS, PaaS, SaaS)
{: #service-models }

Cloud services are offered in three main categories. Each gives you a different level of control, flexibility, and management responsibility.

### The shared responsibility model

As you move from on-premises to IaaS to PaaS to SaaS, Microsoft takes on more and more of the management responsibility.

| Responsibility | On-prem | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Physical datacenter | You | Microsoft | Microsoft | Microsoft |
| Physical network | You | Microsoft | Microsoft | Microsoft |
| Physical hosts | You | Microsoft | Microsoft | Microsoft |
| Operating system | You | **You** | Microsoft | Microsoft |
| Network controls | You | **You** | Shared | Microsoft |
| Applications | You | **You** | **You** | Microsoft |
| Identity & directory | You | **You** | Shared | Shared |
| Data & information | You | **You** | **You** | **You** |

### IaaS — Infrastructure as a Service

IaaS provides maximum control and flexibility. Microsoft manages the physical infrastructure; **you manage everything else** — OS, runtime, middleware, applications, and data.

**When to use:**
- Lift-and-shift migrations from on-premises
- Test and development environments
- Storage, backup, and recovery

**Azure IaaS examples:** Azure Virtual Machines, Azure Virtual Network, Azure Disk Storage

```bash
# Create a VM with Azure CLI
az vm create \
  --resource-group myResourceGroup \
  --name myVM \
  --image Ubuntu2204 \
  --admin-username azureuser \
  --generate-ssh-keys
```

### PaaS — Platform as a Service

PaaS is a middle ground. Microsoft manages the OS, runtime, and middleware — **you focus on building your application and managing your data**.

**When to use:**
- Web application development
- API backends
- Database management

**Azure PaaS examples:** Azure App Service, Azure SQL Database, Azure Functions, Azure Kubernetes Service

### SaaS — Software as a Service

SaaS is the most complete cloud service model. **Microsoft manages everything** — you simply use the software. You accept it as-is with limited customisation.

**When to use:**
- Email and productivity tools
- CRM and ERP systems
- Collaboration platforms

**Azure SaaS examples:** Microsoft 365, Dynamics 365, Microsoft Teams

{: .callout .callout-tip }
> **Memory trick — think IPES:** IaaS = Infrastructure (you manage OS+), PaaS = Platform (you manage app+data), SaaS = Software (you manage data only).

---

## Knowledge check
{: #knowledge-check }

<div class="knowledge-check">
  <h2>Test your understanding</h2>

  <div class="kc-question">
    <p>1. Which cloud deployment model uses datacenters owned by both the cloud provider and the organisation?</p>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'wrong','kc-q1')"> Public cloud</label>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'correct','kc-q1')"> Hybrid cloud</label>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'wrong','kc-q1')"> Private cloud</label>
    <div id="kc-q1-correct" class="kc-feedback correct">Correct! A hybrid cloud combines public and private infrastructure, allowing data and applications to move between the two.</div>
    <div id="kc-q1-wrong"   class="kc-feedback wrong">Not quite. Think about which model combines public and private environments.</div>
  </div>

  <div class="kc-question">
    <p>2. Which service model is best suited for a lift-and-shift migration from on-premises?</p>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'correct','kc-q2')"> IaaS</label>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'wrong','kc-q2')"> PaaS</label>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'wrong','kc-q2')"> SaaS</label>
    <div id="kc-q2-correct" class="kc-feedback correct">Correct! IaaS gives you control over the OS and runtime — the same level of control you had on-premises — making it ideal for lift-and-shift.</div>
    <div id="kc-q2-wrong"   class="kc-feedback wrong">Not quite. IaaS is the service type closest to on-premises infrastructure.</div>
  </div>

  <div class="kc-question">
    <p>3. In which expense category does cloud computing spending fall?</p>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'wrong','kc-q3')"> CapEx</label>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'correct','kc-q3')"> OpEx</label>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'wrong','kc-q3')"> Both equally</label>
    <div id="kc-q3-correct" class="kc-feedback correct">Correct! Cloud computing is operational expenditure (OpEx) — you pay for what you use on a recurring basis with no up-front hardware investment.</div>
    <div id="kc-q3-wrong"   class="kc-feedback wrong">Not quite. Cloud removes the need for large up-front hardware purchases. Think about recurring vs one-time spend.</div>
  </div>
</div>

---

<div class="summary-card">
  <h3>Module 1 summary</h3>
  <ul>
    <li>Cloud computing delivers IT services over the internet on a pay-as-you-go (OpEx) basis</li>
    <li>The three deployment models are public, private, and hybrid — each has different control and cost trade-offs</li>
    <li>IaaS gives maximum control; SaaS gives minimum responsibility; PaaS sits in the middle</li>
    <li>In every model, the customer always retains responsibility for their data and identities</li>
    <li>Azure is a public cloud provider — but supports all three deployment models via hybrid connectivity</li>
  </ul>
</div>

<script>
function checkAnswer(el, result, qid) {
  const parent = el.closest('.kc-question');
  parent.querySelectorAll('.kc-option').forEach(o => o.style.pointerEvents = 'none');
  document.getElementById(qid + '-correct').classList.remove('correct');
  document.getElementById(qid + '-wrong').classList.remove('wrong');
  if (result === 'correct') {
    el.closest('.kc-option').style.background = '#dff6dd';
    el.closest('.kc-option').style.borderColor = '#107c10';
    document.getElementById(qid + '-correct').classList.add('correct');
  } else {
    el.closest('.kc-option').style.background = '#fde7e9';
    el.closest('.kc-option').style.borderColor = '#a80000';
    document.getElementById(qid + '-wrong').classList.add('wrong');
  }
}
</script>
