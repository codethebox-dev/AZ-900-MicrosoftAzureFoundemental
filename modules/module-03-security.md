---
layout: module
title: "Module 3: Security and Compliance"
module_number: 3
duration: "~2 hr 50 min"
description: "Understand the shared responsibility model, explore Azure's core security services, and learn how identity and access management works in Azure."
nav_order: 3
parent: Modules
objectives:
  - Describe the shared responsibility model for cloud security
  - Explain Microsoft Defender for Cloud and Azure Security tools
  - Describe Microsoft Entra ID (Azure Active Directory) and RBAC
  - Explain Azure Policy and compliance management
prev_module: /modules/module-02-core-services
---

## The shared responsibility model
{: #shared-responsibility }

In traditional on-premises environments, your organisation is responsible for **everything** — physical security, hardware, software, and data. In the cloud, security is a **shared responsibility** between Microsoft and the customer.

The split of responsibilities depends on the cloud service type:

| Responsibility | On-prem | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Physical datacenter | You | Microsoft | Microsoft | Microsoft |
| Physical network | You | Microsoft | Microsoft | Microsoft |
| Physical hosts | You | Microsoft | Microsoft | Microsoft |
| Operating system | You | **You** | Microsoft | Microsoft |
| Applications | You | **You** | **You** | Microsoft |
| Data & information | **You** | **You** | **You** | **You** |
| Devices (mobile, PCs) | **You** | **You** | **You** | **You** |
| Accounts & identities | **You** | **You** | **You** | **You** |

{: .callout .callout-important }
> **Key rule:** Regardless of the service type (IaaS, PaaS, or SaaS), the **customer always retains responsibility** for their data, identities, and devices. Microsoft never takes responsibility for these.

<div class="img-placeholder">
  <span>🛡️</span>
  <span class="img-caption">Figure 3 — Shared responsibility model across service types</span>
  <span class="img-caption">assets/images/shared-responsibility.png</span>
</div>

### Defence in depth

Azure recommends a **defence-in-depth** approach — a series of security layers, each providing protection in the event one layer is breached:

1. **Physical security** — locked datacenters, access controls
2. **Identity & access** — MFA, conditional access, RBAC
3. **Perimeter** — DDoS protection, firewalls
4. **Network** — Network Security Groups, VPN
5. **Compute** — Antimalware, OS patching
6. **Application** — Secure SDLC, no hardcoded secrets
7. **Data** — Encryption at rest and in transit

---

## Azure security tools
{: #security-tools }

### Microsoft Defender for Cloud

**Microsoft Defender for Cloud** is a cloud security posture management (CSPM) and cloud workload protection platform (CWPP). It provides:

- **Secure score** — a quantified view of your security posture (0–100)
- **Security recommendations** — actionable steps to improve posture
- **Security alerts** — real-time threat detection and incident response
- Coverage for Azure, on-premises, and multi-cloud (AWS, GCP) environments

Plans:
- **Free tier** — basic posture management and Secure Score
- **Defender plans** — paid plans for specific workloads (VMs, SQL, Containers, etc.)

### Azure Key Vault

**Azure Key Vault** provides a centralised, secure store for:
- Secrets (API keys, passwords, connection strings)
- Encryption keys (for Azure Disk Encryption, etc.)
- Certificates (TLS/SSL)

Key benefits:
- Access is controlled with Azure RBAC and Key Vault access policies
- Full audit trail of all key usage via Azure Monitor
- Supports hardware security modules (HSMs) for compliance

```bash
# Create a Key Vault
az keyvault create \
  --name myKeyVault \
  --resource-group myResourceGroup \
  --location eastus

# Store a secret
az keyvault secret set \
  --vault-name myKeyVault \
  --name "DBPassword" \
  --value "P@ssw0rd1234!"
```

### Azure DDoS Protection

Distributed Denial of Service (DDoS) attacks attempt to overwhelm a service until it becomes unavailable. Azure provides two tiers:

| Tier | Cost | Features |
|---|---|---|
| DDoS Network Protection (Basic) | Free | Automatic, always-on mitigation for Azure platform |
| DDoS Network Protection (Standard) | Paid | Enhanced mitigation, attack analytics, SLA guarantee |

### Azure Firewall

**Azure Firewall** is a managed, cloud-based network security service that protects your Azure Virtual Network resources. It provides:
- Stateful inspection of network traffic (Layer 3–7)
- Built-in high availability with unlimited cloud scale
- FQDN filtering, threat intelligence, and TLS inspection

### Network Security Groups (NSGs)

**Network Security Groups** filter network traffic to and from Azure resources. They contain security rules that allow or deny inbound and outbound traffic.

```
Priority | Name           | Port | Protocol | Source    | Action
100      | Allow-HTTP     | 80   | TCP      | Internet  | Allow
110      | Allow-HTTPS    | 443  | TCP      | Internet  | Allow
4096     | Deny-All       | Any  | Any      | Any       | Deny
```

---

## Identity and access management
{: #identity-access }

### Microsoft Entra ID (formerly Azure Active Directory)

**Microsoft Entra ID** is Azure's cloud-based identity and access management (IAM) service. It is the backbone of authentication and authorisation in Microsoft 365, Azure, and thousands of third-party applications.

Key capabilities:
- **Authentication** — verify who you are (passwords, MFA, passwordless)
- **Single Sign-On (SSO)** — one login for all connected apps
- **Application management** — manage SaaS apps centrally
- **B2B / B2C** — invite external users or build customer identity

> **Entra ID vs on-premises AD:** On-premises Active Directory Domain Services (AD DS) is a traditional directory server. Entra ID is cloud-native and designed for the internet — it uses modern protocols (OAuth 2.0, OIDC, SAML) rather than Kerberos/LDAP.

### Multi-Factor Authentication (MFA)

**MFA** adds a second verification step to the login process. Even if a password is compromised, an attacker still can't access the account without the second factor.

Supported factors in Entra ID:
- Something you **know** — password, PIN
- Something you **have** — Microsoft Authenticator app, hardware token
- Something you **are** — fingerprint, face recognition

{: .callout .callout-tip }
> **Exam tip:** Enabling MFA is one of the most impactful security steps any organisation can take. Entra ID MFA is included in Entra ID P1 and P2 licences.

### Conditional Access

**Conditional Access** policies are if-then statements: *if* a user meets certain conditions, *then* require a specific action.

Examples:
- If a user signs in from an unknown location → require MFA
- If a user is on an unmanaged device → block access to sensitive apps
- If a user's account is at risk → force a password reset

### Role-Based Access Control (RBAC)

**Azure RBAC** controls who can do what with which Azure resources. You assign roles to users, groups, or service principals at a specific scope.

**Built-in roles:**

| Role | Description |
|---|---|
| Owner | Full access including ability to delegate access |
| Contributor | Create and manage all resources, cannot grant access |
| Reader | View resources only |
| User Access Administrator | Manage user access to Azure resources |

**RBAC scope hierarchy:**

```
Management Group
  └─ Subscription
       └─ Resource Group
            └─ Resource
```

Permissions are inherited down the hierarchy. A role assigned at subscription level applies to all resource groups and resources within.

```bash
# Assign the Reader role to a user for a resource group
az role assignment create \
  --assignee user@example.com \
  --role "Reader" \
  --resource-group myResourceGroup
```

### Azure Policy

**Azure Policy** evaluates resources against defined business rules (policies). Policies can:
- **Audit** — report on non-compliant resources without enforcing
- **Deny** — prevent the creation of non-compliant resources
- **Modify** — automatically add required tags or settings

Example: A policy that requires every resource to have a `CostCenter` tag. Resources without the tag are either denied or flagged as non-compliant.

{: .callout .callout-note }
> **Policy vs RBAC:** RBAC focuses on *who* can perform *actions*. Azure Policy focuses on *what* resource *properties* are allowed. They work together — use RBAC to control who can create resources, and Policy to ensure resources meet your standards.

---

## Azure compliance and trust
{: #compliance }

### Microsoft Trust Center

The **Microsoft Trust Center** is the central resource for Microsoft's approach to security, privacy, compliance, and transparency. It provides:
- Details on regulatory compliance (ISO 27001, SOC 2, GDPR, FedRAMP, etc.)
- Data location information
- Audit reports and certifications

### Azure Compliance Manager

**Compliance Manager** in the Microsoft Purview portal helps you assess, monitor, and improve your organisation's compliance posture against over 350 regulatory standards.

---

## Knowledge check
{: #knowledge-check }

<div class="knowledge-check">
  <h2>Test your understanding</h2>

  <div class="kc-question">
    <p>1. In the shared responsibility model, which of the following is ALWAYS the customer's responsibility?</p>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'wrong','kc-q1')"> Physical datacenter security</label>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'correct','kc-q1')"> Data and identities</label>
    <label class="kc-option"><input type="radio" name="q1" onclick="checkAnswer(this,'wrong','kc-q1')"> Operating system patching (SaaS)</label>
    <div id="kc-q1-correct" class="kc-feedback correct">Correct! Regardless of the service model (IaaS, PaaS, SaaS), the customer is always responsible for their data and identities.</div>
    <div id="kc-q1-wrong"   class="kc-feedback wrong">Incorrect. Physical security and OS management shift to Microsoft in various models, but data and identities always remain the customer's responsibility.</div>
  </div>

  <div class="kc-question">
    <p>2. What is the primary purpose of Azure Key Vault?</p>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'wrong','kc-q2')"> Scanning VMs for malware</label>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'correct','kc-q2')"> Securely storing secrets, keys, and certificates</label>
    <label class="kc-option"><input type="radio" name="q2" onclick="checkAnswer(this,'wrong','kc-q2')"> Monitoring network traffic</label>
    <div id="kc-q2-correct" class="kc-feedback correct">Correct! Azure Key Vault is a centralised, auditable store for secrets (passwords, API keys), encryption keys, and TLS certificates.</div>
    <div id="kc-q2-wrong"   class="kc-feedback wrong">Incorrect. Key Vault is specifically for storing sensitive credentials and cryptographic keys, not for scanning or network monitoring.</div>
  </div>

  <div class="kc-question">
    <p>3. Which Azure feature lets you set rules like "deny creation of resources outside approved regions"?</p>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'wrong','kc-q3')"> Azure RBAC</label>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'wrong','kc-q3')"> Microsoft Defender for Cloud</label>
    <label class="kc-option"><input type="radio" name="q3" onclick="checkAnswer(this,'correct','kc-q3')"> Azure Policy</label>
    <div id="kc-q3-correct" class="kc-feedback correct">Correct! Azure Policy enforces rules about what properties resources can have — including requiring specific regions, tags, or SKUs.</div>
    <div id="kc-q3-wrong"   class="kc-feedback wrong">Incorrect. RBAC controls who can take actions; Defender for Cloud monitors threats. Azure Policy is for enforcing resource property rules.</div>
  </div>
</div>

---

<div class="summary-card">
  <h3>Module 3 summary</h3>
  <ul>
    <li>The shared responsibility model splits security duties between Microsoft and the customer depending on service type</li>
    <li>The customer is always responsible for data, identities, and devices — in all models</li>
    <li>Microsoft Defender for Cloud provides unified security posture management and threat protection</li>
    <li>Azure Key Vault securely stores secrets, encryption keys, and certificates with full audit trails</li>
    <li>Microsoft Entra ID is Azure's cloud identity service — handling authentication, SSO, and MFA</li>
    <li>Azure RBAC controls who can do what; Azure Policy controls what resource properties are allowed</li>
    <li>Defence-in-depth means layering security controls so no single failure exposes the entire system</li>
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
