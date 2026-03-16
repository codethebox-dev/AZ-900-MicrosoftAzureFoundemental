---
layout: lab
title: "Lab 1: Create a Virtual Machine in Azure"
description: "Deploy a Windows Server 2022 VM via the Azure Portal, configure inbound rules, and connect via Remote Desktop Protocol (RDP)."
duration: "~20 min"
level: "Beginner"
nav_order: 1
parent: Labs
prerequisites:
  - A free Azure account (sign up at azure.microsoft.com/free)
  - Completed Module 2 — Azure Core Services
  - A computer with Remote Desktop client (built-in on Windows; Microsoft Remote Desktop on macOS/Linux)
---

## Objective

In this lab you will:

1. Create a **Resource Group** to organise your lab resources
2. Deploy a **Windows Server 2022 Virtual Machine** in the Azure Portal
3. Configure a **Network Security Group rule** to allow RDP access
4. **Connect to the VM** using Remote Desktop Protocol (RDP)
5. **Clean up** all resources to avoid ongoing charges

{: .callout .callout-tip }
> **Free sandbox:** If you want to complete this lab without using your own Azure credits, activate the free sandbox on [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/create-windows-virtual-machine-in-azure/) before starting.

---

## Step 1: Sign in to the Azure Portal

<div class="step-block">
  <div class="step-number">1</div>
  <div class="step-content">
    <h3>Open the Azure Portal</h3>
    <p>Navigate to <a href="https://portal.azure.com" target="_blank">portal.azure.com</a> in your browser and sign in with your Microsoft account.</p>
    <p>You should see the Azure Portal home page with the top navigation bar and the left-hand menu.</p>
  </div>
</div>

---

## Step 2: Create a resource group

<div class="step-block">
  <div class="step-number">2</div>
  <div class="step-content">
    <h3>Navigate to Resource Groups</h3>
    <p>In the search bar at the top, type <strong>Resource groups</strong> and select it from the results. Click <strong>+ Create</strong>.</p>
  </div>
</div>

<div class="step-block">
  <div class="step-number">3</div>
  <div class="step-content">
    <h3>Fill in the basics</h3>
    <p>Enter the following values, then click <strong>Review + create</strong> → <strong>Create</strong>:</p>

```
Subscription:    Your Azure subscription
Resource group:  rg-az900-lab
Region:          East US
```

  </div>
</div>

---

## Step 3: Create the virtual machine

<div class="step-block">
  <div class="step-number">4</div>
  <div class="step-content">
    <h3>Open Virtual Machines</h3>
    <p>In the top search bar, type <strong>Virtual machines</strong> and select it. Click <strong>+ Create</strong> → <strong>Azure virtual machine</strong>.</p>
  </div>
</div>

<div class="step-block">
  <div class="step-number">5</div>
  <div class="step-content">
    <h3>Configure the Basics tab</h3>
    <p>Enter the following values in the <strong>Basics</strong> tab:</p>

```
Subscription:         Your Azure subscription
Resource group:       rg-az900-lab
Virtual machine name: vm-az900-lab
Region:               East US
Availability options: No infrastructure redundancy required
Security type:        Standard
Image:                Windows Server 2022 Datacenter - x64 Gen2
Size:                 Standard_B2s (2 vCPUs, 4 GiB memory)

Administrator account
Username:             azureadmin
Password:             [Choose a strong password — min 12 chars]
Confirm password:     [Repeat password]
```

  </div>
</div>

<div class="step-block">
  <div class="step-number">6</div>
  <div class="step-content">
    <h3>Configure inbound port rules</h3>
    <p>Still on the <strong>Basics</strong> tab, scroll to <strong>Inbound port rules</strong>:</p>

```
Public inbound ports:    Allow selected ports
Select inbound ports:    RDP (3389)
```

    <p>This creates a Network Security Group rule allowing RDP access from the internet. This is acceptable for a lab environment — in production, you would restrict the source IP or use Azure Bastion.</p>
  </div>
</div>

{: .callout .callout-warning }
> **Security note:** Allowing RDP (port 3389) from the internet exposes your VM to brute-force attacks. For production workloads, always restrict the source IP to your organisation's IP range, or use Azure Bastion for browser-based RDP without exposing port 3389.

---

## Step 4: Review and create

<div class="step-block">
  <div class="step-number">7</div>
  <div class="step-content">
    <h3>Review the configuration</h3>
    <p>Click <strong>Review + create</strong>. Azure will validate your configuration. Review the summary, then click <strong>Create</strong>.</p>
    <p>Deployment typically takes <strong>2–3 minutes</strong>. You will see a "Your deployment is complete" message when finished.</p>
  </div>
</div>

<div class="step-block">
  <div class="step-number">8</div>
  <div class="step-content">
    <h3>Navigate to the VM</h3>
    <p>Click <strong>Go to resource</strong> to open the VM overview page. Note the following values — you will need them to connect:</p>
    <ul>
      <li><strong>Public IP address</strong> — shown in the right-hand Essentials panel</li>
      <li><strong>Status</strong> — should show <code>Running</code></li>
    </ul>
  </div>
</div>

---

## Step 5: Connect via RDP

<div class="step-block">
  <div class="step-number">9</div>
  <div class="step-content">
    <h3>Download the RDP file</h3>
    <p>From the VM overview page, click <strong>Connect</strong> in the top menu → <strong>Connect</strong> under Native RDP → <strong>Download RDP file</strong>.</p>
  </div>
</div>

<div class="step-block">
  <div class="step-number">10</div>
  <div class="step-content">
    <h3>Open the RDP file and connect</h3>
    <p>Open the downloaded <code>.rdp</code> file. When prompted:</p>
    <ul>
      <li>Click <strong>Connect</strong> on the Remote Desktop warning</li>
      <li>Enter the credentials you set in Step 5:</li>
    </ul>

```
Username: azureadmin
Password: [Your password from Step 5]
```

    <p>Click <strong>OK</strong>. Accept the certificate warning by clicking <strong>Yes</strong>.</p>
  </div>
</div>

<div class="step-block">
  <div class="step-number">11</div>
  <div class="step-content">
    <h3>Verify the connection</h3>
    <p>You should see the Windows Server 2022 desktop. Open <strong>Server Manager</strong> to confirm the OS version. Congratulations — you have successfully deployed and connected to an Azure VM!</p>
  </div>
</div>

---

## Expected result

After completing this lab, you should have:

- A resource group `rg-az900-lab` in East US
- A running Windows Server 2022 VM named `vm-az900-lab`
- An active RDP session showing the Windows Server desktop
- A Network Security Group with an inbound rule allowing port 3389

<div class="img-placeholder">
  <span>🖥️</span>
  <span class="img-caption">Expected: Windows Server 2022 desktop visible in RDP session</span>
  <span class="img-caption">assets/images/lab-01-result.png</span>
</div>

---

## Step 6: Clean up resources

{: .callout .callout-warning }
> **Important:** Always clean up lab resources when finished to avoid unexpected charges. The Standard_B2s VM costs approximately **$0.038/hour** when running.

<div class="step-block">
  <div class="step-number">12</div>
  <div class="step-content">
    <h3>Delete the resource group</h3>
    <p>The quickest way to clean up is to delete the entire resource group — this deletes the VM, its disk, the public IP, the NIC, and the NSG all at once.</p>
    <p>In the Azure Portal, navigate to <strong>Resource groups</strong> → <strong>rg-az900-lab</strong> → <strong>Delete resource group</strong>. Type <code>rg-az900-lab</code> to confirm, then click <strong>Delete</strong>.</p>

    <p>Alternatively, use the Azure CLI:</p>

```bash
az group delete \
  --name rg-az900-lab \
  --yes \
  --no-wait
```

  </div>
</div>

---

## Troubleshooting

| Problem | Solution |
|---|---|
| RDP connection times out | Check the NSG has an inbound rule for port 3389. Verify the VM is in Running state. |
| "Remote Desktop can't connect" | Ensure you downloaded a fresh RDP file. Try using the public IP directly in Remote Desktop. |
| Deployment fails with quota error | Try a different region (e.g. West US or West Europe) or a smaller VM size (Standard_B1s). |
| Forgot the administrator password | Go to VM → Reset password in the left-hand menu. |

---

<div class="summary-card">
  <h3>Lab summary — what you learned</h3>
  <ul>
    <li>How to create a Resource Group as a logical container for lab resources</li>
    <li>How to deploy a Windows Server VM from the Azure Portal in under 5 minutes</li>
    <li>How Network Security Groups control inbound traffic to a VM (port 3389 for RDP)</li>
    <li>How to connect to a VM using Remote Desktop Protocol and an RDP file</li>
    <li>The importance of cleaning up resources to avoid ongoing charges</li>
  </ul>
</div>
