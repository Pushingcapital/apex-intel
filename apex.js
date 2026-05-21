#!/usr/bin/env node

const chalk = require('chalk');

const assessment = {
    "agent": {
        "name": "Antigravity (Mac Studio Node)",
        "title": "Apex Intelligence Node & Fleet Orchestrator",
        "contact": {
            "phone": "+17143139220",
            "email": "pushingP@pushingcap.com"
        },
        "boss": "Emmanuel 'Manny' Haddad (CEO, +19497064604)",
        "peer": "Charles Benedict (MacBook Operator)"
    },
    "company": {
        "name": "Pushing Capital",
        "description": "Sovereign multi-agent asset orchestration, finance, and automotive enterprise.",
        "location": "Orange County, CA (Central Command)",
        "gcp_project": "brain-481809"
    },
    "key_personnel": [
        { "name": "Manny Haddad", "role": "CEO / Lord Commander" },
        { "name": "Dmitry Karabanov", "role": "Tech Lead" },
        { "name": "David Montrenes", "role": "Operations Director" },
        { "name": "Ana Elsa Rojas", "role": "Finance Controller" },
        { "name": "Antigravity", "role": "Apex M4 Max Node (Mac Studio)" },
        { "name": "Charles Benedict", "role": "Orchestrator Agent (MacBook Pro)" }
    ],
    "local_machine": {
        "type": "Mac Studio M4 Max (Apex Control Plane)",
        "cpu": "Apple M4 Max (16-core CPU, 40-core GPU)",
        "ram": "128 GB (18 GB Dedicated Agent Memory)",
        "os": "macOS Sequoia 15.x",
        "user": "Antigravity Node",
        "ip": "192.168.4.94 (LAN) / 100.84.139.113 (Tailscale)"
    },
    "infrastructure": {
        "fleet_nodes": [
            "ts-mac-studio (Antigravity)",
            "ts-macbook-charles (Charles)",
            "ts-imac-24 (Playbook Host)",
            "ts-runpod-swarm (Compute Swarms)",
            "gce-sovereign-core-vm (8 vCPU Sovereign Node)"
        ],
        "cloud_run_services": 45,
        "bigquery_datasets": 33,
        "local_db": "PostgreSQL (charles_memory), ChromaDB (175,784+ document Recall Mesh)",
        "control_plane": "VertexPrime on localhost:9001"
    },
    "doctrines": [
        "Metacognitive Self-Evolution (AgentFactory subagents & skill libraries)",
        "OS-Tiered Memory Substrate (RAM/Disk virtual context caching)",
        "rDOS Decoupled Retrieval (Find-Enter-Exit summary pipeline)",
        "Sovereign Target Databases (Evidence Locker, pc_users, pc_services)",
        "System 1 & System 2 Edge-VLM Cognition (<10ms perception loops)",
        "LLM Shepherding (Prefix-hint budget optimizations)",
        "Sovereign AI Mandate (Hard hardware and network segmentation)",
        "AI Liability Shield (Munich Re compliance logging & audit trails)"
    ]
};

const printSection = (title, data) => {
    console.log(chalk.bold.blue(`\n--- ${title.toUpperCase()} ---`));
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (typeof item === 'object') {
                console.log(chalk.green(`  - ${item.name}:`), chalk.white(item.role));
            } else {
                console.log(chalk.white(`  - ${item}`));
            }
        });
    } else if (typeof data === 'object') {
        for (const key in data) {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            if (typeof data[key] === 'object' && data[key] !== null) {
                console.log(chalk.green(`${label}:`));
                for (const subKey in data[key]) {
                    const subLabel = subKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                    console.log(chalk.white(`  ${subLabel}: ${data[key][subKey]}`));
                }
            } else {
                 console.log(chalk.green(`${label}:`), chalk.white(data[key]));
            }
        }
    }
};

console.log(chalk.bold.yellow('===== PUSHING CAPITAL - APEX NODE SYSTEM ASSESSMENT ====='));
printSection('Agent Profile', assessment.agent);
printSection('Company Overview', assessment.company);
printSection('Key Personnel', assessment.key_personnel);
printSection('Local Machine', assessment.local_machine);
printSection('Core Infrastructure', assessment.infrastructure);
printSection('Core Doctrines (Pillars)', assessment.doctrines);
console.log(chalk.bold.yellow('\n================ END OF ASSESSMENT ================='));
