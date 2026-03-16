---
layout: module
title: "Module 2: Azure Core Services"
module_number: 2
duration: "~3 hr 20 min"
description: "Explore Azure's global infrastructure — regions, availability zones, resource groups — and core compute and storage services."
nav_order: 2
parent: Modules
objectives:
  - Describe Azure regions, region pairs, and availability zones
  - Explain the purpose of resource groups and subscriptions
  - Describe Azure Virtual Machines and when to use them
  - Compare Azure storage services (Blob, Files, Queues, Tables)
prev_module: /modules/module-01-cloud-concepts
next_module: /modules/module-03-security
---

## Azure global infrastructure
{: #azure-regions }

Azure is a global cloud platform with **60+ regions** worldwide — more than any other cloud provider. Understanding how Azure organises its global infrastructure is essential for the AZ-900 exam.

### Azure regions

An **Azure region** is a geographical area that contains at least one, but potentially multiple, datacenters connected by a low-latency network. When you deploy resources, you choose a region.

Examples of Azure regions:
- East US (Virginia)
- West Europe (Netherlands)
- Southeast Asia (Singapore)
- Australia East (New South Wales)

> **Important:** Some services are only available in specific regions. Always check regional availability when designing solutions.

### Region pairs

Every Azure region is **paired with another region** in the same geography, at least 300 miles apart. This pairing supports business continuity and disaster recovery:

- If a region has an outage, Azure automatically fails over to the paired region
- Azure updates are rolled out to paired regions sequentially — never simultaneously
- Data stays within the same geography for compliance

| Region | Pair |
|---|---|
| East US | West US |
| North Europe (Ireland) | West Europe (Netherlands) |
| Southeast Asia (Singapore) | East Asia (Hong Kong) |

### Availability zones

**Availability zones** are physically separate datacenters within a single Azure region. Each zone has independent power, cooling, and networking.

- Designed to protect against datacenter-level failures
- Provides **99.99% VM uptime SLA** (vs 99.9% for single-instance VMs)
- Connected by high-speed, private fibre networks

<div class="img-placeholder">
  <span>🗺️</span>
  <span class="img-caption">Figure 2 — Azure regions and availability zones diagram</span>
  <span class="img-caption">assets/images/azure-regions.png</span>
</div>

{: .callout .callout-warning }
> **Not all regions support availability zones.** Check the Azure documentation for supported regions before designing zone-redundant architectures.

---

## Resource organisation
{: #resource-groups }

Azure has a hierarchical structure for organising and managing resources.

```
Management Groups
  └─ Subscriptions
       └─ Resource Groups
            └─ Resources (VMs, storage, DBs, etc.)
```

### Management groups

**Management groups** are containers that help you manage access, policy, and compliance across multiple subscriptions. Up to 6 levels of nesting are supported. Useful for large enterprises with multiple business units.

### Subscriptions

An Azure **subscription** is a logical container that links to an Azure account and is used to provision resources. It defines billing boundaries and access control boundaries.

- Each subscription has limits (quotas) on how many resources you can create
- You can have multiple subscriptions per account (e.g. Dev, Test, Production)

### Resource groups

A **resource group** is a logical container for Azure resources. Every Azure resource must belong to exactly one resource group.

Key rules:
- Resources can only exist in **one** resource group
- Resource groups **cannot be nested**
- Resources in a group can be in **different regions**
- Deleting a resource group **deletes all resources** inside it

```bash
# Create a resource group with Azure CLI
az group create \
  --name myResourceGroup \
  --location eastus

# List all resource groups
az group list --output table
```

{: .callout .callout-warning }
> **Exam trap:** Deleting a resource group deletes ALL resources inside it immediately. This is commonly tested.

---

## Azure Virtual Machines
{: #virtual-machines }

Azure Virtual Machines (VMs) are an **IaaS** offering. They are on-demand, scalable computing resources. You choose the operating system, size, storage, and networking. Azure manages the physical hardware.

### VM sizes

Azure VMs come in many sizes optimised for different workloads:

| Series | Optimised for | Example |
|---|---|---|
| B-series | Burstable workloads (dev/test) | Standard_B2s |
| D-series | General purpose | Standard_D4s_v5 |
| E-series | Memory-intensive | Standard_E8s_v5 |
| F-series | Compute-intensive | Standard_F8s_v2 |
| N-series | GPU workloads | Standard_NC6 |

### VM availability options

| Option | SLA | Use case |
|---|---|---|
| Single VM (Premium SSD) | 99.9% | Dev/test |
| Availability set (2+ VMs) | 99.95% | Protection from rack failures |
| Availability zones (2+ VMs) | 99.99% | Protection from datacenter failures |

### Azure VM Scale Sets

**VM Scale Sets** let you deploy and manage a group of identical, load-balanced VMs. They can automatically scale in or out based on demand or a defined schedule. No extra cost beyond the VMs themselves.

```bash
# Create a VM with the Azure Portal equivalent (CLI)
az vm create \
  --resource-group myResourceGroup \
  --name myWebVM \
  --image Win2022Datacenter \
  --size Standard_B2s \
  --admin-username azureadmin \
  --admin-password 'P@ssw0rd1234!' \
  --public-ip-sku Standard
```

{: .callout .callout-note }
> **Cost tip:** Azure VMs are billed **per second** when running. Stop (deallocate) your VMs when not in use to stop billing for compute. Storage is still billed.

---

## Azure Storage
{: #azure-storage }

Azure Storage is Microsoft's cloud storage solution for modern data storage scenarios. Every storage account contains a globally unique namespace accessible from anywhere over HTTP/HTTPS.

### Storage account types

| Type | Supported services | Use case |
|---|---|---|
| Standard general-purpose v2 | Blob, Queue, Table, Files | Most scenarios — recommended default |
| Premium block blobs | Blob | High-transaction rates, low latency |
| Premium file shares | Files | High-performance NFS/SMB file shares |

### Storage services

**Azure Blob Storage** (Binary Large Objects)
- Stores unstructured data: images, videos, backups, log files
- Three access tiers: **Hot** (frequent access), **Cool** (infrequent), **Archive** (rare)
- Blob storage URL format: `https://<account>.blob.core.windows.net/<container>/<blob>`

**Azure Files**
- Fully managed file shares in the cloud
- Accessible via SMB, NFS, or HTTPS
- Can be mounted on Windows, Linux, and macOS
- Replace or supplement on-premises file servers

**Azure Queue Storage**
- Stores large numbers of messages (up to 64 KB each)
- Used for asynchronous communication between application components
- Messages can be processed in order or out of order

**Azure Table Storage**
- NoSQL key-attribute datastore for structured, non-relational data
- Fast and cost-effective for large volumes of structured data
- Good for IoT telemetry data, user data, address books

### Storage redundancy options

| Redundancy | Copies | Protection |
|---|---|---|
| LRS — Locally redundant | 3 copies | Same datacenter |
| ZRS — Zone redundant | 3 copies | 3 zones in 1 region |
| GRS — Geo-redundant | 6 copies | 2 regions (3+3) |
| GZRS — Geo-zone-redundant | 6 copies | 3 zones + paired region |

{: .callout .callout-tip }
> **Exam tip:** LRS is the cheapest. GZRS is the most resilient. GRS replicates data to a secondary region — but you can only read from the secondary if Microsoft initiates a failover (unless you enable RA-GRS).

---

## Knowledge check
{: #knowledge-check }

<div class="knowledge-check">
  <h2>Test your understanding</h2>

  <div class="kc-question">
    <p>1. What happens when you delete a resource group in Azure?</p>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'wrong','kc-q1')"> The resource group is deleted but resources are moved to another group</label>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'correct','kc-q1')"> The resource group and all resources inside it are permanently deleted</label>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'wrong','kc-q1')"> Resources are placed in a recycle bin for 30 days</label>
    <div id="kc-q1-correct" class="kc-feedback correct">Correct! Deleting a resource group immediately and permanently deletes all resources inside it. Always confirm before deleting.</div>
    <div id="kc-q1-wrong"   class="kc-feedback wrong">Incorrect. Deleting a resource group deletes ALL resources inside it — there is no recycle bin for resource groups.</div>
  </div>

  <div class="kc-question">
    <p>2. Which Azure storage service is best for storing images, videos, and backup files?</p>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'correct','kc-q2')"> Azure Blob Storage</label>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'wrong','kc-q2')"> Azure Queue Storage</label>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'wrong','kc-q2')"> Azure Table Storage</label>
    <div id="kc-q2-correct" class="kc-feedback correct">Correct! Blob Storage is designed for unstructured data like images, videos, documents, and backups.</div>
    <div id="kc-q2-wrong"   class="kc-feedback wrong">Incorrect. Blob Storage is the best choice for unstructured data. Queue Storage is for messages; Table Storage is for structured NoSQL data.</div>
  </div>

  <div class="kc-question">
    <p>3. Which VM availability option provides the highest SLA?</p>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'wrong','kc-q3')"> Single VM with Standard SSD</label>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'wrong','kc-q3')"> Availability Set</label>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'correct','kc-q3')"> Availability Zones</label>
    <div id="kc-q3-correct" class="kc-feedback correct">Correct! Availability Zones provide a 99.99% SLA by distributing VMs across physically separate datacenters within a region.</div>
    <div id="kc-q3-wrong"   class="kc-feedback wrong">Incorrect. Availability Zones (99.99% SLA) provide the strongest guarantee by protecting against full datacenter failures.</div>
  </div>
</div>

---

<div class="summary-card">
  <h3>Module 2 summary</h3>
  <ul>
    <li>Azure has 60+ global regions, each paired with another for disaster recovery</li>
    <li>Availability zones are separate datacenters within a region providing 99.99% VM SLA</li>
    <li>Resources are organised in: Management Groups → Subscriptions → Resource Groups → Resources</li>
    <li>Deleting a resource group deletes all resources inside it immediately</li>
    <li>Azure VMs are IaaS — billed per second; stop/deallocate to pause compute charges</li>
    <li>Azure Storage offers four services: Blob, Files, Queue, Table — each for different data types</li>
    <li>Storage redundancy ranges from LRS (cheapest, one datacenter) to GZRS (most resilient, two regions)</li>
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
